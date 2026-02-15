const Loader = () => {
  const pingDuration = "1.2s";

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-8 h-8 relative transform rotate-45">
        {/* Top-left */}
        <div
          className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
          style={{ top: 0, left: 0, animationDuration: pingDuration }}
        ></div>

        {/* Top-right */}
        <div
          className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
          style={{ top: 0, right: 0, animationDuration: pingDuration, animationDelay: "0.15s" }}
        ></div>

        {/* Bottom-right */}
        <div
          className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
          style={{ bottom: 0, right: 0, animationDuration: pingDuration, animationDelay: "0.3s" }}
        ></div>

        {/* Bottom-left */}
        <div
          className="absolute bg-orange-600 w-3.5 h-3.5 animate-ping"
          style={{ bottom: 0, left: 0, animationDuration: pingDuration, animationDelay: "0.45s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
