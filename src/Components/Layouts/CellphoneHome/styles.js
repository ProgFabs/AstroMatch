import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: url("https://i.pinimg.com/originals/f7/11/da/f711da1c547cbdd8c80fd3c7a9ee29d4.jpg");
  display: flex;
  background: ${({ theme }) => theme.body};
  color: white;
  width: 400px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  border: ${({ theme }) => theme.border};
  box-shadow: 0 0 5px #0000000f;

  @media only screen and (min-width: 360px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    left: 0;
    top: 0;
    border: none;
    border-radius: 0;
    width: 375px;
    height: 667px;
    transform: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 75px;
  position: fixed;
  bottom: 84%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;

  @media only screen and (min-width: 360px) {
    position: absolute;
    left: 0;
    bottom: 0;
    border: 1px solid green;
    width: 360px;
    top: 0%;
    transform: none;
  }
`;

export const UpperBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 40px;
  position: fixed;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.hole};

  @media (max-width: 320px) {
    top: 90%;
  }

  @media (max-width: 360px) {
    top: 92.5%;
  }
`;

export const Screen = styled.div`
  width: 375px;
  height: 475px;
  position: relative;
  top: 47.5%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0 5px #0000000f;

  @media only screen and (min-width: 360px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 10px;
    top: 0;
    width: 360px;
    height: 475px;
    transform: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  height: 75px;
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.7);

  @media only screen and (min-width: 360px) {
    position: absolute;
    left: 1%;
    top: 85%;
    padding: 10px;
    transform: none;
  }
`;
