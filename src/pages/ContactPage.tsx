import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  // Array holding your dynamic contact pathways
  const contactMethods = [
    {
      name: 'Instagram',
      value: '@surya.kumar', // Replace with your handle
      href: 'https://instagram.com/your_handle', // Replace with your link
      icon: <Instagram className="text-pink-500" size={28} />,
    },
    {
      name: 'LinkedIn',
      value: 'Surya Kumar', 
      href: 'https://linkedin.com/in/your_profile', 
      icon: <Linkedin className="text-blue-500" size={28} />,
    },
    {
      name: 'Email',
      value: 'suryakumar.ramesh@gmail.com', 
      href: 'mailto:suryakumar.ramesh@gmail.com', 
      icon: <Mail className="text-accent-cyan" size={28} />,
    },
    {
      name: 'Phone',
      value: '+91 96118 15488', 
      href: 'tel:+919611815488', 
      icon: <Phone className="text-emerald-500" size={28} />,
    },
  ];

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-24 md:py-36 min-h-[85vh] flex flex-col justify-center">
        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white break-words"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's make magic
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Got a concept, a script, or a brand that needs sharp production execution? Reach out on any platform below.
          </motion.p>
        </div>

        {/* ── Grid Layout for Socials & Contact Info ── */}
        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== 'Email' && method.name !== 'Phone' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 w-full mr-2">
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 group-hover:border-neutral-700 transition-colors flex-shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-0.5">
                    {method.name}
                  </p>
                  <p className="text-white font-medium text-base md:text-lg group-hover:text-accent-cyan transition-colors truncate">
                    {method.value}
                  </p>
                </div>
              </div>
              
              <ArrowUpRight 
                size={20} 
                className="text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" 
              />
            </motion.a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;