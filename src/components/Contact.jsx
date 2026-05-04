import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import { Person, GMail, Chat, Submit } from './Icons';
import con from '../assets/contact.png';
import swal from 'sweetalert';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

const FormIcon = ({ name }) => (
  <span className={`peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 ${name === "chat" ? "top-[0.8rem]" : "top-1/2 -translate-y-1/2"}`}>
    {name === "person" && <Person />}
    {name === "gmail" && <GMail />}
    {name === "chat" && <Chat />}
  </span>
);

const ErrorBox = ({ message }) => (
  <div className="text-sm min-h-[1.3rem] text-red-600 px-3">
    {message}
  </div>
);

const validate = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = 'Please enter your name';
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email address';
  if (!formData.message.trim()) errors.message = 'Please enter a message';
  return errors;
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          formData
        );
        swal({
          icon: "success",
          title: "Your message has been sent!",
          text: "I will get back to you as soon as possible",
          button: "Okay",
        });
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      } catch (error) {
        console.error('EmailJS Error:', error);
        swal({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later",
          button: "Okay",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div name="Contact" className="mb-56 h-full min-h-screen w-full flex max-xs:-mt-16 items-center md:pt-4 lg:pt-36 xl:pt-4">
      <div className="section max-xs:px-5 text-gray-900 max-xs:pt-28 xs:pt-36 xl:-mt-4">
        <div className="md:-ml-2 sm:-ml-2 lg:-ml-3">
          <SectionHeading heading="Contact" secondHeading="Fill the form to get in touch with me" />
        </div>
        <div className="flex justify-between max-md:flex-col gap-10 max-sm:px-4">
          <img
            src={con}
            alt=""
            style={{ width: 800, height: 410 }}
            className="md:w-80 lg:w-fit lg:-ml-1 xl:w-fit md:h-80 max-xs:h-56 xs:h-64 sm:px-2"
          />
          <form onSubmit={handleSubmit} className="flex gap-3 flex-col w-full md:w-1/2">
            <div className="sm:px-2">
              <div className="pb-3">
                <div className="w-full">
                  <div className="relative dark:bg-black">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="peer dark:text-white form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <FormIcon name="person" />
                  </div>
                  <ErrorBox message={errors.name} />
                </div>
                <div className="w-full">
                  <div className="relative dark:bg-black">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="peer dark:text-white form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormIcon name="gmail" />
                  </div>
                  <ErrorBox message={errors.email} />
                </div>
              </div>
              <div className="w-full">
                <div className="relative dark:bg-black h-44">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="10"
                    cols="20"
                    className="h-44 peer dark:text-white form-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <FormIcon name="chat" />
                </div>
                <ErrorBox message={errors.message} />
              </div>
            </div>
            <button
              disabled={isSubmitting}
              className={`mx-auto hover:text-blue-800 flex group text-black bg-aba rounded-md font-semibold px-10 py-3 xl:py-3 hover:scale-[1.02] duration-500 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : "Let's Connect"}
              <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out">
                <Submit />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
