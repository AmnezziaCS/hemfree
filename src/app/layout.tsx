import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';

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
        <html lang="en">
            <body>
                <Navbar>
                    <Footer>
                        <main>{children}</main>
                    </Footer>
                </Navbar>
            </body>
        </html>
    );
}
