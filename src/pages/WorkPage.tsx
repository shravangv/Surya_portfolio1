import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

export const projects = [
  // ── Producer (ids 1–14) ──────────────────────────────────────────────────────
  {
    id: 1,
    role: 'producer' as const,
    title: 'Tea Culture of the World x Fairtrade India',
    youtubeId: 'qaUln5EEcN4',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Nishanth Naidu',
  },
  {
    id: 2,
    role: 'producer' as const,
    title: "Making Avani's Gold",
    youtubeId: '6x2kO2MQ-sE',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Nishanth Naidu',
  },
  {
    id: 3,
    role: 'producer' as const,
    title: 'Queefisher | Corporate Film',
    youtubeId: 'ktDpHTT1S6Q',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Bharath Parashuram',
  },
  {
    id: 4,
    role: 'producer' as const,
    title: 'BFC x Jockey',
    youtubeId: '9Hrr3JhQD3k',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Rahul, Sravan and Team',
  },
  {
    id: 5,
    role: 'producer' as const,
    title: 'First Club | Trailer',
    youtubeId: '0o2YPlwWVns',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Vivian Ambrose',
  },
  {
    id: 6,
    role: 'producer' as const,
    title: "First Club | Founder's Tiffin Box",
    youtubeId: '2Abe-OXrxsY',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Terrence Mane',
  },
  {
    id: 7,
    role: 'producer' as const,
    title: 'ID | Squeeze and Fry Vada Batter 2.0',
    youtubeId: 'KnkXWgA7wXk',
    producer: 'Surya Kumar, Bushra Shariff',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Terrence Mane',
  },
  {
    id: 8,
    role: 'producer' as const,
    title: 'ID | Pour to Perfection Filter Coffee',
    youtubeId: 'r4R6CV_RxSI',
    producer: 'Surya Kumar, Bushra Shariff',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Terrence Mane',
  },
  {
    id: 9,
    role: 'producer' as const,
    title: 'Cleartrip | Travel Max Sale',
    youtubeId: 'Ji572PPvAXU',
    producer: 'Surya Kumar, Bushra Shariff',
    productionHouse: '',
    director: 'Shombuddha Majumdar',
    dop: '',
  },
  {
    id: 10,
    role: 'producer' as const,
    title: 'Murf.ai | An AI Voice Generator',
    youtubeId: 'ea4ppP78TDE',
    producer: 'Surya Kumar, Bushra Shariff',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Bharath Parashuram',
  },
  {
    id: 11,
    role: 'producer' as const,
    title: 'Jupiter | For Everything Money - CCTV',
    youtubeId: 'uDfDLcwAbcc',
    producer: 'Surya Kumar, Bushra Shariff',
    productionHouse: '',
    director: 'Shombuddha Majumdar',
    dop: 'Rahul Accot',
  },
  {
    id: 12,
    role: 'producer' as const,
    title: 'Jupiter | For Everything Money - Dream Guitar',
    youtubeId: '5ZMkSC-8lzQ',
    producer: 'Surya Kumar, Bushra Shariff',
    productionHouse: '',
    director: 'Shombuddha Majumdar',
    dop: 'Rahul Accot',
  },
  {
    id: 13,
    role: 'producer' as const,
    title: 'First Club | Pick Pack Deliver',
    youtubeId: 'KZtnNfOOX-A',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Omkar Garde, Sravan',
  },
  {
    id: 14,
    role: 'producer' as const,
    title: 'TMEIC | Corporate Film',
    youtubeId: 'zrTFqSeH1F4',
    producer: 'Surya Kumar',
    productionHouse: '',
    director: 'Johnny Ambrose',
    dop: 'Nishath Naidu, Maria Vivek',
  },
  // ── Associate Producer (ids 15–34) ──────────────────────────────────────────
  {
    id: 15,
    role: 'associate' as const,
    title: 'Xiaomi 11 Lite NE 5G | Product Video',
    youtubeId: 'TwY80wUW9Ho',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Rajaram Rajendran',
  },
  {
    id: 16,
    role: 'associate' as const,
    title: 'Redmi Earbuds 3 Pro | Sustenance Campaign',
    youtubeId: '_DTeoeWL4s8',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Bharath Parashuram',
  },
  {
    id: 17,
    role: 'associate' as const,
    title: 'Boat Immortal 1300 | Product Video',
    youtubeId: 'OtE1E5hihZ0',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Johnny Ambrose',
    producer: 'Bushra Shariff',
    dop: 'Harsha Gowda',
  },
  {
    id: 18,
    role: 'associate' as const,
    title: 'Diwali with Mi | Employee Video - 11',
    youtubeId: 'n_CrkwlTwxQ',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Rahul Accot',
  },
  {
    id: 19,
    role: 'associate' as const,
    title: 'Diwali with Mi | Employee Video - 12',
    youtubeId: 'ebibcHfVAq0',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Rahul Accot',
  },
  {
    id: 20,
    role: 'associate' as const,
    title: 'Farmley Brand Film | Featuring Rahul Dravid',
    youtubeId: 'YF2nmvLqRQI',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Udhay Thangavel',
  },
  {
    id: 21,
    role: 'associate' as const,
    title: 'Farmley | Rahul "Deewar" Dravid',
    youtubeId: '_sn6mwqhF_c',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Udhay Thangavel',
  },
  {
    id: 22,
    role: 'associate' as const,
    title: 'Jalebi | JOMO',
    youtubeId: '2yDtxO29wPg',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Niteesh Jangid',
  },
  {
    id: 23,
    role: 'associate' as const,
    title: 'Jalebi | Serotonin (1)',
    youtubeId: 'pw4-FL1i0mY',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Niteesh Jangid',
  },
  {
    id: 24,
    role: 'associate' as const,
    title: 'Jalebi | Serotonin (2)',
    youtubeId: '28l65tDWENE',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Niteesh Jangid',
  },
  {
    id: 25,
    role: 'associate' as const,
    title: 'mFine | World Heart Day Film',
    youtubeId: '4WaXQdlL0FY',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Momo Media',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Niteesh Jangid',
  },
  {
    id: 26,
    role: 'associate' as const,
    title: 'Big Basket x RCB | 10 Mins Andre Big Basket',
    youtubeId: 'rCKZnOVJA0Y',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Rahul Accot',
  },
  {
    id: 27,
    role: 'associate' as const,
    title: 'Big Basket x RCB | Game Day Essentials',
    youtubeId: 'FexOdcuJHrw',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Mukesh Jain',
  },
  {
    id: 28,
    role: 'associate' as const,
    title: 'Big Basket x RCB | Fastest Runs, Fastest Deliveries',
    youtubeId: 'p3Ha3fvjtRk',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Rahul Accot',
  },
  {
    id: 29,
    role: 'associate' as const,
    title: 'Flipkart | Big Billion Day Sale',
    youtubeId: 'aJRa_F9SotE',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Sparsh Hasija',
  },
  {
    id: 30,
    role: 'associate' as const,
    title: 'Flipkart x RD Sharma | 1',
    youtubeId: 'Dv-V6TLEFx0',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Sparsh Hasija',
  },
  {
    id: 31,
    role: 'associate' as const,
    title: 'Flipkart x RD Sharma | 2',
    youtubeId: 'mLdBt2aXt_A',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Sparsh Hasija',
  },
  {
    id: 32,
    role: 'associate' as const,
    title: 'Razorpay | Founder Series',
    youtubeId: 'G3Qous1BQ3A',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Shivang Monga',
    producer: 'Bushra Shariff',
    dop: 'Shaaz Rizvi',
  },
  {
    id: 33,
    role: 'associate' as const,
    title: 'Tata Tea Chakra Gold',
    youtubeId: 'XkMIze-4jvU',
    associateProducer: 'Surya Kumar',
    productionHouse: 'Bad Donkey Small Wall',
    director: 'Shiv Parameshwaran',
    producer: 'Bushra Shariff',
    dop: 'Dani Raymond',
  },
  {
    id: 34,
    role: 'associate' as const,
    title: 'Flipkart | Only Fans? 2',
    youtubeId: 'vIFqptnF9pM',
    associateProducer: 'Surya Kumar',
    productionHouse: '',
    director: 'Anant Sharma',
    producer: 'Bushra Shariff',
    dop: 'Arfan Abdulazeez',
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
