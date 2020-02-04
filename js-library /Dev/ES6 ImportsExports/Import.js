import "./styles.css";

/*------------There are 3 ways to import:----------------

1.Importing regular files 
  - So you're importing the WHOLE thing 
  - Ex: The CSS above

2. Importing the "default export" of a module
  - EX:import React from "react"
  - No need to open curly braces

3. Importing the other (non-default) exports of a module
  -EX: import {Row,Column} from "react-foundation"


Note: IN create-react-app and gatsby for example we don't use the absolute or relative
paths to our modules because the bundling handles that (npm).
But if we're dealing with custom modules not included in node-modules then we have
to use normal sources like "./" for relative paths and "/" for absolute paths 
:)
*/

import Person from "./Export.js.js.js.js.js";
import { whatsMyName, whatsMyAge, whatsMyCountry } from "./Export.js.js.js.js.js";

let Sabrina = new Person("Sabrina", 20, "USA");
console.log(Sabrina.country);
whatsMyName(Sabrina);
whatsMyAge(Sabrina);
whatsMyCountry(Sabrina);
