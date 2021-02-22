export default function Footer(props) {
    return (
        <footer>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
                {props.label || "Footer example"}
            </a>
        </footer>
    )
}