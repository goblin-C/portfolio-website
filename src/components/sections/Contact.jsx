import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
export const Contact = () => {
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      message: ''
  })

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
      alert('Message sent successfully', result.text)
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      })
    } catch (error){
      console.log(error)
      alert('Error sending message', error.text)
    }

  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                value={formData.first_name}
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5- transition-colors"
                placeholder="First Name"
                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="lastname"
                id="lastname"
                required
                value={formData.last_name}
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5- transition-colors"
                placeholder="Last Name"
                onChange={(e) => setFormData({...formData, last_name: e.target.value})}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="email"
                id="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5- transition-colors"
                placeholder="Email"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5- transition-colors"
                placeholder="Hey Let's Connect!"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> Send </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
