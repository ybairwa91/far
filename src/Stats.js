import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You are Ready to Go"
          : `have ${numItems} items on your list,and you already packed ${numPacked}(
        {percent}%)`}
      </em>
    </footer>
  );
}
