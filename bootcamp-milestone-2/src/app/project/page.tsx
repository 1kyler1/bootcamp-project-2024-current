// import React from 'react';
// import "@/app/full.css";
// import PortfolioPreview from "@/components/portfolioPreview";
// import getProjects from '@/app/portfolioData';
// import type { Project } from "@/app/portfolioData";


// export default async function ProjectsPage() {
//   const projects: Project[] = await getProjects() || []; // Fetch data directly

//   return (
//     <div>
//         <main className="main">
//             <h1 className="page_title">My Portfolio</h1>
//             <div className="content" id="project">
//                 <ul id="project_list" className="project_list">
//                     {projects.map((project) => (
//                         <PortfolioPreview
//                             key={project.slug} // Use slug as a unique key
//                             title={project.title}
//                             slug={project.slug}
//                             date={new Date(project.date).toLocaleDateString()}
//                             description={project.description}
//                             content={project.content}
//                             image={project.image}
//                             comments={project.comments}
//                         />
//                     ))}
//                 </ul>
//             </div>
//         </main>
        
//     </div>
// );
// }

import React from 'react';
import "@/app/full.css";
import PortfolioPreview from "@/components/portfolioPreview";
import getProjects from '@/app/portfolioData';
import type { Project } from "@/app/portfolioData";
import Link from 'next/link';

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects() || []; // Fetch data directly

  return (
    <div>
      <main className="main">
        <h1 className="page_title">My Portfolio</h1>
        <div className="content" id="project">
          <ul id="project_list" className="project_list">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/project/${project.slug}`}>
                  <PortfolioPreview
                    title={project.title}
                    slug={project.slug}
                    date={new Date(project.date).toLocaleDateString()}
                    description={project.description}
                    content={project.content}
                    image={project.image}
                    comments={project.comments}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
    