import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import About from "./components/Home/About";
import Hero from "./components/Home/Hero";
import ResumeCoaching from "./components/Home/ResumeCoaching";
import Testimonials from "./components/Home/Testimonials";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import Work from "./components/Home/Work";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <Pricing />
      <ResumeCoaching />
      <Footer />
    </>
  );
}

export default App;
