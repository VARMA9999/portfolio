import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Shield, Target, Cpu, Lock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="pt-24 pb-12 notranslate">
      <div className="container-progressive px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-text-primary">
            ABOUT THE <span className="text-accent-primary">OPERATIVE</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p className="font-medium text-text-primary">
                I am G. Manikanta Varma, a cybersecurity analyst specializing in web application security and vulnerability assessment.
              </p>
              <p>
                This website is dedicated to sharing in-depth cybersecurity research, including OWASP Top 10 vulnerabilities, real-world exploitation techniques, and secure coding practices.
              </p>
              <p>
                My goal is to educate developers, security professionals, and learners by providing practical and detailed security insights.
              </p>

              <div className="pt-8 border-t border-border-color mt-8">
                <h3 className="font-orbitron font-black text-xl text-accent-primary mb-4 uppercase italic tracking-tighter">What You Will Find Here</h3>
                <ul className="tactical-list space-y-2 text-sm font-medium">
                  <li>Technical security blogs</li>
                  <li>Vulnerability analysis (BOLA, IDOR, etc.)</li>
                  <li>Hands-on research and case studies</li>
                  <li>Security best practices</li>
                </ul>
              </div>

              {/* Resume Buttons */}
              <div className="pt-6 border-t border-border-color mt-2 flex flex-col sm:flex-row flex-wrap gap-3">
                {/* VIEW: Use /preview — works on all devices including mobile */}
                <a
                  href="https://drive.google.com/file/d/1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-orbitron font-black text-[10px] uppercase tracking-widest text-accent-primary border border-accent-primary/30 bg-accent-primary/5 hover:bg-accent-primary/10 hover:border-accent-primary/60 transition-all"
                  onClick={() => {
                    if ((window as any).gtag) (window as any).gtag('event', 'resume_view', { event_category: 'portfolio' });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  View Resume
                </a>
                {/* DOWNLOAD: Direct download without redirect */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-orbitron font-black text-[10px] uppercase tracking-widest text-black bg-accent-primary hover:opacity-90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  onClick={() => {
                    if ((window as any).gtag) (window as any).gtag('event', 'resume_download', { event_category: 'portfolio' });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>
            <div className="p-8 space-y-8 border border-border-color rounded-3xl"
              style={{ background: 'var(--bg-card)' }}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-xl mb-2 text-text-primary">Mission Statement</h4>
                  <p className="text-base text-text-muted/80 leading-relaxed">
                    To build a reliable knowledge platform for cybersecurity learning and awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Highlights - SEO Internal Linking */}
          <div className="mt-20 pt-20 border-t border-border-color">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-4">
                <span className="text-accent-primary font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">Operative Intelligence</span>
                <h2 className="text-3xl md:text-4xl font-orbitron font-black text-text-primary uppercase italic tracking-tighter">
                  RESEARCH <span className="text-accent-primary">HIGHLIGHTS</span>
                </h2>
              </div>
              <Link
                to="/blog"
                className="group flex items-center gap-3 text-text-muted hover:text-accent-primary transition-colors font-orbitron font-bold text-xs tracking-[0.3em] uppercase"
              >
                View Repository <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block p-8 rounded-3xl border border-border-color hover:border-accent-primary/20 transition-all duration-500"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-[9px] font-mono text-text-muted uppercase tracking-widest font-black">
                      <span className="flex items-center gap-1.5"><BookOpen size={10} className="text-accent-primary" /> {post.readingTime}</span>
                      <span>{post.publishDate}</span>
                    </div>
                    <h4 className="text-xl font-orbitron font-black text-text-primary group-hover:text-accent-primary transition-colors uppercase italic leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-sm text-text-muted line-clamp-2 font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
