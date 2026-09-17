import { Layers, MonitorSmartphone, Server, Wrench } from 'lucide-react';

const services = [
  {
    name: "Full Stack Development",
    description: "Building complete MERN stack applications, from MongoDB databases and Node.js/Express APIs to polished React front-ends.",
    icon: <Layers size={28} className="text-white" />,
  },
  {
    name: "Frontend Development",
    description: "Creating visually appealing, responsive interfaces with React and Tailwind CSS that fit any screen size to reach global markets.",
    icon: <MonitorSmartphone size={28} className="text-white" />,
  },
  {
    name: "Backend & APIs",
    description: "Designing secure RESTful APIs and databases so your application runs fast, reliably, and scales as you grow.",
    icon: <Server size={28} className="text-white" />,
  },
  {
    name: "Web Maintenance",
    description: "Providing ongoing maintenance and support to keep your website running smoothly and securely.",
    icon: <Wrench size={28} className="text-white" />,
  },
];

export default services;