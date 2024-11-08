import React from 'react';
// import "@/global.css";

import "@/app/full.css";
import BlogPreview from "@/components/portfolioPreview";
import projects from "@/app/portfolioData";

function Portfolio() {
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
          
          {projects.map((project) => ( // this is where i iterate through my projects and build them
          <BlogPreview // This is how we call the component
            title={project.title}
            description={project.description}
            date={project.date}
            image={project.image}
            imageAlt={project.imageAlt}
            slug={project.slug}
  
          />
        ))}
          <footer>© 2023 Kyler Nord| All Rights Reserved</footer>
      </div>
    )
  }
  export default Portfolio;