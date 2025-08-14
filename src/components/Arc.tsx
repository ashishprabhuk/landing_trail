
const Arc = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Subtract Shape */}
      <div
        className="absolute"
        style={{
          width: "1987.82px",
          height: "889px",
          background:
            "linear-gradient(180deg, #00B2FF 0%, #0082B9 12.03%, rgba(0, 55, 78, 0) 96.23%)",
          filter: "blur(0.95px)",
        }}
      />

      {/* Ellipse 34 */}
      <div
        className="absolute rounded-full"
        style={{
          width: "2000px",
          height: "2000px",
          background:
            "linear-gradient(180deg, #00B2FF 0%, #0082B9 5.35%, rgba(0, 55, 78, 0) 42.78%)",
          backdropFilter: "blur(8.65px)",
        }}
      />

      {/* Ellipse 35 */}
      <div
        className="absolute rounded-full"
        style={{
          width: "1500px",
          height: "1500px",
          background:
            "linear-gradient(180deg, #007EB4 0%, rgba(0, 55, 78, 0) 42.78%)",
        }}
      />

      {/* Rectangle 730 */}
      <div
        className="absolute"
        style={{
          width: "2604px",
          height: "1225px",
          background: "#D9D9D9",
        }}
      />
    </div>
  );
};

export default Arc;
