import React, { useRef, useEffect, useState } from "react"
import {
  RouletteBox,
  RouletteBoard,
  HighLightArea,
  Pointer,
  RoulleteBtn,
  RouletteContainer,
  general_theme
} from "./styleComp"
import { TweenLite, TweenMax, Power2 } from 'gsap'
import { ThemeProvider } from 'styled-components'




const Roulette = ({
  reset_callback = () => {},
  start_callback = () => {},
  has_reset = true,
  start_text = 'Start!',
  reset_text = 'Reset',
  ...props
}) => {
  const [start, set_start] = useState(false)
  const [show_reset, set_show_reset] = useState(false)
  const [forbid_start, set_forbid_start] = useState(false)

  const clickToReset = () => {
    set_start(false)
    reset_callback()
    set_show_reset(false)
    set_forbid_start(true)
  }
  const clickToTrigger = () => {
    set_start(true)
    start_callback()
  }

  return (
    <RouletteContainer className="roulette-container">
      <RouletteBody
        start={start}
        forbid_start={forbid_start}
        set_show_reset={set_show_reset}
        set_forbid_start={set_forbid_start}
        onClick={clickToTrigger}
        {...props}
      />

      {(has_reset && show_reset) && (
        <RoulleteBtn
          onClick={clickToReset}
          className="reset-btn"
        >
          {reset_text}
        </RoulleteBtn>
      )}
    </RouletteContainer>
  )
}



const RouletteBody = ({
  roulette_img_under_highlight,
  roulette_img_on_highlight,
  highlight_img,
  pointer_img,
  start,
  prize_arr,
  set_show_reset, 
  set_forbid_start,
  forbid_start,
  endIndex,
  onClick,
  on_complete = () => {}
}) => {
  const UBoardRef = useRef(null)
  const OBoardRef = useRef(null)
  const HighlightRef = useRef(null)
  const prize_num = endIndex

  const trigger_roulette = () => {
    TweenLite.to([UBoardRef.current, OBoardRef.current], 3, {
      rotation: 360 * 10,
      ease: Power2.easeIn,
      onComplete: () => {
        TweenLite.to([UBoardRef.current, OBoardRef.current], 3, {
          rotation: 360 * 15 + (360 * prize_num) / prize_arr.length,
          ease: Power2.easeOut,
          onComplete: () => {
            TweenMax.to(HighlightRef.current, 0.5, {
              alpha: 1,
              yoyo: true,
              repeat: -1
            })
            set_show_reset(true)
            on_complete(prize_arr[prize_num])
          }
        })
      }
    })
  }

  const reset_roulette = () => {
    TweenLite.to([UBoardRef.current, OBoardRef.current], 1, {
      rotation: 0,
      ease: Power2.easeIn,
      onComplete: () => {
        set_forbid_start(false)
      }
    })
    TweenMax.to(HighlightRef.current, 0.5, {
      opacity: 0,
    })
  }

  useEffect(() => {
    if (start) {
      console.log("roulette runned")
      trigger_roulette()
    } else {
      reset_roulette()
    }
  }, [start])

  useEffect(() => {
    console.log("roulette runned from basic use effeect")
  }, [])

  return (
    <ThemeProvider theme={Object.assign({}, general_theme)}>
      <RouletteBox
        className="Roulette-box"
      >
        <RouletteBoard
          ref={UBoardRef}
          Roulette_img={roulette_img_under_highlight}
          className="Roulette-board-u"
        />
        <HighLightArea
          ref={HighlightRef}
          highlight_img={highlight_img}
          className="highlight-area"
        />
        <RouletteBoard
          ref={OBoardRef}
          Roulette_img={roulette_img_on_highlight}
          className="Roulette-board-o"
        />
        <Pointer forbid_start = {forbid_start} pointer_img={pointer_img} onClick={onClick} className="pointer" />
      </RouletteBox>
    </ThemeProvider>
  )
}





const generate_random_number = (start = 1, end = 10) => (
  Math.floor(Math.random() * end) + start
)



export default Roulette
