import { Fragment } from "react";
import Proptypes from "prop-types";
import classnames from "classnames";
import { UncontrolledTooltip } from "reactstrap";
import Avatar from "../Avatar/Avatar";

const AvatarGroup = props => {

  const { data, size, placement, className } = props;

  const renderData = () => {
    return data.map((item, index) => {
      return (
        <Fragment key={index}>
          {item.title ? (
            <UncontrolledTooltip placement={placement} target={item.title.split(" ").join("_")}>
              {item.title}
            </UncontrolledTooltip>
          ) : null}
          <Avatar
            className={classnames('zoom-in', {
              [item.className]: item.className
            })}
            size={size}
            id={item.title.split(" ").join("_")}
            {...item}
          />
        </Fragment>
      )
    })
  }

  return (
    <div
      className={classnames('avatar-group', {
        [className]: className
      })}
    >
      {renderData()}
    </div>
  )
}

AvatarGroup.propTypes = {
  data: Proptypes.array.isRequired,
}

export default AvatarGroup

