import {
  Asterisk,
  AtSign,
  Check,
  HeartCrack,
  Instagram,
  MailCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [showFailedToast, setShowFailedToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      setShowFailedToast(true);
      setTimeout(() => setShowFailedToast(false), 3000);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xoqgnjyb", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setShowFailedToast(true);
        setTimeout(() => setShowFailedToast(false), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowFailedToast(true);
      setTimeout(() => setShowFailedToast(false), 3000);
    }
  };

  return (
    <div className="overflow-hidden md:px-[5%] bg-background relative border-t border-t-pencil/15">
      <div className="h-full w-full absolute top-0 left-0 opacity-20 contrast-150 brightness-95">
        <Image
          src={"/paper.avif"}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="py-24 pb-28 max-md:py-16 relative z-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-10 max-md:mb-8 max-md:px-[5%]">
              <h1 className="contact-section flex items-center gap-1 text-2xl font-medium mb-2 text-pencil font-yellow-tail">
                <Asterisk size={30} strokeWidth={1.9} />
                Drop a Message.
              </h1>
              <p className="text-pencil/80">
                Drop me a message and I&apos;ll get back to you ASAP!
              </p>
            </div>

            {/* Social Links tablets and above */}
            <motion.div
              className="flex flex-col gap-4 mb-8 w-full max-md:pl-[5%] max-sm:hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { x: 300 },
                visible: { x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <Link
                href={"https://www.instagram.com/safizance/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center max-sm:w-full rounded group hover:translate-x-2 transition-all"
              >
                <span
                  className={`px-2 h-11 flex items-center justify-center aspect-square gap-3 rounded-l text-pencil/90 transition-all bg-red-400/90 group-hover:opacity-80`}
                >
                  <Instagram />{" "}
                </span>
                <p
                  className={`px-6 h-11 flex items-center justify-start w-full gap-3 max-sm:rounded-r text-pencil font-clash transition-all bg-red-500/10 group-hover:opacity-80`}
                >
                  Message me on Instagram
                </p>
              </Link>
              <Link
                href={"https://wa.me/923283490764"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center max-sm:w-full rounded group hover:translate-x-2 transition-all"
              >
                <span
                  className={`px-2 h-11 flex items-center justify-center aspect-square gap-3 rounded-l text-pencil/90 transition-all bg-green-400/90 group-hover:opacity-80`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    fill="rgb(40 32 25 / 0.9)"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>{" "}
                  </svg>
                </span>
                <p
                  className={`px-6 h-11 flex items-center justify-start w-full gap-3 max-sm:rounded-r text-pencil font-clash transition-all bg-green-500/10 group-hover:opacity-80`}
                >
                  Message me on WhatsApp
                </p>
              </Link>
              <Link
                href={"mailto:info@saifanees11@gmail.com"}
                rel="noopener noreferrer"
                className="flex items-center max-sm:w-full rounded group hover:translate-x-2 transition-all"
              >
                <span
                  className={`p-2 h-11 flex items-center justify-center aspect-square gap-3 rounded-l text-pencil/90 transition-all bg-blue-400/90 group-hover:opacity-80`}
                >
                  <AtSign />{" "}
                </span>
                <p
                  className={`px-6 h-11 flex items-center justify-start w-full gap-3 max-sm:rounded-r text-pencil font-clash transition-all bg-blue-500/10 group-hover:opacity-80`}
                >
                  Send an Email{" "}
                </p>
              </Link>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="max-md:px-[5%] w-full">
            <div className="relative h-full w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.5 }}
                variants={{
                  hidden: { rotate: "0deg" },
                  visible: { rotate: "1.5deg" },
                }}
                className="space-y-6 text-pencil opacity-80 p-8 max-md:p-6 max-sm:p-4 shadow-lg bg-background-darker border border-pencil/20 absolute h-full w-full z-0 left-2 bottom-2"
              ></motion.div>
              <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="space-y-6 text-pencil p-8 max-md:p-6 max-sm:p-4 shadow-lg bg-background border border-pencil/20 z-20 relative"
              >
                <div className="flex items-center max-sm:items-start gap-2 text-nowrap max-sm:flex-col border-b border-pencil/50">
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-pencil/80 dark:text-slate-300"
                  >
                    My name is
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-1 py-2 bg-background outline-none transition-all text-base font-medium"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex items-center max-sm:items-start gap-2 text-nowrap max-sm:flex-col border-b border-pencil/50">
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-pencil/80 dark:text-slate-300"
                  >
                    Here is my email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-1 py-2 bg-background outline-none transition-all text-base font-medium"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex items-start gap-2 text-nowrap max-sm:flex-col border-b border-pencil/50">
                  <label
                    htmlFor="message"
                    className="text-base font-medium text-pencil/80 dark:text-slate-300"
                  >
                    And message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-1 py-2 bg-background outline-none transition-all text-sm leading-none font-medium resize-none"
                    placeholder=". . ."
                  />
                </div>

                <button
                  type="submit"
                  className="w-fit px-6 py-3 bg-emerald-600/90 hover:bg-emerald-600/80 text-white font-medium rounded-sm shadow-lg flex items-center justify-center gap-2 transition-all group font-clash"
                >
                  <MailCheck
                    className="group-hover:-rotate-3"
                    strokeWidth={1.8}
                    size={18}
                  />
                  Post Letter
                </button>
              </motion.form>
            </div>
          </div>
        </div>
        {/* Social Links - phones*/}
        <motion.div
          className="flex flex-col gap-4 mt-8 w-full max-md:pl-[5%] sm:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { x: 300 },
            visible: { x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href={"https://www.instagram.com/safizance/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center max-sm:w-full rounded group hover:translate-x-2 transition-all"
          >
            <span
              className={`px-2 h-11 flex items-center justify-center aspect-square gap-3 rounded-l text-pencil/90 transition-all bg-red-400/90 group-hover:opacity-80`}
            >
              <Instagram />{" "}
            </span>
            <p
              className={`px-6 h-11 flex items-center justify-start w-full gap-3 max-sm:rounded-r text-pencil font-clash transition-all bg-red-500/10 group-hover:opacity-80`}
            >
              Message me on Instagram
            </p>
          </Link>
          <Link
            href={"https://wa.me/923283490764"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center max-sm:w-full rounded group hover:translate-x-2 transition-all"
          >
            <span
              className={`px-2 h-11 flex items-center justify-center aspect-square gap-3 rounded-l text-pencil/90 transition-all bg-green-400/90 group-hover:opacity-80`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                fill="rgb(40 32 25 / 0.9)"
                height="24"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>{" "}
              </svg>
            </span>
            <p
              className={`px-6 h-11 flex items-center justify-start w-full gap-3 max-sm:rounded-r text-pencil font-clash transition-all bg-green-500/10 group-hover:opacity-80`}
            >
              Message me on WhatsApp
            </p>
          </Link>
          <Link
            href={"mailto:info@saifanees11@gmail.com"}
            rel="noopener noreferrer"
            className="flex items-center max-sm:w-full rounded group hover:translate-x-2 transition-all"
          >
            <span
              className={`p-2 h-11 flex items-center justify-center aspect-square gap-3 rounded-l text-pencil/90 transition-all bg-blue-400/90 group-hover:opacity-80`}
            >
              <AtSign />{" "}
            </span>
            <p
              className={`px-6 h-11 flex items-center justify-start w-full gap-3 max-sm:rounded-r text-pencil font-clash transition-all bg-blue-500/10 group-hover:opacity-80`}
            >
              Send an Email{" "}
            </p>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className={`${
          showToast ? "right-3" : "-right-full scale-0"
        } transition-all font-medium fixed bottom-3 flex gap-2 items-center text-green-900 bg-green-300 rounded-md border border-green-600 p-3 px-4 z-20`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showToast ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Check /> Message received. We&apos;ll get back to you shortly!
      </motion.div>

      <motion.div
        className={`${
          showFailedToast ? "right-3" : "-right-full scale-0"
        } transition-all font-medium fixed bottom-3 flex gap-2 items-center text-rose-900 bg-rose-300 rounded-md border border-rose-600 p-3 px-4 z-20`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showFailedToast ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeartCrack /> Oops! Please try again.
      </motion.div>
    </div>
  );
};

export default ContactPage;
