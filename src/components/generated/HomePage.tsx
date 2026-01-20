import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Smartphone, Layout, Layers, ChevronRight, Menu, X, ArrowRight, Check, Globe, Zap, Shield, Star } from 'lucide-react';
const APP_LOGOS = [{
  name: 'Rappi',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/rappi.png'
}, {
  name: 'Mercado Libre',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/ml.png'
}, {
  name: 'Lemon',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/lemon.png'
}, {
  name: 'Cabify',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/cabify.png'
}, {
  name: 'PedidosYa',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/peya.png'
}, {
  name: 'Nequi',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/nequi.png'
}] as any[];

// 24 screens for infinite carousel
const SCREENS = [{
  id: 1,
  title: 'Onboarding Flow',
  app: 'Rappi',
  category: 'Food Delivery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/cabify/booking_reserving/calendar.jpg'
}, {
  id: 2,
  title: 'Checkout Experience',
  app: 'Mercado Libre',
  category: 'E-commerce',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/prex/creating_account/signup_walkthrough.jpg'
}, {
  id: 3,
  title: 'Wallet Overview',
  app: 'Nubank',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/lemon/investments/type_of_investment.jpg'
}, {
  id: 4,
  title: 'Car Search',
  app: 'Kavak',
  category: 'Automotive',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/uala/top_up/input_amount.jpg'
}, {
  id: 5,
  title: 'Identity Verification',
  app: 'Uala',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/mercado_libre/feedback/reviews_ratings_feedback.jpg'
}, {
  id: 6,
  title: 'Search Results',
  app: 'Cornershop',
  category: 'Grocery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/naranja_x/top_up/checkout_1.jpg'
}, {
  id: 7,
  title: 'Payment Methods',
  app: 'Rappi',
  category: 'Food Delivery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/iol/creating_account/account_setup_my_account_profile.jpg'
}, {
  id: 8,
  title: 'Product Details',
  app: 'Mercado Libre',
  category: 'E-commerce',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/buenbit/adding_funds/select_account_input_amount.jpg'
}, {
  id: 9,
  title: 'Transaction History',
  app: 'Nubank',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/modo/promotions/promotions_rewards.jpg'
}, {
  id: 10,
  title: 'Car Details',
  app: 'Kavak',
  category: 'Automotive',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/banco_galicia/top_up/acknowledgment_success.jpg'
}, {
  id: 11,
  title: 'Card Management',
  app: 'Uala',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/ripio/creating_account/biometrics.jpg'
}, {
  id: 12,
  title: 'Shopping Cart',
  app: 'Cornershop',
  category: 'Grocery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/eco_bici/unknown_flow/reviews_ratings_1.jpg'
}, {
  id: 13,
  title: 'Restaurant Menu',
  app: 'Rappi',
  category: 'Food Delivery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/lemon/swapping_cryptocoin/acknowledgement_success.jpg'
}, {
  id: 14,
  title: 'Order Tracking',
  app: 'Mercado Libre',
  category: 'E-commerce',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/n1u/creating_account/walkthrough_signup.jpg'
}, {
  id: 15,
  title: 'Credit Card',
  app: 'Nubank',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/mercado_libre/rating/promotions_rewards.jpg'
}, {
  id: 16,
  title: 'Financing Options',
  app: 'Kavak',
  category: 'Automotive',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/cabify/promotions/promotions_rewards_3.jpg'
}, {
  id: 17,
  title: 'Investment Portfolio',
  app: 'Uala',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/uala/bill_payments/confirmation.jpg'
}, {
  id: 18,
  title: 'Delivery Schedule',
  app: 'Cornershop',
  category: 'Grocery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/mercado_libre/notifications/notifications_empty_state.jpg'
}, {
  id: 19,
  title: 'Promo Codes',
  app: 'Rappi',
  category: 'Food Delivery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/rappi/purchasing_ordering/cancel_confirmation.jpg'
}, {
  id: 20,
  title: 'Wishlist',
  app: 'Mercado Libre',
  category: 'E-commerce',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/morfy/editing_profile/my_account_profile_savings_acknowledgement_success.jpg'
}, {
  id: 21,
  title: 'Bill Payments',
  app: 'Nubank',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/eco_bici/booking_reserving/walkthrough_1.jpg'
}, {
  id: 22,
  title: 'Test Drive Booking',
  app: 'Kavak',
  category: 'Automotive',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/buepp/creating_account/acknowledgement_success.jpg'
}, {
  id: 23,
  title: 'Referral Program',
  app: 'Uala',
  category: 'Fintech',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/nequi/request_card/walkthrough_2.jpg'
}, {
  id: 24,
  title: 'Recipe Suggestions',
  app: 'Cornershop',
  category: 'Grocery',
  image: 'https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/screen-captures/littio/creating_account/welcome_get_started_walkthrough.jpg'
}] as any[];
const TESTIMONIALS = [{
  name: 'Sofia Rodriguez',
  role: 'Senior Product Designer at Rappi',
  content: 'Capturando.la is my go-to for Latam-specific visual research. It saves me hours of manual screenshots.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  name: 'Diego Gomez',
  role: 'Head of Design at Kavak',
  content: 'Understanding how competitors solve UX challenges in the region is crucial. This benchmark is essential.',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  name: 'Elena Mendez',
  role: 'Product Manager at Nubank',
  content: 'The flows feature helps us optimize our conversion funnels by comparing with industry leaders.',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
}] as any[];

// Infinite Carousel Component
const InfiniteCarousel = () => {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Triple the screens for seamless infinite scroll
  const tripleScreens = [...SCREENS, ...SCREENS, ...SCREENS];
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev - 1);
    }, 30); // Smooth continuous scroll

    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching end of first set
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = 220; // Width + gap
      const resetPoint = -itemWidth * SCREENS.length;
      if (offset <= resetPoint) {
        setOffset(0);
      }
    }
  }, [offset]);
  return <div className="relative w-full overflow-hidden py-4">
      <div ref={carouselRef} className="flex gap-6" style={{
      transform: `translateX(${offset}px)`,
      transition: 'none'
    }}>
        {tripleScreens.map((screen, idx) => <div key={`${screen.id}-${idx}`} className="group relative flex flex-col gap-3 flex-shrink-0" style={{
        width: '200px'
      }}>
            <div className="aspect-[9/19] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl transition-all group-hover:shadow-2xl group-hover:scale-105 duration-300">
              <img src={screen.image} alt={screen.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col px-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{screen.app}</span>
              <span className="text-sm font-semibold text-slate-800 line-clamp-1">{screen.title}</span>
            </div>
          </div>)}
      </div>
    </div>;
};

// @component: HomePage
export const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // @return
  return <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-slate-200 relative">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">capturando.la</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-black transition-colors">
              Screens
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-black transition-colors">
              Flows
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-black transition-colors">
              Apps
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-black transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-black transition-colors">Log in</button>
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Join for Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Screens emphasis */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
              The visual library for <span className="text-slate-400">Latam's best apps.</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
              Benchmark UI patterns, user flows, and product trends from the most successful tech companies in Latin America.
            </motion.p>
          </div>
        </div>

        {/* Infinite Carousel Gallery - Full Width */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="relative mt-12">
          <InfiniteCarousel />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Designed for product makers in Latin America.</h2>
              <p className="text-lg text-slate-500 mb-10">
                Stop spending hours manually documenting flows. Access thousands of real-world screens from the apps that define the Latam tech ecosystem.
              </p>

              <div className="space-y-6">
                {[{
                icon: <Smartphone className="w-5 h-5" />,
                title: 'Real Mobile Captures',
                desc: 'No mockups. Real screenshots from production apps across the region.'
              }, {
                icon: <Layers className="w-5 h-5" />,
                title: 'End-to-End Flows',
                desc: 'See how users move from registration to checkout and beyond.'
              }, {
                icon: <Globe className="w-5 h-5" />,
                title: 'Localized UI Patterns',
                desc: 'Understand unique Latam design choices for payments and logistics.'
              }].map((item, idx) => <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-black">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <video src="https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/video_capturando_v3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Features: Copy/Paste & Collections */}
      <section className="py-24 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supercharge your workflow.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Powerful features designed to accelerate your design process and keep your inspiration organized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Copy & Paste Feature */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0
          }} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all hover:shadow-xl">
              {/* Image Placeholder - Recommended size: 800x600px or 1200x900px (4:3 ratio) */}
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Image: 800x600px recommended
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Copy & paste anywhere
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Instantly copy any screen to your clipboard and paste it directly into Figma, Sketch, or any design tool. No downloads, no friction—just seamless workflow integration.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Collections Feature */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.15
          }} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all hover:shadow-xl">
              {/* Image Placeholder - Recommended size: 800x600px or 1200x900px (4:3 ratio) */}
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Image: 800x600px recommended
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Save to collections
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Create custom collections to organize your favorite screens and flows. Build mood boards, competitive analyses, and reference libraries tailored to your projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with 4 centered stats */}
      <section className="py-32 px-6 bg-white relative z-10 overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 opacity-100 pointer-events-none" initial={{
        scale: 1
      }} whileInView={{
        scale: 1.05
      }} transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse"
      }} style={{
        backgroundImage: 'url(https://lwqlelyelisgtbyuuznp.supabase.co/storage/v1/object/public/Assets%20Web/background_home_capturando_v2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {/* Stat 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0
          }} className="text-center">
              <h3 className="text-6xl md:text-7xl font-bold text-slate-900 mb-2">120</h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Flujos</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-center">
              <h3 className="text-6xl md:text-7xl font-bold text-slate-900 mb-2">1,786</h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Componentes</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-center">
              <h3 className="text-6xl md:text-7xl font-bold text-slate-900 mb-2">60</h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Apps</p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-center">
              <h3 className="text-6xl md:text-7xl font-bold text-slate-900 mb-2">1,202</h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Pantallas</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing.</h2>
            <p className="text-slate-500">Choose the plan that fits your research needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">Free</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-slate-400">/mo</span>
                </div>
                <p className="text-sm text-slate-500 mt-4">Perfect for individual exploring patterns.</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {['Limited weekly screens', 'Standard quality', 'Search basics', 'Community access'].map(feat => <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-400" />
                    {feat}
                  </li>)}
              </ul>

              <button className="w-full py-4 rounded-2xl border-2 border-slate-100 font-bold hover:bg-slate-50 transition-colors">
                Start for free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden flex flex-col group">
              <div className="absolute top-4 right-4 bg-white/10 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Recommended
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">Premium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$5</span>
                  <span className="text-slate-400">/mo</span>
                </div>
                <p className="text-sm text-slate-300 mt-4">Full access for professional designers.</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {['Unlimited screen access', 'High-resolution downloads', 'Full user flow analysis', 'Early access to new apps', 'Premium search filters'].map(feat => <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    {feat}
                  </li>)}
              </ul>

              <button className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-slate-100 transition-colors shadow-lg">
                Get full access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-y border-slate-100 bg-white overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
            Trusted by designers at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500">
            {APP_LOGOS.map(logo => <div key={logo.name} className="flex items-center justify-center">
                <img src={logo.image} alt={logo.name} className="h-16 md:h-20 w-auto object-contain" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Built for the Latam design community.</h2>
            <p className="text-slate-400 text-lg">We help thousands of product teams build better experiences by learning from the best.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                <p className="text-lg leading-relaxed mb-8 italic text-slate-300">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45" />
                </div>
                <span className="text-xl font-bold tracking-tight">capturando.la</span>
              </div>
              <p className="text-slate-500 max-w-xs leading-relaxed">
                The most comprehensive visual database of mobile applications in Latin America.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Product</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    Screens Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    User Flows
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    UI Patterns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Company</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Submit App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
            <p className="text-slate-400 text-sm">© 2024 Capturando.la. Made for Latam.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-black transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-black transition-colors">
                <Zap className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-black transition-colors">
                <Shield className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};