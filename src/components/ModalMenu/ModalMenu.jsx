import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
} from "react-aria-components";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./ModalMenu.css";
import { ReactSVG } from "react-svg";
import { stringify } from "svgson";
import LayerCount from "../Statistics/LayerCount";
import Measurements from "../Statistics/Measurements";

export default function ModalMenu({ vectorArray, setCount }) {
  console.log("modal menu array: ", vectorArray);

  const vectorList = vectorArray.map((vector) => {
    return (
      <>
        <ModalMenuListItem
          setCount={setCount}
          id={vector.id}
          key={vector.id}
          name={vector.name}
          vector={vector.vector}
          vectorAttributes={vector.vector.attributes}
          layers={vector.vector.children.length}
        />
        {vector.id < 21 && <hr />}
      </>
    );
  });

  console.log("vectorList: ", vectorList);

  return (
      <DialogTrigger>
        <Button className="header-button">
          <HamburgerMenuIcon width={25} height={25} />
        </Button>
        <Modal isDismissable className={"reactAriaModalMenu"}>
          <Dialog>
            <ul>{vectorList}</ul>
          </Dialog>
        </Modal>
      </DialogTrigger>
  );
}

function ModalMenuListItem({
  id,
  name,
  vector,
  setCount,
  vectorAttributes,
  layers,
}) {
  function handleClick() {
    //console.log("modal menu list item clicked: ", id);
    setCount(id);
    console.log(vector);
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
      <div className="count-container">
        <div className="list-count">{id + 1}</div>
        <ListItemThumbnail vector={vector} />
      </div>

      <div className="attribute-container">
        <LayerCount
          style={{ flexDirection: "row-reverse", gap: 10 }}
          layers={layers}
          lightness={50}
        />
        <Measurements
          style={{ flexDirection: "row-reverse", gap: 10 }}
          vectorAttributes={vectorAttributes}
          lightness={50}
        />
      </div>
    </Button>
  );
}

function ListItemThumbnail({ vector }) {
  return (
    <ReactSVG
      afterInjection={(svg) => {
        svg.setAttribute("style", "width: 65px");
        const layerOne = svg.querySelector('[data-name="layerOne"]');
        const layerTwo = svg.querySelector('[data-name="layerTwo"]');
        layerOne.setAttribute("style", `fill: #ffffff`);
        if (layerTwo) {
          layerTwo.setAttribute("style", `fill: darkslategrey`);
        }
      }}
      src={`data:image/svg+xml;utf8,${encodeURIComponent(stringify(vector))}`}
    />
  );
}
