import Webdev from '../assets/cross-platform-icon.png';
import Graphics from '../assets/art-icon.png';
import Search from '../assets/website-seo-icon.png';
import Web from '../assets/it-icon.png';

const services = [
  {
    name: "Full Stack Development",
    description: "Building complete MERN stack applications, from MongoDB databases and Node.js/Express APIs to polished React front-ends.",
    img: Webdev,
  },
  {
    name: "Frontend Development",
    description: "Creating visually appealing, responsive interfaces with React and Tailwind CSS that fit any screen size to reach global markets.",
    img: Graphics,
  },
  {
    name: "Backend & APIs",
    description: "Designing secure RESTful APIs and databases so your application runs fast, reliably, and scales as you grow.",
    img: Search,
  },
  {
    name: "Web Maintenance",
    description: "Providing ongoing maintenance and support to keep your website running smoothly and securely.",
    img: Web,
  },
];

export default services;
