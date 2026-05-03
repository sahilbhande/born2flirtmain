import { useCallback, useEffect, useRef, useState } from "react";

export type MemberStatus = "online" | "idle" | "dnd";

export interface Member {
  username: string;
  avatar: string;
  status: MemberStatus;
}

export interface VoiceUser {
  avatar: string;
}

export interface VoiceChannel {
  name: string;
  count: number;
  users: VoiceUser[];
}

export interface DiscordStats {
  online: number;
  members: Member[];
  voiceChannels: VoiceChannel[];
}

interface Options {
  endpoint?: string;
  refreshInterval?: number;
}

export const useDiscordStats = ({
  endpoint,
  refreshInterval = 20000,
}: Options = {}) => {
  // ✅ dynamic endpoint (safer than default param)
  const API_URL =
    endpoint ??
    (import.meta.env.DEV
      ? "http://localhost:3000/api/discord/stats"
      : "/api/discord/stats");

  const [data, setData] = useState<DiscordStats>({
    online: 0,
    members: [],
    voiceChannels: [],
  });

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  const fetchStats = useCallback(
    async (isManual = false) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      if (isManual) setRefreshing(true);

      try {
        console.log("Fetching from:", API_URL); // 🔍 debug

        const res = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`API Error (${res.status})`);
        }

        const json = (await res.json()) as DiscordStats;

        setData({
          online: json.online ?? 0,
          members: json.members ?? [],
          voiceChannels: json.voiceChannels ?? [],
        });

        setError(null);
        setLastUpdated(new Date());
      } catch (err) {
        if ((err as Error).name === "AbortError") return;

        console.error("Discord API error:", err);
        setError("Live activity unavailable");
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [API_URL],
  );

  useEffect(() => {
    fetchStats();

    const id = window.setInterval(fetchStats, refreshInterval);

    return () => {
      window.clearInterval(id);
      abortRef.current?.abort();
    };
  }, [fetchStats, refreshInterval]);

  return {
    data,
    loading,
    refreshing,
    error,
    lastUpdated,
    refresh: () => fetchStats(true),
  };
};

// sorting stays same
const STATUS_ORDER: Record<MemberStatus, number> = {
  online: 0,
  idle: 1,
  dnd: 2,
};

export const sortMembers = (members: Member[]) =>
  [...members].sort(
    (a, b) =>
      (STATUS_ORDER[a.status] ?? 99) -
      (STATUS_ORDER[b.status] ?? 99),
  );