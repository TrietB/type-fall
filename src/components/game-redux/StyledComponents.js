import styled from "styled-components";


export const StyledButton = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.3rem;
  background: ${props => props.background || "transparent"};
  border-radius: 3px;
  display: inline-block;
  border: 2px solid #000;
  cursor: pointer;
  transition: 0.25s;
  will-change: transform;
  ${props =>
    props.italic && "font-style: italic;"} box-shadow: -1px 1px 0px #333,
    -2px 2px 0px #333,
    -3px 3px 0px #333,
    -4px 4px 0px #333;

  &:hover {
    transform: scale(1.05);
    box-shadow: -1px 1px 0px #333, -2px 2px 0px #333, -3px 3px 0px #333,
      -4px 4px 0px #333, -5px 5px 0px #333, -6px 6px 0px #333;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: -1px 1px 0px #222, -2px 2px 0px #222;
  }
`;

export function Button(props) {
  return (
    <StyledButton onClick={props.handleClick} {...props}>
      {props.children}
    </StyledButton>
  );
}

export const BlockLabel = styled.label`
  display: block;
  margin: 10px 0;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.25s;

  input {
    display: none;
  }

  span {
    display: block;
    padding-left: 50px;

    &::before {
      content: "";
      position: absolute;
      height: 10px;
      width: 10px;
      border: 2px solid black;
      left: 20px;
      top: 5px;
      transition: 0.25s;
    }
  }

  input:checked + span {
    font-size: 1.4rem;

    &::before {
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
      height: 20px;
      top: -2px;
    }
  }
`;

export function StyledCheckbox(props) {
  let disabled = false;
  let spanStyles = {
    opacity: 1
  };
  if (props.disabled === true) {
    disabled = true;
    spanStyles.opacity = 0.75;
  }
  return (
    <BlockLabel>
      <input
        type="checkbox"
        disabled={disabled}
        value={props.value}
        checked={props.checked}
        onChange={props.handleInput}
      />
      <span style={spanStyles}>{props.children}</span>
    </BlockLabel>
  );
}

export const AnimatedHeader = styled.h1`
  animation: header-animation 2s infinite linear;
  font-family: "Bungee Shade", cursive;
  text-align: center;
  font-size: 4rem;

  @keyframes header-animation {
    0% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #ddd, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,
        -9px 9px #fff, -10px 10px #fff;
    }
    10% {
      text-shadow: -1px 1px #fff, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #ddd, -6px 6px #ddd, -7px 7px #fff, -8px 8px #fff,
        -9px 9px #fff, -10px 10px #fff;
    }
    20% {
      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd, -8px 8px #fff,
        -9px 9px #fff, -10px 10px #fff;
    }
    30% {
      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #ddd,
        -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd, -8px 8px #ddd,
        -9px 9px #fff, -10px 10px #fff;
    }
    40% {
      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd, -8px 8px #ddd,
        -9px 9px #ddd, -10px 10px #fff;
    }
    50% {
      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #fff, -6px 6px #ddd, -7px 7px #ddd, -8px 8px #ddd,
        -9px 9px #ddd, -10px 10px #ddd;
    }
    60% {
      text-shadow: -1px 1px #ddd, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #fff, -6px 6px #fff, -7px 7px #ddd, -8px 8px #ddd,
        -9px 9px #ddd, -10px 10px #ddd;
    }
    70% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #ddd,
        -9px 9px #ddd, -10px 10px #ddd;
    }
    80% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #fff,
        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,
        -9px 9px #ddd, -10px 10px #ddd;
    }
    90% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,
        -9px 9px #fff, -10px 10px #ddd;
    }
    100% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #ddd, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,
        -9px 9px #fff, -10px 10px #fff;
    }
  }

  @keyframes header-animation-2 {
    0% {
      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #fff;
    }
    20% {
      text-shadow: -1px 1px #ddd, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #fff;
    }
    40% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #fff, -4px 4px #fff,
        -5px 5px #fff;
    }
    60% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #fff,
        -5px 5px #fff;
    }
    80% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #fff;
    }
    100% {
      text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd,
        -5px 5px #ddd, -6px 6px #fff;
    }
  }
`;

export const ViewContainer = styled.div`
  width: calc(100vw-300px);
  min-height: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: #aab5c5;
`;

export const HealthBarContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0;
  left: 10%;
  height: 50px;
`;

export const Title = styled.p`
  position: absolute;
  left: 50%;
  top: -10%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;

export const HealthBarDiv = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0%;
  height: 80%;
  transition: 0.5s;
  background: #f46652;
`;

export function HealthBar(props) {
  let style = {
    width: props.width + "%"
  };
  return (
    <HealthBarContainer>
      <HealthBarDiv style={style} />
      <Title>Health</Title>
    </HealthBarContainer>
  );
}

export const InnerContainer = styled.div`
  max-width: 750px;
  width: 100%;
  border: 5px double #c6c6cb;
  padding: 1rem;
  top: 0;
  position: relative;
  background: white;
  margin: 1rem;
  animation: slide-in forwards 0.5s;
  transition: 0.5s;

  @keyframes slide-in {
    0% {
      transform: translateY(-150vh);
    }
    100% {
      transform: translateY(0);
    }
  }

  &.reverse-animate-slide-in {
    transform: translateY(-100vw);
  }
`;

export function RadioCheckBox(props) {
  let disabled = false;
  let spanStyles = {
    opacity: 1
  };
  if (props.disabled === true) {
    disabled = true;
    spanStyles.opacity = 0.75;
  }
  return (
    <BlockLabel>
      <input
        type="checkbox"
        disabled={disabled}
        value={props.value}
        checked={props.checked}
        onChange={props.handleInput}
      />
      <span style={spanStyles}>{props.children}</span>
    </BlockLabel>
  );
}

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 750px) {
    & {
      display: block;
    }
  }
`;

export const OptionsList = styled.div`
  width: 30%;
  margin: 1rem;
  @media (max-width: 750px) {
    & {
      border-top: 2px solid #888;
      width: 100%;
      margin: 0;
    }
  }
`;
export const GameOverContainer = styled.div`
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    animation: scale-in 2s forwards;
  }
  h3 {
    font-size: 1.5rem;
  }
`;