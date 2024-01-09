
export default function Button({
    title="default",
    color
}){
    return(
        <>
            <button style={{backgroundColor: color}}>{title}</button>
        </>
    )
}