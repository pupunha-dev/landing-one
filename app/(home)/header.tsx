import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeaderHome = () => {
    return(
        <nav>
            <Button asChild>
                <Link href="/saas">SaaS</Link>
            </Button>
            <Button asChild>
                <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild>
                <Link href="/joinus">Join Us</Link>
            </Button>  
        </nav>
    )
}
