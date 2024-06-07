import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="할일 관리 서비스" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <nav>
                <Link href="/" legacyBehavior>
                    <a>main</a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a>About</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                    <a>Contact</a>
                </Link>
            </nav>
        </>
    );
}
