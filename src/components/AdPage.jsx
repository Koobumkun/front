import React, { useState } from "react";
import Ad from "./Ad";

export default function AdPage() {
  const [isAdOn, setIsAdOn] = useState(true);

  const onClickhandler = () => {
    setIsAdOn(isAdOn => !isAdOn);
  };

  return (
    <div>
      <Ad isAdOn={isAdOn}></Ad>
      <button onClick={onClickhandler}>
        {isAdOn ? '광고 안보기' : '광고 보기'}
        </button>
    </div>
  );
}
