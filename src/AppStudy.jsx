import { useState } from "react";

const AppStudy = () => {
  const [showText, setShowText] = useState(true);
  console.log(showText);

  // array destructuring
  // const [person, hisFriend] = ["marc", "oliver"];

  const toggleHandler = () => {
    // if (showText === true) {
    //   setShowText(false);
    // } else {
    //   setShowText(true);
    // }
    setShowText(!showText);
  };

  // let toggledText = null;
  // if (showText) {
  //   toggledText = <p>this is the toggling text</p>;
  // }

  return (
    <div>
      <h1>This is my new app</h1>
      {/* {showText ? <p>this is the toggling text</p> : null} */}
      {/* {toggledText} */}
      {showText && <p>this is the toggling text</p>}
      <button type="button" onClick={toggleHandler}>
        Toggle
      </button>
    </div>
  );
};

export default AppStudy;
