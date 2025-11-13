import React, { useState } from "react";
import { FileDown } from "lucide-react";

// Php Code start here
const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    dob: "",
    gender: "",
    class_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // ad the host link on here
      const res = await fetch(
        "http://localhost/samoon_backend/register_student.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setStatus("✔ " + data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          dob: "",
          gender: "",
          class_name: "",
          message: "",
        });
      } else {
        setStatus("✖ " + data.message);
      }
    } catch (err) {
      setStatus("Server error. Please try again.");
    }
  };

  return (
    // form start here
    <section className="pt-8">
      <h1 className="lg:text-4xl text-2xl font-bold text-center Heading-text">
        Samoon Adarsh Vidhyalaya - Student{" "}
        <span className="underline decoration-4 decoration-[#7FBA51]">
          Registration Form
        </span>
      </h1>

      <div className="lg:px-2 px-5 py-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-6xl mx-auto Heading-text"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>

            <div>
              <label>Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@yourdomain.com"
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>

            <div>
              <label>Contact No *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="91-XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>

            <div>
              <label>Your Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="New Delhi, Mumbai"
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>

            <div>
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
              >
                <option value="">--Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label>Select Class *</label>
            <select
              name="class_name"
              value={formData.class_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-2"
            >
              <option value="">--Select Class--</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
            </select>
          </div>

          <div>
            <label>Resume Content / Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Your Message"
              className="w-full border border-gray-300 rounded-md p-2 mt-2 h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center text-green-700 font-medium">
            {status}
          </p>
        )}
      </div>

      {/* PDF Download here and ad new PDF here */}
      <div className="flex justify-center py-10">
        <a
          href="/public/RagistrationForm/SAV_OSLA_ADMISSION_FORM.pdf"
          download="Student_Registration_Form.pdf"
          className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:shadow-md hover:bg-gray-100 transition"
        >
          <FileDown className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-gray-700">Download Form</span>
        </a>
      </div>
    </section>
  );
};

export default StudentRegistration;
