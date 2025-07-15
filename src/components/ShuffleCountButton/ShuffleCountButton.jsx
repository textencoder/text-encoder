import { Button } from "react-aria-components";
import { SymbolIcon } from "@radix-ui/react-icons";
import styles from "./ShuffleCountButton.module.css";

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
    <Button onClick={handleClick} className={styles.shuffleCountButton}>
      <SymbolIcon color="currentColor" width={25} height={25} />
    </Button>
  );
}
