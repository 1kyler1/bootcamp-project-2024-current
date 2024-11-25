import React from 'react';
import "@/app/full.css";
import BlogPreview from "@/components/blogPreview";
import getBlogs from '@/app/blogData';
import type { Blog } from "@/app/blogData";


export default async function BlogPage() {
  const blogs: Blog[] = await getBlogs() || []; // Fetch data directly

  return (
      <div>
          <main className="main">
              <h1 className="page_title">My Blog</h1>
              <div className="content" id="blog">
                  <ul id="blog_list" className="blog_list">
                      {blogs.map((blog) => (
                          <BlogPreview
                              key={blog.slug} // Use slug as a unique key
                              title={blog.title}
                              slug={blog.slug}
                              date={new Date(blog.date).toLocaleDateString()}
                              description={blog.description}
                              content={blog.content}
                              image={blog.image}
                              comments={blog.comments}
                          />
                      ))}
                  </ul>
              </div>
          </main>
          <footer className="footer">© 2023 Kyler Nord | All Rights Reserved</footer>
      </div>
  );
}


