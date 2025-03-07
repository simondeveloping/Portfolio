"use client";
import PrivateRoute from "../../../PrivateRoute";
import { useState } from "react";
export default function EmailReminder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    currentDate: new Date(),
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMail = async () => {
    const response = await fetch("/api/sendEmailNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
  };
  return (
    <PrivateRoute>
      <div>
        <div className="h-screen w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col bg-white p-10 rounded-lg shadow-2xl">
              <h1 className="text-2xl font-bold text-center">Email Reminder</h1>
              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-md"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-2 border border-gray-300 rounded-md"
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="p-2 border border-gray-300 rounded-md"
                  onChange={handleChange}
                ></textarea>
                <button
                  className="p-2 bg-blue-500 text-white rounded-md"
                  onClick={sendMail}
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
