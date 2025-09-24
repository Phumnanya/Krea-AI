import Image from "next/image";

export default function Userimage() {
    return(
        <Image
            src="/img/user.png"
            alt="user"
            width={30}
            height={15}
            className="object-contain"
            priority
        />
    )
} 