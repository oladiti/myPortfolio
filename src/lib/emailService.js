import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const isConfigured = Boolean(
  EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey
);

if (isConfigured) {
  emailjs.init(EMAILJS_CONFIG.publicKey);
}

const sendEmail = (templateParams) => {
  if (!isConfigured) {
    return Promise.reject(new Error('EmailJS is not configured'));
  }
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  );
};

export default sendEmail;