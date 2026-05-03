export default function History({sentLines}: {sentLines: string[]}) {
    return (
        <ul className="font-roboto">
            {sentLines.map((line, i) => 
                <li key={i} className="ml-4">
                    {line}
                </li>
            )}
        </ul>
    )
}