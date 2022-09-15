import { FC } from "react";
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <motion.div
      className=" w-[90vw] mx-auto mt-4 lg:mt-[17vh] lg:w-[65vw] 2xl:mt-[22vh]"
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
    >
      <h1 className="text-[4.5rem] font-bold leading-tight lg:text-[6rem] ">
        <span className="text-[2.5rem] text-slate-700 lg:text-[3.5rem]">
          I'm
        </span>
        <span className=" hero-name ml-2 lg:ml-4">Ranjeet Kumar</span>
      </h1>
      <div className="text-slate-600 text-md leading-loose lg:mt-6 2xl:mt-[4vh]">
        FullStack developer from India with expertise in Frontend development and
        JavaScript wizard,
        <span className="p-2 bg-slate-300 rounded-md mx-1">
          Movies and Books
        </span>
        enthusiast, minimalist and lover of
        <span className="p-2 bg-slate-300 rounded-md mx-1 translate-y-3">
          Classical Pop & folk Music.
        </span>
      </div>
      <div className="text-slate-600 text-md leading-loose mt-2">
        Mostly working on Side Projects while learning, creating and breaking
        things.
        <span className="flex">
          View my
          <Link href="/projects">
            <span className="mx-2 flex items-center gap-1 cursor-pointer">
              Projects
              <BiLinkExternal className="text-[#f70809]" />
            </span>
          </Link>
          <Link href="/blogs">
            <span className="flex items-center gap-1 ml-2 cursor-pointer">
              Blogs
              <BiLinkExternal className="text-[#f70809]" />
            </span>
          </Link>
        </span>
      </div>
      <div className="text-slate-800 font-semibold text-md leading-loose tracking-wide">
        Open to New Opportunities or any fun projects, let's talk
        <span className="inline-flex cursor-pointer items-center gap-1 mx-1 bg-slate-200 px-2 rounded-md  hover:bg-[#4db283] hover:text-white">
          Schedule a call
          <BiLinkExternal className="text-[#f70809] bg-inherit " />
        </span>
        or like the good old times drop a mail at
        <span className="px-2 py-1 inline-flex items-center gap-1 mx-1 bg-slate-200 cursor-pointer rounded-md hover:bg-[#4db283] hover:text-white ">
          ranjeet7494@outlook.com
          <BiLinkExternal className="text-[#f70809] bg-inherit" />
        </span>
        <div className="relative hidden lg:fixed lg:flex lg:flex-col lg:left-[5rem] lg:top-2/4 lg:gap-3">
          <FaLinkedin size={30} />
          <FaTwitter size={30} />
          <FaGithub size={30} />
          <IoMdMail size={30} />
          <FaDiscord size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
