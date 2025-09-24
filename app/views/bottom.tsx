import Image from "next/image"

export default function Bottom() {
    return(
        <footer className="bg-black w-full p-2 md:p-4 flex flex-row
        justify-between text-white py-5 dark:bg-white 
        dark:text-black">
            <div>
                {/* light mode logo */}
                <Image
                    src="/img/2.png"
                    alt="logo"
                    width={80}
                    height={50}
                    className="object-contain inline-block dark:hidden"
                    priority
                />
                {/* Dark mode logo */}
                <Image
                    src="/img/1.png"
                    alt="logo"
                    width={80}
                    height={50}
                    className="object-contain hidden dark:inline-block"
                    priority
                />
                <h1 className="inline-block text-2xl md:text-4xl"
                >Krea AI</h1>
            </div>
            <div>
                <p className="inline-block text-2xl md:mr-2">curated by</p>
                <h1 className="inline-block text-3xl md:text-4xl 
                font-bold"
                >Mobbin</h1>
            </div>
        </footer>
    )
}