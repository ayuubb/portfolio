import { useEffect } from 'react';
import About from './sections/About.jsx';
import Header from './sections/Header.jsx';
import Experience from './sections/Experience.jsx';
import Services from './sections/Services.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Testimonial from './sections/Testimonial.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Maintenance from './sections/Maintenance.jsx';

export default function app() {
    useEffect(() => {
        document.body.classList.add('scroll-smooth', 'bg-gray-900', 'polka');
    }, []);
    return (
        <div className={'bg-gray-900 polka min-h-screen font-display text-white'}>
            <Header />
            <main className={'container mx-auto relative'}>
                <Hero />
                <About />
                {/* <Maintenance /> */}
                <Experience />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
                <Nav />
            </main>
        </div>
    );
}
