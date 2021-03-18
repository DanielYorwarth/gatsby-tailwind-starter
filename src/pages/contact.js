import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/elements/contact-form/contact-form.component";

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
      />
      <div className="mt-10 md:mt-20 lg:mt-24">
        <ContactForm />
      </div>
    </Layout>
  );
}

export default ContactPage;
