// src/pages/BlogPost.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanity';
import { PortableText } from '@portabletext/react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        body,
        mainImage,
        publishedAt,
        "author": author->{name, bio, image},
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
      }`;
      
      const data = await client.fetch(query, { slug });
      setPost(data);
      
      // Fetch related posts
      fetchRelatedPosts(data._id);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (currentPostId) => {
    try {
      const query = `*[_type == "post" && _id != $currentPostId] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt
      }`;
      
      const data = await client.fetch(query, { currentPostId });
      setRelatedPosts(data);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const formatDate = (dateString) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Custom components for PortableText with elegant styling
  const components = {
    types: {
      image: ({ value }: any) => (
        <figure className="my-10">
          <img
            src={urlFor(value).url()}
            alt={value.alt || ' '}
            className="w-full rounded-xl shadow-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-4xl font-bold mt-12 mb-6 text-text-primary">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold mt-10 mb-5 text-text-primary">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-text-primary">{children}</h3>
      ),
      normal: ({ children }: any) => (
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
          <p className="text-gray-700 italic text-lg">{children}</p>
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside mb-6 space-y-3 text-gray-700 text-lg ml-4">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside mb-6 space-y-3 text-gray-700 text-lg ml-4">{children}</ol>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const href = value?.href || '#';
        return (
          <a
            href={href}
            className="text-blue-600 hover:text-blue-700 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
      strong: ({ children }: any) => (
        <strong className="font-semibold text-text-primary">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic">{children}</em>
      ),
      code: ({ children }: any) => (
        <code className="px-2 py-1 bg-gray-100 text-red-600 rounded text-sm font-mono">{children}</code>
      ),
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Article not found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 underline">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] min-h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {post.mainImage && (
          <div className="absolute inset-0">
            <img
              src={urlFor(post.mainImage).width(1920).height(800).url()}
              alt={post.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          </div>
        )}
        
        <div className="relative h-full flex items-center justify-center">
          <div className="section-container text-center text-white px-4">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tigh text-white">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center justify-center space-x-6 text-white">
              {post.author && (
                <div className="flex items-center space-x-2">
                  {post.author.image && (
                    <img
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full border-2 border-white/30"
                    />
                  )}
                  <span className="font-medium text-white">{post.author.name}</span>
                </div>
              )}
              <span className="text-white/70">•</span>
              <time className="text-white" dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.estimatedReadingTime && (
                <>
                  <span className="text-white/70">•</span>
                  <span className="text-white">{post.estimatedReadingTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Body */}
          <div className="prose-lg max-w-none">
            {post.body && <PortableText value={post.body} components={components} />}
          </div>

          {/* Author Bio Section */}
          {post.author && post.author.bio && (
            <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(100).height(100).url()}
                    alt={post.author.name}
                    className="w-24 h-24 rounded-full shadow-lg flex-shrink-0"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    About {post.author.name}
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    <PortableText value={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 p-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Take Control of Your Debt?
            </h3>
            <p className="mb-8 text-white/90 text-lg max-w-2xl mx-auto">
              Get your free debt analysis and discover how much you could save with our trusted partners
            </p>
            <Link
              to="https://apply.penguindebt.com/debt/?v=2972&aid=182&sub1=1821#debt_amount"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Your Free Analysis →
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-text-primary mb-10 text-center">
                Related Articles
              </h3>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost._id} className="group">
                    {relatedPost.mainImage && (
                      <Link to={`/blog/${relatedPost.slug.current}`} className="block overflow-hidden rounded-lg">
                        <img
                          src={urlFor(relatedPost.mainImage).width(400).height(250).url()}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    )}
                    <div className="mt-4">
                      <h4 className="font-semibold text-text-primary text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${relatedPost.slug.current}`}>
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <time className="text-sm text-gray-500 mt-2 block">
                        {formatDate(relatedPost.publishedAt)}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-medium">Share this article:</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`, '_blank')}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`, '_blank')}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Back to Blog Link */}
          <div className="mt-8 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;