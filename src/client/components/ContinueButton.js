import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';


const ContinueButton = ({ onRouteChange, path }) =>{
  return (
    <button onClick={() => onRouteChange(path)} className="btn btn-primary">Continue</button>
  )
}

export default compose(
  withRouter,
  withHandlers({
    onRouteChange: (props) => (path) => {
     props.history.push(path);
    }
  })
)(ContinueButton);



