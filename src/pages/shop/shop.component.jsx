import React from "react";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path=":collectionId" element={<CollectionPage params={useParams()} />} />
        <Route path="/" element={<CollectionsOverview />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
