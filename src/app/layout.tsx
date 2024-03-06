import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';

import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] });

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
                <body className={inter.className}>{children}</body>
            </Navbar>
        </Fragment>
    );
}
