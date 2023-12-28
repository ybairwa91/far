import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 12, packed: false },
];

//
function App() {
  const [items, setItems] = useState(initialItems);

  //
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //
  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  //
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //
  function handleDeleteList() {
    const confirmed = window.confirm(
      "Are You sure u want to delete all the items"
    );
    if (confirmed) setItems([]);
  }
  //
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItems}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
