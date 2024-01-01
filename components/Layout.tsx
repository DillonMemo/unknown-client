import React, { ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
};

const Layout = ({
    children,
    title = "This is the default title",
    description = "This is the default description",
}: Props) => (
    <Wrapper>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="unknown, newyear, 2024"></meta>
            <meta name="description" content={description}></meta>
        </Head>

        {children}
    </Wrapper>
);

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .\404 {
        color: black;
        font-size: 50px;
        margin: 0;
    }
`;

export default Layout;
