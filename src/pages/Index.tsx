import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Born2Flirt – Indian Discord Server</title>
        <link rel="canonical" href="https://born2flirt.in/" />
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
