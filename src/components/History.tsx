export default function History({sentLines}: {sentLines: string[]}) {
    return (
            <ul className="font-roboto"
                style={{ maskImage: "linear-gradient(to top, black 0%, transparent 20%)" }}
            >
                {sentLines.map((line, i) => 
                    <li key={i} className="ml-4">
                        {line || "\u00A0"}
                    </li>
                )}
            </ul>
    )
}