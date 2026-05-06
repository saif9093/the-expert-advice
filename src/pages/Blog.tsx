import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

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

const fallbackPosts: Post[] = [
  {
    id: '1', title: 'Canada Express Entry 2025: What You Need to Know', slug: 'canada-express-entry-2025',
    excerpt: 'The latest updates to Canada\'s Express Entry system and how they affect your application.',
    content: '', category: 'Canada',
    image_url: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg',
    created_at: '2025-01-15',
  },
  {
    id: '2', title: 'UK Skilled Worker Visa: Complete 2025 Guide', slug: 'uk-skilled-worker-visa-2025',
    excerpt: 'Everything you need to know about applying for a UK Skilled Worker visa this year.',
    content: '', category: 'United Kingdom',
    image_url: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    created_at: '2025-01-10',
  },
  {
    id: '3', title: 'Australia PR: Points Test Explained Simply', slug: 'australia-pr-points-test',
    excerpt: 'Breaking down the Australian points test so you know exactly where you stand.',
    content: '', category: 'Australia',
    image_url: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg',
    created_at: '2025-01-05',
  },
  {
    id: '4', title: 'Top 5 Mistakes to Avoid on Your Visa Application', slug: 'top-5-visa-mistakes',
    excerpt: 'Avoid these common pitfalls that lead to visa refusals and delayed applications.',
    content: '', category: 'General',
    image_url: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    created_at: '2024-12-20',
  },
  {
    id: '5', title: 'Moving to Germany: Skilled Worker Visa Guide', slug: 'germany-skilled-worker-visa',
    excerpt: 'Germany is actively recruiting skilled workers. Here\'s how to take advantage of this opportunity.',
    content: '', category: 'Europe',
    image_url: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg',
    created_at: '2024-12-10',
  },
  {
    id: '6', title: 'Student Visa to PR: The Complete Pathway', slug: 'student-visa-to-pr',
    excerpt: 'Studying abroad is one of the best pathways to permanent residency. We break down how.',
    content: '', category: 'Study',
    image_url: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
    created_at: '2024-12-01',
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('All');

  const categories = ['All', 'Canada', 'Australia', 'United Kingdom', 'Europe', 'General'];

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('blog_posts').select('*').eq('published', true).order('created_at', { ascending: false });
      setPosts(data && data.length > 0 ? data : fallbackPosts);
      setLoading(false);
    })();
  }, []);

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active);

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <section className="relative pt-24 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">Knowledge Hub</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Immigration Blog</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Stay updated with the latest immigration news, guides, and policy changes from around the world.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-navy-950 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse rounded-xl overflow-hidden">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-20" />
                    <div className="h-5 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="card-hover group overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image_url || 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gold-600 font-medium bg-gold-50 px-2.5 py-1 rounded-full">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" /> {formatDate(post.created_at)}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-navy-900 text-lg mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-navy-700 text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">No posts found in this category.</div>
          )}
        </div>
      </section>
    </div>
  );
}
