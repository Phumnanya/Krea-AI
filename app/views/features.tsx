import FlexIcons from "../components/flexIcons";

export default function Features() {
    return(
        <div className="flex flex-row justify-between md:py-5 w-full 
        mt-3 mx-auto flex-wrap py-3 px-3 md:px-0">
            {/*Image*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-image-26.png"
                topic="Image"
                badge="New"
                imgBg="bg-black"
                detail="Generate images in custom styles and ideogram"
                 />
            </div>
            {/*video*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-video-call-24.png"
                topic="Video"
                imgBg="bg-orange-500"
                detail="Generate videos with Mailua, Pica, Runway, Luma and more"
                 />
            </div>
            {/*realtime*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-sign-up-26.png"
                topic="Realtime"
                imgBg="bg-blue-600"
                detail="Realtime AI rendering on a carcass and Instant feedback loops"
                 />
            </div>
            {/*enhancer*/}
            <div className="w-1/2 md:w-1/4">
                <FlexIcons
                icon="icons8-fantasy-26.png"
                topic="Enhancer"
                badge="New"
                imgBg="bg-black"
                detail="Upscale and Enhance images and videos up to 22k"
                 />
            </div>
        </div>
    )
}