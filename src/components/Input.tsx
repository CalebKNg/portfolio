export default function Input({input}: {input: string}){
    return (
        <div className="flex">
            <p className="font-roboto mr-1">
                &gt;
            </p>
            <p className="font-roboto">
                {input}
            </p>
            <p className="animate-blink">
                █
            </p>
        </div>
    )
}