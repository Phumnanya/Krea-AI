type props = {
    prop: string;
}

export default function Model({prop : prop}: props) {
    return(
        <p className="uppercase">
            {prop}
        </p>
    )
}