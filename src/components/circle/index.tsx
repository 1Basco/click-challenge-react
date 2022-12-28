export function Circle(x: number, y: number) {
  return (
    <svg
      style={{ position: "absolute", left: x - 25, top: y - 25 }}
      width={50}
      height={50}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="pink"
        stroke-width="2"
        fill="purple"
      />
    </svg>
  );
}
