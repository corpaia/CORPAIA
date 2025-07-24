import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const JobApplicationForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.resume) {
      toast.error("Email and resume are required.");
      return;
    }

    setIsSubmitting(true);

    // Convert resume file to Base64
    const reader = new FileReader();
    reader.readAsDataURL(form.resume);

    reader.onload = async () => {
      const base64Resume = reader.result;

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        position: form.position,
        message: form.message,
        resume_base64: base64Resume,
        resume_filename: form.resume.name,
      };

      emailjs
        .send(
          "service_3orppc8",
          "template_1bf711m",
          templateParams,
          "NDyxoc4YhUqGv0f9T"
        )
        .then(
          () => {
            toast.success("🎉 Application submitted!");
            setForm({
              name: "",
              email: "",
              phone: "",
              position: "",
              message: "",
              resume: null,
            });
            formRef.current.reset();
            setIsSubmitting(false);
          },
          (error) => {
            toast.error("Something went wrong. Try again.");
            console.error(error);
            setIsSubmitting(false);
          }
        );
    };

    reader.onerror = () => {
      toast.error("Failed to read resume file.");
      setIsSubmitting(false);
    };
  };

  return (
    <div className="max-w-xl mx-auto mt-42 mb-10 bg-[#111] p-6 rounded-xl border border-[#333] shadow-md">
      <h2 className="text-2xl font-bold text-white mb-5 text-center">
        Apply for a Role
      </h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1">
          <label className="text-white">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#a43f97] outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#a43f97] outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="bg-black border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#a43f97] outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white">Position You're Applying For</label>
          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#a43f97] outline-none"
          >
            <option value="" disabled>
              Select a Position
            </option>
            <option value="Video Editor">Video Editor</option>
            <option value="Content Writer">Content Writer</option>
            <option value="Graphic Designer">Graphic Designer</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white">Tell us why you're a good fit</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="bg-black border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#a43f97] outline-none"
            placeholder="Your message..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white">Upload Resume (PDF/DOC)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="text-white file:bg-[#a43f97] file:border-none file:px-4 file:py-2 file:rounded-md file:text-white file:cursor-pointer"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#a43f97] hover:bg-[#923a87] transition-all duration-300 text-white font-semibold px-5 py-2.5 rounded-md w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
