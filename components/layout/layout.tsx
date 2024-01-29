import React, {ReactNode} from "react";
import {MainHeader} from "./mainHeader";

interface IPropsLayout {
    children: ReactNode;
}

export const Layout: React.FC<IPropsLayout> = ({children}) => {
    return(
        <>
            <MainHeader />
            <main>
                {children}
            </main>
        </>
    )
}