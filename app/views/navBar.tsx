import User from "../components/user"
import Tools from "../components/tools"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faVideo, faWandMagicSparkles, faPen, 
    faDraftingCompass, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Image, Headphones, Bell } from "@deemlol/next-icons";
import Userimage from "../components/userimg";
import ThemeToggle from "./themeToggle";

export default function NavBar() {
    return(
        <div className="w-full p-2 flex flex-row justify-between">
            <User />
            <div className="w-fit hidden md:flex flex-row px-4 justify-center
            shadow-2xl bg-gray-200 py-5 rounded-2xl">
                <div><Tools icon={faHome} /></div>
                <div><Tools icon={faImage} /></div>
                <div><Tools icon={faVideo} /></div>
                <div><Tools icon={faWandMagicSparkles} /></div>
                <div><Tools icon={faPen} /></div>
                <div><Tools icon={faDraftingCompass} /></div>
                <div><Tools icon={faFolder} /></div>
            </div>
            <div className="md:w-1/4 flex flex-row py-2.5 
            justify-between md:justify-around">
                <div className="mr-2 md:mr-0">
                    <button type="button" className="w-fit p-2 dark:text-black
                    bg-gray-200 rounded-2xl hover:scale-110">
                    <Image size={18} color="black" 
                    className="inline-block" /> Gallery
                    </button>
                </div>
                <div className="mr-2 md:mr-0">
                    <button type="button" className="w-fit p-2
                    bg-gray-200 rounded-2xl hover:scale-110 dark:text-black">
                    <Headphones size={18} color="black" 
                    className="inline-block" /> Support
                    </button>
                </div>
                <div className="mr-1 md:mr-0">
                    <button type="button" className="w-fit p-1
                    bg-gray-200 rounded-full text-black">
                        <Bell size={20} color="black" />
                    </button>
                </div>
                <div>
                    <ThemeToggle />
                </div>
                <div className="hidden md:block">
                    <Userimage />
                </div>
            </div>
        </div>
    )
}