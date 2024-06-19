
import Ladyspride from "../assets/ladyspride.org.jpg"
import Hotel from "../assets/hotel-lawa7.jpg"
import MyPort from "../assets/my-port.jpg"
import myweatherapp from "../assets/weather-application (3).jpg"




const projects = [
    
    {
        img: Ladyspride,
        name: "ladys pride hairdresser salon",
        demo: "https://www.ladyspride.org",
        code: "https://github.com/oladiti/ladyspride",
        description: "An hairdresser salon, built with Html, Css and Javascript.",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        
        }
    },
    {
        img: Hotel,
        name: "Hotel lawa",
        demo: "https://www.hotellawa.net",
        code: "https://github.com/oladiti/hotellawa",
        description: "Hotel lawa is an hotel website for room reservation built with Html, Css and Javascript",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    
    {
        img: myweatherapp,
        name: "weather-app",
        demo: "https://oladiti-weather-application.netlify.app",
        code: "https://github.com/oladiti/Weather-Application",
        description: "this is my weather application built with React Js and Tailwind CSS in other to check your current weather condition.",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    
    {
        img: MyPort,
        name: "Portfolio",
        demo: "https://oladiti-abiodun.netlify.app",
        code: "https://github.com/oladiti/myPortfolio",
        description: "This is my portfolio website built with React js, Css and Tailwind Css",
        style: {
            shadow: "shadow-[#763145]",
            cover: "from-[#763145]",
            display: " hidden group-hover:flex"
        }
    },
]
export default projects;