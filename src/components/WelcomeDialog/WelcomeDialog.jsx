import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
} from "react-aria-components";
import { useState } from "react";
import styles from "./WelcomeDialog.module.css";
import {
  MixerHorizontalIcon,
  GridIcon,
  ShuffleIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

export default function WelcomeDialog() {
  const [isOpen, setOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setOpen}
      className={styles.reactAriaModalWelcome}
    >
      <Dialog className={styles.welcomeDialog}>
        <Heading slot="title" className={styles.header}>
          <p>Welcome to the lab!</p>
        </Heading>
        <p style={{ textAlign: "center", lineHeight: 1.25 }}>
          This is a minimalist vector editor built to showcase my personal
          portfolio of typographic logo designs.
        </p>
        {/* <p style={{textAlign: "center"}}>
          Each logo is loaded as layered SVG markup, allowing simple edits like
          color adjustments, scaling, and layer visibility toggling.
        </p> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "60%",
          }}
        >
          <div>
            <MixerHorizontalIcon color="currentColor" width={25} height={25} />
            <p>Show/Hide Controls</p>
          </div>
          <div>
            <GridIcon color="currentColor" width={25} height={25} />
            <p>Toggle Grid</p>
          </div>
          <div>
            <ShuffleIcon color="currentColor" width={25} height={25} />
            <p>Randomize Colors</p>
          </div>
          <div>
            <HamburgerMenuIcon color="currentColor" width={25} height={25} />
            <p>Open Select Menu</p>
          </div>
        </div>
        <Button className={styles.confirmButton} slot="close">
          Let's Go!
        </Button>
      </Dialog>
    </Modal>
  );
}
