// import { useState } from "react";
// import styled from "styled-components";
// const RoleDice = ({currentDice, roleDice}) => {
  

//   return (
//     <DiceContainer>
//       <div className="dice" onClick={roleDice}>
//         <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
//       </div>
//       <p>Click On Dice to roll</p>
//     </DiceContainer>
//   );
// };

// export default RoleDice;

// const DiceContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 48px;

//   p {
//     font-size: 24px;
//   }

//   .dice {
//     cursor: pointer;
//   }
// `;
// ***


import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleDiceClick = () => {
    setIsRolling(true);

    // After a delay, stop the rolling effect and call the roleDice function
    setTimeout(() => {
      setIsRolling(false);
      roleDice();
    }, 2000); // Adjust the duration of rolling as per your preference
  };

  return (
    <DiceContainer>
      <div
        className={`dice ${isRolling ? "rolling" : ""}`}
        onClick={handleDiceClick}
      >
        <img src={`/images/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click On Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const rollingAnimation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(360deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(360deg) rotateY(360deg);
  }
  75% {
    transform: rotateX(0deg) rotateY(360deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg);
  }
`;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
    transition: transform 2s;
    &.rolling {
      animation: ${rollingAnimation} 2s linear;
    }
  }
`;
