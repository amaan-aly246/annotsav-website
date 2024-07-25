import React, { useState } from "react"
import { motion } from "framer-motion"
import { btnVariant } from "../constants/animations"
import sheetUrl from "../constants/sheetUrl"
function VolunteerForm() {
  const initialFormData = {
    name: "",
    email: "",
    number: "",
    message: "",
    formType: "VolunteerForm",
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
    <>
      <div>
        <section className="flex flex-col lg:flex-row lg:justify-around space-y-10 lg:space-y-0 mt-16 m-12 lg:mt-24">
          {/* tag line part */}
          <div className="text-5xl lg:text-6xl font-bold">
            <p>
              Share your 💡idea <br /> on how
            </p>
            <p>we can grow</p>
            <p className=" text-secondaryColor-4">Annotsav</p>
            <p className="text-secondaryColor-4">Movement</p>
          </div>
          {/* form input area  */}
          <form
            className="flex flex-col items-center lg:items-stretch"
            onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoFocus
              required
              value={formData.name}
              onChange={handleChange}
              className=" input p-2 w-full mb-2 "
            />
            <p className="grid grid-rows-1 grid-cols-2 gap-2 w-full">
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input p-2"
              />
              <input
                type="text"
                id="number"
                placeholder="Contact number"
                required
                value={formData.number}
                onChange={handleChange}
                className="input p-2"
              />
            </p>

            <textarea
              id="message"
              name="message"
              rows="5"
              cols="33"
              placeholder="Tell us what you want to do for the moment"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border-[.1em] rounded-sm border-black focus:outline-none w-full  resize-none mt-2"></textarea>
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
    </>
  )
}

export default VolunteerForm
