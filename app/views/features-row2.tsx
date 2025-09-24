import FlexIcons from "../components/flexIcons"

export default function Features2() {
    return(
        <div className="flex flex-row justify-between pb-5 w-full 
        md:mt-2 mx-auto flex-wrap px-3 md:px-0">
             {/*edit*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-divider-26.png"
                topic="Edit"
                badge="New"
                imgBg="bg-purple-500"
                detail="Add objects, change styles or expand photos and generations."
                 />
            </div>
            {/*video lipsync*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-micro-26.png"
                topic="Video Lipsync"
                badge="New"
                imgBg="bg-black"
                detail="Lipsync any video to any audio"
                 />
            </div>
            {/*motion transfer*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-arms-up-26.png"
                topic="Motion Transfer"
                badge="New"
                imgBg="bg-black"
                detail="Transfer motion to images and animate characters"
                 />
            </div>
            {/*Train*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-learning-26.png"
                topic="Train"
                imgBg="bg-white"
                detail="Teach Krea to replicate your styles, products, or characters"
                 />
            </div>
        </div>
    )
}