"use client"

export default function Terminal({input}: {input: string}){
    return (
        <div className="flex">
            
            <p className="font-roboto">
                &gt; {input}
            </p>
            <p className="animate-blink">
                █
            </p>
        </div>
    )
}