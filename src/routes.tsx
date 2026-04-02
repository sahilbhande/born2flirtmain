import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import FeaturesPage from "@/pages/Features";
import TopServersPage from "@/pages/TopServers";
import EventsPage from "@/pages/Events";
import Blog, { BlogPost, POSTS } from "@/pages/Blog";
import VotePage from "@/pages/Vote";
import NotFound from "@/pages/NotFound";
import IndianDiscordServerPage from "@/pages/IndianDiscordServer";
/* generate static blog routes */
const blogRoutes = POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  element: <BlogPost slug={post.slug} />,
}));

export default [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/features", element: <FeaturesPage /> },
  { path: "/top-indian-discord-servers", element: <TopServersPage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/indian-discord-server", element: <IndianDiscordServerPage /> },
  /* blog index */
  { path: "/blog", element: <Blog /> },

  /* ✅ static blog pages */
  ...blogRoutes,

  { path: "/vote", element: <VotePage /> },
  { path: "*", element: <NotFound /> },
];