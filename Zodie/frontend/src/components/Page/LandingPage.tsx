import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load components for better performance
const HeroSection = lazy(() => import('@/components/blocks/hero-section-2').then(mod => ({ default: mod.HeroSection }))); 0
const ZordieFeatures = lazy(() => import('@/components/ui/ZordieFeatures'));
const ZordieFeatures1 = lazy(() => import('@/components/ui/ZordieFeature1'));
const PrimeFeature = lazy(() => import('@/components/blocks/PrimeFeatures'));
const Flow = lazy(() => import('@/components/blocks/Flow'));
const HRAgentsDashboard = lazy(() => import('@/components/blocks/Hragents'));
const Productivity = lazy(() => import('@/components/blocks/Productivity'));
const AIBenefitsLanding = lazy(() => import('@/components/blocks/AiBenefits'));
const AnimatedTestimonials = lazy(() => import('@/components/blocks/Testo').then(mod => ({ default: mod.AnimatedTestimonialsWithParticles })));
const FaqDemo = lazy(() => import('@/demo/faqdemo').then(mod => ({ default: mod.FaqDemo })));
const FeatureBentoGrid = lazy(() => import('@/components/blocks/FeatureBentoGrid'));
const Footerdemo = lazy(() => import('@/demo/fs').then(mod => ({ default: mod.Footerdemo })));

// Loading component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
);

export const LandingPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen overflow-x-hidden"
        >
            {/* Modern gradient background */}
            <div className="fixed inset-0 bg-[radial-gradient(120%_120%_at_50%_100%,rgba(253,186,116,0.3)_0%,rgba(255,255,255,0.9)_85%)] z-0" />

            {/* Content container */}
            <div className="relative z-10">
                <Suspense fallback={<LoadingSpinner />}>
                    {/* Hero Section with full viewport height */}
                    <section className="min-h-screen">
                        <HeroSection />
                    </section>

                    {/* Features Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <ZordieFeatures />
                    </section>

                    {/* Additional Features */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <ZordieFeatures1 />
                    </section>

                    {/* Prime Features */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <PrimeFeature />
                    </section>

                    {/* Flow Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <Flow />
                    </section>

                    {/* HR Dashboard Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <HRAgentsDashboard />
                    </section>

                    {/* Productivity Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <Productivity />
                    </section>

                    {/* AI Benefits Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <AIBenefitsLanding />
                    </section>

                    {/* Testimonials Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <AnimatedTestimonials />
                    </section>

                    {/* FAQ Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <FaqDemo />
                    </section>

                    {/* Feature Grid Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <FeatureBentoGrid />
                    </section>

                    {/* Footer */}
                    <footer className="mt-16">
                        <Footerdemo />
                    </footer>
                </Suspense>
            </div>

            {/* Scroll to top button */}
            <ScrollToTopButton />
        </motion.div>
    );
};

// Scroll to top button component
const ScrollToTopButton = () => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </motion.button>
    );
};