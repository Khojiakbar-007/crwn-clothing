import { createSelector } from "reselect";

const selectCollections = (state) => state.shop.collections;

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
    // collections.find(
    //   (collection) => collection.routeName === collectionUrlParam
    // )
  );

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
)
