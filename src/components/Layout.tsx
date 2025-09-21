import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentSection?: number; 
}


const Layout = ({ children, title }: LayoutProps) => {
  // Set document title
  React.useEffect(() => {
    if (title) {
      document.title = `${title} — UET Mardan`;
    }
  }, [title]);

  return (
    <>
      <Header currentSection={0} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}; 

export default Layout;