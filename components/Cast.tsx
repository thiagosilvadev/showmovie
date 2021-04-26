import React from "react";

import { Cast as CastProp } from "../config/useMovie";

interface Props {
  cast: CastProp;
}

export const Cast = ({ cast }: Props) => {
  if (!cast.profile_path) return null;
  return (
    <div
      style={{ maxWidth: "170px" }}
      className="w-full bg-white rounded-b-lg shadow"
    >
      <div className="img">
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${cast.profile_path}`}
          alt=""
          className="w-full h-52 object-cover rounded-t-lg"
        />
      </div>
      <div className="text p-3  text-sm ">
        <h4 className="text-dark font-semibold">{cast.name}</h4>
        <h5 className="font-normal italic text-text-light">{cast.character}</h5>
      </div>
    </div>
  );
};
