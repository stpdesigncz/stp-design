import Navbar from './components/Navbar';
import Video from './components/Video';
import Hero from './components/Hero';
import Footer from './components/Footer';


const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16"> 
        <Video />
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;