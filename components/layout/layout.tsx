import React, {ReactNode} from "react";
import {MainHeader} from "./mainHeader";
import Head from "next/head";

interface IPropsLayout {
    children: ReactNode;
}

export const Layout: React.FC<IPropsLayout> = ({children}) => {
    return(
        <>
            <Head>
                <title>NextJS Event</title>
            </Head>
            <MainHeader/>
            <main>
                {children}
            </main>
        </>
    )
}