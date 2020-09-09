import React, { ReactElement } from "react";
import cx from "classnames";

interface ICard {
  title?: string;
  sub_title?: string;
  price?: number | string;
  image?: string;
  className?: string;
  empty?: boolean;
}

const Card = ({
  title,
  sub_title,
  price,
  image,
  className,
  empty = false,
}: ICard): ReactElement => (
  <div className={cx("card", className)}>
    <span className="card__close">X</span>
    {image && <img className="card__image" src={image} alt="yes" />}
    {title && <div className="card__title">{title}</div>}
    {sub_title && <div className="card__sub_title">{sub_title}</div>}
    {price && <div className="card__price">R{price}pm</div>}
    {empty && (
      <div className="clearfix bshadow0 pbs">
        <span className="icon-add"></span>
      </div>
    )}
  </div>
);

export default Card;
