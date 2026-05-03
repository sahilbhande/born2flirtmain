import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { POSTS } from "@/lib/post";
import FloatingLiveButton from "@/components/FloatingLiveButton";


const BlogIndex = () => (
  <main>
    <Helmet>
  {/* Primary SEO */}
  <title>
    🔥 Best Indian Discord Servers (2026) + Guides & Growth Tips | Blog
  </title>

  <meta
    name="description"
    content="Discover the best Indian Discord servers, active communities, and growth tips. Learn how to find, join, and grow in Discord servers in India with guides, VC tips & events."
  />

  <link rel="canonical" href="https://born2flirt.in/blog" />

  {/* Keywords */}
  <meta
    name="keywords"
    content="best indian discord servers, indian discord servers list, discord servers india, active discord servers india, discord server guides india, how to grow discord server india, indian discord community blog"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="🔥 Best Indian Discord Servers + Guides & Tips (2026)"
  />
  <meta
    property="og:description"
    content="Explore top Indian Discord servers, active communities, VC tips, and growth strategies."
  />
  <meta property="og:url" content="https://born2flirt.in/blog" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://born2flirt.in/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Indian Discord Servers Blog (2026)"
  />
  <meta
    name="twitter:description"
    content="Find top Discord servers in India, guides, VC tips & growth strategies."
  />
  <meta name="twitter:image" content="https://born2flirt.in/og-image.png" />

  <meta name="robots" content="index, follow" />

  {/* Schema: Blog */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Indian Discord Servers Blog",
      url: "https://born2flirt.in/blog",
      description:
        "Guides, lists, and tips about Indian Discord servers, communities, voice chat, and growth.",
      publisher: {
        "@type": "Organization",
        name: "Born2Flirt",
        logo: {
          "@type": "ImageObject",
          url: "https://born2flirt.in/logo.png",
        },
      },
    })}
  </script>

  {/* Schema: ItemList */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Indian Discord Blog Posts",
      itemListElement: POSTS.slice(0, 5).map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `https://born2flirt.in/blog/${post.slug}`,
      })),
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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          Indian Discord Servers Blog –{" "}
          <span className="gradient-text">Tips, Communities & Guides</span>
        </h1>
        <p className="text-center text-muted-foreground mb-14">
          Explore guides on <strong>Indian Discord servers</strong>, active
          communities, voice chat servers, and tips to find the best Discord
          servers in India.
        </p>

        <div className="space-y-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="glow-card rounded-xl p-6 border border-border block group"
            >
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <h2 className="font-display text-xl font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const BlogPost = ({ slug }: { slug: string }) => {
  const post = POSTS.find((p) => p.slug === slug);

  if (!post)
    return (
      <div className="container py-20 text-center text-muted-foreground">
        Post not found.
      </div>
    );

  return (
    <main>
      {/* ✅ SEO FOR EACH BLOG POST */}
      <Helmet>
  <title>{post.title} | Born2Flirt Blog</title>

  <meta name="description" content={post.excerpt} />

  <link
    rel="canonical"
    href={`https://born2flirt.in/blog/${post.slug}`}
  />

  {/* Keywords (optional boost) */}
  <meta
    name="keywords"
    content="Indian Discord servers, Discord India, active Discord servers, voice chat Discord India, Discord communities India"
  />

  {/* Open Graph */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta
    property="og:url"
    content={`https://born2flirt.in/blog/${post.slug}`}
  />
  <meta
    property="og:image"
    content="https://born2flirt.in/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.excerpt} />
  <meta
    name="twitter:image"
    content="https://born2flirt.in/og-image.png"
  />

  {/* 🧠 Article Schema (VERY IMPORTANT) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: "https://born2flirt.in/og-image.png",
      author: {
        "@type": "Organization",
        name: "Born2Flirt",
      },
      publisher: {
        "@type": "Organization",
        name: "Born2Flirt",
        logo: {
          "@type": "ImageObject",
          url: "https://born2flirt.in/logo.png",
        },
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://born2flirt.in/blog/${post.slug}`,
      },
    })}
  </script>
</Helmet>

      <article className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.1),transparent_60%)]" />

        <div className="container relative max-w-3xl">
          <Link
            to="/blog"
            className="text-sm text-primary hover:underline mb-6 inline-block"
          >
            ← Back to Blog
          </Link>

          <span className="block text-xs text-muted-foreground mb-2">
            {post.date}
          </span>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            {post.title}
          </h1>

          <div className="space-y-4">
            {post.content.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="font-display text-2xl font-semibold text-foreground pt-4"
                  >
                    {block.text}
                  </h2>
                );

              if (block.type === "h3")
                return (
                  <h3
                    key={i}
                    className="font-display text-xl font-semibold text-foreground pt-2"
                  >
                    {block.text}
                  </h3>
                );

              return (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* ✅ Internal linking (SEO boost) */}
          <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground">
            Explore:{" "}
            <Link
              to="/top-indian-discord-servers"
              className="text-primary hover:underline"
            >
              Top Indian Discord Servers
            </Link>{" "}
            ·{" "}
            <Link to="/features" className="text-primary hover:underline">
              Features
            </Link>{" "}
            ·{" "}
            <Link to="/about" className="text-primary hover:underline">
              About
            </Link>
          </div>
        </div>
      </article>
      <FloatingLiveButton />
    </main>
  );
};
function Blog() {
  return <BlogIndex />;
}

export default Blog;

export { BlogIndex, BlogPost, POSTS };
