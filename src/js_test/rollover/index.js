import $ from "jquery";
export default class {
  constructor() {
    $("#rollover").animate(
      {
        marginLeft: "600px",
      },
      {
        duration: 1500,
        easing: "linear",
      }
    );
  }
}
