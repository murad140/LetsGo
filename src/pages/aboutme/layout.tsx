import AboutMeLayout from './AboutMeLayout';

// This is a Server Component
export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return <AboutMeLayout>{children}</AboutMeLayout>;
}