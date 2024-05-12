import {
  flowRendererV2,
  flowStyles
} from "./chunk-X37BQWQQ.js";
import {
  flowDb,
  parser$1
} from "./chunk-XJR7KMEM.js";
import "./chunk-KKK4D6YM.js";
import "./chunk-DZXWMDDL.js";
import "./chunk-Q3HGUFEX.js";
import "./chunk-FBFVX6DX.js";
import "./chunk-YRPP3OK2.js";
import "./chunk-HDY3GZO2.js";
import "./chunk-FCZDMVDE.js";
import "./chunk-WQKWUSY4.js";
import "./chunk-XP7M6FJS.js";
import "./chunk-2AA25MXT.js";
import {
  setConfig
} from "./chunk-NN6CGKL7.js";
import "./chunk-ZS7NZCD4.js";

// node_modules/mermaid/dist/flowDiagram-v2-a8396bb5.js
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-a8396bb5-33AZAVWD.js.map
