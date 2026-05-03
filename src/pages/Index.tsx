import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main>
      <Helmet>
  <title>
    🔥 Best Indian Discord Server (20K+ Members) – Chat, VC & Events | Born2Flirt
  </title>

  <meta
    name="description"
    content="Join Born2Flirt – India’s most active Discord server with 20,000+ members. Chat, voice calls (VC), gaming, dating & daily events. Start chatting now!"
  />

  <meta
    name="keywords"
    content="best indian discord server, indian discord server, discord server india, active indian discord server, indian vc server, indian chat server, born2flirt discord, join discord server india"
  />

  <link rel="canonical" href="https://born2flirt.in/" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="🔥 Join India’s Most Active Discord Server – 20K+ Members"
  />
  <meta
    property="og:description"
    content="Chat, voice calls, gaming & events. Join Born2Flirt – India's fastest growing Discord community."
  />
  <meta property="og:url" content="https://born2flirt.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://born2flirt.in/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Indian Discord Server – Born2Flirt"
  />
  <meta
    name="twitter:description"
    content="Join 20K+ members in India’s most active Discord server."
  />
  <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />

  <meta name="robots" content="index, follow" />
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
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">
            Start building your amazing project here!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
