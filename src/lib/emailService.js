import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const sendEmail = (templateParams) =>
  emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  );

export default sendEmail;
