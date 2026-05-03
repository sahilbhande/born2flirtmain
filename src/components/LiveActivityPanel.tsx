import { Mic, Users, Circle, AlertCircle, Loader2 } from "lucide-react";
import { MemberStatus, sortMembers, useDiscordStats } from "../hooks/useDiscordStats";

interface LiveActivityPanelProps {
  endpoint?: string;
  refreshInterval?: number;
  maxMembers?: number;
  className?: string;
}

const STATUS_COLOR: Record<MemberStatus, string> = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
};

const LiveActivityPanel = ({
  endpoint,
  refreshInterval,
  maxMembers = 6,
  className = "",
}: LiveActivityPanelProps) => {
  const { data, loading, error } = useDiscordStats({ endpoint, refreshInterval });

  const isEmpty =
    !!data &&
    data.online === 0 &&
    (data.members?.length ?? 0) === 0 &&
    (data.voiceChannels?.length ?? 0) === 0;

  return (
    <aside
      className={`glow-card rounded-xl border border-border p-5 text-left ${className}`}
      aria-label="Live Discord activity"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          Live Activity
        </h3>
        {data && !error && (
          <span className="text-xs text-muted-foreground">
            {data.online.toLocaleString()} online
          </span>
        )}
      </div>

      {loading && !data && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground py-6 justify-center">
          <Loader2 className="animate-spin" size={16} /> Loading activity…
        </div>
      )}

      {error && !data && (
        <div className="flex items-start gap-2 text-sm text-muted-foreground py-4">
          <AlertCircle className="text-destructive mt-0.5 shrink-0" size={16} />
          <span>Live activity is currently unavailable.</span>
        </div>
      )}

      {data && isEmpty && (
        <div className="text-sm text-muted-foreground py-4 text-center">
          No activity right now — check back soon!
        </div>
      )}

      {data && !isEmpty && (
        <div className="space-y-5">
          {data.members?.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground mb-2">
                <Users size={12} /> Active members
              </div>
              <ul className="space-y-2">
                {sortMembers(data.members).slice(0, maxMembers).map((m) => (
                  <li key={m.username} className="flex items-center gap-2.5 text-sm">
                    <div className="relative">
                      <img
                        src={m.avatar}
                        alt={`${m.username} avatar`}
                        loading="lazy"
                        className="w-7 h-7 rounded-full object-cover bg-muted"
                      />
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-background ${STATUS_COLOR[m.status]}`}
                        aria-label={m.status}
                      />
                    </div>
                    <span className="truncate">{m.username}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.voiceChannels?.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground mb-2">
                <Mic size={12} /> Voice channels
              </div>
              <ul className="space-y-2">
                {data.voiceChannels.map((vc) => (
                  <li
                    key={vc.name}
                    className="flex items-center justify-between gap-2 text-sm bg-secondary/40 rounded-md px-3 py-2"
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <Circle size={8} className="text-primary fill-primary shrink-0" />
                      <span className="truncate">{vc.name}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                      <div className="flex -space-x-1.5">
                        {vc.users.slice(0, 3).map((u, i) => (
                          <img
                            key={i}
                            src={u.avatar}
                            alt=""
                            loading="lazy"
                            className="w-5 h-5 rounded-full border border-background object-cover bg-muted"
                          />
                        ))}
                      </div>
                      {vc.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default LiveActivityPanel;
