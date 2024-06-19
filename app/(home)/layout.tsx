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
        </>
    )
}

export default LayoutHome;