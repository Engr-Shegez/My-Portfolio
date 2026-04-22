import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/ContactExperience";
import RevealOnScroll from "../components/RevealOnScroll";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <RevealOnScroll>
          <TitleHeader
            title="Get in Touch and Let's Connect"
            sub="Have questions or ideas? Let's talk."
          />
        </RevealOnScroll>

        <div className="grid-12-cols mt-12 md:mt-16">
          <RevealOnScroll className="xl:col-span-5">
            <div className="surface-card rounded-[1.75rem] p-6 md:p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-6"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading} className="cta-wrapper">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? "Sending..." : "Send Message"}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="xl:col-span-7 min-h-96" y={18}>
            <div className="contact-stage">
              <ContactExperience />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
