function chooseBackgroundColor(
  standard = { backgroundcolor: "#151B54", color: "#FFFFFF" },
  action
) {
  switch (action.type) {
    case "CHANGEBACKGROUNDTOWHITE":
      return "#d0efff";
    case "CHANGEBACKGROUNDTODARK":
      return "#151B54";
    case "CHANGECOLORTOWHITE":
      return "#FFFFFF";
    case "CHANGECOLORTODARK":
      return "#0e1111";
    default:
      return standard;
  }
}

export default chooseBackgroundColor;
