import obj from "./other";
// import { join } from "lodash";
import _ from "lodash";
import './sample.less';

export default function component() {
  var element = document.createElement("div");
  element.className = "header";
  element.innerHTML = _.join(["hello123", "sdf", obj.a, obj.b], " ");
  return element;
}
