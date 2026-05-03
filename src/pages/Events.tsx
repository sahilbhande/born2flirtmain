import { Gamepad2, Mic, Trophy, Gift, Calendar } from "lucide-react";
import { LINKS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FloatingLiveButton from "@/components/FloatingLiveButton";

const EVENTS = [
  {
    icon: Gamepad2,
    title: "🎮 Game Nights (Indian Discord Events)",
    desc: "Join weekly Indian Discord gaming events with popular games like Valorant and BGMI. Play with active members from across India and never game alone.",
    date: "Every Saturday",
  },
  {
    icon: Mic,
    title: "🎤 Voice Chat Hangouts",
    desc: "Participate in daily Discord voice chat events in India — talk, vibe, listen to music, and meet new people in active VC rooms.",
    date: "Daily",
  },
  {
    icon: Trophy,
    title: "🏆 Community  Challenges",
    desc: "Take part in fun Discord events in India including quizzes, competitions, and creative challenges with exciting rewards.",
    date: "Bi-weekly",
  },
  {
    icon: Gift,
    title: "🎁 Giveaway Events ",
    desc: "Join regular Discord giveaway events in India and win Nitro, gift cards, and exclusive rewards. Stay active to increase your chances.",
    date: "Weekly",
  },
  {
    icon: Calendar,
    title: "🎉 Special Community Events",
    desc: "Celebrate festivals, themed nights, and cultural events with one of the most active Indian Discord communities.",
    date: "Monthly",
  },
];

const EventsPage = () => (
  <main>
    <Helmet>
  {/* Primary SEO */}
  <title>
    🔥 Daily Indian Discord Events – VC, Game Nights & Giveaways | Born2Flirt
  </title>

  <meta
    name="description"
    content="Join daily Indian Discord events on Born2Flirt – voice chat (VC), game nights, giveaways & community challenges. Active 24/7 with thousands of members."
  />

  <link rel="canonical" href="https://born2flirt.in/events" />

  {/* Keywords */}
  <meta
    name="keywords"
    content="indian discord events, discord events india, daily discord events, discord vc events india, gaming discord events india, active discord server events, born2flirt events"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="🔥 Join Daily Discord Events in India – VC, Games & Giveaways"
  />
  <meta
    property="og:description"
    content="Active Discord events happening daily – voice chats, game nights & giveaways. Join now!"
  />
  <meta property="og:url" content="https://born2flirt.in/events" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://born2flirt.in/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Daily Indian Discord Events – Join VC & Game Nights"
  />
  <meta
    name="twitter:description"
    content="Join active Discord events in India – voice chats, gaming & giveaways happening daily."
  />
  <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />

  <meta name="robots" content="index, follow" />

  {/* Schema: WebPage */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Indian Discord Events",
      url: "https://born2flirt.in/events",
      description:
        "Daily Indian Discord events including voice chat hangouts, game nights, giveaways, and community challenges.",
    })}
  </script>

  {/* Schema: Event */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Daily Indian Discord Events",
      description:
        "Join daily Discord events including VC hangouts, gaming sessions, giveaways, and community challenges.",
      eventAttendanceMode:
        "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      organizer: {
        "@type": "Organization",
        name: "Born2Flirt",
        url: "https://born2flirt.in",
      },
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
          name: "What events happen in Born2Flirt Discord server?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Born2Flirt hosts daily Indian Discord events including voice chat hangouts, game nights, giveaways, and community challenges.",
          },
        },
        {
          "@type": "Question",
          name: "How often do Discord events happen?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Events happen daily with active participation from thousands of members across India.",
          },
        },
        {
          "@type": "Question",
          name: "Can new members join Discord events?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, all members can join events, voice chats, games, and giveaways anytime.",
          },
        },
        {
          "@type": "Question",
          name: "Are Discord events active daily in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Born2Flirt hosts daily active Discord events with voice chats, games, and community activities.",
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
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.1),transparent_60%)]" />
      <div className="container relative">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          Indian Discord Server Events –{" "}
          <span className="gradient-text">
            Game Nights, VC Hangouts & Giveaways
          </span>
        </h1>
        <p className="text-justify text-muted-foreground mb-14 max-w-3xl mx-auto ">
          Join exciting <strong>Indian Discord events</strong> including game
          nights, voice chat hangouts, giveaways, and community challenges. Our
          events keep the server active daily with something fun always
          happening.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {EVENTS.map((e) => (
            <div
              key={e.title}
              className="glow-card rounded-xl p-6 border border-border flex flex-col"
            >
              <e.icon className="text-primary mb-4" size={28} />
              <h2 className="font-display text-lg font-semibold mb-2">
                {e.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {e.desc}
              </p>
              <span className="mt-4 text-xs font-semibold text-primary">
                {e.date}
              </span>
            </div>
          ))}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mt-5 mb-5">
          Why Join Indian Discord Events?
        </h2>
        <p className="text-justify text-muted-foreground mb-5 max-w-3xl mx-auto mt-10">
          Indian Discord events are becoming the go-to way to connect, chat, and
          have fun online. From gaming sessions to voice chat hangouts, these
          events help you meet new people and stay active daily.
        </p>
        <ul className="text-justify text-muted-foreground mb-5 max-w-3xl mx-auto mt-10">
          <li>🔥 Daily active events </li>
          <li>🎮 Fun games & competitions </li>
          <li>🎤 Always active voice chats </li>
          <li>🎁 Rewards & giveaways </li>
        </ul>
        <p className="text-justify text-muted-foreground mb-14 max-w-3xl mx-auto mt-10">
          Join exciting <strong>Indian Discord events</strong> including game
          nights, voice chat hangouts, giveaways, and community challenges.
          <a
            href="https://discord.gg/b2f"
            target="_blank"
            rel="nofollow noopener"
            className="text-purple-400 underline ml-1"
          >
            Join Born2Flirt on Discord
          </a>{" "}
          and start participating instantly.
        </p>

        <div className="mt-14 text-center">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Join Events Now 🚀 <ExternalLink size={18} />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more{" "}
            <Link to="/about" className="text-primary hover:underline">
              about us
            </Link>{" "}
            or explore our{" "}
            <Link to="/features" className="text-primary hover:underline">
              features
            </Link>
            .
          </p>
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
              q: "What events happen in Born2Flirt Discord server?",
              a: "Born2Flirt hosts a variety of Indian Discord events including game nights, voice chat hangouts, quiz competitions, giveaways, and community challenges. These events are designed to keep the community active and engaging every day.",
            },
            {
              q: "How often do Discord events happen in Born2Flirt?",
              a: "Events happen regularly, with daily voice chat hangouts, weekly game nights and giveaways, and special monthly events. There’s always something happening in this active Indian Discord server.",
            },
            {
              q: "Can new members join Discord events in India?",
              a: "Yes, all new and existing members can join events instantly. Once you join the server, you can participate in voice chats, games, and community activities without any restrictions.",
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
    <FloatingLiveButton />
  </main>
);

export default EventsPage;
