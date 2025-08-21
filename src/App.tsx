import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

function App() {
  return (
    <>
      <Hero />

      {/* Marquee overlay with gradient and blur */}
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-sm py-2">
        <Marquee />
      </div>
    </>
  );
}

export default App;
