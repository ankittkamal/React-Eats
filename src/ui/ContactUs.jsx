import { FaPaperPlane } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-gray-700 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          ankittkamal@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <h2 className="text-2xl font-bold mt-6">Contact me</h2>
      <form className="mt-10 flex flex-col ">
        <input
          className="h-14 px-4 rounded-lg borderBlack border border-black outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black p-4  transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-700 text-white rounded-full outline-none transition-all focus:scale-110 border  active:scale-105  disabled:scale-100 disabled:bg-opacity-65 border-black"
          // onClick={sendMessage}
        >
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
