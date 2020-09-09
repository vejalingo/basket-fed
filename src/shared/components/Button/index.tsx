import React, { ReactElement } from "react";
import cx from "classnames";

interface IButton {
  title: string;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
  iconClass?: string;
}

const Button = ({
  title = "Buy cover for R1125pm",
  iconLeft,
  iconRight,
  iconClass,
  className,
}: IButton): ReactElement => (
  <div className={cx("btn", className)}>
    {iconLeft && (
      <div className={cx("btn__icon clearfix bshadow0 pbs", iconClass)}>
        <span className={iconLeft}></span>
      </div>
    )}

    <div className="btn__title">{title}</div>

    {iconRight && (
      <div className={cx("btn__icon clearfix bshadow0 pbs", iconClass)}>
        <span className={iconRight}></span>
      </div>
    )}
  </div>
);

export default Button;
