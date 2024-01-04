import Link from "next/link";

export default function NotFound() {
    return <main className="not-found">
        <h1>NOT FOUND</h1>
        <p>Unfortunately, we could not find the requested page or resources</p>
        <p>
            Go{' '}
            <Link href="/" className="btn">Home</Link>
        </p>
    </main>
}