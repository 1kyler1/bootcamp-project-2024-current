import React from 'react';
import Image from 'next/image';
import styles from './project.module.css';


type IComment = {
  user: string;
  comment: string;
  date: Date;
};

type Project = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  comments: IComment[];
};

type Props = {
  params: {
    slug: string;
  };
};



async function getProject(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching portfolio with slug: ${slug}`); // Log the slug
    const res = await fetch(`${baseUrl}/api/project/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch project');
    }

    const data = await res.json();
    console.log(`Fetched project data:`, data); // Log the fetched data
    return data;
  } catch (err: unknown) {
    console.error(`Error fetching project: ${err}`); // Log the error
    return null;
  }
}

export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return <div>Failed to load project</div>;
  }

  console.log('Rendering project:', project); // Log the blog data before rendering

  return (
    <div>
      <main>
        <h1>{project.title}</h1>
        <div className={styles.image} id="project">
            <Image src={project.image} alt={project.title} height={500} width={500} />
        
        </div>
        <div className={styles.content} id="project">
          <p>{project.content}</p>
        </div>
        <div className={styles.comment} id="project">
          <h2>Comments</h2>
          {project.comments && project.comments.length > 0 ? (
            project.comments.map((comment: IComment, index: number) => (
              <div key={index}>
                <p><strong>{comment.user}</strong>: {comment.comment}</p>
                <p><em>{new Date(comment.date).toLocaleString()}</em></p>
              </div>
            ))
          ) : (
            <p>Comments not found.</p>
          )}
        </div>
      </main>
      
    </div>
  );
}