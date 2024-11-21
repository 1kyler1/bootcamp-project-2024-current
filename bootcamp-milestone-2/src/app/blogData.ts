import connectDB from "@/database/db";
import BlogMode1 from "@/database/blogSchema";
import { StaticImageData } from "next/image";
import Image from 'next/image';

const blogs: Blog[] = []; // Initialize as an empty array

export interface Blog {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string;
    image: string;
    comments: Comment[];
}

async function getBlogs(){
	await connectDB() // function from db.ts before

    // add get command to get blogs

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogMode1.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

async function initializeBlogs() {
	const fetchedBlogs = await getBlogs();
  
	if (fetchedBlogs) {
	  // Populate the blogs array if fetching is successful
	  blogs.push(...fetchedBlogs);
	}
}
  
console.log(blogs)

// Call the initialization function
initializeBlogs();

export default getBlogs;  // HEr ei exported the arrya so that it can be accessed elsewhere

