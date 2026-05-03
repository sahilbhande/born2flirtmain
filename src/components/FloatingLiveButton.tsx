import { useDiscordStats } from "@/hooks/useDiscordStats";
import { Link } from "react-router-dom";

const FloatingLiveButton = () => {
  const { data } = useDiscordStats();

  if (!data) return null;

  return (
    <Link
      to="/live-activity"
      className="fixed bottom-10 right-10 z-50 group"
    >
      <div className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg border border-border bg-background/80 backdrop-blur-md hover:scale-105 transition-all duration-300">
        
        {/* pulse dot */}
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>

        {/* text */}
        <span className="text-sm font-semibold whitespace-nowrap">
          {data.online.toLocaleString()} active — see what’s happening
        </span>
      </div>
    </Link>
  );
};

export default FloatingLiveButton;