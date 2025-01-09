import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      alert(response.data.message);
      setFormData({ userName: '', userEmail: '', userMessage: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send the message. Please try again later.');
    }
  };

  return (
    <div className="bg-primary-light min-h-screen flex flex-col items-center px-5 py-10 sm:px-10">
      {/* Header Section */}
      <h1 className="text-3xl sm:text-5xl font-bold text-primary-dark mb-4 text-center">Contact Us</h1>
      <p className="text-sm sm:text-lg text-primary mb-6 text-center max-w-md sm:max-w-2xl">
        Reach out to MB Ultra Clean for all your cleaning needs! Call now, schedule online, or send us a message.
      </p>

      {/* Call-to-Actions */}
      <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6 mb-8 w-full">
        <a
          href="tel:+1234567890"
          className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-neutral-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
        >
          Call Now for an Estimate
        </a>
        <a
          href="/schedule"
          className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-neutral-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
        >
          Schedule Online
        </a>
        <a
          href="mailto:info@mbultraclean.com"
          className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-neutral-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
        >
          Email Us Directly
        </a>
      </div>

      {/* Contact Form */}
      <form
        className="w-full sm:w-3/4 md:w-1/2 bg-neutral-white p-6 sm:p-8 rounded-lg shadow-lg mb-8"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">Leave Us a Message</h3>
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          value={formData.userName}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Your Email"
          value={formData.userEmail}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <textarea
          name="userMessage"
          rows="5"
          placeholder="Your Message"
          value={formData.userMessage}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-primary text-neutral-white font-bold rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="w-full sm:w-3/4 md:w-1/2 bg-neutral-white p-6 sm:p-8 rounded-lg shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">How to Reach Us Directly</h3>
        <p className="text-sm sm:text-lg text-primary-dark mb-3 sm:mb-4">
          Phone: <a href="tel:+1234567890" className="text-accent font-bold">+1 (234) 567-890</a>
        </p>
        <p className="text-sm sm:text-lg text-primary-dark mb-3 sm:mb-4">
          Email: <a href="mailto:info@mbultraclean.com" className="text-accent font-bold">info@mbultraclean.com</a>
        </p>
        <p className="text-sm sm:text-lg text-primary-dark">
          Address: <span className="text-accent font-bold">123 Cleaning St, Myrtle Beach, SC 29577</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
