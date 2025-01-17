"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  Mailbox,
  MailIcon,
  MessageCircle,
  MessageSquare,
  Send,
} from "lucide-react";

const ContactPage = () => {
  // const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e);

    e.target.reset();
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://facebook.com/yourusername",
      color: "red",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/yournumber",
      color: "green",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:your@email.com",
      color: "blue",
    },
  ];

  return (
    <div className="container flex flex-col items-center border-y border-y-pencil/10 bg-background-brighter dark:from-slate-950 dark:to-slate-900">
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 max-md:grid-cols-1"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-12">
              <h1 className="text-xl font-medium mb-4 text-pencil">
                Drop a Message!
              </h1>
              <p className="text-pencil/80 tracking-wide">
                Drop me a message and I&apos;ll get back to you as soon as possible!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6 max-sm:gap-4 mb-12">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center max-sm:w-full rounded group"
                >
                  <span
                    className={`p-3 px-4 h-12 flex items-center justify-start aspect-square gap-3 rounded-l text-pencil transition-all bg-${link?.color}-500/90 group-hover:opacity-80`}
                  >
                    {link.icon}
                  </span>
                  <p
                    className={`p-3 px-8 lg:px-20 h-12 flex items-center justify-start w-full gap-3 rounded-r text-pencil transition-all bg-${link.color}-500/10 group-hover:opacity-80`}
                  >
                    {link.name}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 text-pencil p-8 max-md:p-6 max-sm:p-4 shadow-lg bg-background border border-pencil/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
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
                className="w-full px-1 py-2 bg-background outline-none transition-all text-sm leading-none font-medium resize-none"
                placeholder=". . ."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-500/90 text-white font-medium rounded-sm shadow-lg flex items-center justify-center gap-2 transition-all group"
              whileTap={{ scale: 0.98 }}
            >
              <MailIcon
                className="w-5 h-5 group-hover:-rotate-6"
                strokeWidth={1.8}
              />
              Post Letter
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
