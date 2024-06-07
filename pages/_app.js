import "@/styles/globals.css";
import Head from "next/head";
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
            <nav className="bg-red-500">
                <ul className="flex">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>main</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
