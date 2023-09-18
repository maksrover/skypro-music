// import { useState } from "react";
import * as S from './ProgressBar.styled'

export default function ProgressBar({currentTime, duration, onChange}) {
const handleProgressBarChange = (event) => {
    const newTime = parseFloat(event.target.value)
    onChange(newTime)
}

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={handleProgressBarChange}
      $color="#ff0000"
    />
  );
}
