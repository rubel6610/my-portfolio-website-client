import React from "react";
import { CgMail, CgPhone } from "react-icons/cg";

const Contact = () => {
  const [result, setResult] = React.useState("");


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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left - Contact Form */}
        <div className="bg-base-100 shadow-lg rounded-xl p-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
          <div className="text-success text-center py-4"> {result}</div>
        </div>

        {/* Right - Contact Info */}
        <div className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col justify-center">
          <h2 className="text-3xl text-center font-bold text-primary mb-6">
            Let’s connect
          </h2>
          <div className="space-y-4">
            <p>
              If you have any opportunity, suggestion, or feedback, I would
              love to hear from you! Please feel free to reach out to me using
              the contact form or my email address.
            </p>
            <div className="flex items-center gap-3">
              <CgMail className="text-primary" />
              <span>rubelhosen1310@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <CgPhone className="text-primary" />
              <span>Phone/Whatsapp: +8801820220509</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
