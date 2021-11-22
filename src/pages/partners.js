import Layout from "../components/layouts/Layout";
import React from "react";
import WPAPI from "wpapi";
import Config from "../config";
import { Partner } from "../components/partners/Partners";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Partners = ({
  partner_organizationsCat,
  partner_organizationsPosts,
  partners_orgCat,
  partners_orgPosts,
}) => {
  return (
    <div className="page partners">
      <Partner
        partner_organizationsCat={partner_organizationsCat}
        partner_organizationsPosts={partner_organizationsPosts}
        partners_orgCat={partners_orgCat}
        partners_orgPosts={partners_orgPosts}
      />
    </div>
  );
};

Partners.getInitialProps = async () => {
  const partner_organizationsCat = await wp
    .categories()
    .slug("partner_organizations")
    .embed()
    .then((data) => {
      return data[0];
    });
  const partner_organizationsPosts = await wp
    .posts()
    .categories(partner_organizationsCat.id)
    .embed()
    .perPage(100)
    .then((data) => {
      return data;
    });
  const partners_orgCat = await wp
    .categories()
    .slug("partners_org")
    .embed()
    .then((data) => {
      return data[0];
    });
  const partners_orgPosts = await wp
    .posts()
    .categories(partners_orgCat.id)
    .embed()
    .perPage(100)
    .then((data) => {
      return data;
    });

  return {
    partner_organizationsCat,
    partner_organizationsPosts,
    partners_orgCat,
    partners_orgPosts,
  };
};

export default Partners;
