import React from 'react';
// import "@/global.css";
import "@/app/full.css";
import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";

export default function Blog() {
    return (
      <div>
          <main>
              <main className="main">      
                  <div className="content" id="blog">
                      <ul id="blog_list" className="blog_list"></ul>
                  </div>
              </main>
              <h1 className="page_title">MY BLOG</h1>
              <div className="container" id="container"></div>
          </main>
          {blogs.map((blog) => (
          <BlogPreview // This is how we call the component
            title={blog.title}
            description={blog.description}
            date={blog.date}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
  
          />
        ))}
          <footer className="footer" >© 2023 Kyler Nord| All Rights Reserved</footer>
      </div>
    )
  }