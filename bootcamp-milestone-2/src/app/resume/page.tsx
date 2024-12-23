// import Link from "next/link";
// import styles from "./resume.module.css"
// export default function Resume() {
//     return (
//         <div>
//             <main>
//                 <h1 className={styles.resume_background}></h1>
//                 <div className={styles.download}>
//                     <Link href="resume-pdf" download>DownloadResume</Link>
     
//                 </div>
//                 <h2 className="name">Kyler Nord</h2>
//                 <div className={styles.contact_info}>
//                     <Link href="mailto:nordkyler@gmail.com">nordkyler@gmail.com</Link> *<Link href="tel:206-557-9408" >206-557-9408 </Link> *
//                     <Link href="https://www.linkedin.com/in/1kylernord1/" target="_blank" rel="noopener noreferrer">LinkedIn</Link> *
//                     <Link href="https://github.com/1kyler1" target="_blank" rel="noopener noreferrer">GitHub </Link>
//                 </div>
//                 <div className = {styles.resume_content}>
//                     <div className= {styles.section}>
//                     <h2>Education</h2>
                        
//                         <p><strong>California Polytechnic State University, San Luis Obispo </strong> 
//                             <span className={styles.date}>Expected Graduation: 2027</span>
//                         </p>
//                         <p>B.S. in Computer Science | GPA: 3.7/4.0</p>
//                         <ul>
//                             <li>Dean's List: 2x</li>
//                             <li>Relevant Courses: Data Structures (CSC 202), Python (CSC 101), Linear Algebra, Calculus 1, 2, and 3</li>
//                         </ul>
//                     <div className={styles.section}>
//                         <h2>Technical Skills</h2>
                        
//                         <ul>
//                             <li><strong>Programming Languages:</strong> Python, Arduino, Java, React, Git</li>
//                             <li><strong>IT Skills:</strong> Pandas, Streamlit, Figma, Adobe</li>
//                             <li><strong>Language Proficiency:</strong> Spanish (Seal of Biliteracy - ISA)</li>
//                         </ul>
//                     </div>

//                     <div className={styles.section}>
//                         <h2>Professional Experience</h2>
                        
//                         <p><strong>Helium Miner Management (Personal Business) </strong>
//                             <span className={styles.date}>September 2021 - December 2023</span>
//                         </p>
//                         <ul>
//                             <li>Managed a network of Helium hotspot miners.</li>
//                             <li>Negotiated and maintained revenue-sharing agreements with property owners.</li>
//                             <li>Optimized hotspot performance, generating over three figures in the first month.</li>
//                         </ul>

//                         <p><strong>Cal Poly Startup Launch Weekend </strong>
//                             <span className={styles.date}> November 2023</span>          
//                         </p>
//                         <ul>
//                             <li>Led a team of four to develop an app called "Handy."</li>
//                             <li>Conducted customer outreach, built a prototype, and presented the project to a panel of judges.</li>
//                             <li>Voted to move the project to the development phase.</li>
//                         </ul>
//                     </div>

//                     <div className={styles.section}>
//                         <h2>Projects</h2>
                        

//                         <p><strong>NBA Combine Stats Website </strong> 
//                             <span className={styles.date}>July 2024 - Present</span>
//                         </p>
//                         <ul>
//                             <li>Implemented an API for NBA combine player stats.</li>
//                             <li>Developed a UI using Pandas for filtering and graphing data.</li>
//                         </ul>

//                         <p><strong>Personal Website </strong> 
//                             <span className={styles.date}>August 2024 - September 2024</span>
//                         </p>
//                         <ul>
//                             <li>Completed Hack4Impact bootcamp for HTML and CSS</li>
//                             <li>Developed my personal Website from scratch</li>
//                         </ul>

//                         <p><strong>GPS Dog Collar with Alert System </strong> 
//                             <span className={styles.date}>September 2023 - October 2023</span>
//                         </p>
//                         <ul>
//                             <li>Developed a GPS-enabled dog collar using Arduino.</li>
//                             <li>Alerted users when the dog left a designated area.</li>
//                             <li>Parsed GPS data into a KML file for Google Maps.</li>
//                         </ul>
//                     </div>

//                     <div className={styles.section}>
//                         <h2>Awards</h2>
                        
//                         <ul>
//                             <li>Spanish Seal of Biliteracy and ISA Diploma</li>
//                             <li>Adobe Certified Professional in Visual Design</li>
//                             <li>AP Scholar (2021)</li>
//                             <li>DECA State Finalist (2021)</li>
//                         </ul>
//                     </div>

//                     </div>
//                 </div>
//             </main>
            

            
//         </div>
     
//       );
//   }


import React from 'react';
import styles from './resume.module.css'; // Import the CSS module

const Resume = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>RESUME</h1>
            <main className={styles.main}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    <div className={styles.job}>
                        <h3 className={styles.jobTitle}>Software Engineer</h3>
                        <p className={styles.jobCompany}>Tech Company</p>
                        <p className={styles.jobDescription}>
                            Developed and maintained web applications using React, Node.js, and MongoDB.
                        </p>
                    </div>
                    {/* Other job entries */}
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    <div className={styles.education}>
                        <h3 className={styles.degree}>Bachelor&apos;s Degree in Computer Science</h3>
                        <p className={styles.school}>University Name</p>
                        <p className={styles.educationDescription}>
                            Graduated with honors, focusing on software development and data structures.
                        </p>
                    </div>
                    {/* Other education entries */}
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    <ul className={styles.skillsList}>
                        <li className={styles.skill}>JavaScript</li>
                        <li className={styles.skill}>React</li>
                        <li className={styles.skill}>Node.js</li>
                        <li className={styles.skill}>MongoDB</li>
                        <li className={styles.skill}>CSS</li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Projects</h2>
                    <div className={styles.project}>
                        <h3 className={styles.projectTitle}>Project Name</h3>
                        <p className={styles.projectDescription}>
                            A web application that allows users to create and manage tasks. Built with React and Node.js.
                        </p>
                        <p className={styles.projectLink}>
                            <a href="https://github.com/username/project" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </p>
                    </div>
                    {/* Other project entries */}
                </section>
            </main>
        </div>
    );
};

export default Resume;