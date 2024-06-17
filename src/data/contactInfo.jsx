import LinkedIn, { GitHub, GMail, Resume } from "../components/Icons";
import ResumeLink from "../assets/ola.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://#",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/oladiti",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:oladitiabiodun86@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    }
    
];

export default contactInfo;