import React, { useState } from "react";
import {
  Button,
  Tooltip,
} from 'reactstrap';

export default function CustomTooltip(props) {

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span className={props.className}>
      <Button disabled={props.disabled} color={props.color} id={props.id}>
        Show {props.text} Tooltip
      </Button>
      <Tooltip
        placement={props.placement}
        isOpen={tooltipOpen}
        target={props.target}
        toggle={toggle}
      >
        {props.text} Content!
      </Tooltip>
    </span>
  )
}
