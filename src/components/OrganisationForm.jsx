import React, { useState } from "react"
import { motion } from "framer-motion"
import { btnVariant } from "../constants/animations"
import sheetUrl from "../constants/sheetUrl"
const initialFormData = {
  name: "",
  company: "",
  email: "",
  number: "",
  designation: "",
  companySize: "",
  message: "",
  formType: "OrganisationForm",
}

function OrganisationForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [submit, setSubmit] = useState("Submit")
  const handleChange = (e) => {
    const { id, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleRangeChange = (e) => {
    const { id } = e.target
    const range = document.querySelector(`label[for="${id}"]`).textContent
    setFormData((prevData) => ({
      ...prevData,
      companySize: range,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setSubmit("Submitting...")
      const response = await fetch(sheetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      })
      const data = await response.text()
      alert(`${data} ☘️ `)
      setFormData(initialFormData)
    } catch (error) {
      console.log(error)
    } finally {
      setSubmit("Submit")
    }
  }

  return (
    <div>
      <section className="flex items-center lg:justify-around flex-col lg:flex-row space-y-10 lg:space-y-0 mx-10 mt-24 lg:mt-20">
        <div className="text-5xl lg:text-6xl font-bold w-full lg:w-max text-left pl-2 lg:pl-0">
          <p>Get Annotsav</p>
          <p>for your</p>
          <p className="text-secondaryColor-4">Organisation</p>
        </div>
        <form
          className="flex flex-col items-center lg:items-stretch"
          onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            autoFocus
            className="input p-2 w-full mb-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <p className="grid grid-rows-2 grid-cols-2 gap-2">
            <input
              type="text"
              id="company"
              placeholder="Company"
              className="input p-2"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="input p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="number"
              placeholder="Number"
              className="input p-2"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="designation"
              placeholder="Your designation"
              className="input p-2"
              value={formData.designation}
              onChange={handleChange}
            />
          </p>
          <details className="w-full text-xl my-2">
            <summary className="text-2xl mb-1 border-[1.4px] border-black p-2">
              Size of the Organisation
            </summary>
            <div className="flex flex-col border border-black">
              <span>
                <input
                  type="radio"
                  name="range"
                  id="range1"
                  className="mx-2"
                  onChange={handleRangeChange}
                />
                <label htmlFor="range1">1-10</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="range"
                  id="range2"
                  className="mx-2"
                  onChange={handleRangeChange}
                />
                <label htmlFor="range2">11-50</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="range"
                  id="range3"
                  className="mx-2"
                  onChange={handleRangeChange}
                />
                <label htmlFor="range3">51-100</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="range"
                  id="range4"
                  className="mx-2"
                  onChange={handleRangeChange}
                />
                <label htmlFor="range4">100+</label>
              </span>
            </div>
          </details>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="33"
            placeholder="MESSAGE"
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

export default OrganisationForm
