import { ChevronDown } from "@deemlol/next-icons";

export default function Generate() {
    return(
        <div className="flex flex-row justify-between">
            <div>
                <h3 className="text-2xl dark:text-white">Generate</h3>
            </div>
            <div className="text-blue-500">
                <button className="flex flex-row items-center">
                <b><ChevronDown size={20} className="font-bold" /></b>
                <b>Show all</b>
                </button>
            </div>
        </div>
    )
}