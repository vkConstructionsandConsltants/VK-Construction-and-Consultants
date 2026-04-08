
"use client";

import React, { useState } from 'react';
import { generateProjectDescription } from '@/ai/flows/generate-project-description-flow';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';

export default function AIWriter() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDetails: '',
    keywords: ''
  });
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateProjectDescription({
        projectName: formData.projectName,
        projectDetails: formData.projectDetails,
        keywords: formData.keywords.split(',').map(k => k.trim())
      });
      setResult(response.description);
    } catch (error) {
      console.error(error);
      alert('Failed to generate description. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-32 px-6 lg:px-12 bg-off-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Marketing Tools</h4>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-6">AI <span className="text-primary not-italic">Project</span> Writer</h1>
          <p className="text-muted-foreground font-medium">Generate compelling, SEO-friendly descriptions for our latest projects.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-sm border border-muted">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black">Project Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-off-white border border-muted p-4 focus:border-primary outline-none transition-all text-sm" 
                  placeholder="e.g. The Golden Plaza Mumbai"
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black">Key Details</label>
                <textarea 
                  required
                  rows={4} 
                  className="w-full bg-off-white border border-muted p-4 focus:border-primary outline-none transition-all text-sm" 
                  placeholder="e.g. Luxury commercial hub, 25 floors, glass facade, smart building systems..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black">SEO Keywords (comma separated)</label>
                <input 
                  type="text" 
                  className="w-full bg-off-white border border-muted p-4 focus:border-primary outline-none transition-all text-sm" 
                  placeholder="e.g. luxury office, Mumbai real estate, premium construction"
                  value={formData.keywords}
                  onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                />
              </div>
              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-3" size={16} /> Generate Content</>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-muted h-full flex flex-col">
              <div className="p-6 border-b border-muted flex justify-between items-center bg-muted/30">
                <h4 className="text-[10px] uppercase tracking-widest font-black">Generated Description</h4>
                {result && (
                  <button onClick={copyToClipboard} className="text-primary hover:text-black transition-colors flex items-center text-[10px] uppercase font-bold tracking-widest">
                    {copied ? <><Check size={14} className="mr-2" /> Copied</> : <><Copy size={14} className="mr-2" /> Copy Text</>}
                  </button>
                )}
              </div>
              <div className="p-10 flex-grow">
                {result ? (
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {result}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                    <Sparkles size={48} className="mb-4" />
                    <p className="text-xs uppercase tracking-widest font-bold">Your AI-generated content <br />will appear here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
