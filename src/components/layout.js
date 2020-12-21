import React from "react";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Header />
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
