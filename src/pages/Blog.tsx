import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { POSTS } from "@/lib/post";


const BlogIndex = () => (
  <main>
    <Helmet>
  <title>
    Indian Discord Servers Blog (2026) – Guides, Tips & Best Communities 🇮🇳
  </title>

  <meta
    name="description"
    content="Explore the best blogs about Indian Discord servers, active communities, voice chat (VC), events, and tips to find and grow in Discord servers in India."
  />

  <link rel="canonical" href="https://born2flirt.in/blog" />

  {/* Keywords (optional) */}
  <meta
    name="keywords"
    content="Indian Discord servers blog, Discord India guides, active Discord servers India, Discord communities India, voice chat Discord India"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Indian Discord Servers Blog – Guides & Community Tips"
  />
  <meta
    property="og:description"
    content="Discover blogs about Indian Discord servers, active communities, voice chat, events, and growth tips."
  />
  <meta property="og:url" content="https://born2flirt.in/blog" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Indian Discord Servers Blog (2026)"
  />
  <meta
    name="twitter:description"
    content="Read blogs about Discord servers in India, active communities, voice chat, and growth strategies."
  />

  {/* 🧠 Schema: Blog */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Indian Discord Servers Blog",
      url: "https://born2flirt.in/blog",
      description:
        "Blog covering Indian Discord servers, communities, voice chat, events, and guides.",
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

  {/* 🧠 Schema: ItemList (blog list) */}
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
    </main>
  );
};
function Blog() {
  return <BlogIndex />;
}

export default Blog;

export { BlogIndex, BlogPost, POSTS };
