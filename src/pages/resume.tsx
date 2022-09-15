import React from "react";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import { motion } from "framer-motion";

// Your render function

const Resume = ({ pdfFile }) => {
  // console.log(pdfFile);
  return (
    <motion.div
      className="w-[90vw] h-[100vh] mx-auto mt-[1rem] md:mt-[2rem]"
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <PageTitle>Resume.</PageTitle>
      </div>
      <div className="text-slate-800 mb-[1.3rem]">
        Reach out to me via my contact page or
        <span className="underline"> download the resume</span>
      </div>
      <Link href="https://drive.google.com/u/0/uc?id=1vwrFfbLbTxXkL88H8mA7_FEKB4AcV9U7&export=download">
        <span className="px-4 py-2 text-white bg-[#d63129]">
          Download Resume
        </span>
      </Link>
      <div className="mt-[2rem] w-fit h-1/2 mx-auto md:w-[32rem] md:h-full ">
        <iframe
          src="https://www.canva.com/design/DAFMTYkPszI/uhRt5NGoe1UAiPMyhsvj3Q/view?embed"
          allowFullScreen
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Resume;
