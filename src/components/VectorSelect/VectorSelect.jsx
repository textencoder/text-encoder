import styles from "./VectorSelect.module.css"

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export default function VectorSelect() {
  return (
    <Select className={styles.vectorSelect} aria-label="Vector Select" shouldFlip={false}>
      <Button className={styles.selectButton}>
        <SelectValue className={styles.selectValue}>
          Vec
          </SelectValue>
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Aardvark</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
}
