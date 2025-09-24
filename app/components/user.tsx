"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "@deemlol/next-icons";
import Userimage from "./userimg";
import Tools from "./tools";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faVideo, faWandMagicSparkles, faPen, 
    faDraftingCompass, faFolder } from '@fortawesome/free-solid-svg-icons';

export default function User() {
    const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-row w-1/4 py-2 md:py-0">
            {/* Light mode logo */}
            <div className="w-fit">
                <Image
                    src="/img/1.png"
                    alt="logo light"
                    width={80}
                    height={50}
                    className="object-contain dark:hidden py-2 md:py-0"
                    priority
                />
                {/* Dark mode logo */}
                <Image
                    src="/img/2.png"
                    alt="logo dark"
                    width={80}
                    height={50}
                    className="object-contain hidden dark:block"
                    priority
                />
            </div>
            <div className="w-4/5 md:py-5 py-2.5">
                <button className="flex flex-row items-center
                 dark:text-white" onClick={() => setOpen(!open)}>
                    <Userimage />
                    <p className="hidden md:inline-block mx-1.5">benevolentnimblebot</p>
                    <b><ChevronDown size={24} color="black" className="font-bold" /></b>
                </button>
            </div>
            {/* Dropdown menu */}
            {open && (
                <div className="absolute left-[2.7em] mt-[2.6em] w-fit origin-top-right shadow-lg z-20">
                    <div className="w-fit flex md:hidden flex-col px-2 justify-center
                    shadow-2xl bg-gray-200 py-2 rounded-2xl">
                        <div><Tools icon={faHome} /></div>
                        <div><Tools icon={faImage} /></div>
                        <div><Tools icon={faVideo} /></div>
                        <div><Tools icon={faWandMagicSparkles} /></div>
                        <div><Tools icon={faPen} /></div>
                        <div><Tools icon={faDraftingCompass} /></div>
                        <div><Tools icon={faFolder} /></div>
                    </div>
                </div>
            )}
            
        </div>
    )
}
