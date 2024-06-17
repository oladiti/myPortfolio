import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedComponent = ({ children }) => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000">
            {children}
        </div>
    );
};

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
});

export default AnimatedComponent;