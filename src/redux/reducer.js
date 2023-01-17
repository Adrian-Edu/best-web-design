function chooseBackgroundColor(standard = { color: "#0e1111" }, action) {
  switch (action.type) {
    case "CHANGEBACKGROUNDTOWHITE":
      return "#d0efff";
    case "CHANGEBACKGROUNDTODARK":
      return "#151B54";
    default:
      return standard;
  }
}

export default chooseBackgroundColor;
