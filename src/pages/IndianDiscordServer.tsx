import { useEffect } from "react";
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
    a: "Born2Flirt is one of the best Indian Discord servers in 2026, with thousands of active members, 24/7 chat and voice channels, regular events, and a friendly community. It’s a popular choice for anyone looking to join an active Indian Discord server.",
  },
  {
    q: "Is Born2Flirt an active Indian Discord server?",
    a: "Yes, Born2Flirt is a highly active Indian Discord server with members online throughout the day. You’ll always find ongoing conversations, active voice chats, and a lively community.",
  },
  {
    q: "Can I make friends on Born2Flirt?",
    a: "Yes, Born2Flirt is designed for socializing and building real connections. Many members join to chat, make friends, and be part of a welcoming Indian Discord community.",
  },
  {
    q: "How do I join the Born2Flirt Indian Discord server?",
    a: "You can join instantly by clicking the invite link and accepting it on Discord. Once inside, introduce yourself in the welcome channel and start chatting with the community.",
  },
  {
    q: "Is Born2Flirt free to join?",
    a: "Yes, Born2Flirt is completely free to join. All features including chat, voice channels, events, and giveaways are available to every member.",
  },
  {
    q: "What can I do in an Indian Discord server?",
    a: "In an Indian Discord server like Born2Flirt, you can chat with people, join voice calls, participate in events, play games, and connect with members across India.",
  },
  {
    q: "Are Discord servers popular in India?",
    a: "Yes, Discord servers are growing rapidly in India as more users join to chat, connect, and build online communities. Indian Discord servers are especially popular for voice chats, gaming, and social interactions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const IndianDiscordServerPage = () => {
  useEffect(() => {
    document.title =
      "Best Indian Discord Server – Active Chat, VC & Community | Born2Flirt";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Looking for the best Indian Discord server? Join Born2Flirt – India's most active Discord community with 24/7 chat, voice calls, events, giveaways, and a friendly atmosphere.",
    );
    setMeta(
      "keywords",
      "indian discord server, best indian discord server, active indian discord server, discord server india, indian dating discord server",
    );
    setMeta("og:title", "Best Indian Discord Server – Born2Flirt", "property");
    setMeta(
      "og:description",
      "Join Born2Flirt, India's most active Discord server with voice chat, events, giveaways, and a welcoming community.",
      "property",
    );

    let script = document.querySelector(
      "script[data-faq-schema]",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-faq-schema", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);
    return () => {
      script?.remove();
    };
  }, []);

  return (
    <main>
      <Helmet>
  {/* Primary SEO */}
  <title>
    🔥 Best Indian Discord Server (20K+ Members) – Join Active VC & Chat | Born2Flirt
  </title>

  <meta
    name="description"
    content="Looking for the best Indian Discord server? Join Born2Flirt with 20,000+ members, active voice chats (VC), daily events, gaming & giveaways. Meet new people across India."
  />

  <link
    rel="canonical"
    href="https://born2flirt.in/indian-discord-server"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="best indian discord server, indian discord server, discord server india, active indian discord server, indian vc server, indian chat server, join discord server india, born2flirt discord"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="🔥 Best Indian Discord Server – 20K+ Members & Active VC"
  />
  <meta
    property="og:description"
    content="Join one of India’s most active Discord servers with voice chats, events, gaming & giveaways."
  />
  <meta
    property="og:url"
    content="https://born2flirt.in/indian-discord-server"
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://born2flirt.in/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Indian Discord Server – Join Born2Flirt"
  />
  <meta
    name="twitter:description"
    content="20K+ members, active VC, daily events & giveaways. Join now!"
  />
  <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />

  <meta name="robots" content="index, follow" />

  {/* Schema: Organization */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Born2Flirt",
      url: "https://born2flirt.in",
      sameAs: ["https://discord.gg/YOUR-LINK"],
      description:
        "Born2Flirt is one of the most active Indian Discord servers with chat, voice channels, events, and a growing community.",
    })}
  </script>

  {/* Schema: WebPage */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Best Indian Discord Server",
      url: "https://born2flirt.in/indian-discord-server",
      description:
        "Join one of the best Indian Discord servers with active chat, VC, events, and community activities.",
    })}
  </script>

  {/* FAQ Schema (HIGH IMPACT FOR CTR) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best Indian Discord server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Born2Flirt is one of the best Indian Discord servers with 20,000+ members, active chats, voice channels, and daily events.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an active Discord server in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Born2Flirt is a highly active Indian Discord server with 24/7 chat, voice calls, and regular events.",
          },
        },
        {
          "@type": "Question",
          name: "How to join an Indian Discord server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can join Born2Flirt by clicking the join button and accepting the Discord invite to start chatting instantly.",
          },
        },
        {
          "@type": "Question",
          name: "Are there Indian Discord servers for chatting and VC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Born2Flirt offers active text chats, voice channels (VC), events, and a friendly Indian community.",
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
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.15),transparent_60%)]" />
        <div className="container relative max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Best Indian Discord Server for Chat, Voice Chat & Social Community –{" "}
            <span className="gradient-text">
              Join Active VC, Make Friends & Build Real Connections
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Looking for an{" "}
            <strong className="text-foreground">Indian Discord server</strong>{" "}
            where you can chat, join voice calls, and meet new people daily?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Born2Flirt is one of India’s fastest-growing Discord communities
            with thousands of active members. Whether you want to chill in voice
            chat, make friends, join events, or find meaningful connections —
            you’ll always find people online here.
          </p>
          <ul className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            <li>Daily active chats & voice calls</li>
            <li>Events, giveaways & fun activities</li>
            <li>Friendly and welcoming Indian community</li>
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Join now and be part of a server that’s actually alive 24/7.
          </p>
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
            18,000+ members already active — join the vibe now.
          </p>
        </div>
      </section>

      {/* Why Born2Flirt */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Why Born2Flirt Is the{" "}
            <span className="gradient-text">Best Indian Discord Server</span>
          </h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <h2 className="font-display font-bold text-lg mb-2 hover:translate-x-1 hover:text-purple-400 transition-all duration-200">
              💬 Real Conversations, Not Dead Chats
            </h2>
            <p>
              Unlike most servers that die in weeks, Born2Flirt stays active
              daily with real people talking, not just lurking.
            </p>
            <h2 className="font-display font-bold text-lg mb-2 hover:translate-x-1 hover:text-purple-400 transition-all duration-200">
              🌍 Active Members Across India
            </h2>
            <p>
              From Delhi, Mumbai, Chennai to Kolkata — connect with people from
              all over India in one place.
            </p>
            <h2 className="font-display font-bold text-lg mb-2 hover:translate-x-1 hover:text-purple-400 transition-all duration-200">
              🔊 Voice Chats That Are Actually Alive
            </h2>
            <p>
              Join VC anytime and find people talking, laughing, and vibing —
              not silent rooms.
            </p>
            <h2 className="font-display font-bold text-lg mb-2 hover:translate-x-1 hover:text-purple-400 transition-all duration-200">
              🛡️Safe & Moderated Community
            </h2>
            <p>
              Our active moderation team keeps the server friendly, respectful,
              and drama-free.
            </p>
            <h2 className="font-display font-bold text-lg mb-2 hover:translate-x-1 hover:text-purple-400 transition-all duration-200">
              🎉 Events, Games & Giveaways
            </h2>
            <p>
              Regular events, game nights, and fun activities keep the community
              engaging every day.
            </p>
            <p className="mt-5">
              If you’re looking for a Discord server in India that actually
              feels alive — this is it.
            </p>
          </div>
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

      {/* Who Should Join */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Who Should Join This{" "}
            <span className="gradient-text">Indian Discord Server?</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Born2Flirt is for everyone but here’s who enjoys it the most:"
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Love Meeting New People",
                  desc: "If you enjoy chatting, making friends, and having real conversations, you’ll fit right in here.",
                },
                {
                  icon: Heart,
                  title: "Looking for Real Connections",
                  desc: "Build genuine friendships and meaningful connections with people across India.",
                },
                {
                  icon: Gamepad2,
                  title: "Gamers & Creators",
                  desc: "Find gaming buddies, share content, and connect with like-minded people from all over India.",
                },
                {
                  icon: Mic,
                  title: "Voice Chat Lovers",
                  desc: "Prefer talking over texting? Join active VC rooms anytime and vibe with others.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glow-card rounded-xl p-5 border border-border"
                >
                  <item.icon className="text-primary mb-3" size={24} />
                  <h3 className="font-display font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              Whether you're here to chill, talk in voice chat, make friends, or
              just be part of an active Indian community — you'll always find
              your place here.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            The Growing Popularity of{" "}
            <span className="gradient-text">Indian Discord Servers</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Discord has seen massive growth in India, with millions of users
              joining the platform to connect with like-minded communities. The
              demand for <strong>Indian Discord servers</strong> is increasing
              rapidly as more people look for spaces where they can chat,
              socialize, and participate in active voice communities.
            </p>

            <h3>Why Indian Discord Servers Are Becoming Popular</h3>
            <p>
              Unlike global communities where users may feel disconnected, an{" "}
              <strong>Indian Discord server</strong> offers a more relatable and
              culturally familiar experience. Members can communicate in Hindi,
              English, or regional languages, making conversations more natural
              and engaging.
            </p>

            <h3>A More Relatable and Active Community Experience</h3>
            <p>
              From shared humor to local trends, Indian communities create a
              stronger sense of belonging. Whether it's casual chats, voice
              calls, or community events, users feel more connected in a{" "}
              <strong>Discord server in India</strong> compared to international
              servers.
            </p>

            <h3>Born2Flirt – One of the Best Indian Discord Servers</h3>
            <p>
              As one of the <strong>best Indian Discord servers</strong>,
              Born2Flirt continues to grow with active members, engaging voice
              chats, and regular events. From Bollywood music sessions to
              cricket watch parties, the server reflects the vibrant culture of
              India.
            </p>

            <p>
              If you're searching for an{" "}
              <strong>active Indian Discord server</strong> that feels lively,
              engaging, and community-driven —
              <a
                href="https://discord.gg/b2f"
                target="_blank"
                rel="nofollow noopener"
                className="text-primary hover:underline"
              >
                join Born2Flirt on Discord
              </a>{" "}
              and become part of one of India’s fastest-growing communities.
            </p>
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
            Join thousands of active members in one of the most{" "}
            <strong>active Indian Discord servers</strong>. Chat, join voice
            calls, make friends, and be part of a community that’s always
            online.
          </p>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-10 py-4 rounded-xl font-bold text-lg text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 pulse-glow"
          >
            Join Born2Flirt Now <ExternalLink size={20} />
          </a>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed mt-5">
            🔥 18,000+ members already active don’t miss out.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Already a member? Help us grow by{" "}
            <Link to="/vote" className="text-primary hover:underline">
              voting for Born2Flirt
            </Link>{" "}
            on server listing sites.
          </p>
        </div>
      </section>
    </main>
  );
};

export default IndianDiscordServerPage;
