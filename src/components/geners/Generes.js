import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Generes = ({ data }) => {
  const { geners } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!geners[g]?.name) return;
        return (
          <div key={g} className="genre">
            {geners[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Generes;
