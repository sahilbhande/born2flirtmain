import { LINKS } from "@/lib/constants";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SERVERS = [
  {
    name: "🔥 Born2Flirt",
    desc: "One of the most active Indian Discord servers with 18,000+ members, daily voice chats, events, and giveaways. Join now to chat, make friends, and be part of a fast-growing community.",
    featured: true,
    link: LINKS.discord,
  },
  {
    name: "⭐ Friends",
    desc: "Friends is a highly active Indian Discord server for gaming, voice chats, and socializing. Members regularly join VC, play games, and connect with new people.",
    featured: true,
    link: LINKS.friends,
  },

  {
    name: "Among Us India",
    desc: "Among Us India is an active Indian Discord server where gamers play, chat, and enjoy voice sessions together.",
    featured: false,
    link: LINKS.amongus,
  },
  {
    name: "Ecafe",
    desc: "eCafe is an Indian Discord server focused on casual chats, voice hangouts, and making new friends in a relaxed environment.",
    featured: false,
    link: LINKS.ecafe,
  },
  {
    name: "The NXT",
    desc: "NXT is an active Indian Discord server where users chat, hang out, and connect through engaging voice and text conversations.",
    featured: false,
    link: LINKS.thenxt,
  },
  {
    name: "Live Insaan",
    desc: "Live Insaan is a fan-based Indian Discord server where users chat, share content, and connect with others in the community.",
    featured: false,
    link: LINKS.liveinsaan,
  },
  {
    name: "Indian Humour",
    desc: "Indian Humour is a fun Discord server in India where members share memes, jokes, and enjoy active conversations.",
    featured: false,
    link: LINKS.indianhumor,
  },
  {
    name: "Discord India",
    desc: "Discord India is a community server where people from across India chat, socialize, and meet new friends daily.",
    featured: false,
    link: LINKS.discordindia,
  },
  {
    name: "Love Cafe",
    desc: "Love Cafe is a chill Indian Discord server for voice chats, casual conversations, and meeting new people.",
    featured: false,
    link: LINKS.lovecafe,
  },
  {
    name: "Sukoon",
    desc: "Sukoon is a relaxed Indian Discord server focused on calm chats, voice hangouts, and a friendly atmosphere.",
    featured: false,
    link: LINKS.sukoon,
  },
  {
    name: "Hasrat",
    desc: "Hasrat is an Indian Discord server where members connect through chats, voice calls, and social interactions.",
    featured: false,
    link: LINKS.hasrat,
  },
  {
    name: "Gossipers",
    desc: "Gossipers is an active Indian Discord server for fun conversations, gossip, and engaging community chats.",
    featured: false,
    link: LINKS.gossipers,
  },
];

const TopServersPage = () => (
  <main>
    <Helmet>
      {/* Primary SEO */}
      <title>
        🔥 15 Best Indian Discord Servers (2026) – Active Chat, VC & Gaming
      </title>

      <meta
        name="description"
        content="Looking for the best Indian Discord servers? Discover 15+ active Discord servers in India for chat, voice chat (VC), gaming & events. Join top communities like Born2Flirt."
      />

      <link
        rel="canonical"
        href="https://born2flirt.in/top-indian-discord-servers"
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="best indian discord servers, top indian discord servers, discord servers india list, active discord servers india, indian discord server list, discord india communities"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="🔥 15 Best Indian Discord Servers (2026)"
      />
      <meta
        property="og:description"
        content="Find the most active Discord servers in India for chat, VC, gaming & events."
      />
      <meta
        property="og:url"
        content="https://born2flirt.in/top-indian-discord-servers"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://born2flirt.in/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="15 Best Indian Discord Servers (2026)"
      />
      <meta
        name="twitter:description"
        content="Explore top Discord servers in India for chatting, VC, gaming & making friends."
      />
      <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />

      <meta name="robots" content="index, follow" />

      {/* Schema: WebPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Best Indian Discord Servers",
          url: "https://born2flirt.in/top-indian-discord-servers",
          description:
            "List of the best and most active Indian Discord servers for chat, voice chat, gaming, and communities.",
        })}
      </script>

      {/* Schema: ItemList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Top Indian Discord Servers",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Born2Flirt",
              url: "https://discord.gg/YOUR-LINK",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Friends",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Ishq",
            },
          ],
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are the best Indian Discord servers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some of the best Indian Discord servers include active communities like Born2Flirt, offering chat, voice calls, events, and gaming.",
              },
            },
            {
              "@type": "Question",
              name: "Which is the most active Discord server in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Born2Flirt is one of the most active Indian Discord servers with thousands of members, daily events, and 24/7 voice chats.",
              },
            },
            {
              "@type": "Question",
              name: "How do I join an Indian Discord server?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Click the invite link of a Discord server and accept the invitation to join instantly.",
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
            url: "https://born2flirt.in/logo.png",
          },
          sameAs: ["https://discord.gg/b2f"],
        })}
      </script>
    </Helmet>
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.1),transparent_60%)]" />
      <div className="container relative max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
          Top Indian Discord Servers{" "}
          <span className="gradient-text">– Best Active Communities 🇮🇳</span>{" "}
          List
        </h1>
        <p className="text-center text-muted-foreground mb-5 leading-relaxed">
          Looking for the best <strong>Indian Discord servers</strong>? Here’s a
          curated list of the most active communities for chat, voice chat,
          gaming, and making friends in India.
        </p>
        <ul className="text-justify text-muted-foreground mb-14 leading-relaxed">
          <li>🔥 Updated list of active Discord servers in India </li>
          <li>🎤 Voice chat, gaming & social communities</li>
          <li>🚀 Join thousands of active members today </li>
        </ul>
        <div className="space-y-6">
          {SERVERS.map((s, i) => (
            <div
              key={s.name}
              className={`glow-card rounded-xl p-6 border ${
                s.featured
                  ? "border-primary/60 ring-1 ring-primary/30"
                  : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {s.featured && (
                      <Star className="text-accent fill-accent" size={18} />
                    )}
                    <span className="text-xs font-semibold text-muted-foreground">
                      #{i + 1}
                    </span>
                    <h2 className="font-display text-lg font-semibold">
                      {s.name}
                      {s.featured && (
                        <span className="ml-2 text-xs gradient-text font-bold">
                          FEATURED
                        </span>
                      )}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 px-5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 transition-opacity hover:opacity-90 ${
                    s.featured
                      ? "gradient-bg text-primary-foreground"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  Join <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Want to learn more? Read our{" "}
          <Link to="/blog" className="text-primary hover:underline">
            blog
          </Link>{" "}
          about Indian Discord communities, explore{" "}
          <Link to="/features" className="text-primary hover:underline">
            Born2Flirt features
          </Link>{" "}
          or{" "}
          <a
            href="https://discord.gg/YOUR-LINK"
            target="_blank"
            rel="nofollow noopener"
            className="text-primary hover:underline"
          >
            join Born2Flirt on Discord
          </a>{" "}
          and start chatting with thousands of active members.
        </p>
      </div>
    </section>
    {/* FAQ */}
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions About{" "}
          <span className="gradient-text">Indian Discord Servers</span>
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What are the best Indian Discord servers?",
              a: "Some of the best Indian Discord servers include active communities like Born2Flirt, where users can chat, join voice calls, and participate in events with members across India.",
            },
            {
              q: "How do I join an Indian Discord server?",
              a: "To join an Indian Discord server, simply click the invite link and accept the invitation. You can then start chatting and joining voice channels instantly.",
            },
            {
              q: "Are Indian Discord servers active?",
              a: "Yes, many Indian Discord servers are highly active with daily conversations, voice chats, and community events happening throughout the day.",
            },
            {
              q: "Which is the most active Indian Discord server?",
              a: "Born2Flirt is one of the most active Indian Discord servers, with thousands of members, regular events, and active voice chat rooms.",
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

export default TopServersPage;
