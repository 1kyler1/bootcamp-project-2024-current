import Image from "next/image";
import Link from 'next/link';

//Home page
export default function Home() {
  return (
    <div>
       <main>
            <div className="cutout-box">
                <h1 className="cutout-text">Kyler Nord</h1>
            </div>

            <h1 className="page-title">  </h1>
            <div className="about">
            <div className="about-image">
            </div>
                <div className="about-text"></div>

            </div>
             {/* Blog Page Link */}
             <div className="link-to-blog">
                <Link href="/blog">
                    <a>Visit My Blog</a>
                </Link>
            </div>
             {/* COntactMe page link */}
             <div className="link-to-contactMe">
                <Link href="/contactMe">
                    <a>Contact Me</a>
                </Link>
            </div>
            {/* COntactMe page link */}
            <div className="link-to-Portfolio">
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
            </div>
            {/* COntactMe page link */}
            <div className="link-to-Resume">
                <Link href="/resume">
                    <a>Resume</a>
                </Link>
            </div>
        </main>
        <footer>© 2023 Kyler Nord | All Rights Reserved</footer>
    </div>
    );
}
