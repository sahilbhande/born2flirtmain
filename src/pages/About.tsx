import { Link } from "react-router-dom";
import { LINKS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => (
  <main>
    <Helmet>
  {/* Primary SEO */}
  <title>
    About Born2Flirt – India’s Most Active Discord Community (20K+ Members)
  </title>

  <meta
    name="description"
    content="Learn about Born2Flirt, India’s fastest-growing Discord server with 20,000+ members. Discover our community, voice chats, events, and how we connect people across India."
  />

  <link rel="canonical" href="https://born2flirt.in/about" />

  {/* Keywords */}
  <meta
    name="keywords"
    content="about born2flirt, indian discord community, best indian discord server, discord server india, active discord server india, indian chat community, indian vc server, born2flirt community"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="About Born2Flirt – 20K+ Member Indian Discord Community"
  />
  <meta
    property="og:description"
    content="Discover one of India’s most active Discord communities. Chat, voice calls, events & more."
  />
  <meta property="og:url" content="https://born2flirt.in/about" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://born2flirt.in/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="About Born2Flirt – Indian Discord Community"
  />
  <meta
    name="twitter:description"
    content="20K+ members, active chats, voice calls & events. Learn about Born2Flirt."
  />
  <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />

  <meta name="robots" content="index, follow" />

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Born2Flirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Born2Flirt is one of the most active Indian Discord servers with over 20,000 members, offering chat, voice calls, and community events.",
          },
        },
        {
          "@type": "Question",
          name: "Is Born2Flirt active?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Born2Flirt is highly active with 24/7 chats, voice channels, and regular community events.",
          },
        },
        {
          "@type": "Question",
          name: "Can I join voice chat anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, voice chat channels are active throughout the day, allowing members to join anytime.",
          },
        },
        {
          "@type": "Question",
          name: "Is Born2Flirt free to join?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Born2Flirt is completely free to join and participate in chats, voice calls, and events.",
          },
        },
        {
          "@type": "Question",
          name: "Who can join Born2Flirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anyone looking to chat, make friends, or join an active Indian Discord community can join Born2Flirt.",
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
      <div className="container relative max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
          About Born2Flirt –{" "}
          <span className="gradient-text">
            {" "}
            Active Indian Discord Server for Chat, Voice & Dating
          </span>
        </h1>
        <div className="text-muted-foreground leading-relaxed">
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Our Community Culture
          </h2>
          <p className="mb-6">
            Born2Flirt is an active Indian Discord server for chatting, voice
            calls, and making friends online. Designed for users across India,
            it offers real-time conversations, engaging voice chats, and a
            welcoming community.
          </p>
          <p className="mb-6">
            Whether you're looking for late-night voice chats, meaningful
            conversations, or fun community events, Born2Flirt offers one of the
            most engaging Discord experiences in India.
          </p>
          <p className="mb-6">
            With thousands of active members and growing daily, Born2Flirt is
            becoming one of the most popular Discord servers in India.
          </p>

          <h2 className=" mb-6 font-display text-2xl font-semibold text-foreground">
            What Makes Born2Flirt Different?
          </h2>
          <p className="mb-3">
            Unlike typical Discord servers, Born2Flirt focuses on real
            interaction, active voice chats, and strong community engagement.
          </p>
          <ul className="mb-6">
            <li>Highly active Indian audience</li>
            <li>24/7 voice chat activity</li>
            <li>Friendly and welcoming environment</li>
            <li>Fast-growing community</li>
          </ul>

          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Active Voice Chats & Real Conversations
          </h2>
          <p className="mb-6">
            Born2Flirt is known for its highly active voice channels, making it
            one of the best Discord servers in India for voice interaction.
          </p>
          <p className="mb-3">At any time, you can:</p>
          <ul className="mb-6">
            <li>Join live conversations</li>
            <li>Meet new people instantly</li>
            <li>Participate in group discussions</li>
            <li>Enjoy late-night chill sessions</li>
          </ul>

          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Safe & Moderated Community
          </h2>
          <p className="mb-6">
            We maintain a safe, respectful, and well-moderated environment.
          </p>
          <p className="mb-3">Our moderation system includes:</p>
          <ul className="mb-3">
            <li>Active moderators available 24/7</li>
            <li>Strict anti-spam and anti-toxic rules</li>
            <li>Verified and secure community structure</li>
          </ul>
          <p className="mb-6">
            This ensures users feel comfortable while interacting and building
            connections.
          </p>
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Events, Games & Giveaways
          </h2>
          <p className="mb-3">Born2Flirt regularly hosts:</p>
          <ul className="mb-3">
            <li>Gaming nights</li>
            <li>Nitro giveaways</li>
            <li>Music sessions</li>
            <li>Community challenges</li>
          </ul>
          <p className="mb-6">
            These activities keep members engaged and improve retention—one of
            the key reasons our server is growing rapidly.
          </p>
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Why People Join Born2Flirt
          </h2>
          <p className="mb-3">
            Thousands of users join Born2Flirt because it is:
          </p>
          <ul className="mb-6">
            <li>One of the best Indian Discord servers for making friends</li>
            <li>A hub for online dating & social interaction in India</li>
            <li>A place for fun, chill vibes, and real connections</li>
          </ul>
          <h2 className="mb-3 font-display text-2xl font-semibold text-foreground">
            Who Should Join Born2Flirt?
          </h2>
          <ul className="mb-6">
            <li>People looking to make new friends online</li>
            <li>Users who enjoy voice chat and live conversations</li>
            <li>Those interested in Indian dating Discord servers</li>
            <li>Gamers and casual social users</li>
            <li>Anyone looking for an active Discord community in India</li>
          </ul>
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
            Join the Best Indian Discord Server Today
          </h2>
          <p className="mb-3">
            If you're looking for an active, friendly, and engaging Discord
            server, Born2Flirt is the perfect place.
          </p>
          <p>
            Join now and become part of one of India’s fastest-growing
            communities.
          </p>
          <a
            href="https://discord.com/invite/b2f"
            className="text-purple-400 underline ml-1"
          >
            <p>[Join Born2Flirt]</p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Join now and become part of one of India’s most active Discord
            communities. <ExternalLink size={18} />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Explore our{" "}
            <Link to="/features" className="text-primary hover:underline">
              features
            </Link>
            or check out why we are one of the{" "}
            <Link
              to="/top-indian-discord-servers"
              className="text-primary hover:underline"
            >
              top Indian Discord servers
            </Link>
            .
          </p>
        </div>
      </div>
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the best Indian Discord server?",
                a: "Born2Flirt is one of the most active and fast-growing Discord servers in India.",
              },
              {
                q: "Is Born2Flirt active?",
                a: "Yes, the server has active chats and voice channels 24/7.",
              },
              {
                q: "Can I join voice chat anytime?",
                a: "Yes, voice chats are active throughout the day.",
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
    </section>
  </main>
);

export default AboutPage;
