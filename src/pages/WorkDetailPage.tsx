import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { projects } from './WorkPage';

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-neutral-800">
    <span className="text-neutral-500 text-xs uppercase tracking-widest font-medium w-44 shrink-0">
      {label}
    </span>
    <span className="text-white text-sm font-medium">{value}</span>
  </div>
);

const WorkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <PageWrapper>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
          <Link to="/work" className="text-neutral-400 hover:text-white transition-colors underline">
            ← Back to Work
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors mb-10 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Work
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.title}
        </motion.h1>

        {/* Video Player */}
        <motion.div
          className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-10 bg-black"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* Project Credits */}
        <motion.div
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold mb-4">
            Project Credits
          </h2>

          {project.associateProducer && (
            <InfoRow label="Associate Producer" value={project.associateProducer} />
          )}
          {project.productionHouse && (
            <InfoRow label="Production House" value={project.productionHouse} />
          )}
          {project.director && (
            <InfoRow label="Director" value={project.director} />
          )}
          {project.producer && (
            <InfoRow label="Producer" value={project.producer} />
          )}
          {project.dop && (
            <InfoRow label="DOP" value={project.dop} />
          )}
        </motion.div>

        {/* Watch on YouTube link */}
        <motion.div
          className="mt-6 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <a
            href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-red-500 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Watch on YouTube
          </a>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default WorkDetailPage;
