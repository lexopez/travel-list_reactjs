function Item({ item }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        1 bag
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
