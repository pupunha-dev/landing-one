import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeaderHome = () => {
    return(
        <header className="bg-orange-200 w-full border-b-4">
            <div className="flex lg:max-w-screen-lg mx-auto items-center justify-center h-full bg-white min">
                Logo
                {/* <Button asChild>
                    <Link href="/saas" className="flex-none bg-gradient-to-br justify-center flex gap-2 items-center from-accent to-accent-strong transition-all hover:scale-[101%] transform-gpu text-colored-primary rounded-full focus:ring-2 focus:ring-accent font-medium focus:ring-offset-2 focus:outline-none text-base lg:text-xl shadow-[inset_0px_0.5px_1px_rgb(255_255_255_/_0.5)] group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 lg:pl-5 pr-6">SaaS</Link>
                </Button> */}
                <Button asChild>
                    <Link href="/blog">Blog</Link>
                </Button>
                <Button asChild>
                    <Link href="/joinus">Join Us</Link>
                </Button>
            </div>  
        </header>
    )
}
