import { ReactElement } from "react";
import Image from "next/image";
import Open from "./Open-btn";

interface icons {
    icon : string;
    topic: string;
    badge?: string;
    detail: string;
    imgBg: string;
}

export default function FlexIcons({icon, topic, badge, 
    detail, imgBg= "bg-white"} : icons) {
    return(
        <a href="#" className="flex flex-col md:flex-row w-full 
        md:items-center mb-2 md:mb-0">
            <div className={`w-fit md:w-1/5 ${imgBg} rounded-2xl p-3 
            md:py-4 mx-1`}>
                <Image
                src={`/img/${icon}`}
                alt="icon"
                width={30}
                height={40}
                className="object-contain m-auto"
                />
            </div>
            {/* topic and detail*/}
            <div className="w-full md:w-7/12 mx-1">
                <b className="inline-block dark:text-white">{topic}</b>
                <p className="w-fit px-2 bg-blue-500 text-white
                rounded-full inline-block ml-1">
                {badge}
                </p>
                <p className="text-zinc-400 text-base">{detail}</p>
            </div>
            {/*open button*/}
            <div className="w-full md:w-1/5 mx-1">
                <Open />
            </div>
        </a>
    )
}