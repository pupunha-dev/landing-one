import { FooterHome } from "./footer";
import { HeaderHome } from "./header";

type Props = {
    children: React.ReactNode;
}

const LayoutHome = ({children} : Props) => {
    return(
        <>
            <HeaderHome />
            <main>
                {children}
            </main>
            <FooterHome />
        </>
    )
}

export default LayoutHome;