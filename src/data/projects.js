import Ladyspride from "../assets/ladyspride.org.jpg";
import Hotel from "../assets/hotel-lawa7.jpg";
import MyPort from "../assets/my-port.jpg";
import WeatherApp from "../assets/weather-application (3).jpg";

const projects = [
  {
    id: 1,
    img: Ladyspride,
    name: "Lady's Pride Hairdresser Salon",
    demo: "https://ladyspride.netlify.app",
    code: "https://github.com/oladiti/ladyspride",
    description: "A hairdresser salon website built with HTML, CSS, and JavaScript.",
    style: {
      shadow: "shadow-[#3498AB]",
      cover: "from-[#3498AB]",
      display: "hidden group-hover:flex",
    },
  },
  {
    id: 2,
    img: Hotel,
    name: "Hotel Lawa",
    demo: "https://hotellawa.netlify.app",
    code: "https://github.com/oladiti/hotellawa",
    description: "A hotel website for room reservations built with HTML, CSS, and JavaScript.",
    style: {
      shadow: "shadow-[#F8FAFC]",
      cover: "from-[#F8FAFC]",
      display: "hidden group-hover:flex",
    },
  },
  {
    id: 3,
    img: WeatherApp,
    name: "Weather App",
    demo: "https://oladiti-weather-application.netlify.app",
    code: "https://github.com/oladiti/Weather-Application",
    description: "A weather application built with React.js and Tailwind CSS to check current weather conditions.",
    style: {
      shadow: "shadow-[#011F3F]",
      cover: "from-[#011F3F]",
      display: "hidden group-hover:flex",
    },
  },
  {
    id: 4,
    img: MyPort,
    name: "Portfolio",
    demo: "https://oladiti-abiodun.netlify.app",
    code: "https://github.com/oladiti/myPortfolio",
    description: "A portfolio website built with React.js, CSS, and Tailwind CSS.",
    style: {
      shadow: "shadow-[#763145]",
      cover: "from-[#763145]",
      display: "hidden group-hover:flex",
    },
  },
];

export default projects;
