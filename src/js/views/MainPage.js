import React, { useState, useEffect, useContext } from "react";
import { CharCard } from "./CharCard";
import { VehicleCard } from "./VehicleCard";
import { PlanetCard } from "./PlanetCard";
import { Context } from "../store/appContext";

import "../../styles/index.css";


export const MainPage = () => {
    const { store, actions } = useContext(Context);

                    return (
                    <div className="main">
                        <h1 className="main__title" id="characters">Characters</h1>
                        <div className="main__row">
                            <CharCard />
                        </div>

                        <h1 className="main__title" id="vehicles">Vehicles</h1>
                        <div className="main__row">
                            <VehicleCard />
                        </div>

                        <h1 className="main__title" id="planets">Planets</h1>
                        <div className="main__row">
                            <PlanetCard />
                        </div>
                    </div>
                    );
};

// Couldn't get to work: 

// import video from "../../img/video.mp4";

// log.js:59 Uncaught Error: Module parse failed: Unexpected character ' ' (1:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// (Source code omitted for this binary file)

// store.boolean === true
//                     ? <video src={video} width="750" height="500" controls>                    </video>
//                     : (REST OF CODE)