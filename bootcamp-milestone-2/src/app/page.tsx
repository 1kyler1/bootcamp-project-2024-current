import Image from "next/image";
import Link from 'next/link';

//Home page
export default function Home() {
  return (
    <div>
       <main>
            <div className="cutout_box">
                <h1 className="cutout_text">Kyler Nord</h1>
            </div>

            <h1 className="page_title">  </h1>
            <div className="about">
            <div className="about_image">
            </div>
                <div className="about_text"></div>

            </div>
             {/* Blog Page Link */}
             <div className="link_to_blog">
                <Link href="/blog">
                    <>Visit My Blog</>
                </Link>
            </div>
             {/* COntactMe page link */}
             <div className="link_to_contactMe">
                <Link href="/contactMe">
                    <>Contact Me</>
                </Link>
            </div>
            {/* COntactMe page link */}
            <div className="link_to_Portfolio">
                <Link href="/portfolio">
                    <>Portfolio</>
                </Link>
            </div>
            {/* COntactMe page link */}
            <div className="link_to_Resume">
                <Link href="/resume">
                    <>Resume</>
                </Link>
            </div>
        </main>
        <footer>© 2023 Kyler Nord | All Rights Reserved</footer>
    </div>
    );
}
