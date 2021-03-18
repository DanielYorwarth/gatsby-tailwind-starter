import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import logo from '../images/favicon.png'


const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="max-w-5xl mx-auto py-16 md:py-20 lg:py-32 text-center"> 
        <img className="mx-auto mb-5" alt="Ant Logo" src={logo} />
        <h2 className="text-4xl font-black inline-block leading-tight">
          404 ERROR
        </h2>
        <p className="mb-5 md:mb-10">Looks like you're lost friend.</p>
        <Link to="/" className="bg-red-600 text-white-default font-light py-3 px-5 inline-block duration-300 transform hover:-translate-y-1">GO BACK</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
