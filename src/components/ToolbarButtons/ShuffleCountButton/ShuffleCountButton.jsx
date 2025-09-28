import { Button } from "react-aria-components";
import { SymbolIcon } from "@radix-ui/react-icons";

export default function ShuffleCountButton({ count, setCount }) {
  function handleClick() {
    setCount((prevValue) => {
      let randomNumber = Math.floor(Math.random() * 22);
      while (prevValue == randomNumber) {
        randomNumber = Math.floor(Math.random() * 22);
      }
      return randomNumber;
    });
  }

  return (
    <Button aria-label="Generate Random Vector" onClick={handleClick} className="header-button">
      <SymbolIcon color="currentColor" width={25} height={25} style={{transform: "rotate(90deg)"}}/>
    </Button>
  );
}
