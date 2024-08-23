import Header from "../components/Layout/Header";
import Hero from "../components/Hero";
import Access from '../components/Access'
import Footer from "../components/Layout/Footer";
import FAQS from "../components/Layout/FAQS";

 const Home = () => {
    return (
     <main>
        <Header />
        <Hero />
        <Access />
        <FAQS />
        <Footer />
      </main>
    )
 }

 export default Home;