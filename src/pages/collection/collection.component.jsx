import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

import ShopItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

// const withParams = (Component) => (props) =>
//   <Component someProps="qwertyuio" {...props} params={useParams()} />;

const CollectionPage = ({ currentCollection }) => {
  console.log("Current collection: ", currentCollection);
  const { title, items } = currentCollection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentCollection: selectCollection(ownProps.params["*"])(state),
});

export default connect(mapStateToProps)(CollectionPage);
