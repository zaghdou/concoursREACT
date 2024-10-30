import React, { useState, useRef } from "react";
import "./RoulettePage.css";
import pointer_img from "../images/pointer.png";
import roulette_img_under_highlight from "../images/roulette1.png";
import PanelCST from "./panel/PanelCST";
import stockage from '../images/stockage.png'
import Roulette from './Roulette/Roulette';

const RoulettePage = () => {
  const [prize, setPrize] = useState("");
  const [prizeImg, setPrizeImg] = useState("");
  const [showReward, setShowReward] = useState(false);
  const rouletteRef = useRef(null);

  // Prize array
  const prize_arr = ["tv", "tv2", "tv3", "tv4", "tv5", "tv6"];

  // Force the wheel to always stop on "tv"
  const tvIndex = prize_arr.indexOf("tv3");

  // When the wheel stops, this will trigger
  const on_complete = () => {
    setShowReward(true);
    setPrize("espace de stockage");
    setPrizeImg(stockage);
  };

  const handleStart = () => {
    if (rouletteRef.current && rouletteRef.current.handleStart) {
      // Force the wheel to stop at the TV index
      rouletteRef.current.handleStart(tvIndex);
    }
  };

  const roulette_props = {
    roulette_img_under_highlight,
    pointer_img,
    prize_arr,
    on_complete,
    endIndex: tvIndex,
    has_reset: true,
    start_text: "START",
    ref: rouletteRef,
  };

  return (
    <>
    <PanelCST />
      <div className="game-box">
        <Roulette {...roulette_props} />
      </div>
      {showReward ? (
        <div className = "winnerPanel">
          <div className="reward">
            <p>Félicitations ! Vous avez gagné de l'{prize}</p>
            <img src={prizeImg} alt={prize} />
            <button
              className="btn-close"
              onClick={() => {
                setShowReward(false);
                if (rouletteRef.current && rouletteRef.current.handleReset) {
                  rouletteRef.current.handleReset();
                }
              }}
            >
              Recevez votre cadeau
            </button>
          </div>
          <div className="mask" />
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default RoulettePage;