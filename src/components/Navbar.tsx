import Image from "next/image";
import { FC, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const Navbar: FC = () => {
    const [dropDown, setDropDown] = useState('hidden');
    const router =useRouter();
    console.log(router.asPath);
    const navItems: Array<string> = ["About", "Blogs", "Projects", "Contact"]

    return (
        <>
            <motion.div className='flex justify-between items-center mt-3 lg:w-[90vw] mx-auto' animate={{y:100}}>
            <Link href ="/"><span className="ml-4 md:translate-x-[-1.4rem]"><Image src="/logo.svg" alt="logo" width="50" height="50" className="rotate-[-8deg]  md:translate-y-3" /></span></Link>
                    <div className='nav-menu p-2 mr-4 cursor-pointer  hover:shadow-md md:hidden lg:hidden'>
                        {dropDown === "hidden" ?
                            <FiMenu size={30} className=" " onClick={() => setDropDown("block")} /> :
                            <CgClose size={30} className="cursor-pointer shadow-black" onClick={() => setDropDown("hidden")} />
                        }
                    </div>
                <div className={`${dropDown}  fixed inset-y-[10vh]   bg-[#210d2c]  w-[100vw] h-[100vh] lg:bg-transparent md:static md:flex md:gap-12 md:w-fit md:h-fit md:bg-transparent lg:gap-20 `}>
                    {
                        navItems.map((item, index) => {
                            if (item) {
                                return (
                                    <NavItem key={index} linkTo={item}>{item}</NavItem>
                                )
                            }
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}

type NavItemProps = {
    children: string
    linkTo:string
}

const NavItem: FC<NavItemProps> = ({ children, linkTo }) => {
    return (
        <Link href={linkTo} >
            <div className="nav-item  mt-6 ml-6 first:mt-12 text-lg text-white bg-inherit  md:text-black md:mt-0 md:first:mt-0 lg:mt-0 ">
            {children}
            </div>
        </Link>
       
    )
}

export default Navbar;