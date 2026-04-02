import { LINKS } from "@/lib/constants";
import { ThumbsUp, ExternalLink, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VOTE_SITES = [
  {
    name: "Top.gg",
    url: LINKS.topgg,
    desc: "Vote on Top.gg to help Born2Flirt rank higher and reach more users. Takes less than 10 seconds and helps grow one of the most active Indian Discord servers.",
  },
  {
    name: "Discord.me",
    url: LINKS.discordme,
    desc: "Support Born2Flirt by voting on Discord.me. Your vote boosts our visibility and brings more active members to the community.",
  },
  {
    name: "Discords.com",
    url: LINKS.discordscom,
    desc: "Vote for Born2Flirt on Discords.com and help more people discover our active Discord server in India.",
  },
  {
    name: "Disboard.org",
    url: LINKS.disboard,
    desc: "Vote on Disboard to increase our ranking and attract new members. Every vote helps the community grow faster.",
  },
];

const VotePage = () => (
  <main>
    <Helmet>
  <title>
    Vote for Born2Flirt – Support the Best Indian Discord Server 🚀
  </title>

  <meta
    name="description"
    content="Vote for Born2Flirt on Top.gg, Disboard, and more. Support one of the most active Indian Discord servers, help us grow, and unlock rewards by voting daily."
  />

  <link rel="canonical" href="https://born2flirt.in/vote" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Vote for Born2Flirt – Best Indian Discord Server"
  />
  <meta
    property="og:description"
    content="Support our Indian Discord community by voting daily on Top.gg and other platforms. Help us grow and unlock rewards."
  />
  <meta property="og:url" content="https://born2flirt.in/vote" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Vote for Born2Flirt – Support & Earn Rewards"
  />
  <meta
    name="twitter:description"
    content="Vote daily for Born2Flirt on Discord server listing sites and help grow one of the most active Indian Discord communities."
  />

  {/* Keywords (optional) */}
  <meta
    name="keywords"
    content="vote Discord server India, vote Born2Flirt, best Indian Discord server vote, Top.gg vote India, Discord server voting"
  />

  {/* Schema: WebPage */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Vote for Born2Flirt",
      url: "https://born2flirt.in/vote",
      description:
        "Vote for Born2Flirt on Discord server listing platforms like Top.gg and Disboard to support one of the most active Indian Discord servers.",
    })}
  </script>

  {/* Schema: Organization */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Born2Flirt",
      url: "https://born2flirt.in",
      sameAs: [
        "https://discord.gg/YOUR-LINK"
      ],
      description:
        "Born2Flirt is one of the most active Indian Discord servers with chat, voice channels, events, and a growing community.",
    })}
  </script>

  {/* Schema: FAQ (IMPORTANT) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should I vote for Born2Flirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Voting helps Born2Flirt rank higher on Discord server listing sites and attract more active members to the community.",
          },
        },
        {
          "@type": "Question",
          name: "How often can I vote?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most platforms allow voting every 12 to 24 hours. Voting daily helps the server grow faster.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I vote for Born2Flirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can vote on Top.gg, Discord.me, Discords.com, and Disboard to support the server.",
          },
        },
      ],
    })}
  </script>
</Helmet>
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.1),transparent_60%)]" />
      <div className="container relative max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          Vote for the <span className="gradient-text">Best Indian Discord Server 🚀</span>
        </h1>
        <p className="text-justify text-muted-foreground mb-6 max-w-3xl mx-auto">
          Help Born2Flirt rank higher on top Discord server listing sites like Top.gg and Disboard. 
Your vote helps us reach more people and grow one of the most active <strong>Indian Discord servers</strong>.
        </p>
        <ul className="text-justify text-muted-foreground mb-6 max-w-3xl mx-auto">
          <li>💜 Takes less than 10 seconds  </li>
          <li>🔥 Vote daily to support the community </li>
          <li>🎁 More votes = more events & giveaways  </li>
        </ul>
        <div className="text-center mb-14">
          <Heart className="text-accent inline-block animate-float" size={32} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {VOTE_SITES.map((site) => (
            <div
              key={site.name}
              className="glow-card rounded-xl p-6 border border-border text-center"
            >
              <ThumbsUp className="text-primary mx-auto mb-3" size={28} />
              <h2 className="font-display text-lg font-semibold mb-2">
                {site.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{site.desc}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg px-6 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                Vote Now <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
        <p className="text-justify text-muted-foreground mt-10 mb-6 max-w-xl mx-auto">
          🔥 Thousands of users discover our server through votes every week
        </p>
        <p className="text-justify text-muted-foreground mt-10 mb-6 max-w-xl mx-auto">
         By voting regularly, you help Born2Flirt grow and reach more users across India. 
The more we grow, the more events, giveaways, and active members we can bring to the community.
        </p>
        <div className="mt-14 text-center">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Join the Community Now 🚀 <ExternalLink size={18} />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more{" "}
            <Link to="/about" className="text-primary hover:underline">
              about us
            </Link>{" "}
            or check our{" "}
            <Link to="/events" className="text-primary hover:underline">
              events
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <div className="space-y-6">
          {[
  {
    q: "Why should I vote for Born2Flirt?",
    a: "Voting helps Born2Flirt rank higher on Discord server listing sites, making it easier for new users to discover our community. More votes mean more active members, more events, and a better overall experience.",
  },
  {
    q: "How often can I vote for Born2Flirt?",
    a: "Most platforms allow you to vote every 12 to 24 hours. Voting daily helps keep the server ranking high and growing consistently.",
  },
  {
    q: "Where can I vote for Born2Flirt Discord server?",
    a: "You can vote on popular Discord server listing platforms like Top.gg, Discord.me, Discords.com, and Disboard to support one of the most active Indian Discord servers.",
  },
  {
    q: "Does voting cost anything?",
    a: "No, voting is completely free and takes less than 10 seconds. It’s the easiest way to support the community.",
  },
  {
    q: "What happens after I vote?",
    a: "After voting, you help increase the server’s visibility and attract new members. In some cases, you may also get rewards or recognition within the community.",
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

export default VotePage;
