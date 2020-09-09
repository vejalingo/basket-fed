import { gql } from "@apollo/client";

export const GET_BASKET = gql`
  query getBasketItem {
    baskets {
      totalPremium
      startDate
      items {
        title
        subTitle
        price
        image
      }
    }
  }
`;
