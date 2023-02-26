import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';

const About = () => {
  const abouts = [
    {
      title: 'UI Designer',
      imgUrl: images.about02,
      description: 'I am a UI designer with a passion for creating beautiful ui designs.',
    },
    {
      title: 'Cloud Developer',
      imgUrl: images.about03,
      description: 'I am a cloud developer with a passion for creating scalable and cost-effective cloud infrastructures.',
    },
    {
      title: 'Backend Developer',
      imgUrl: images.about04,
      description: 'I am a backend developer with a passion for building performant, scalable and maintainable applications.',
    },
    {
      title: 'Frontend Developer',
      imgUrl: images.about01,
      description: 'I am a frontend developer with a passion for creating beautiful and functional web applications.',
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
