function PackingList() {
  return (
    <div className="list">
      <ul>
        <li>
          <input type="checkbox" value={true} />
          <span style={{ textDecoration: "line-through" }}>1 bag</span>
          <button>❌</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>1 t-shirt</span>
          <button>❌</button>
        </li>
      </ul>
    </div>
  );
}

export default PackingList;
