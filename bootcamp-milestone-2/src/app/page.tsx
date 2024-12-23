import Image from "next/image";
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
              src="/images/kyler.jpeg" // Replace this with your actual image path
              alt="A photo of Kyler" // Provide descriptive alt text
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
            />

            </div>
            <div className={styles.about_text}>
              Hello, my name is <strong>Kyler Nord</strong> and I am currently a computer science student at Cal Poly SLO. 
            </div>
          </div>

        </main>
        
      </div>
    );
  }
