"use client";
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
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
  };
  return (
    <div>
      <div className="flex h-[80vh] justify-center items-center text-black ">
        <div className="flex flex-row w-[80vw]">
          <div className="w-[30vw] h-4xl">
            <h1 className="text-4xl">Email Reminder</h1>
            <p>This is a reminder for anything you want</p>
          </div>
          <div className="w-[70vw] flex justify-center text-white flex-grow">
            <div className="w-[40vw] border rounded-xl border-gray-300 h-auto bg-gray-900 flex flex-col gap-4">
              <div className="h-[7vh] bg-gray-300 rounded-tl-xl rounded-tr-xl border-gray-300"></div>
              <div className="p-4 flex gap-20 flex-wrap">
                <div className="flex flex-row justify-between w-full h-[4vh] h-auto flex-wrap">
                  <div className="flex flex-col gap-2">
                    First Name
                    <input
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border border-gray-300 bg-gray-700 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:border-blue-500 w-[15vw] rounded-xl p-4"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2">
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name (optional)"
                      className="border border-gray-300 bg-gray-700 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:border-blue-500 w-[15vw] rounded-xl p-4"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-[4vh]">
                  Email
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 bg-gray-700 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:border-blue-500 w-full rounded-xl p-4"
                  ></input>
                </div>
                <div className="flex flex-col gap-2 w-full h-[20vh]">
                  Message
                  <textarea
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-gray-300 bg-gray-700 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:border-blue-500 w-full rounded-xl p-4 h-[20vh]"
                  ></textarea>
                </div>
                <button
                  className="border border-gray-300 bg-gray-700 text-xl rounded-xl p-2"
                  type="submit"
                  onClick={sendMail}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
