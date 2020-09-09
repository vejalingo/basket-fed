import React from "react";
import { useQuery } from "@apollo/client";
import { Header, Button, Card } from "../src/shared/components";
import { GET_BASKET } from "./shared/store/queries";

interface ICard {
  title: string;
  subTitle: string;
  price: number | string;
  image: string;
}

const App = (): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_BASKET);

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <div>error occured!</div>;

  return (
    <div className="basket">
      <Header />
      <section className="page">
        <div className="page__title">Your Basket</div>
        <Button
          className="btn--green btn--md"
          title="Cover starts today"
          iconLeft="icon-start-date"
          iconRight="icon-pencil"
          iconClass="btn__icon--white"
        />
        <div className="card__container">
          {data?.baskets?.[0]?.items?.map(
            ({ title, subTitle, price, image }: ICard, key: string) => (
              <Card
                key={key}
                title={title}
                sub_title={subTitle}
                price={price}
                image={require(`./shared/images/${image}.svg`)}
              />
            )
          )}

          <Card
            className="card__add hidden-sm"
            title="Get another price"
            sub_title="+"
            empty
          />
        </div>

        <Button
          className="btn--black btn--lg"
          title="Buy cover for R1125pm"
          iconRight="icon-arrow-right"
          iconClass="btn__icon--green"
        />
      </section>
      <section className="sub-page">
        <Button
          className="btn--white btn--lg hidden-lg"
          title="Get another price"
          iconRight="icon-arrow-right"
          iconClass="btn__icon--green"
        />
      </section>
    </div>
  );
};

export default App;
