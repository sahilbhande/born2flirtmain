import { useEffect, useState } from "react";
import { AlertCircle, Mic, RefreshCw, Users, Activity } from "lucide-react";
import { MemberStatus, sortMembers, useDiscordStats } from "../hooks/useDiscordStats";
import { Skeleton } from "@/components/ui/skeleton";
import { LINKS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const STATUS_COLOR: Record<MemberStatus, string> = {
online: "bg-green-500",
idle: "bg-yellow-500",
dnd: "bg-red-500",
};

const STATUS_LABEL: Record<MemberStatus, string> = {
online: "Online",
idle: "Idle",
dnd: "Do Not Disturb",
};

const INITIAL_LIMIT = 66;
const STEP = 12;

const formatTime = (d: Date | null) =>
d ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "—";

const LiveActivityPage = () => {
const { data, loading, refreshing, error, lastUpdated, refresh } = useDiscordStats();
const [limit, setLimit] = useState(INITIAL_LIMIT);

useEffect(() => {
document.title = "Live Activity – Born2Flirt Discord Community";
const desc =
"See real-time activity on the Born2Flirt Discord server: online members, active voice channels, and who's chatting right now.";
let meta = document.querySelector('meta[name="description"]');
if (!meta) {
meta = document.createElement("meta");
meta.setAttribute("name", "description");
document.head.appendChild(meta);
}
meta.setAttribute("content", desc);
}, []);

// ✅ Filter + sort (removes noisy statuses)
const sortedMembers = data
? sortMembers(
(data.members ?? []).filter(
(m) => m.status === "online" || m.status === "idle"
)
)
: [];

const visibleMembers = sortedMembers.slice(0, limit);

const activeVoiceChannels = data?.voiceChannels?.filter(vc => vc.count > 0) ?? [];

return ( <main className="py-16 md:py-20"> <div className="container max-w-5xl">
    {/* Header */}
    <header className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-medium mb-4">
        <Activity size={14} /> Real-time
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
        Community <span className="gradient-text">Activity</span>
      </h1>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        A live look inside Born2Flirt — who's online, which voice channels are buzzing, and how the community is moving right now.
      </p>
    </header>

    {/* ✅ Disclaimer */}
    <div className="text-xs text-muted-foreground text-center mb-10">
      Showing a limited live sample from Discord (not all members may appear).
    </div>

    {/* Online Count */}
    <section className="grid gap-4 sm:grid-cols-3 mb-10">
      <div className="glow-card rounded-xl p-6 border border-border sm:col-span-2 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
            Currently online (live)
          </div>

          {loading && !data ? (
            <Skeleton className="h-10 w-32" />
          ) : data ? (
            <div className="font-display text-4xl md:text-5xl font-bold gradient-text">
              {data.online.toLocaleString()}
            </div>
          ) : (
            <div className="font-display text-3xl text-muted-foreground">—</div>
          )}

          <div className="text-xs text-muted-foreground mt-2">
            Last updated: {formatTime(lastUpdated)}
          </div>
        </div>

        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
        </span>
      </div>

      <div className="glow-card rounded-xl p-6 border border-border flex flex-col justify-between gap-3">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          Auto-refresh every 20s
        </div>

        <button
          onClick={refresh}
          disabled={refreshing}
          className="gradient-bg px-4 py-2.5 rounded-lg font-semibold text-primary-foreground text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
          {refreshing ? "Refreshing…" : "Refresh now"}
        </button>
      </div>
    </section>

    {/* Error */}
    {error && !data && (
      <div className="glow-card rounded-xl border border-destructive/40 bg-destructive/5 p-6 mb-10 flex items-start gap-3">
        <AlertCircle className="text-destructive mt-0.5" size={20} />
        <div>
          <h2 className="font-display font-semibold mb-1">Live activity is unavailable</h2>
          <p className="text-sm text-muted-foreground">
            Try refreshing or visit{" "}
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Discord
            </a>.
          </p>
        </div>
      </div>
    )}

    {/* Members */}
    <section className="mb-12">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <Users className="text-primary" size={22} /> Members Online Now
      </h2>

      {data && sortedMembers.length === 0 && (
        <div className="glow-card rounded-xl p-8 border border-border text-center text-muted-foreground">
          No visible online members right now (Discord may limit visible users).
        </div>
      )}

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleMembers.map((m) => (
          <li key={m.username} className="glow-card rounded-xl p-4 border border-border flex items-center gap-3">
            <div className="relative">
              <img src={m.avatar} className="w-10 h-10 rounded-full" />
              <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${STATUS_COLOR[m.status]}`} />
            </div>
            <div>
              <div className="font-medium">{m.username}</div>
              <div className="text-xs text-muted-foreground">{STATUS_LABEL[m.status]}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>

    {/* Voice */}
    <section>
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <Mic className="text-primary" size={22} /> Voice Channels
      </h2>

      {activeVoiceChannels.length === 0 && (
        <div className="glow-card rounded-xl p-8 border border-border text-center text-muted-foreground">
          No active voice channels right now.
        </div>
      )}

      <ul className="grid gap-3 sm:grid-cols-2">
        {activeVoiceChannels.map((vc) => (
          <li key={vc.name} className="glow-card rounded-xl p-5 border border-border flex justify-between">
            <div>
              <h3 className="font-semibold">{vc.name}</h3>
              <p className="text-xs text-muted-foreground">
                {vc.count} active {vc.count === 1 ? "user" : "users"}
              </p>
            </div>

            <div className="flex -space-x-2">
              {vc.users.slice(0, 20).map((u, i) => (
                <img key={i} src={u.avatar} className="w-10 h-10 rounded-full border-2 border-background" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
    </div>
      {/* Invite */}
      <section className="py-20 bg-secondary/30 mt-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the{" "}
            <span className="gradient-text">Best Indian Discord Server?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Become a part of one of the most active Indian Discord servers
            today. Join Born2Flirt to chat, join voice calls (VC), explore
            dating, meet new people across India, and be part of a fast-growing
            and friendly community.
          </p>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-10 py-4 rounded-xl font-bold text-lg text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 pulse-glow"
          >
            Join Born2Flirt – Indian Discord Server <ExternalLink size={20} />
          </a>
        </div>
      </section>
</main>
);
};

export default LiveActivityPage;
