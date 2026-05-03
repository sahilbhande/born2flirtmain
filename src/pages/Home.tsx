import { LINKS } from "@/lib/constants";
import {
  ExternalLink,
  MessageCircle,
  Mic,
  Trophy,
  Gift,
  Users,
  Shield,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LiveActivityPanel from "../components/LiveActivityPanel";

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Active Chat",
    desc: "24/7 active Indian Discord server with engaging text channels and friendly members.",
  },
  {
    icon: Mic,
    title: "Voice Chat Rooms",
    desc: "Join active voice chat rooms (VC) anytime and connect with people across India.",
  },
  {
    icon: Trophy,
    title: "Fun Events",
    desc: "Participate in regular events, game nights, and activities in our Indian Discord community.",
  },
  {
    icon: Gift,
    title: "Giveaways",
    desc: "Win exciting rewards like Nitro, gift cards, and exclusive perks.",
  },
  {
    icon: Users,
    title: "Friendly Community",
    desc: "A safe and welcoming Indian Discord server for chatting, making friends, and dating.",
  },
  {
    icon: Shield,
    title: "Custom Roles",
    desc: "Unlock unique roles and stand out in one of the most active Discord servers in India.",
  },
  {
    icon: Sparkles,
    title: "Nitro Perks",
    desc: "Enjoy exclusive perks and benefits in one of the most active Discord servers in India.",
  },
];

const STATS = [
  { value: "20000+", label: "Active Server Members" },
  { value: "700+", label: "Daily Messages Contributers" },
  { value: "250+", label: "Daily Voice COntributers" },
];

const VOTE_SITES = [
  { name: "Top.gg", url: LINKS.topgg },
  { name: "Discord.me", url: LINKS.discordme },
  { name: "Discords.com", url: LINKS.discordscom },
  { name: "Disboard.org", url: LINKS.disboard },
];

const HomePage = () => {
  return (
    <main>
      <Helmet>
  <title>
    🔥 Best Indian Discord Server (20K+ Members) – Chat, VC & Events | Born2Flirt
  </title>

  <meta
    name="description"
    content="Join Born2Flirt – India’s most active Discord server with 20,000+ members. Chat, voice calls (VC), dating, gaming & daily events. Meet new people and start chatting now!"
  />

  <link rel="canonical" href="https://born2flirt.in/" />

  {/* Keywords (optional but fine to include) */}
  <meta
    name="keywords"
    content="best indian discord server, indian discord server, discord server india, active indian discord server, indian chat server, indian vc server, indian dating discord, born2flirt discord, join indian discord server, discord servers india"
  />

  {/* Open Graph (VERY IMPORTANT for CTR when shared) */}
  <meta
    property="og:title"
    content="🔥 Join India’s Most Active Discord Server – 20K+ Members"
  />
  <meta
    property="og:description"
    content="Chat, voice calls, dating, gaming & daily events. Join Born2Flirt – India's fastest growing Discord community."
  />
  <meta property="og:url" content="https://born2flirt.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://born2flirt.in/preview.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Indian Discord Server – 20K+ Members | Born2Flirt"
  />
  <meta
    name="twitter:description"
    content="Join India’s most active Discord server for chat, VC, dating & events."
  />

  {/* Extra SEO boost */}
  <meta name="robots" content="index, follow" />

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best Indian Discord server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Born2Flirt is one of the best Indian Discord servers with 20,000+ members, active chats, voice calls, and daily events.",
          },
        },
        {
          "@type": "Question",
          name: "How to join an Indian Discord server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Click the Join button on Born2Flirt to instantly join one of the most active Discord communities in India.",
          },
        },
        {
          "@type": "Question",
          name: "Is Born2Flirt active?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Born2Flirt is highly active with 24/7 chat, voice calls (VC), events, and thousands of active Indian members.",
          },
        },
        {
          "@type": "Question",
          name: "Is Born2Flirt safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Born2Flirt has active moderation to keep the community safe, friendly, and welcoming.",
          },
        },
        {
          "@type": "Question",
          name: "What can I do in Born2Flirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can chat, join voice calls, participate in events, meet new people, and explore dating-friendly spaces.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Indian dating Discord server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Born2Flirt is one of the top Indian dating Discord servers with an active and engaging community.",
          },
        },
      ],
    })}
  </script>
   <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Born2Flirt",
  url: "https://born2flirt.in",
  logo: {
    "@type": "ImageObject",
    url: "https://born2flirt.in/logo.png"
  },
  sameAs: [
    "https://discord.gg/b2f"
  ]
})}
</script>
</Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.15),transparent_60%)]" />
        <div className="container relative text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Best Indian Discord Server{" "}
            <span className="gradient-text">for Chat, VC & Dating</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-2">
            Join Born2Flirt, one of the most active Indian Discord servers for
            chat, voice calls, and dating. Connect with real people across
            India, join daily VC sessions, participate in events, and be part of
            a fast-growing Indian community.
          </p>
          <p className="text-sm text-gray-400 mt-2 mb-5">
            Looking for an active Indian Discord server or an Indian dating
            Discord server? You're in the right place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 pulse-glow"
            >
              Join Discord <ExternalLink size={18} />
            </a>
            <Link
              to="/vote"
              className="px-8 py-3.5 rounded-lg font-semibold border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            >
              Vote Server
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            About <span className="gradient-text">Born2Flirt</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-justify">
              Born2Flirt is one of the{" "}
              <span className="font-bold">best Indian Discord servers</span>{" "}
              designed for people who love to chat, make friends, and connect
              with others across India. Whether you're looking for an{" "}
              <span className="font-bold">active Indian Discord server</span> or
              an <span className="font-bold">Indian dating Discord server</span>
              , Born2Flirt offers a fun, engaging, and welcoming community.
            </p>
            <p className="text-justify">
              Our server brings together thousands of members from all over
              India who enjoy daily conversations, voice chats (VC), and
              interactive community events. With 24/7 active chat channels,
              lively voice calls, dating-friendly spaces, and regular giveaways,
              there’s always something happening.
            </p>
            <p className="text-justify">
              What makes Born2Flirt stand out from other Discord servers in
              India is its safe, friendly, and highly active environment. Our
              moderation team ensures that the community remains respectful and
              enjoyable for everyone. Whether you’re here to make friends,
              explore dating, join voice chats, or just chill, you’ll feel right
              at home.
            </p>
            <p className="text-justify">
              If you're searching for the{" "}
              <span className="font-bold">best Indian Discord servers</span> for
              chat, voice calls, or dating, Born2Flirt is one of the
              fastest-growing Discord communities in India and the perfect place
              to get started.
            </p>
            <h2 className="text-center font-bold">
              Who Should Join This Indian Discord Server?
            </h2>
            <p className="text-justify">
              This Indian Discord server is perfect for anyone looking to make
              friends, join active chats, explore dating, or simply chill with
              like-minded people. Whether you're a student, gamer, or someone
              looking for new connections, Born2Flirt offers a welcoming space
              for everyone.
            </p>
            <h2 className="text-center font-bold">
              Top Indian Discord Servers
            </h2>
            <p className="text-justify">
              There are many Indian Discord servers available online, but
              Born2Flirt stands out as one of the most active and
              fastest-growing Discord communities in India.
            </p>
            <p className="text-justify">
              If you're searching for an active Discord server in India or an
              Indian dating Discord server, Born2Flirt is one of the best
              options available today.
            </p>
            <p>
              Born2Flirt is one of the most active Discord servers in India,
              perfect for chatting, voice calls, and connecting with new people
              in a safe and friendly environment.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              Features of the{" "}
              <span className="text-purple-400">
                Best Indian Discord Server for Chat, VC & Dating
              </span>
            </h2>
          </h2>
          <p className="text-gray-400 mt-2 max-w-3xl mx-auto text-justify mb-10">
            Born2Flirt offers everything you expect from the best Indian Discord
            server, including active chat rooms, voice calls (VC), events, and
            dating-friendly spaces designed to help you connect with people
            across India.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="glow-card rounded-xl p-6 border border-border"
              >
                <f.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className=" text-gray-400 mt-6 max-w-3xl mx-auto text-justify">
            If you're looking for the best Indian Discord server with active
            chat, voice calls, and dating features, Born2Flirt offers everything
            in one place.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Join the{" "}
            <span className="text-purple-400">Best Indian Discord Server</span>{" "}
            – Born2Flirt?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Born2Flirt stands out as one of the best Indian Discord servers
            thanks to its vibrant, active, and welcoming community. With
            thousands of members chatting daily, active voice channels (VC), and
            regular events, there’s always something happening. Whether you're
            looking for an active Indian Discord server to make friends, join
            voice chats, or explore dating, Born2Flirt offers the perfect space
            to connect with people across India.
          </p>
          <p className=" text-center text-muted-foreground leading-relaxed mb-6">
            Unlike many Discord servers in India, Born2Flirt focuses on real
            engagement, safety, and meaningful interactions. With dedicated
            moderation, dating-friendly spaces, and a fast-growing community,
            it’s one of the most active Discord servers in India for chatting,
            socializing, and building connections.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Active Chat 24/7",
              "Safe & Friendly Indian Community ",
              "Regular Events & Giveaways",
              "Fast Growing Indian Discord Server",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-primary/40 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-400 mt-4 text-center">
          Looking for an active Indian Discord server or an Indian dating
          Discord server?
          <a
            href="https://discord.gg/b2f"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-purple-400 underline ml-1"
          >
            Join Born2Flirt here
          </a>
        </p>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Born2Flirt <span className="text-purple-400">Server Stats</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glow-card rounded-xl p-8 text-center border border-border"
              >
                <div className="font-display text-3xl font-bold gradient-text mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 max-w-md mx-auto">
            <LiveActivityPanel />
          </div>
      </section>

      {/* Invite */}
      <section className="py-20 bg-secondary/30">
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

      {/* Vote */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Vote for the<span className="gradient-text"> Born2Flirt </span>
            Discord Server
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {VOTE_SITES.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="glow-card rounded-xl p-6 text-center border border-border group"
              >
                <ThumbsUp
                  className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h3 className="font-display font-semibold mb-3">{site.name}</h3>
                <span className="gradient-bg px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground inline-block">
                  Vote Now
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the best Indian Discord server?",
                a: "Born2Flirt is widely regarded as one of the best Indian Discord servers, known for its active community, daily voice chats (VC), fun events, and a friendly environment for members across India.",
              },
              {
                q: "How to join an Indian Discord server?",
                a: "You can join an Indian Discord server by clicking the Join Born2Flirt button on this page. You’ll be redirected to Discord where you can accept the invite and start chatting in our active Indian Discord community.",
              },
              {
                q: "Is Born2Flirt active?",
                a: "Yes, Born2Flirt is one of the most active Indian Discord servers, with thousands of members, 24/7 chat activity, voice calls (VC), regular events, and giveaways.",
              },
              {
                q: "Is Born2Flirt a safe Discord server?",
                a: "Yes, Born2Flirt is a safe Indian Discord server with active moderators who ensure the community remains friendly, respectful, and welcoming for everyone.",
              },
              {
                q: "What can I do in the Born2Flirt Discord server?",
                a: "In the Born2Flirt Indian Discord server, you can chat in active text channels, join voice chats (VC), participate in events, explore dating-friendly spaces, and meet new people from across India.",
              },
              {
                q: "What is the best Indian dating Discord server?",
                a: "Born2Flirt is one of the best Indian dating Discord servers, offering a friendly and active space where members can chat, connect, and build relationships.",
              },
            ].map((faq) => (
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
    </main>
  );
};

export default HomePage;
