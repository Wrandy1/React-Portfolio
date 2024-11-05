import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return <section className={styles.container}>
      <div className= {styles.content}>
        <h1 className={styles.title}>Hi, Im chad</h1>
      <p className={styles.description}>I'm a full stack dev Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, accusamus? Magnam doloremque eligendi nulla explicabo cum labore ad repudiandae perferendis, asperiores cumque itaque aspernatur at dignissimos enim totam officiis dolore? </p>
      <a href="mailto:cjyoung0420@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Picture of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  ;
};

export default Hero;