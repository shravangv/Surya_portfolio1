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
        {/* Main Title - Styled in Premium Akira Display */}
        <h1 className="text-3xl md:text-5xl font-black text-center mb-10 tracking-wider font-['Akira'] uppercase">
          My Work
        </h1>

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
              <span className="relative z-10">{f.label}</span>
              {active === f.value && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white z-0"
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
                  <div className="relative overflow-hidden rounded-xl bg-[#121212] border border-neutral-800/40 group cursor-pointer">

                    {/* Thumbnail Frame - Clean & Badge Free */}
                    <div className="relative w-full aspect-video bg-black rounded-t-xl overflow-hidden">
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

                      {/* Clean Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-14 h-14 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-2xl"
                          initial={{ scale: 0.85, opacity: 0.8 }}
                          whileHover={{ scale: 1.05, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <svg className="w-5 h-5 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Card Footer - Minimal Architecture matching image_8460a2.png */}
                    <div className="p-4 bg-[#121212] rounded-b-xl">
                      <div className="flex items-start gap-3">
                        
                        {/* Contained Interior Accent Line */}
                        <div 
                          className={`w-[2px] self-stretch rounded-full transition-colors duration-300
                            ${project.role === 'producer' 
                              ? 'bg-white' 
                              : 'bg-white'
                            }`}
                        />
                        
                        {/* Text Frame with Layout constraints for strict single-line truncation */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium text-sm truncate leading-snug font-sans">
                            {project.title}
                          </h3>
                          
                          {/* Metadata Row - Accent Tags Styled in Akira */}
                          <p className="text-[9px] text-neutral-400 mt-1 truncate flex items-center">
                            <span className="font-['Akira'] tracking-wide uppercase font-black">
                              {project.role === 'producer' ? 'PRODUCER' : 'ASSOCIATE PRODUCER'}
                            </span>
                            <span className="mx-2 text-neutral-600 font-sans select-none text-xs font-normal">·</span>
                          </p>
                        </div>

                      </div>
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