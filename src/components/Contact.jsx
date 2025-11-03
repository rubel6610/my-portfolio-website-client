import React, { useEffect } from "react";
import { CgMail, CgPhone } from "react-icons/cg";
import { motion } from "framer-motion";
import AOS from 'aos';

const Contact = () => {
  const [result, setResult] = React.useState("");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ae977be-29fd-4036-b0f5-9a263a29d729");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="w-full bg-base-200 px-4 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left - Contact Form */}
          <motion.div 
            className="bg-base-100 shadow-lg rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="input input-bordered w-full"
                whileFocus={{ scale: 1.02 }}
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full"
                whileFocus={{ scale: 1.02 }}
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="textarea textarea-bordered w-full"
                whileFocus={{ scale: 1.02 }}
                data-aos="fade-up"
                data-aos-delay="300"
              ></motion.textarea>
              <motion.button 
                type="submit" 
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Send Message
              </motion.button>
            </form>
            <div className="text-success text-center py-4" data-aos="fade-up" data-aos-delay="500"> {result}</div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div 
            className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-aos="fade-left"
          >
            <h2 className="text-2xl text-center font-bold text-primary mb-6">
              Let's Connect
            </h2>
            <div className="space-y-6">
              <p className="text-center" data-aos="fade-up" data-aos-delay="100">
                If you have any opportunity, suggestion, or feedback, I would
                love to hear from you! Please feel free to reach out to me using
                the contact form or my email address.
              </p>
              
              <div className="flex flex-col gap-4">
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-base-200 rounded-lg"
                  whileHover={{ x: 10 }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="p-3 bg-primary rounded-full">
                    <CgMail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>rubelhosen1310@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-base-200 rounded-lg"
                  whileHover={{ x: 10 }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="p-3 bg-primary rounded-full">
                    <CgPhone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone/WhatsApp</p>
                    <p>+8801820220509</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="pt-4">
                <p className="text-center font-semibold" data-aos="fade-up" data-aos-delay="400">Feel free to connect with me on social platforms:</p>
                <div className="flex justify-center gap-4 mt-4">
                  <motion.a
                    href="https://linkedin.com/in/rubelhosen13"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    data-aos="flip-left"
                    data-aos-delay="500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/rubel6610"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/arfanahmedrubel10"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    data-aos="flip-left"
                    data-aos-delay="700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;