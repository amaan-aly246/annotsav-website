import React, { useState } from "react"
import { motion } from "framer-motion"
import { btnVariant } from "../constants/animations"
import sheetUrl from "../constants/sheetUrl"

function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    formType: "ContactForm",
  }
  const [formData, setFormData] = useState(initialFormData)
  const [submit, setSubmit] = useState('Submit');
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setSubmit('Submitting...')
      const response = await fetch(sheetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      })
      const data = await response.text()
      alert(`${data} ☘️ `)
      setFormData(initialFormData);
    } catch (error) {
      console.log(error)
    }
    finally{
      setSubmit("Submit");
    }
  }

  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center lg:justify-between m-10 lg:mt-24">
        <div className="text-5xl lg:text-6xl font-bold p-20">
          <p>Join the</p>
          <p className="text-secondaryColor-4 text-6xl lg:text-7xl">
            Movement 🪴
          </p>
        </div>
        <form
          className="flex flex-col items-center lg:items-stretch"
          onSubmit={handleSubmit}
          method="post"
          id="ContactForm">
          <input
            type="text"
            id="name"
            placeholder="Name"
            autoFocus
            required
            className="input p-2 w-full mb-2"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="grid grid-rows-1 grid-cols-2 gap-2">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input p-2"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="number"
              placeholder="Contact number"
              required
              className="input p-2"
              value={formData.number}
              onChange={handleChange}
            />
          </p>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            required
            className="input p-2 w-full mb-2 mt-2"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="33"
            placeholder="Tell us what you want to do for the movement"
            className="p-2 border-[.1em] rounded-sm border-black focus:outline-none w-full resize-none mt-2"
            value={formData.message}
            onChange={handleChange}
          />
          <motion.button
            className="bg-primaryColor-5 text-yellow-50 rounded-md lg:rounded-full w-44 lg:w-28 h-8 text-[16px] px-4 relative right-0 lg:-right-[70%] mt-4"
            variants={btnVariant}
            whileHover={"hover"}
            whileTap={"tap"}
            type="submit">
           {submit}
          </motion.button>
        </form>
      </section>
    </div>
  )
}

export default ContactForm
