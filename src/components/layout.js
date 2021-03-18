import React from "react";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";

const Layout = ({ children }) => {
  const mainMenu =[
    {text: 'web design', url: '/web-design'},
    {text: 'seo', url: '/seo'},
    {text: 'about', url: '/about'},
    {text: 'our work', url: '/case-studies'},
    {text: 'news', url: '/news'},
  ]
  const footerMenu =[
    {text: 'Privacy', url: '/privacy'},
    {text: 'Terms', url: '/terms'},
    {text: 'Sitemap', url: '/sitemap'},
    {text: 'Contact', url: '/contact'},
  ]
  return (
    <div className="min-h-screen">
      <Header menu={mainMenu} />
      <main>
        {children}
      </main>
      <Footer menu={footerMenu} />
    </div>
  );
}

export default Layout;
