import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import mock from "../mock";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  iconContainer: {
    '& svg': {
      width: 32,
      height: 32,
    },
  },
}));

const stepsData = mock.timelineWidget.timelineData;

const ColorlibConnector = withStyles({
  active: {
    '& $line': {
      backgroundColor: '#4D53E0',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#4D53E0',
    },
  },
  line: {
    border: 0,
    width: 3,
    backgroundColor: '#4D53E0',
    borderRadius: 0,
  },
  vertical: {
    padding: 0,
    marginLeft: 14,
    marginTop: -8,
    marginBottom: -8,
    '& span': {
      minHeight: 40,
    }
  }
})(StepConnector);

export default function TasksStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(3);

  const handleClick = (e) => {
    setActiveStep(e)
  }

  return (
    <div className={classes.root}>

      <Stepper activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector />}>
        {stepsData.map((item, index) => (

          <Step key={index} onClick={() => handleClick(index)}>
            <StepLabel className={classes.iconContainer}>
              <div key={index} className="d-flex flex-row align-self-baseline ml-3">
                <img src={item.img} alt="item pic"/>
                <div className="d-flex flex-column ml-3">
                  <p className="body-2">{item.title}</p>
                  <p className="body-3 muted">{item.label}</p>
                </div>
              </div>
            </StepLabel>
          </Step>

        ))}
      </Stepper>

    </div>
  )
}

