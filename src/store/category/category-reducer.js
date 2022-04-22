import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
  categoryData: {},
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_DATA:
      return { ...state, categoryData: payload };
    default:
      return state;
  }
};
