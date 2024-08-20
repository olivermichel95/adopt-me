import { useEffect, useState } from "react";

const Test = () => {
  const [enteredText, setEnteredText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (enteredText.length < 2) {
      setError(" Please enter any text more than 2 characters");
    } else if (enteredText.length > 10) {
      setError("Please enter any text  less than 10 characters");
    } else {
      setError("");
    }
  }, [enteredText]);

  useEffect(() => {
    const debounceFunction = setTimeout(() => {
      console.log("sending request");
    }, 1000);

    return () => {
      console.log("in clean up");
      clearTimeout(debounceFunction);
    };
  }, [enteredText]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setEnteredText(e.target.value);
        }}
      />
      {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Test;
