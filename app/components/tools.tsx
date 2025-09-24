import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface fonticon {
    icon: IconDefinition;
    trick?: string;
}
export default function Tools({icon, trick}: fonticon) {
    return(
        <button className="p-3 focus:bg-white rounded-2xl 
        cursor-pointer focus:p-4 hover:scale-110 hover:bg-gray-100
         text-black" type="button">
            <p><FontAwesomeIcon icon={icon} /></p>
            <p>{trick}</p>
        </button>
    )
}

/*
type icons = {
    icon: React.ElementType;
}

<p className="text-black">
                <Icon className="text-black fill-black stroke-0" size={20} />
            </p>
            */