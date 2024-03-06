import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Fragment } from 'react';

import '../styles/global.css';

export const metadata: Metadata = {
    title: 'Hemfree',
    description: 'Le #1 des serveurs Minecraft en France',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <Navbar>
                <Footer>
                    <body>{children}</body>
                </Footer>
            </Navbar>
        </Fragment>
    );
}
