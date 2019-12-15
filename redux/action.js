export const fetchData = () => {
  return {
    type: 'FETCHING'
  };
};

export const fetchSuccess = data => {
  return {
    type: 'SUCCESS',
    payload: data
  };
};
