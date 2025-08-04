import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProjects } from "../utils/service";
import { motion } from 'framer-motion'
const ProjectInHome = () => {
    const [projects, setProjects] = useState([]);
    const [featuredProject, setFeaturedProject] = useState(null);
    const [secondProject, setSecondProject] = useState(null);
    const [thirdProject, setThirdProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projectData = await fetchProjects();
                setProjects(projectData);

                const selectedOne = projectData.find(
                    (project) => project.id === "Vh7owWLsACnq11MVazmG"
                );
                const selectedTwo = projectData.find(
                    (project) => project.id === "09PketujBuGlsRuvOV0B"
                );
                const selectedThird = projectData.find(
                    (project) => project.id === "TVfshunB3mfBbhJfeYEO"
                );
                setFeaturedProject(selectedOne);
                setSecondProject(selectedTwo);
                setThirdProject(selectedThird);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        loadProjects();
    }, []);

    if (!featuredProject || !secondProject) return null;

    return (
        <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="mb-12 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Sample Project
                </h1>
                <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
                    Experience our development brilliance through these interactive showcases.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                {[featuredProject, secondProject, thirdProject].map((project, index) => (
                    <Link
                        key={index}
                        to={`/ProjectDetail/${project.id}`}
                        className="w-full sm:w-4/5 md:w-[500px]"
                    >
                        <div className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                            {/* Title Content */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            <div className="mt-8 flex justify-center">
                <motion.button
                    className="border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { navigate('/portfolio') }}
                >
                    View All Projects
                </motion.button>
            </div>

        </section>
    );
};

export default ProjectInHome;
