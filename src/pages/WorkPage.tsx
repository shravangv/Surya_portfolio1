import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

export const projects = [
  // ── Producer (ids 1–6) ──────────────────────────────────────────────────────
  {
    id: 1,
    role: 'producer' as const,
    title: 'Xiaomi 11 Lite NE 5G | Product Video',
    youtubeId: 'TwY80wUW9Ho',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Rajaram Rajendran',
  },
  {
    id: 2,
    role: 'producer' as const,
    title: 'OnePlus Nord CE 3 | Launch Film',
    youtubeId: 'dQw4w9WgXcQ',
    associateProducer: 'Priya Nair',
    productionHouse: 'Frame & Story',
    director: 'Vikram Menon',
    producer: 'Aisha Kapoor',
    dop: 'Sanjay Mehta',
  },
  {
    id: 3,
    role: 'producer' as const,
    title: 'Samsung Galaxy S24 | Brand Commercial',
    youtubeId: 'ysz5S6PUM-U',
    associateProducer: 'Rohan Das',
    productionHouse: 'Pixel Perfect Films',
    director: 'Meera Iyer',
    producer: 'Karthik Rao',
    dop: 'Deepak Nair',
  },
  {
    id: 4,
    role: 'producer' as const,
    title: 'Apple Watch Series 9 | Product Story',
    youtubeId: 'ZSM3w1v-A_Y',
    associateProducer: 'Kavya Reddy',
    productionHouse: 'Lens & Light',
    director: 'Arjun Singh',
    producer: 'Nandita Shah',
    dop: 'Rahul Verma',
  },
  {
    id: 5,
    role: 'producer' as const,
    title: 'Realme GT 5 Pro | Cinematic Reveal',
    youtubeId: 'M7lc1UVf-VE',
    associateProducer: 'Tanvi Joshi',
    productionHouse: 'Aperture Studios',
    director: 'Siddharth Kumar',
    producer: 'Lakshmi Patel',
    dop: 'Arun Krishnan',
  },
  {
    id: 6,
    role: 'producer' as const,
    title: 'Motorola Edge 50 | Lifestyle Campaign',
    youtubeId: 'oHg5SJYRHA0',
    associateProducer: 'Amit Tiwari',
    productionHouse: 'Cinecraft',
    director: 'Pooja Sharma',
    producer: 'Farhan Sheikh',
    dop: 'Suresh Nambiar',
  },
  // ── Associate Producer (ids 7–12) ───────────────────────────────────────────
  {
    id: 7,
    role: 'associate' as const,
    title: 'iQOO 12 | Performance Film',
    youtubeId: 'ZZ5LpwO-An4',
    associateProducer: 'Neha Gupta',
    productionHouse: 'Volt Films',
    director: 'Ravi Shankar',
    producer: 'Sneha Malhotra',
    dop: 'Pradeep Jha',
  },
  {
    id: 8,
    role: 'associate' as const,
    title: 'Nothing Phone 2a | Design Story',
    youtubeId: 'kJQP7kiw5Fk',
    associateProducer: 'Ishaan Roy',
    productionHouse: 'White Space Media',
    director: 'Anjali Desai',
    producer: 'Mihir Bhatt',
    dop: 'Vikash Pandey',
  },
  {
    id: 9,
    role: 'associate' as const,
    title: 'OPPO Reno 12 | Color Campaign',
    youtubeId: 'pRpeEdMmmQ0',
    associateProducer: 'Divya Pillai',
    productionHouse: 'Chromatic Pictures',
    director: 'Nikhil Saxena',
    producer: 'Reshma Iqbal',
    dop: 'Gopal Krishnamurthy',
  },
  {
    id: 10,
    role: 'associate' as const,
    title: 'Vivo V30 Pro | Portrait Series',
    youtubeId: 'CevxZvSJLk8',
    associateProducer: 'Akash Tomar',
    productionHouse: 'Luminos Studio',
    director: 'Shreya Banerjee',
    producer: 'Omkar Naik',
    dop: 'Tarun Bhattacharya',
  },
  {
    id: 11,
    role: 'associate' as const,
    title: 'Poco X6 Pro | Speed Film',
    youtubeId: 'hT_nvWreIhg',
    associateProducer: 'Vishal Chopra',
    productionHouse: 'Rush Hour Films',
    director: 'Ananya Ghosh',
    producer: 'Dev Khanna',
    dop: 'Manoj Srivastava',
  },
  {
    id: 12,
    role: 'associate' as const,
    title: 'Tecno Phantom X2 | Luxury Visual',
    youtubeId: 'UxxajLWwzqY',
    associateProducer: 'Ritika Bose',
    productionHouse: 'Gold Frame Productions',
    director: 'Kabir Mathur',
    producer: 'Seema Dixit',
    dop: 'Harish Balakrishnan',
  },
];

type Filter = 'all' | 'producer' | 'associate';

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Producer', value: 'producer' },
  { label: 'Associate Producer', value: 'associate' },
];

const WorkPage: React.FC = () => {
  const [active, setActive] = useState<Filter>('all');

  const filtered = projects.filter(
    (p) => active === 'all' || p.role === active
  );

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">My Work</h1>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 border
                ${active === f.value
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-white'
                }`}
            >
              {f.label}
              {active === f.value && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <Link to={`/work/${project.id}`}>
                  <div className="relative overflow-hidden rounded-lg group cursor-pointer">

                    {/* YouTube Thumbnail */}
                    <div className="relative w-full aspect-video bg-black">
                      <img
                        src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                        }}
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-2xl"
                          initial={{ scale: 0.85, opacity: 0.7 }}
                          whileHover={{ scale: 1.1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <svg className="w-7 h-7 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Role badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full
                          ${project.role === 'producer'
                            ? 'bg-blue-600 text-white'
                            : 'bg-amber-500 text-black'
                          }`}>
                          {project.role === 'producer' ? 'Producer' : 'Assoc. Producer'}
                        </span>
                      </div>

                      {/* YouTube logo badge */}
                      <div className="absolute top-3 right-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg className="w-8 h-6" viewBox="0 0 90 20" fill="none">
                          <rect width="90" height="20" rx="4" fill="#FF0000" />
                          <path d="M37 5.5l5.5 4.5-5.5 4.5V5.5z" fill="white" />
                          <text x="46" y="14.5" fill="white" fontSize="9" fontFamily="Arial" fontWeight="bold">YouTube</text>
                        </svg>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-b-lg">
                      <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-xs mt-1">{project.productionHouse}</p>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default WorkPage;
