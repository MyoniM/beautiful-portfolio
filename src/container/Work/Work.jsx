import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import images from '../../constants/images';

const Work = () => {
  const works = [
    {
      imgUrl: images.todo,
      name: 'Beautiful TO-DO Web App',
      projectLink: 'https://github.com/MyoniM/beautiful-todo-app',
      codeLink: 'https://github.com/MyoniM/beautiful-todo-app',
      title: 'Beautiful TO-DO Web App ',
      description: 'Beautiful app with React.js, Node.js and AWS',
      tags: ['React', 'Node', 'AWS'],
    },
    {
      imgUrl: images.music,
      name: 'Lyrik',
      projectLink: '',
      codeLink: 'https://github.com/MyoniM/music_app',
      title: 'Lyrik',
      description: 'Spotify clone with fully-fledged music player',
      tags: ['Flutter', ['Node']],
    },
    {
      imgUrl: images.edu,
      name: 'Programming language',
      projectLink: 'https://edu-playground.vercel.app/',
      codeLink: 'https://github.com/MyoniM/edu-playground',
      title: 'Programming language ',
      description: 'A minimal, transpiled programming language with not so easy syntax :P',
      tags: ['React', 'Node', 'Next'],
    },
    {
      imgUrl: images.db,
      name: 'DB Schema Visualizer',
      projectLink: 'https://pg-schema-visualizer.web.app/',
      codeLink: 'https://github.com/MyoniM/pg-schema-visually',
      title: 'DB Schema Visualizer',
      description: 'Draw Entity-Relationship Diagrams, Painlessly',
      tags: ['React'],
    },
    {
      imgUrl: images.path,
      name: 'Graph Algorithm Visualizer',
      projectLink: 'https://pathfinder-visually.web.app/',
      codeLink: 'https://github.com/MyoniM/path-finder',
      title: 'Graph Algorithm Visualizer',
      description: 'Graph Algorithm visualizer like Dijkstra & A*',
      tags: ['React'],
    },

    {
      imgUrl: images.aau,
      name: 'AAU Portal',
      projectLink: 'https://play.google.com/store/apps/details?id=com.BlueScenes.AAUPortal',
      codeLink: '',
      title: 'AAU Portal',
      description: 'App for students in my university to access their student information',
      tags: ['Flutter', ['Node']],
    },
  ];
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {['AWS', 'Node', 'Flutter', 'React', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags.join(' - ')}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
