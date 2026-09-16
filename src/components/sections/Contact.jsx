import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { GMail, Map } from '../ui/BrandIcons';
import swal from 'sweetalert';
import sendEmail from '../../lib/emailService';

const ErrorBox = ({ message }) => (
  <div className="text-sm min-h-[1.3rem] text-red-500 px-1">{message}</div>
);

const validate = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = 'Please enter your name';
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email address';
  if (!formData.message.trim()) errors.message = 'Please enter a message';
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await sendEmail(form);
        swal({
          icon: "success",
          title: "Your message has been sent!",
          text: "I will get back to you as soon as possible",
          button: "Okay",
        });
        setForm({ name: '', email: '', message: '' });
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
    <section name="Contact" className="section">
      <div className="section-content">
        <SectionHeading heading="Contact" secondHeading="Have a project in mind? Let's talk about it" />

        <div className="grid lg:grid-cols-5 gap-8" data-aos="fade-up">
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:oladitiabiodun86@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl glass shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-300">
                <GMail />
              </span>
              <div>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 break-all">oladitiabiodun86@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl glass shadow-card">
              <span className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <Map />
              </span>
              <div>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">127, Bamgbose Street, Lagos Island, Nigeria</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl gradient-border bg-gradient-dark">
              <p className="text-gray-300 font-medium">Let's build something amazing together. Reach out and let's get started!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 rounded-2xl glass shadow-card space-y-2">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input-field"
                value={form.name}
                onChange={handleChange}
              />
              <ErrorBox message={errors.name} />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input-field"
                value={form.email}
                onChange={handleChange}
              />
              <ErrorBox message={errors.email} />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                className="input-field resize-none"
                value={form.message}
                onChange={handleChange}
              />
              <ErrorBox message={errors.message} />
            </div>

            <button
              disabled={isSubmitting}
              className={`btn-primary w-full mt-4 ${isSubmitting ? 'opacity-60 cursor-not-allowed hover:scale-100' : ''}`}
            >
              {isSubmitting ? 'Sending...' : "Let's Connect"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;