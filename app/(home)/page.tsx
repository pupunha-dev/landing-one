import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button asChild>
        <Link href="/saas">SaaS</Link>
      </Button>
      <Button asChild>
        <Link href="/blog">Blog</Link>
      </Button>
      <Button asChild>
        <Link href="/joinus">Join Us</Link>
      </Button>  
    </main>
  );
}
