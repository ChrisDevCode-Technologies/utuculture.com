import { ReactNode } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import TawkWidget from '@/components/TawkWidget';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            {/* Load tawk.to chat widget site-wide. It reads Vite env vars VITE_TAWK_PROPERTY_ID and VITE_TAWK_KEY if present; otherwise defaults to the provided IDs. */}
            <TawkWidget defer={true} />
        </div>
    );
}
