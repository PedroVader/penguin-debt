// src/pages/Blog.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanity';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "author": author->{name, image}
      }`;
      
      const data = await client.fetch(query);
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Penguin Debt Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and success stories to help you achieve financial freedom
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts found.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                {post.mainImage && (
                  <Link to={`/blog/${post.slug.current}`}>
                    <img
                      src={urlFor(post.mainImage).width(400).height(250).url()}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>
                )}

                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-text-primary mb-2">
                    <Link 
                      to={`/blog/${post.slug.current}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      {post.author?.image && (
                        <img
                          src={urlFor(post.author.image).width(32).height(32).url()}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <span>{post.author?.name || 'Penguin Debt Team'}</span>
                    </div>
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;