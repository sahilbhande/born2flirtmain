import { Link } from "react-router-dom";
import { LINKS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold gradient-text mb-3">Born2Flirt</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Born2Flirt is a fast-growing Indian Discord server with active chat, voice channels, fun events, giveaways, and a friendly community for people across India.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", to: "/about" },
                { label: "Features", to: "/features" },
                { label: "Top Indian Discord Servers", to: "/top-indian-discord-servers" },
                { label: "Events", to: "/events" },
                { label: "Blog", to: "/blog" },
                { label: "Vote & Support", to: "/vote" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Join Our Community</h4>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Join Discord <ExternalLink size={16} />
            </a>
            <div className="mt-4 flex gap-3">
              <a href={LINKS.topgg} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Top.gg</a>
              <a href={LINKS.discordme} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Discord.me</a>
              <a href={LINKS.disboard} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Disboard</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Born2Flirt Discord Server. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
