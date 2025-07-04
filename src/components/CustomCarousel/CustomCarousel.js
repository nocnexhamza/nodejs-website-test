import React, { useState } from "react";
import {
  Button,
} from "reactstrap";
import Widget from "../Widget/Widget.js";
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useSwipeable } from "react-swipeable";

import s from "./CustomCarousel.module.scss";

export default function CustomCarousel(props) {

  const images = [...props.data];
  const totalSteps = props.data.length -1;

  const [activeStep, setActiveStep] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setActiveStep(prevStep => prevStep === totalSteps
      ? 0
      : prevStep + 1
    )
  }

  const handleBack = () => {
    setActiveStep(prevStep => prevStep === 0
      ? totalSteps
      : prevStep -1
    )
  }

  return (
    <Widget className="widget-p-none">
      <div {...handlers} >
        <div className={s.carouselTitle}>
          <div className="headline-2">
            {images[activeStep].label}
          </div>
        </div>
        <img
          className={s.img}
          src={props.data[activeStep].image}
          alt={props.data[activeStep].label}
        />
        <MobileStepper
          steps={props.data.length}
          position={props.position}
          variant={props.variant}
          activeStep={activeStep}
          nextButton={
            <Button
              className="btn-stepper"
              onClick={handleNext}
            >
              Next{<KeyboardArrowRight/>}
            </Button>
          }
          backButton={
            <Button
              className="btn-stepper"
              onClick={handleBack}
            >
              {<KeyboardArrowLeft/>}Back
            </Button>
          }
        />
      </div>
    </Widget>
  )
}
