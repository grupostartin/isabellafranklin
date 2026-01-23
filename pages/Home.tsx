import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TargetAudience from '../components/TargetAudience';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Remove the 'loading' class from body once splash is done
        if (!showSplash) {
            document.body.classList.remove('loading');
        }
    }, [showSplash]);

    return (
        <>
            <AnimatePresence>
                {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            </AnimatePresence>

            {!showSplash && (
                <main className="min-h-screen flex flex-col overflow-x-hidden">
                    <Navbar />
                    <Hero />
                    <About />
                    <TargetAudience />
                    <Testimonials />
                    <Services />
                    <Footer />
                </main>
            )}
        </>
    );
};

export default Home;
