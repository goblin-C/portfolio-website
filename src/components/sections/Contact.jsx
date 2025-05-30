import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError(""); // Clear error message if all fields are filled

    try {
      console.log('event.target,',(event.target))
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        event.target,
        PUBLIC_KEY
      );
      alert("Message sent successfully", result.text);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error sending message", error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-[600px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="first_name"
              id="first_name"
              required
              value={formData.first_name}
              className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="First Name"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />

            <input
              type="text"
              name="last_name"
              id="last_name"
              required
              value={formData.last_name}
              className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Hey Let's Connect!"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              disabled={isSubmitting} // Disable the button while submitting
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
