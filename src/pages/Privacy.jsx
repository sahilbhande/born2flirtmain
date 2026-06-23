import { Helmet } from "react-helmet-async";

export default function Privacy() {
return (
<> <Helmet> <title>Privacy Policy | Born2Flirt</title> <meta
       name="description"
       content="Privacy Policy for Born2Flirt Discord community, website, and related services."
     /> <link
       rel="canonical"
       href="https://born2flirt.in/privacy"
     /> </Helmet>

  <div className="container mx-auto px-4 py-16 max-w-5xl">
    <h1 className="text-4xl font-bold mb-4">
      Privacy Policy
    </h1>

    <p className="text-muted-foreground mb-10">
      Last Updated: June 2026
    </p>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">
          🔒 Data Protection
        </h3>
        <p className="text-muted-foreground">
          We do not sell, rent, or share user data with third parties.
        </p>
      </div>

      <div className="border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">
          ⚡ Live Activity Features
        </h3>
        <p className="text-muted-foreground">
          Activity data is used only to power community features on Born2Flirt.
        </p>
      </div>

      <div className="border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">
          👥 Community Focused
        </h3>
        <p className="text-muted-foreground">
          We only process information necessary to operate our Discord community.
        </p>
      </div>

      <div className="border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">
          🛡 Security
        </h3>
        <p className="text-muted-foreground">
          Reasonable measures are used to protect data and maintain service security.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Overview
    </h2>

    <p className="mb-6">
      Born2Flirt operates a Discord community and website located at
      https://born2flirt.in. This Privacy Policy explains how information
      may be processed through our website, Discord server, community
      features, and associated bots.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Information We Process
    </h2>

    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>Public Discord usernames</li>
      <li>Public display names</li>
      <li>Public profile images and avatars</li>
      <li>Message content from approved public channels</li>
      <li>Server activity statistics</li>
      <li>Online member counts and presence information (when available)</li>
      <li>Website analytics and usage information</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      How We Use Information
    </h2>

    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>Display community activity on our website</li>
      <li>Provide live activity dashboards</li>
      <li>Show community engagement statistics</li>
      <li>Improve user experience and community features</li>
      <li>Monitor service reliability and performance</li>
      <li>Prevent abuse and maintain platform security</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Community Features
    </h2>

    <p className="mb-6">
      Born2Flirt provides community-focused features including live activity
      dashboards, Discord integrations, community statistics, event pages,
      server discovery tools, and engagement features designed to improve
      the overall community experience.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Information We Do Not Collect
    </h2>

    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>Discord passwords</li>
      <li>Private direct messages (DMs)</li>
      <li>Payment information</li>
      <li>Government-issued identification documents</li>
      <li>Sensitive personal information unrelated to community operation</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Data Sharing
    </h2>

    <p className="mb-6">
      Born2Flirt does not sell, rent, or share personal information with
      third parties for advertising, profiling, or marketing purposes.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Third-Party Services
    </h2>

    <p className="mb-6">
      Born2Flirt may utilize third-party services including Discord,
      analytics providers, hosting providers, and cloud infrastructure
      services. These services operate under their own privacy policies.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Data Retention
    </h2>

    <p className="mb-6">
      Activity information may be temporarily cached to provide live
      website features and improve service performance. Information is not
      retained longer than necessary for operational purposes.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      User Rights
    </h2>

    <p className="mb-6">
      Users may contact the Born2Flirt staff team regarding questions about
      information processed through our services. We will make reasonable
      efforts to address privacy-related concerns.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">
      Contact
    </h2>

    <p className="mb-6">
      If you have questions regarding this Privacy Policy or our community
      services, please contact us through the Born2Flirt Discord server.
    </p>

    <a
      href="https://discord.gg/b2f"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
    >
      Contact via Discord
    </a>
  </div>
</>

);
}
