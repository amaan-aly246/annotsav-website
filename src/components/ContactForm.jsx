import { motion } from "framer-motion"
import { btnVariant } from "../constants/animations"
function ContactForm() {
  return (
    <>
      <div className="">
        <section className="flex flex-col lg:flex-row items-center lg:justify-between m-24">
          {/* tag line part */}
          <div className="text-5xl lg:text-6xl font-bold p-20">
            <p>Join the</p>
            <p className="text-secondaryColor-4 text-6xl lg:text-7xl">Movement 🪴</p>
          </div>
          {/* form input area  */}
          <form className="flex flex-col items-center lg:items-stretch">
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoFocus
              required
              className=" input p-2 w-full mb-2 "
            />
            <p className="grid grid-rows-1 grid-cols-2 gap-2 ">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="input p-2"
                required
              />
              <input
                type="text"
                id="number"
                placeholder="Contact number"
                required
                className="input p-2 "
              />
            </p>
            <input
              type="text"
              id="name"
              placeholder="Subject"
              required
              className=" input p-2 w-full mb-2 mt-2"
            />

            <textarea
              id="story"
              name="story"
              rows="5"
              cols="33"
              placeholder="Tell us what you want to do for the moment"
              className="p-2 border-[.1em] rounded-sm border-black focus:outline-none w-full  resize-none mt-2"></textarea>
            <motion.button className="bg-primaryColor-5 text-yellow-50 rounded-md lg:rounded-full w-40 lg:w-20 h-8 text-[16px] px-4 relative right-0 lg:-right-[80%] mt-4"
              variants={btnVariant}
              whileHover={"hover"}
              whileTap={"tap"}>
              Submit
            </motion.button>
          </form>
        </section>
      </div>
    </>
  )
}

export default ContactForm
