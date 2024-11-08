export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}


// Here is my lost of bogs from milestonr one
const blogs: Blog[] = [
    {
        title: "Made my own personal website",
        date: "October 5th, 2024",
        description: "I completed the Hack4Impact HTML and CSS starter pack and used that to create my own personal website",
        image: "homepage.jpg",
        imageAlt: "Homepage of my website",
        slug: "made-my-own-personal-website",
    },
    {
        title: "Why getting enough sleep is essential",
        date: "October 15th, 2024",
        description: "According to science, you should get 9 hours of sleep per night",
        image: "sleep.png",
        imageAlt: "Picture of peaceful sleeping",
        slug: "why-getting-enough-sleep-is-essential",
    },
];

export default blogs;  // HEr ei exported the arrya so that it can be accessed elsewhere