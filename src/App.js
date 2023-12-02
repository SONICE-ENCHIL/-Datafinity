import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import PopularCourses from './components/PopularCourses';
import Cards from './components/Pricing';
import Testimonials from './components/Testimonials';
import Questions from './components/Questions';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import HeroFeatures from './components/HeroFeatures';


function App() {
  return (
    <div className=' font-serif mx-auto max-w-[1550px]'>
      <Navbar />
      <Hero />
      <HeroFeatures />
      <About />
      <Cards />
      {/* <Testimonials /> */}
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
