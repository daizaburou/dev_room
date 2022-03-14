//TODO: jqueryの中にあるimport文がうまく読み込めてないので、読み込めるように変更しておく。

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
