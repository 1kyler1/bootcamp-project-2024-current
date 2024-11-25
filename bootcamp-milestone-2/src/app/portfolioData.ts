import connectDB from "@/database/db";
import Projects from "@/database/projectSchema"

const projects: Project[] = [];

export interface Project {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string
    image: string;
    comments: Comment[];
   
}


async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Projects.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}

async function initializeProjects() {
	const fetchedBlogs = await getProjects();
  
	if (fetchedBlogs) {
	  // Populate the blogs array if fetching is successful
	  projects.push(...fetchedBlogs);
	}
}
  
console.log(projects)

initializeProjects();

export default getProjects;  // HEr ei exported the arrya so that it can be accessed elsewhere