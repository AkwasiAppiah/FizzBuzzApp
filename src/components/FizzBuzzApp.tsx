import { useState } from "react";

export default function FizzBuzzApp(): JSX.Element {
  const [count, setCountState] = useState<number>(1);
  const [numberArray, setNumberArrayState] = useState<(number | string)[]>([]);

  const handleNextNumber = () => setCountState(count + 1);

  function FizzBuzz(count: number) {
    if (count % 3 === 0) {
      setNumberArrayState([...numberArray, "Fizz"]);
      handleNextNumber();
    } else if (count % 5 === 0) {
      setNumberArrayState([...numberArray, "Buzz"]);
      handleNextNumber();
    } else {
      setNumberArrayState([...numberArray, count]);
      handleNextNumber();
      console.log(count);
    }
  }

  console.log(count);
  console.log(numberArray);

  return (
    <>
      <>
        <h1>Fizz Buzz App</h1>
        <button onClick={() => FizzBuzz(count)}>Next</button>
        <p>Former Numbers: {numberArray}</p>
        <p>Current Number: {numberArray[numberArray.length - 1]}</p>
      </>
    </>
  );
}
