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
          <p>
            Welcome to the
            <span>
              <svg
                id="b"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                viewBox="0 0 24 23.005342"
              >
                <path
                  d="M9.777878,21.712422c0-1.093179,1.460271-1.689704,2.453579-2.48597,1.492662-1.22544,2.321318-1.921835,3.249845-2.850363,3.911151-3.944891,5.965248-7.55778,5.965248-10.441883,0-2.287578-1.325311-3.414497-4.075803-3.414497C11.435191,2.51971,2.51971,7.723781,2.51971,10.972277c0,.564134.296913.762526,1.392791.762526,2.782883,0,6.496992-1.591183,8.286566-3.514368.164652-.164652,1.457572-1.623573,2.386099-1.623573.596525,0,1.19305.596525,1.19305,1.19305,0,.728786-1.160659,1.723444-1.722094,2.253838-3.149975,2.651971-6.996345,4.276894-10.11123,4.276894-2.55345,0-3.944891-1.094528-3.944891-3.116235C0,6.166339,9.513355,0,17.103526,0c4.343024,0,6.896474,2.187707,6.896474,5.966597,0,4.110892-3.249845,9.116572-9.382444,14.585166-.529045.464264-2.718102,2.453579-3.646629,2.453579-.628915,0-1.19305-.628915-1.19305-1.29292Z"
                  fill="#fff"
                />
              </svg>
              TextEncoder!
            </span>
          </p>
        </Heading>
        <p style={{ textAlign: "center", lineHeight: 1.25 }}>
          <span style={{ fontWeight: 700 }}>TextEncoder.net</span> is a
          minimalist vector editor built to showcase my personal portfolio of
          typographic logo designs.
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
