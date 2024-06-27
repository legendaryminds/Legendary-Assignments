// withLoading.jsx
// Higher-order component to add loading functionality to components.

import React from 'react';

const withLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
};

export default withLoading;
