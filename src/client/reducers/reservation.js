const initState = {
  data: []
};

const reservation = (state = initState, action) => {
  switch (action.type){
    case 'UPDATE':
      return {
        data: action.data
      };
    default:
      return state;
  }
};

export default reservation;
