
import connectDB from "@/database/db";
import ProjectMode1 from "@/database/projectSchema";

const projects: Project[] = [];

export interface Project {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string;
    image: string;
    comments: Comment[];
}

async function getProjects() {
    await connectDB(); // function from db.ts before

    try {
        // query for all projects and sort by date
        const projects = await ProjectMode1.find().sort({ date: -1 }).orFail();
        // send a response as the projects as the message
        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error); // Log the error
        return null;
    }
}

async function initializeProjects() {
    const fetchedProjects = await getProjects();

    if (fetchedProjects) {
        // Populate the projects array if fetching is successful
        projects.push(...fetchedProjects);
    }
}

console.log(projects);

initializeProjects();

export default getProjects;