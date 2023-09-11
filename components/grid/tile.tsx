export const GridTile = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        width: 80,
        height: 80,
        pointerEvents: "all",
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{ border: "0.5px solid rgba(50,50,50)" }}
          className="grid-item"
        />
      ))}
    </div>
  );
};
