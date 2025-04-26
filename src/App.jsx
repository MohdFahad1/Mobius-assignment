import Navbar from "./components/common/Navbar";
import About from "./components/Home/About";
import Hero from "./components/Home/Hero";
import Testimonials from "./components/Home/Testimonials";
import Work from "./components/Home/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Testimonials />
    </>
  );
}

export default App;
