import React, { forwardRef } from "react";
import classnames from "classnames";
import Proptypes from "prop-types";

const Avatar = forwardRef((props, ref) => {
  const {
    className,
    imgClassName,
    id,
    size,
    img,
  } = props;

  return (
    <div
      className={classnames('avatar', {
        [className]: className,
        [`avatar-${size}`]: size
      })}
      ref={ref}
      id={id}
    >
      <img
        className={classnames({
          [imgClassName]: imgClassName
        })}
        src={img}
        alt='avatar pic'
      />
    </div>
  )
})

export default Avatar

Avatar.propTypes = {
  className: Proptypes.string,
  imgClassName: Proptypes.string,
  imgHeight: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  imgWidth: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  size: Proptypes.oneOf(["sm", "md", "lg", "xl"]),
}
