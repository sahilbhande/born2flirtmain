import { Helmet } from "react-helmet-async";

export default function Terms() {
return (
<> <Helmet> <title>Terms of Service | Born2Flirt</title> <meta
       name="description"
       content="Terms of Service for Born2Flirt, its Discord community, website, bots, and related services."
     /> <link
       rel="canonical"
       href="https://born2flirt.in/terms"
     /> </Helmet>


  <div className="container mx-auto px-4 py-16 max-w-6xl">
    <h1 className="text-5xl font-bold mb-4">
      Terms of Service
    </h1>

    <p className="text-muted-foreground mb-10">
      Last Updated: June 2026
    </p>

    {/* Hero Section */}
    <div className="mb-12 p-8 rounded-2xl border border-border bg-card">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to Born2Flirt
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        Born2Flirt is one of India's largest Discord communities,
        providing social, gaming, voice chat, events, and community
        engagement experiences. These Terms govern the use of our
        website, Discord server, bots, live activity services, and
        related community features.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <div className="border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-2">
          🌸 Community First
        </h3>
        <p className="text-sm text-muted-foreground">
          Respect all members and contribute positively to the community.
        </p>
      </div>

      <div className="border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-2">
          🛡 Safe Environment
        </h3>
        <p className="text-sm text-muted-foreground">
          Harassment, abuse, discrimination, and harmful conduct are prohibited.
        </p>
      </div>

      <div className="border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-2">
          ⚡ Fair Usage
        </h3>
        <p className="text-sm text-muted-foreground">
          Community services, bots, and website features must not be abused.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-semibold mb-4">
      Acceptance of Terms
    </h2>

    <p className="mb-8">
      By accessing or using Born2Flirt, including its Discord server,
      website, bots, APIs, and related services, you agree to comply
      with these Terms of Service and all applicable platform policies.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Community Guidelines
    </h2>

    <ul className="list-disc pl-6 space-y-2 mb-8">
      <li>Respect other community members.</li>
      <li>Follow Discord's Terms of Service and Community Guidelines.</li>
      <li>Do not engage in harassment, abuse, hate speech, or harmful behavior.</li>
      <li>Do not spam, advertise without permission, or disrupt conversations.</li>
      <li>Do not attempt to exploit bots, APIs, or website services.</li>
      <li>Follow moderator and staff instructions when required.</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4">
      Age Requirements
    </h2>

    <p className="mb-8">
      Users must meet Discord's minimum age requirements and comply
      with all applicable local laws and platform policies.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Website & Bot Services
    </h2>

    <p className="mb-8">
      Born2Flirt may provide community activity dashboards, Discord
      integrations, event information, server statistics, live activity
      features, and other tools designed to improve the community
      experience. These services may be modified, improved, restricted,
      or discontinued at any time without notice.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      User Content
    </h2>

    <p className="mb-8">
      Users remain responsible for content they submit within the
      community. Public content from approved channels may appear
      within community features such as activity feeds, statistics,
      dashboards, or website integrations.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Account Responsibility
    </h2>

    <p className="mb-8">
      Users are responsible for their actions within the community.
      Attempts to impersonate others, evade moderation actions,
      abuse services, or disrupt community operations may result in
      restrictions, suspension, or removal.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Service Availability
    </h2>

    <p className="mb-8">
      While we strive to maintain reliable services, Born2Flirt does
      not guarantee uninterrupted access to the website, Discord server,
      bots, APIs, or associated features.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Termination
    </h2>

    <p className="mb-8">
      Born2Flirt reserves the right to suspend, restrict, or terminate
      access to community services when necessary to enforce these
      Terms, protect members, maintain security, or preserve community
      standards.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Limitation of Liability
    </h2>

    <p className="mb-8">
      Born2Flirt, its administrators, moderators, and service providers
      shall not be liable for damages arising from the use of community
      services, website features, third-party integrations, or user-generated
      content.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Changes to These Terms
    </h2>

    <p className="mb-8">
      We may update these Terms of Service periodically. Continued use
      of our services after updates constitutes acceptance of the revised Terms.
    </p>

    <h2 className="text-2xl font-semibold mb-4">
      Contact
    </h2>

    <p className="mb-6">
      Questions regarding these Terms of Service may be directed to the
      Born2Flirt staff team through our Discord community.
    </p>

    <div className="mt-8 p-8 rounded-2xl border border-border bg-card">
      <h3 className="text-xl font-semibold mb-3">
        Need Help?
      </h3>

      <p className="text-muted-foreground mb-5">
        For questions about these Terms, community policies, or website
        services, please contact the Born2Flirt staff team.
      </p>

      <a
        href="https://discord.gg/b2f"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
      >
        Join Born2Flirt
      </a>
    </div>
  </div>
</>


);
}
