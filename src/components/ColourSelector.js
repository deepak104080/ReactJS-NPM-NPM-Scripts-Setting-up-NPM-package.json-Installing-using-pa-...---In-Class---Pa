import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, classname } = config;
  // const tempFn = () => {
  //   console.log("background", background);
  //   selectNextBackground({ background: background });
  // };
  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
