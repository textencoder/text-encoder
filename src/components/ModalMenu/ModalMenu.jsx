import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./ModalMenu.css";
import { ReactSVG } from "react-svg";
import { stringify } from "svgson";

export default function ModalMenu({ vectorArray, setCount }) {
  console.log("modal menu array: ", vectorArray);

  const vectorList = vectorArray.map((vector) => {
    return (
      <>
        <ModalMenuListItem
          setCount={setCount}
          id={vector.id}
          key={vector.name}
          name={vector.name}
          vector={vector.vector}
        />
        <hr />
      </>
    );
  });

  console.log("vectorList: ", vectorList);

  return (
    <DialogTrigger>
      <Button className="header-button">
        <HamburgerMenuIcon width={25} height={25} />
      </Button>
      <Modal isDismissable>
        <Dialog>
          <ul>{vectorList}</ul>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

function ModalMenuListItem({ id, name, vector, setCount }) {
  function handleClick() {
    console.log("modal menu list item clicked: ", id);
    setCount(id)
  }

  return (
    <Button
      className="modal-menu-button"
      slot="close"
      onClick={handleClick}
      style={{
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "monospace",
        cursor: "pointer",
        padding: "0 20px",
      }}
    >
      <ListItemThumbnail vector={vector} />
      {name}
    </Button>
  );
}

function ListItemThumbnail({ vector }) {
  return (
    <ReactSVG
      afterInjection={(svg) => {
        const layerOne = svg.querySelector('[data-name="layerOne"]');
        const layerTwo = svg.querySelector('[data-name="layerTwo"]');
        layerOne.setAttribute("style", `fill: #ffffff`);
        if (layerTwo) {
          layerTwo.setAttribute("style", `fill: silver`);
        }
      }}
      src={`data:image/svg+xml;utf8,${encodeURIComponent(stringify(vector))}`}
    />
  );
}
