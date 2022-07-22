import { theme, lightTheme, darkTheme } from "../../theme/theme";

const types = { CHANGE_THEME: "change_theme" };

const initialState = theme;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      const newColors =
        action.payload === "dark"
          ? {
              ...state.colors,
              main: lightTheme.main,
              primary: lightTheme.primary,
              secondary: lightTheme.secondary,
            }
          : {
              ...state.colors,
              main: darkTheme.main,
              primary: darkTheme.primary,
              secondary: darkTheme.secondary,
            };
      return {
        ...state,
        theme: action.payload,
        colors: newColors,
      };

    default:
      return state;
  }
};
