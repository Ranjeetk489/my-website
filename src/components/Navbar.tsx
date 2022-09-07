import { NextPage } from 'next';
import Image from "next/image";
import { FC, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";


const Navbar: NextPage = () => {
    const [dropDown, setDropDown] = useState('hidden');

    const navItems: Array<string> = ["About", "Blogs", "Projects", "Contact"]

    return (
        <>

            <div className='flex justify-between items-center mx-auto mt-3 md:w-[90vw]'>

                    <div className='ml-4'><Image src="/logo.svg" alt="logo" width="50" height="50" className="rotate-[-8deg]  md:translate-y-3" /></div>
                    <div className='nav-menu p-4 mr-4 cursor-pointer md:hidden lg:hidden'>
                        {dropDown === "hidden" ?
                            <FiMenu size={30} className=" " onClick={() => setDropDown("block")} /> :
                            <CgClose size={30} className="cursor-pointer hover:shadow-md shadow-black" onClick={() => setDropDown("hidden")} />
                        }
                    </div>
                <div className={`${dropDown} fixed inset-y-[20vh]  bg-[#210d2c]  w-[100vw] h-[100vh] pl-6 lg:bg-transparent md:static md:flex md:gap-12 md:w-fit md:h-fit md:bg-transparent lg:gap-32 `}>
                    {
                        navItems.map((item, index) => {
                            if (item) {
                                return (
                                    <NavItem key={index}>{item}</NavItem>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

type NavItemProps = {
    children: string
}

const NavItem: FC<NavItemProps> = ({ children }) => {
    return (
        <div className='sm:mt-4 text-md text-white bg-inherit md:text-black md:mt-0 lg:mt-0 '>
            {children}
        </div>
    )
}

export default Navbar;