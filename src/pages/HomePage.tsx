import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { projects } from './WorkPage';

// Pick first 3 producer projects as featured
const featuredProjects = projects.filter((p) => p.role === 'producer').slice(0, 3);

const brands = [
  'Big Basket',
  'Britannia',
  'Flipkart',
  'Xiaomi',
  'First Club',
  'Razorpay',
  'Kingfisher',
  'Panasonic',
  'iD',
  'Boat',
  'Farmley',
];

// Duplicate for seamless infinite scroll
const marqueeItems = [...brands, ...brands];

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="https://placehold.co/1920x1080/000000/FFFFFF/png?text=Loading..."
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4"
          >
            Hi, I'm Surya!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl max-w-3xl"
          >
            Ideas need sharp execution. That's where I come in.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <ArrowDown size={48} className="text-white" />
        </motion.div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

            {/* Photo — left */}
            <motion.div
              className="w-full md:w-5/12 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-800">
                {/* Replace the src below with your actual photo */}
                <img
                  src="https://placehold.co/600x750/1a1a1a/555555/png?text=Surya+Kumar"
                  alt="Surya Kumar"
                  className="w-full h-full object-cover"
                />
                {/* Subtle accent border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
              </div>
            </motion.div>

            {/* Text — right */}
            <motion.div
              className="w-full md:w-7/12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                About Me
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                The web behind<br />the scenes.
              </h2>
              <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                <p>
                  Based in Bangalore with 6 years of production experience, I help directors,
                  brands and agencies translate big ideas into stunning visual execution. Think
                  of me as the person building the web behind the scenes — connecting the right
                  crew and talent to bring a project to life.
                </p>
                <p>
                  My childhood love for visual media naturally evolved into a career spent
                  steering complex productions from concept to final cut. While I'm rooted in
                  Bangalore, my work takes me across the country, having successfully produced
                  in Chennai, Mumbai and Delhi.
                </p>
                <p>
                  Over the years I've had the opportunity to work with brands such as Britannia,
                  Xiaomi, Flipkart, BigBasket, and many others — managing productions from
                  concept to delivery. I enjoy the challenge of turning ambitious creative
                  visions into seamless executions.
                </p>
                <p className="text-white font-medium">
                  Got a script? Let's make it happen!
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Brand Marquee ── */}
      <section className="py-14 bg-neutral-950 border-y border-neutral-800 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-widest text-neutral-500 mb-8 font-semibold">
          Brands I've worked with
        </p>
        <div className="relative">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-neutral-950 to-transparent" />

          <div className="flex marquee-track">
            {marqueeItems.map((brand, i) => (
              <span
                key={i}
                className="flex-shrink-0 mx-10 text-neutral-400 text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap select-none hover:text-white transition-colors duration-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 28s linear infinite;
            width: max-content;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Link to={`/work/${project.id}`} key={project.id}>
                <motion.div
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-bold text-base leading-snug">{project.title}</h3>
                      <p className="text-neutral-300 text-sm mt-1">{project.director ? `Dir. ${project.director}` : ''}</p>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-b-lg">
                    <h3 className="text-white font-semibold text-sm leading-snug line-clamp-1">{project.title}</h3>
                    <p className="text-neutral-400 text-xs mt-1">{project.productionHouse || 'Producer'}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-neutral-200 transition-colors text-base"
              >
                View All Work
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HomePage;
