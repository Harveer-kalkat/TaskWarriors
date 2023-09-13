import { ListingsContext } from "../context/listingContext";
import { useContext } from "react";

export const useListingsContext = () => {
  const context = useContext(ListingsContext);

  if (!context) {
    throw Error(
      "useListingsContext must be used inside a listingsContextProvider"
    );
  }

  return context;
};
