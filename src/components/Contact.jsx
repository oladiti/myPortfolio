import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeading from './SectionHeading'
import { Person, GMail, Chat, Submit } from './Icons'
import con from '../assets/contact.png'
import swal from 'sweetalert';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // const form = useRef(null); // Declare form reference

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message
    };



    const errors = validate(formData);

    if (Object.keys(errors).length === 0) {
      emailjs.send('service_2o7rdvt', 'template_jr7c6pl', formData, "Dp-e8nofpNmPIxcvB")
        .then((response) => {
          console.log(response);
          // Handle success
          swal({
            icon: "success",
            title: "Your message has been sent!",
            text: "I will get back to you as soon as possible",
            icon: "success",
            button: "Okay",
          });
          resetForm(); // Reset form data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
          swal({
            icon: "success",
            title: "Something went wrong",
            text: "Please try again later",
            icon: "error",
            button: "Okay",
          });
        });
    } else {
      setErrors(errors);
    }
  };


  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors('');
  };

  const validate = (formData) => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Please enter your name';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message) {
      errors.message = 'Please enter a message';
    }

    return errors;
  };

  return (
    <div name="Contact" className=' mb-16 h-full min-h-screen w-full flex items-center md:pt-28 lg:pt-36  max-xs:pt-24'>
      <div className='section  text-gray-900'>
        <div className='md:-ml-2 sm:-ml-2 lg:-ml-3'>
          <SectionHeading heading="Contact" secondHeading="Fill the form to get in touch with me" />
        </div>
        <div className='flex justify-between max-md:flex-col gap-10  max-sm:px-4'>

          <img src={con} alt="" style={{ width: 800, height: 410 }} className='md:w-80  lg:w-fit lg:-ml-1 xl:w-fit md:h-80 max-xs:h-56 xs:h-64 sm:px-2' />

          <form onSubmit={handleSubmit} className='flex gap-3 flex-col w-full md:w-1/2'>
            <div className='sm:px-2'>
              <div className=' pb-3'>
                <div className=" w-full  ">
                  <div className='relative  dark:bg-black'>
                    <input type="text" name="name" placeholder="Enter Your Name" className={`peer dark:text-white form-input ${errors.name !== "" && ""}`} value={name} onChange={(event) => setName(event.target.value)} />
                    <FormIcon name="person" />
                  </div>
                  <ErrorBox message={errors.name} />
                </div>
                <div className="w-full">
                  <div className="relative  dark:bg-black">
                    <input type="email" name="email" placeholder="Enter Your Email" className={`peer dark:text-white form-input ${errors.email !== "" && ""}`} value={email} onChange={(event) => setEmail(event.target.value)} />
                    <FormIcon name="gmail" />
                  </div>
                  <ErrorBox message={errors.email} />
                </div>
              </div>

              <div className=" w-full ">
                <div className="relative dark:bg-black h-44" >
                  <textarea name="message" placeholder='Your Meaasge' rows="10" cols="20"
                    className={`h-44 peer dark:text-white form-input ${errors.message !== "" && ""}`} value={message} onChange={(event) => setMessage(event.target.value)} />
                  <FormIcon name="chat" />
                </div>
                <ErrorBox message={errors.message} />
              </div>
            </div>


            <button className=' mx-auto  hover:text-blue-800 flex  group text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-10 py-3 xl:py-3  hover:scale-[1.02] duration-500'>Let's Connect
              <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out"> <Submit />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;

const FormIcon = ({ name }) => {
  return (
    <span className={`peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 ${name === "chat" ? "top-[0.8rem]" : "top-1/2 -translate-y-1/2"}`}>
      {name === "person" && <Person />}
      {name === "gmail" && <GMail />}
      {name === "chat" && <Chat />}
    </span>
  )
}
const ErrorBox = ({ message }) => {
  return (
    <div className=' text-sm min-h-[1.3rem] text-red-600 px-3'>
      {message}
    </div>
  )
}
