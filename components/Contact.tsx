import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div id="contact" className="py-24 relative overflow-hidden" 
      style={{ background: 'var(--bg-primary)' }}>
      {/* Background Accent */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--accent-primary) 0%, transparent 60%)'
        }}
      />
      
      <div className="container-progressive relative z-10 px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-black text-accent-primary">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter mb-8">
            Contact
          </h2>
          
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12">
            You can reach me for collaboration, cybersecurity discussions, or any queries related to my research.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:yourmail@gmail.com"
              className="group flex items-center gap-4 px-8 py-4 rounded-2xl border transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'var(--bg-card)', 
                borderColor: 'var(--border-color)' 
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-white">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-1">Email Protocol</span>
                <span className="block font-orbitron font-bold text-text-primary uppercase">yourmail@gmail.com</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
