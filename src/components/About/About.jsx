import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, accusamus? Magnam doloremque eligendi nulla explicabo cum labore ad repudiandae perferendis, asperiores cumque itaque aspernatur at dignissimos enim totam officiis dolore?
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default About;