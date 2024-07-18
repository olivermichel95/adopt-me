// import { useState } from "react";

// const AppStudy = () => {
//   const [showText, setShowText] = useState(true);
//   console.log(showText);

//   // array destructuring
//   // const [person, hisFriend] = ["marc", "oliver"];

//   const toggleHandler = () => {
//     // if (showText === true) {
//     //   setShowText(false);
//     // } else {
//     //   setShowText(true);
//     // }
//     setShowText(!showText);
//   };

//   // let toggledText = null;
//   // if (showText) {
//   //   toggledText = <p>this is the toggling text</p>;
//   // }

//   return (
//     <div>
//       <h1>This is my new app</h1>
//       {/* {showText ? <p>this is the toggling text</p> : null} */}
//       {/* {toggledText} */}
//       {showText && <p>this is the toggling text</p>}
//       <button type="button" onClick={toggleHandler}>
//         Toggle
//       </button>
//     </div>
//   );
// };

/**
 * Dynamic routing:
 *  lama ykoon 3andy page lyha style sabet bs el content bta3ha bya5talef 3ala 7asab el resource el ana ba3melo show
 */

// export default AppStudy;

/**
 * 2 types of imports:
 *  - named imports
 *      - en enta bte3mel export l const aw variable
 *      - w lama btygy te3melo import el na7ya el tanya, bet7oto between curly braces w lazem el name bta3o yeb2a zy manta 3amelo export bzabt
 *  - default imports
 *     - en enta lama btygy t3mel export, btekteb "export default el7agaEl3ayzT3melahaExport"
 *     - w lama btygy t3mel import el na7ya el tanya, MMKN TEST5DEM AWY ESM ENTA 3AYZO
 */

/**
 * Backend Requests:
 *  - API call
 *      - Application Programming Interface
 *      - url /pets GET
 *            /pets POST
 *
 *  - GET
 *      - send data to backend as a (query string)
 *          - url: https://coding.com/all?search=keyword&sort=asc
 *                   - https: protocol
 *                   - coding.com: domain name
 *                   - /all: path
 *                   - ?search=keyword&sort=asc: query string
 *                      - dyh tary2a 3ashan teb3at byha data lel backend mn el frontend
 *                      - tary2et ketabetha en enta btekteb "?" b3d el path followed by the key name "=" value of that key
 *                      - lw 3ayz t7ot kaza key gmb b3d, bet7ot ben kol key wel tany "&"
 *
 *  - POST
 *  - PATCH
 *  - PUT
 *      - bteb3at el data el enta 3ayzha f 7aga esmaha el request body
 *      - en enta teb3at data fel header bta3 el request
 *  - DELETE
 */
