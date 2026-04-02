import {
  MessageCircle,
  Mic,
  Trophy,
  Shield,
  Gift,
  Users,
  GitGraphIcon,
  Music,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Active Text Chat",
    desc: "Stay active with 24/7 text conversations in one of the most engaging Indian Discord communities.Chat about relationships, memes, gaming, and real-life topics with thousands of active members daily.",
  },
  {
    icon: Mic,
    title: "Active Voice Channels",
    desc: "Join highly active voice channels every day with real people from India. Whether you're chilling, gaming, or making new friends, our VC activity is among the best in Indian Discord servers.",
  },
  {
    icon: Trophy,
    title: "Fun Community Events",
    desc: "Participate in daily and weekly events like games, truth & dare, music nights, and more. Win prizes, meet new people, and stay entertained.",
  },
  {
    icon: Shield,
    title: "Custom Roles",
    desc: "Unlock exclusive roles as you stay active in chat and voice. Show off your personality and climb ranks in our leveling system.",
  },
  {
    icon: Gift,
    title: "Giveaways",
    desc: "Regular giveaways including Discord Nitro, gift cards, and special rewards. Stay active to increase your chances of winning.",
  },
  {
    icon: Users,
    title: "Friendly Moderation",
    desc: "Our experienced moderation team ensures a safe, non-toxic, and welcoming environment for everyone. Strict rules against harassment and spam.",
  },
  {
    icon: GitGraphIcon,
    title: "Leveling System",
    desc: "Earn XP through both text chat and voice activity, making progression more engaging and rewarding. Whether you enjoy chatting or hanging out in VC, you can level up, unlock exclusive roles, and gain recognition in the community. Our hybrid leveling system ensures fair progression for all types of users.",
  },
  {
    icon: Music,
    title: "Music & Entertainment",
    desc: "Enjoy music sessions, games, and fun activities with members in voice channels. Never get bored with constant interaction.",
  },
];

const FeaturesPage = () => (
  <main>
    <Helmet>
      <title>
        Born2Flirt Features – Best Indian Discord Server for Chat, Voice Chat &
        Community
      </title>

      <meta
        name="description"
        content="Discover Born2Flirt, one of the best Indian Discord servers with active chat, voice channels, hybrid leveling system, events, giveaways, and a friendly community. Join 18,000+ members today."
      />

      <meta
        name="keywords"
        content="Indian Discord server, Discord server India, active Discord server, VC Discord server, chat Discord server, social Discord community, Born2Flirt"
      />

      <link rel="canonical" href="https://born2flirt.in/features" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Born2Flirt – Best Indian Discord Server for Chat, Voice & Community"
      />
      <meta
        property="og:description"
        content="Join one of the most active Indian Discord servers with voice chat, events, leveling system, giveaways, and 18,000+ members."
      />
      <meta property="og:url" content="https://born2flirt.in/features" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta
        name="twitter:title"
        content="Best Indian Discord Server – Born2Flirt"
      />
      <meta
        name="twitter:description"
        content="Active chat, voice channels, events, giveaways, and leveling system. Join Born2Flirt today."
      />
      <meta property="og:image" content="https://born2flirt.in/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Born2Flirt Features",
          url: "https://born2flirt.in/features",
          description:
            "Explore features of Born2Flirt, one of the best Indian Discord servers with chat, voice channels, hybrid leveling system, events, and giveaways.",
          inLanguage: "en",
          isPartOf: {
            "@type": "WebSite",
            name: "Born2Flirt",
            url: "https://born2flirt.in",
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Born2Flirt",
          url: "https://born2flirt.in",
          sameAs: ["https://discord.gg/yourlink"],
          description:
            "Born2Flirt is one of the most active Indian Discord servers focused on chat, voice interaction, and community engagement.",
          areaServed: "India",
        })}
      </script>
    </Helmet>
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.1),transparent_60%)]" />
      <div className="container relative">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          Born2Flirt{" "}
          <span className="gradient-text">
            – Best Indian Discord Server for Chat, Voice Chat & Social Community
            🇮🇳
          </span>
        </h1>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Join one of the most active Indian Discord servers with daily voice
          chats, events, giveaways, and a thriving community of 18,000+
          members.{" "}
        </p>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glow-card rounded-xl p-8 border border-border"
            >
              <f.icon className="text-primary mb-4" size={32} />
              <h2 className="font-display text-xl font-semibold mb-3">
                {f.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-12">
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Why Join Born2Flirt?
          </h2>
          <ul className="mb-6">
            <li>18,000+ active members</li>
            <li>One of the fastest-growing Indian Discord servers</li>
            <li>Highly active voice chat community</li>
            <li>Thousands of messages and voice activity daily</li>
            <li>Safe, friendly, and well-moderated environment</li>
          </ul>
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Ready to join one of the best Indian Discord servers?{" "}
          <a
            href="https://discord.gg/yourlink"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-primary hover:underline font-medium"
            title="Join the Best Indian Discord Server"
          >
            🚀 Join the Best Indian Discord Server 🇮🇳
          </a>{" "}
          or explore our{" "}
          <Link to="/blog" className="text-primary hover:underline">
            blog
          </Link>
          .
        </p>
      </div>
    </section>
  </main>
);

export default FeaturesPage;
