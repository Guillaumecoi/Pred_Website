import Header from "../components/header/Header";
import Hero from "../components/Hero";

import { homecontent } from "../constants/index";

function Home() {
  return (
    <>
      <Header />
      <Hero hero={homecontent.hero} />
    </>
  );
}

export default Home;