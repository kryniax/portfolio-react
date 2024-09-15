import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../assets/data/data'

const Projects = () => {

    const modifySingleChars = (str) => {
        return str.replace(/ ([a-zA-Z]) /g,' $1' + '\u00A0');
    } 

  return (
    <section className='border-b border-neutral-900 pb-4' aria-labelledby="projects-title">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='my-20 text-center text-4xl'
            id="projects-title"
        >
            Projects
        </motion.h2>
        <React.Fragment>
            {PROJECTS.map((project, index) => (
                <article 
                    key={index} 
                    className='mb-8 flex flex-wrap lg:justify-center' 
                    aria-labelledby={`project-title-${index}`}
                >
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className='w-full lg:w-1/4 lg:p-4'
                    >
                        <figure>
                            <img 
                                src={project.image}
                                width={250}
                                alt={project.title}
                                title={project.title}
                                className='mb-6 rounded'
                            />
                            <figcaption className="sr-only">{project.title} - {project.description}</figcaption>
                        </figure>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }} 
                        className='w-full max-w-xl lg:w-3/4'
                    >
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400 text-justify'>{modifySingleChars(project.description)}</p>
                        <p>Technology stack:</p>
                        <ul className='flex flex-wrap px-0'>
                            {project.technologies.map((tech, index) => (
                                <li 
                                    key={index} 
                                    className='mr-2 mt-1 px-0 py-1 text-sm font-medium text-blue-600' 
                                    aria-label={tech}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                </article>
            ))}
        </React.Fragment>
    </section>
  )
}

export default Projects