import Project from "./Project";
const Projects = () => {
    return (
        <div
            className="grid grid-cols-1 gap-8
                sm:grid-cols-2 sm:gap-x-7
                md:gap-x-8 md:gap-y-12"
        >
            <Project/>
        </div>
    )
}
export default Projects;