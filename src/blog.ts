type Blog ={
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        // blog regarding y personal website
        title: "Made my own personal website",
        date: "October 5th, 2024",
        description: "I completed the Hack4Impact HTML and CSS starter pack and used that to create my a personal website",
        image: "homepage.jpg",
        imageAlt: "Homepage of my website",
        slug: "made-my-own-personal-website",
    },
    {
        //blog regarding sleep
        title: "Why geeting enough sleep is essential",
        date: "October 15th, 2024",
        description: "Accoridng to science, you shoudl get 9 hours of sleep per night",
        image: "sleep.png",
        imageAlt: "Picture of peaceful sleeping",
        slug: "why-getting-enough-sleep-is-essential",
    }
    

]

function displayBlogs() {
    const blogContainer = document.getElementById('blog-container');

    if (!blogContainer) {
        console.error("Blog container not found");
        return;
    }

    blogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');

        const titleElement = document.createElement('h1');
        const titleLink = document.createElement('a');
        titleLink.href = `${blog.slug}.html`;  // Link to the individual blog page
        titleLink.textContent = blog.title;
        titleElement.appendChild(titleLink);

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${blog.date}`;

        const imageElement = document.createElement('img');
        imageElement.src = blog.image;
        imageElement.alt = blog.imageAlt;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = blog.description;

        blogPost.appendChild(titleElement);
        blogPost.appendChild(dateElement);
        blogPost.appendChild(imageElement);
        blogPost.appendChild(descriptionElement);

        blogContainer.appendChild(blogPost);
    });
}
displayBlogs();