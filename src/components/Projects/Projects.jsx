import React from 'react';
import styles from './Projects.module.css';

export const Projects = () => {
  const projectList = [
    { name: 'Project 1', link: 'https://github.com/The-Code-Cats/Grape-Plate' },
    { name: 'Project 2', link: 'https://github.com/Team-we-dont-know-yet/Bookclub' },
    { name: 'Project 3', link: 'https://github.com/p3t2-awesometeamname/project3' },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Projects</h1>
        <ul className={styles.projectList}>
          {projectList.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Projects;