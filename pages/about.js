import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>앱소개 : 투두</title>
                <meta name="description" content="할일 관리 서비스" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h3>앱소개 페이지</h3>
            <nav>
                <Link href="/" legacyBehavior>
                    <a>main</a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a>About</a>
                </Link>
            </nav>
        </>
    );
}
