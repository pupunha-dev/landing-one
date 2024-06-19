import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/saas">SaaS</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/joinus">Join Us</Link>
    </main>
  );
}
