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
import { Star } from "lucide-react";
import { useState } from "react";
import { useDiscordStats } from "@/hooks/useDiscordStats";

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    review.review.length > 140
      ? review.review.slice(0, 140) + "..."
      : review.review;

  return (
    <div className="glow-card rounded-xl p-6 border border-border">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover border border-primary/30"
        />

        <div>
          <h3 className="font-semibold">{review.name}</h3>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed">
        "{expanded ? review.review : shortText}"
      </p>

      {review.review.length > 140 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-primary text-sm hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

const LATEST_ARTICLES = [
  {
    title: "Why Users Are Switching To Born2Flirt In 2026",
    slug: "/blog/why-users-are-switching-to-born2flirt",
  },
  {
    title: "Born2Flirt Review: Features, Events & Community",
    slug: "/blog/born2flirt-review-features-events-community",
  },
  {
    title: "Best Indian Friendship Discord Servers",
    slug: "/blog/best-indian-friendship-discord-servers",
  },
  {
    title: "Born2Flirt vs Ishq Discord Server",
    slug: "/blog/born2flirt-vs-ishq-discord-server",
  },
];
const REVIEWS = [
  {
    name: "damn_lucky",
    avatar: "/reviews/damn_lucky.webp",
    role: "Girl Manager",
    review:
      "One of the few Discord communities that actually stays active throughout the day. I've met some amazing people here, and the voice chats are always lively and fun. The staff team does a great job keeping everything organized and welcoming, making it easy for both new and old members to enjoy the server. Whether you're looking to make friends, join events, or just hang out, B2F has a great atmosphere.",
  },
  {
    name: "ciggswnoor",
    avatar: "/reviews/ciggswnoor.webp",
    role: "Girl Manager",
    review:
      "Honestly one of the best Discord communities I've ever joined. When I first joined B2F, I was pretty shy and wasn't sure if I'd fit in, but everyone was incredibly welcoming from day one. The community made it easy to start conversations and feel comfortable being myself. Over time, I made some amazing friends that I now talk to every day. The atmosphere is positive, the voice chats are always active, and the staff team is friendly and helpful whenever you need assistance. If you're looking for a place to make friends, have fun conversations, and be part of an active community, B2F is definitely worth joining.",
  },
  {
    name: "velvetishighh",
    avatar: "/reviews/velvetishighh.webp",
    role: "Community Member",
    review:
      "Born2Flirt is one of the most active and welcoming Discord communities I've come across. Whether you're into casual conversations, active voice chats, community events, or simply meeting new people, there's always something happening. The members are friendly, the atmosphere is positive, and it's easy to feel included even as a newcomer. If you're looking for an active Indian Discord server where people genuinely interact and have fun together, B2F is definitely worth joining.",
  },
  {
    name: "zeniic.lub",
    avatar: "/reviews/zeniic.lub.webp",
    role: "Co Owner",
    review:
      "Born2Flirt is one of the most active Indian Discord communities I've joined. The members are friendly, the voice chats are always lively, and it's easy to make new friends. The moderation team does a great job maintaining a safe and welcoming environment, making it comfortable for everyone to socialize, participate in events, and enjoy the community.",
  },
];

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Born2Flirt",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
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
  const { data } = useDiscordStats();

  const totalVcUsers = data.voiceChannels.reduce(
    (sum, vc) => sum + vc.count,
    0,
  );
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
          {JSON.stringify(reviewSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
            <strong className="text-foreground">Indian Discord server</strong>{" "}
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
            25,000+ members already active — join the vibe now.
          </p>
        </div>
      </section>
      {/* Live Activity */}
<section className="py-16">
  <div className="container max-w-4xl">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
      Live <span className="gradient-text">Community Activity</span>
    </h2>

    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
      Real-time activity from our Discord server.
    </p>

    <div className="glow-card rounded-xl border border-border p-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

        <span className="font-semibold">
          Live Right Now
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">
            Members Online
          </p>

          <p className="text-3xl font-bold gradient-text">
            {data.online.toLocaleString()}
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">
            People In VC
          </p>

          <p className="text-3xl font-bold gradient-text">
            {totalVcUsers}
          </p>
        </div>

        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">
            Active Voice Channels
          </p>

          <p className="text-3xl font-bold gradient-text">
            {data.voiceChannels.length}
          </p>
        </div>
      </div>

      {data.voiceChannels.length > 0 && (
        <>
          <h3 className="font-semibold mb-4">
            Active Voice Channels
          </h3>

          <div className="space-y-3">
            {data.voiceChannels.slice(0, 5).map((vc) => (
              <div
                key={vc.name}
                className="flex justify-between items-center border-b border-border pb-3"
              >
                <span>{vc.name}</span>

                <span className="font-semibold text-primary">
                  {vc.count} users
                </span>
              </div>
            ))}
          </div>
        </>
      )}
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
      {/* Why We're Different */}
<section className="py-16 md:py-20">
  <div className="container max-w-5xl">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
      Why <span className="gradient-text">Born2Flirt Is Different</span>
    </h2>

    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
      Thousands of communities exist on Discord, but not all of them create
      meaningful friendships and long-term engagement. Here's what makes B2F
      stand out.
    </p>

    <div className="grid gap-5 md:grid-cols-2">
      <div className="glow-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-2">
          ✅ Active Voice Chats Every Day
        </h3>

        <p className="text-sm text-muted-foreground">
          Join voice channels at almost any time and find people talking,
          gaming, chilling, and hanging out together.
        </p>
      </div>

      <div className="glow-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-2">
          ✅ Community-First Approach
        </h3>

        <p className="text-sm text-muted-foreground">
          The focus is on building genuine friendships and creating a welcoming
          environment rather than simply growing member numbers.
        </p>
      </div>

      <div className="glow-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-2">
          ✅ Regular Events & Activities
        </h3>

        <p className="text-sm text-muted-foreground">
          Movie nights, gaming sessions, voice events, challenges, and
          community celebrations keep the server exciting.
        </p>
      </div>

      <div className="glow-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-2">
          ✅ Friendly Moderation
        </h3>

        <p className="text-sm text-muted-foreground">
          Active moderators help maintain a safe, respectful, and enjoyable
          environment for everyone.
        </p>
      </div>

      <div className="glow-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-2">
          ✅ Real Friendships
        </h3>

        <p className="text-sm text-muted-foreground">
          Many members join for conversations and stay because of the genuine
          friendships they build inside the community.
        </p>
      </div>

      <div className="glow-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-2">
          ✅ Indian-Focused Community
        </h3>

        <p className="text-sm text-muted-foreground">
          Built for Indian Discord users looking for active chats, voice calls,
          events, and a relatable social experience.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Reviews */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            What Our <span className="gradient-text">Members Say</span>
          </h2>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Thousands of people have joined Born2Flirt to make friends, hang out
            in voice chats, and become part of an active Indian community.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose B2F */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose{" "}
            <span className="gradient-text">B2F Over Other Servers?</span>
          </h2>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Not all Discord communities offer the same experience. Here's how
            Born2Flirt compares to a typical social Discord server.
          </p>

          <div className="glow-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-5 font-semibold border-b border-border bg-secondary/20">
              <div>Feature</div>
              <div className="text-center text-primary">B2F</div>
              <div className="text-center">Typical Server</div>
            </div>

            {[
              ["Active Voice Chats", "✅", "❌"],
              ["Regular Events", "✅", "⚠️"],
              ["Daily Activity", "✅", "❌"],
              ["Making Friends", "✅", "⚠️"],
              ["Welcoming Community", "✅", "❌"],
              ["Active Moderation", "✅", "⚠️"],
              ["Giveaways & Rewards", "✅", "⚠️"],
            ].map(([feature, b2f, typical]) => (
              <div
                key={feature}
                className="grid grid-cols-3 gap-4 p-5 border-b border-border last:border-b-0"
              >
                <div className="font-medium">{feature}</div>

                <div className="text-center text-lg">{b2f}</div>

                <div className="text-center text-lg">{typical}</div>
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
      {/* Latest Articles */}
<section className="py-16 md:py-20">
  <div className="container max-w-5xl">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
      Latest <span className="gradient-text">Guides & Articles</span>
    </h2>

    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
      Explore our latest articles about Discord communities, friendships,
      voice chats, and socializing online.
    </p>

    <div className="glow-card rounded-xl p-6 border border-border">
      <div className="space-y-4">
        {LATEST_ARTICLES.map((article) => (
          <Link
            key={article.slug}
            to={article.slug}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/30 transition-colors group"
          >
            <span className="font-medium group-hover:text-primary transition-colors">
              {article.title}
            </span>

            <ExternalLink
              size={18}
              className="text-muted-foreground group-hover:text-primary"
            />
          </Link>
        ))}
      </div>
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
