type props = {
    prop: string;
}

export default function TryButton({prop : prop}: props) {
    return(
        <button type="button" className="text-black bg-white 
        p-2 md:p-4 rounded-full md:font-extrabold">
            {prop}
        </button>
    )
}