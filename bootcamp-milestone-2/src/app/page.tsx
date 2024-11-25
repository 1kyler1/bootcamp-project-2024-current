import Image from "next/image";
import Link from 'next/link';
import styles from "./home.module.css";

export default function Home() {
    return (
      <div>
        <main className={styles.main}>
          <div className={styles.cutout_box}>
            <h1 className={styles.cutout_text}></h1>
          </div>
  
          <h1 className={styles.page_title}></h1>
  
          <div className={styles.about}>
            <div className={styles.about_image}>
            
            <Image
              src="/kyler.jpeg" // Replace this with your actual image path
              alt="A photo of Kyler" // Provide descriptive alt text
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
            />

            </div>
            <div className={styles.about_text}>
              Hello, my name is Kyler Nord and i am currently a computer science student at Cal Poly. 
            </div>
          </div>
  
          {/* Links to other pages */}
          <div className={styles.link_to_blog}>
            <Link href="/blog">
              <>Visit My Blog</>
            </Link>
          </div>
          <div className={styles.link_to_contactMe}>
            <Link href="/contactMe">
              <>Contact Me</>
            </Link>
          </div>
          <div className={styles.link_to_Portfolio}>
            <Link href="/portfolio">
              <>Portfolio</>
            </Link>
          </div>
          <div className={styles.link_to_Resume}>
            <Link href="/resume">
              <>Resume</>
            </Link>
          </div>
        </main>
        <footer className={styles.footer}>© 2023 Kyler Nord | All Rights Reserved</footer>
      </div>
    );
  }
