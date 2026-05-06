import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  created_at: string;
}

const fallback: Record<string, Post> = {
  'canada-express-entry-2025': {
    id: '1', title: 'Canada Express Entry 2025: What You Need to Know', slug: 'canada-express-entry-2025',
    excerpt: 'The latest updates to Canada\'s Express Entry system and how they affect your application.',
    content: `Canada Express Entry remains one of the most popular pathways for skilled workers seeking permanent residency. In 2025, the government introduced several key changes that applicants must be aware of.\n\nThe Comprehensive Ranking System (CRS) cutoff scores have fluctuated, and new occupations have been added to the priority list. Understanding these changes is crucial for a successful application.\n\n## Key Changes in 2025\n\nThe government has introduced category-based selections to target specific occupations and French-speaking candidates. This means that even if your CRS score is lower, you may qualify through a targeted draw.\n\n## How to Improve Your CRS Score\n\n- Improve your English/French language scores (IELTS, CELPIP, TEF)\n- Get your foreign credentials assessed\n- Gain Canadian work experience\n- Obtain a provincial nomination (adds 600 points)\n\nContact The Expert Advice today to get a personalized assessment of your Express Entry profile.`,
    category: 'Canada',
    image_url: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg',
    created_at: '2025-01-15',
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('blog_posts').select('*').eq('slug', slug).maybeSingle();
      if (data) {
        setPost(data);
      } else if (slug && fallback[slug]) {
        setPost(fallback[slug]);
      }
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-navy-200 border-t-navy-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const renderContent = (text: string) => {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-display font-bold text-navy-900 mt-8 mb-4">{para.replace('## ', '')}</h2>;
      }
      if (para.startsWith('- ')) {
        const items = para.split('\n').filter(l => l.startsWith('- '));
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                {item.replace('- ', '')}
              </li>
            ))}
          </ul>
        );
      }
      return <p key={i} className="text-gray-600 leading-relaxed">{para}</p>;
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 h-72 md:h-96 overflow-hidden">
        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 flex items-end pb-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1 text-xs text-gold-400 font-medium">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="text-gray-400 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {formatDate(post.created_at)}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-display font-bold text-white">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-800 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="prose max-w-none space-y-5">
                <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-gold-400 pl-5 mb-8">
                  {post.excerpt}
                </p>
                {renderContent(post.content)}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500">Need help with your application?</p>
                <Link to="/contact" className="btn-primary mt-3">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            <aside>
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-semibold text-navy-900 text-lg mb-4">Free Eligibility Check</h3>
                  <ContactForm formType="eligibility" showCountry />
                </div>
                <div className="bg-navy-950 rounded-2xl p-6 text-white">
                  <h4 className="font-semibold mb-2">Talk to an Expert</h4>
                  <p className="text-gray-400 text-sm mb-4">Get personalized advice from a licensed consultant.</p>
                  <a href="tel:+1234567890" className="btn-primary w-full text-center text-sm">
                    Call Now
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
