import { fromJS } from "immutable";

const defaultState = fromJS({
  singers: [],
  Singers_singersList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "Singers_singers":
      return state.set("singers", action.data);

    default:
      return state;
  }
};
