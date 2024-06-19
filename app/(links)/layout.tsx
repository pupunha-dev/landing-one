type Props = {
    children: React.ReactNode;
}

const LayoutPages = ({children} : Props) => {
    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutPages;