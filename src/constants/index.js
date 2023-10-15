import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'React JS Developer',
    icon: reactjs,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
 
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
 
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },

];
const education = [
  {
    title: 'BE - EEE',
    company_name: 'K Ramakrishanan Collage Of Engineering Samayapurem Trichy',
    mark:'8.22 CGPA',
    icon:  kelhel,
    iconBg: '#333333',
    date: 'Aug 2019 - July 2022',
  },
  {
    title: 'Diploma',
    company_name: 'Lalgudi Co-Operative Polytechnic Collage Lalgudi Trichy',
    mark:'74 % Percentage',
    icon:  coverhunt,
    iconBg: '#333333',
    date: 'Jun 2014 - May 2017',
  },
  {
    title: 'SSLC',
    company_name: 'ST-Xavier Higher Secondary School Purathakudi Trichy',
    mark:'64 % Percentage',
    icon:  space,
    iconBg: '#333333',
    date: 'Jun 2013 - Apr 2014',
  
  }
]
const experiences = [
  {
    title: 'Production line leader',
    company_name: 'Hi Lex India Pvt ltd Sirpurembuther Chennai',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2017 - Aug  2019 - {  2Years } ',
  },
  {
    title: 'React js Developer',
    company_name: 'Srk it solutions Pvt ltd  Chorempet  Chennai',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2023 - july 2023 - { 4MONTHS }',
  },
  {
    title: 'Software Developer',
    company_name: 'Tenacitics India Pvt ltd Nungambakkam chennai',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
  },


];

const projects = [
 
  {
    id: 'project-2',
    name: 'CRUD',
    description:
      'A Crud list app that add, remove , edit, and more sumall usecase projects also added displays by using different trchstacks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/RagunathRa/NewProjects',
    demo: 'https://newprojects-8.netlify.app/',
   
  },

  {
    id: 'project-4',
    name: 'World Marketch',
    description: `With I worked in a  E-commerce application that allows users to search for any product to buy it or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '#',
    demo: 'https://www.worldmarketch.com/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];


const contect = [
  {
    linkedin:'https://www.linkedin.com/in/dev-ragunath-r/'
  }
]
export { services, technologies, experiences, projects, education , contect};
