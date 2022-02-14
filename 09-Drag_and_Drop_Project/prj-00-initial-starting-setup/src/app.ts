import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
