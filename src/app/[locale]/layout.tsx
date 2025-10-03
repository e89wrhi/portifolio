import { NavBar } from '@/components/layout/navbar';
import { SiteFooter } from '@/components/layout/site-footer';

interface PortifolioLayoutProps {
  children: React.ReactNode;
}

export default function PortifolioLayout({ children }: PortifolioLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar scroll={true} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
