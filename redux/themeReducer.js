let initstate = {
  dark: false,
  country: "UAE"
};

export default function (state = initstate, action) {
  let {type, payload} = action;
  switch (type) {
    case 'DARK':
      return {dark: !state.dark};
    case 'COUNTRY':
      return {
          ...state,
          country: payload
      };

    default:
      break;
  }
  return state;
}
