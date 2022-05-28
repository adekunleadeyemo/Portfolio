//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/Blog.png';
import Project2 from './assets/img/projects/organiser.png';
import Project3 from './assets/img/projects/googleKeep.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/java.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/kotlin.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'blog',
    href: 'blog',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiLinkedin />,
    href: '',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'blog',
    category: 'Web deveopment',
    description: "This is a blog website, which is also interactive, as it allows users to make blog posts. this web application is implemented with EJS, NodeJs Express and MongoDB"

  },
  {
    id: '2',
    image: Project2,
    name: 'Organiser App',
    category: 'web development',
    description: "This application, is an organiser app, which keeps track of your todoLists. this wevb application is implemented with EJS, NodeJs Express and MongoDB"
  },
  {
    id: '3',
    image: Project3,
    name: 'googleKeep',
    category: 'Web development',
    description: "This is a clone of GoogleKeep web application, the web application is implemented with, Reactjs, NodeJs Express and MongoDB"
  }
];


// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];



// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have an inquiry?',
    subtitle: 'i am here to help.',
    description: 'Email me at kunleadeyemo@rocketmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Location',
    subtitle: 'Leicester, United Kingdom',
  },
];
