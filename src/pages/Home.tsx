import Header from "../components/header/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="relative container mx-auto">
        <h1 className="h1 text-center mt-12">Welcome to the Home Page</h1>
      </div>

    </>
  );
}

export default Home;