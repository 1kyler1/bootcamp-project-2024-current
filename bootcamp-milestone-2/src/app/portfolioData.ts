export interface Project {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}


// Here is my lost of bogs from milestonr one
const Projects: Project[] = [
    {
        title: "Made my own personal website",
        date: "October 5th, 2024",
        description: "Completed Bootcamp where I learned HTML and CSS, React \n Typescript. Used all these skills ot build my own personal website",
        image: "homepage.jpg",
        imageAlt: "Homepage of my website",
        slug: "made-my-own-personal-website",
    },
    {
        title: "NBA Stats Website",
        date: "July 13, 2024",
        description: "Accessed an API to gather up to date NBA Player inforamtion \n Incorporated streamlit for the U \n Currently workign on leveragign more API endpoints so user have more filtration options",
        image: "NBA.jpg",
        imageAlt: "Picture of peaceful sleeping",
        slug: "why-getting-enough-sleep-is-essential",
    },
];

export default Projects;  // HEr ei exported the arrya so that it can be accessed elsewhere