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
import { GlobeIcon } from "@radix-ui/react-icons";
import "./ModalMenu.css";

export default function ModalMenu() {
  return (
    <DialogTrigger >
      <Button className="header-button">
        <GlobeIcon width={25} height={25} />
      </Button>
      <Modal isDismissable>
        <Dialog>
          <ul>
            
          </ul>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
