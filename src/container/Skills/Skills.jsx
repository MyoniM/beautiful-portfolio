import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

const Skills = () => {
  const experiences = [
    {
      year: '2022',
      works: [
        {
          name: 'Freelance Developer',
          company: 'Upwork',
          desc: 'Started freelancing on upwork',
        },
        {
          name: 'Lead Front-end Developer',
          company: 'Gebeya Inc',
          desc: 'Built an internal tool for the management team using React.js and Typescript.',
        },
        {
          name: 'Fullstack Developer',
          company: 'Sky keys',
          desc: 'Built an admin dashboard for a client using React.js, Node.js and Typescript.',
        },
      ],
    },
    {
      year: '2021',
      works: [
        {
          name: 'Lead Fullstack Developer',
          company: 'Black Bridge Technologies',
          desc: 'Led a team of 3 Software Engineers to design, develop and test mobile and web applications from the ground up using Flutter, ReactJs, NodeJs, Typescript, and AWS.',
        },
        {
          name: 'Fullstack Developer',
          company: 'Sky keys',
          desc: 'Built a grade checking app for students at my university using Flutter and Node.js.',
        },
      ],
    },
    {
      year: '2018',
      works: [
        {
          name: 'Lead Fullstack Developer',
          company: 'Beymart',
          desc: 'Worked on an e-commerce android app with Flutter and Node.js.',
        },
      ],
    },
  ];
  const skills = [
    {
      name: 'React',
      bgColor: '#eef8ff',
      icon: images.react,
    },
    {
      name: 'Flutter',
      bgColor: '#eef8ff',
      icon: images.flutter,
    },
    {
      name: 'Node',
      bgColor: '#d8eae1',
      icon: images.node,
    },
    {
      name: 'AWS',
      bgColor: '#bdbdbd22',
      icon: images.amazon,
    },
    {
      name: 'Firebase',
      bgColor: '#bdbdbd22',
      icon: images.firebase,
    },
    {
      name: 'API',
      bgColor: '#bdbdbd22',
      icon: images.api,
    },
    {
      name: 'Docker',
      bgColor: '#eef8ff',
      icon: images.docker,
    },
    {
      name: 'Kubernetes',
      bgColor: '#eef8ff',
      icon: images.kubernetes,
    },
    {
      name: 'Postgresql',
      bgColor: '#eef8ff',
      icon: images.postgresql,
    },
    {
      name: 'Mongodb',
      bgColor: '#d8eae1',
      icon: images.mongodb,
    },
    {
      name: 'Typescript',
      bgColor: '#eef8ff',
      icon: images.typescript,
    },
    {
      name: 'Javascript',
      bgColor: '#bdbdbd22',
      icon: images.javascript,
    },
    {
      name: 'GraphQl',
      bgColor: '#ffe6e6',
      icon: images.graphql,
    },
    {
      name: 'Git',
      bgColor: '#ffe6e6',
      icon: images.git,
    },
    {
      name: 'Material',
      bgColor: '#eef8ff',
      icon: images.mu5,
    },
    {
      name: 'HTML',
      bgColor: '#ffe6e6',
      icon: images.html,
    },
    {
      name: 'Css',
      bgColor: '#eef8ff',
      icon: images.css,
    },
    {
      name: 'Figma',
      bgColor: '#ffe6e6',
      icon: images.figma,
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex" key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
