import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import PopularCourses from './components/PopularCourses';
import Cards from './components/WatchCourses';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
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
      {/* <Partners /> */}
      {/* <PopularCourses /> */}
      <Cards />
      <Testimonials />
      <Subscribe />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
