import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>

      <div className="pt-[4.75]">
        <Button className="mt-10">
          Click me
        </Button>
      </div>

      <ButtonGradient />
    </>
  );
}

export default Home;