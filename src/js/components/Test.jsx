import React from 'react';

const Test = ({ children }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      b: 'bbb'
    });
  });
};

export default Test;
