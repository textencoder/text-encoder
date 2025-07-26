import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { GlobeIcon } from "@radix-ui/react-icons";
import "./ModalMenu.css";

export default function ModalMenu({ vectorArray }) {
  console.log("modal menu array: ", vectorArray);

  const vectorList = vectorArray.map((vector) => {
    return (
      <>
    <ModalMenuListItem key={vector.name} name={vector.name} />
      <hr />
      </>
    );
  });

  console.log("vectorList: ", vectorList);

  return (
    <DialogTrigger>
      <Button className="header-button">
        <GlobeIcon width={25} height={25} />
      </Button>
      <Modal isDismissable>
        <Dialog>
          <ul>{vectorList}</ul>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

function ModalMenuListItem({ name }) {
  function handleClick() {
    console.log("modal menu list item clicked: ", name)
  }

  return (
    <li
    onClick={handleClick}
      style={{
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        cursor: "pointer",
      }}
    >
      {name}
    </li>
  );
}
