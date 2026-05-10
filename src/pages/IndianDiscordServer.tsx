import { LINKS } from "@/lib/constants";
import {
  ExternalLink,
  MessageCircle,
  Mic,
  Trophy,
  Gift,
  Users,
  Shield,
  Heart,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FloatingLiveButton from "@/components/FloatingLiveButton";

const FEATURES = [
  {
    icon: MessageCircle,
    title: "24/7 Active Chat",
    desc: "Chat anytime with people across India. Late-night talks or morning vibes — there’s always someone online.",
  },
  {
    icon: Mic,
    title: "Always Active Voice Chats",
    desc: "Join VC anytime and find real people talking, laughing, and vibing — not silent channels.",
  },
  {
    icon: Trophy,
    title: "Fun Community Events",
    desc: "From game nights to talent shows, regular events keep the server engaging and exciting every day.",
  },
  {
    icon: Gift,
    title: "Rewards & Giveaways",
    desc: "Win Nitro, gift cards, and exclusive prizes just by staying active and participating.",
  },
  {
    icon: Shield,
    title: "Safe & Friendly Space",
    desc: "Active moderation keeps the community respectful, welcoming, and drama-free for everyone.",
  },
  {
    icon: Users,
    title: "Levels, Roles & Perks",
    desc: "Level up, unlock roles, and access exclusive channels as you grow in the community.",
  },
];

const FAQS = [
  {
    q: "What is the best Indian Discord server to join in 2026?",
    a: "Born2Flirt is one of the best Indian Discord servers in 2026, with thousands of active members, 24/7 chat and voice channels, regular events, and a friendly community.",
  },
  {
    q: "Is Born2Flirt an active Indian Discord server?",
    a: "Yes, Born2Flirt is a highly active Indian Discord server with members online throughout the day.",
  },
  {
    q: "Can I make friends on Born2Flirt?",
    a: "Yes, Born2Flirt is designed for socializing and building real connections.",
  },
  {
    q: "How do I join the Born2Flirt Indian Discord server?",
    a: "You can join instantly by clicking the invite link and accepting it on Discord.",
  },
  {
    q: "Is Born2Flirt free to join?",
    a: "Yes, Born2Flirt is completely free to join.",
  },
  {
    q: "Are Discord servers popular in India?",
    a: "Yes, Discord servers are growing rapidly in India for gaming, chatting, and social communities.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Born2Flirt",
  url: "https://born2flirt.in",
  logo: {
    "@type": "ImageObject",
    url: "https://born2flirt.in/logo.png",
  },
  sameAs: ["https://discord.gg/b2f"],
  description:
    "Born2Flirt is one of India's most active Discord communities with voice chats, events, giveaways, and social interaction.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Indian Discord Server",
  url: "https://born2flirt.in/indian-discord-server",
  description:
    "Join one of the best Indian Discord servers with active chat, VC, events, and community activities.",
};

const IndianDiscordServerPage = () => {
  return (
    <main>
      <Helmet>
        {/* Primary SEO */}
        <title>
          🔥 Best Indian Discord Server (20K+ Members) – Join Active VC & Chat |
          Born2Flirt
        </title>

        <meta
          name="description"
          content="Looking for the best Indian Discord server? Join Born2Flirt with 20,000+ members, active voice chats (VC), daily events, gaming & giveaways."
        />

        <meta
          name="keywords"
          content="best indian discord server, indian discord server, discord server india, active indian discord server"
        />

        <link
          rel="canonical"
          href="https://born2flirt.in/indian-discord-server"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="🔥 Best Indian Discord Server – Born2Flirt"
        />

        <meta
          property="og:description"
          content="Join one of India’s most active Discord servers with VC, events, giveaways & gaming."
        />

        <meta
          property="og:url"
          content="https://born2flirt.in/indian-discord-server"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://born2flirt.in/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Best Indian Discord Server – Join Born2Flirt"
        />

        <meta
          name="twitter:description"
          content="20K+ members, active VC, events & giveaways."
        />

        <meta
          name="twitter:image"
          content="https://born2flirt.in/og-image.png"
        />

        <meta name="robots" content="index, follow" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.15),transparent_60%)]" />

        <div className="container relative max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Best Indian Discord Server for Chat, Voice Chat & Social Community –
            <span className="gradient-text">
              {" "}
              Join Active VC, Make Friends & Build Real Connections
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Looking for an{" "}
            <strong className="text-foreground">
              Indian Discord server
            </strong>{" "}
            where you can chat, join voice calls, and meet new people daily?
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Born2Flirt is one of India’s fastest-growing Discord communities
            with thousands of active members.
          </p>

          <ul className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            <li>Daily active chats & voice calls</li>
            <li>Events, giveaways & fun activities</li>
            <li>Friendly and welcoming Indian community</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 pulse-glow"
            >
              Join Now – It’s Active <ExternalLink size={18} />
            </a>

            <Link
              to="/vote"
              className="px-8 py-3.5 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            >
              Vote & Support
            </Link>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-5 mb-8 italic">
            22,000+ members already active — join the vibe now.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Features of Our{" "}
            <span className="gradient-text">Indian Discord Server</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="glow-card rounded-xl p-6 border border-border"
              >
                <f.icon className="text-primary mb-4" size={28} />

                <h3 className="font-display font-semibold text-lg mb-2">
                  {f.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions About{" "}
            <span className="gradient-text">Indian Discord Servers</span>
          </h2>

          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="glow-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-display font-semibold text-lg mb-2">
                  {faq.q}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Join the Best{" "}
            <span className="gradient-text">Indian Discord Server</span> Today
          </h2>

          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Join thousands of active members in one of the most active Indian
            Discord servers.
          </p>

          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-10 py-4 rounded-xl font-bold text-lg text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 pulse-glow"
          >
            Join Born2Flirt Now <ExternalLink size={20} />
          </a>
        </div>
      </section>

      <FloatingLiveButton />
    </main>
  );
};

export default IndianDiscordServerPage;