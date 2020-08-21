import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const centerDiv = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-50px',
    width: '100px',
    height: '100px'
  }

const CircularUnderLoad = () => {
  return <div style={centerDiv}><CircularProgress disableShrink /></div>;
}

export default CircularUnderLoad;