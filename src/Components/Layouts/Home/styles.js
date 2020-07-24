import styled from "styled-components";

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 400px;
  height: 700px;
  position: fixed;
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

export const DropdownMenuContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 7%;
`;

export const Screen = styled.div`
  width: 375px;
  height: 475px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 5px #0000000f;

  @media only screen and (min-width: 360px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 360px;
    height: 475px;
    transform: none;
  }
`;

export const Image = styled.img`
  width: 375px;
  height: 475px;

  @media only screen and (min-width: 360px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 350px;
    height: 475px;
    transform: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 35px;
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  background-color: ${({ theme }) => theme.buttonsContainer};

  @media only screen and (min-width: 360px) {
    position: absolute;
    left: 15%;
    top: 90%;
    padding: 10px;
    transform: none;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  flex-direction: row-reverse;
  position: fixed;
  left: 65%;
  top: 10%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 360px) {
    position: absolute;
    left: 40%;
    top: 7%;
    transform: none;
  }
`;

export const Header = styled.div``;

export const Logo = styled.p`
  color: #f50057;
  position: fixed;
  font-family: "Satisfy", cursive;
  font-size: 20pt;
  left: 50%;
  top: 2%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 360px) {
    position: absolute;
    left: 35%;
    top: 0%;
    transform: none;
  }
`;

export const Username = styled.p`
  text-align: left;
  width: 90%;
  max-height: 30%;
  position: fixed;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20pt;
  font-weight: bolder;
  left: 51.5%;
  top: 65%;
  transform: translate(-50%, -50%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media only screen and (min-width: 360px) {
    position: absolute;
    font-size: 18pt;
    top: 70%;
    left: 50%;
  }
`;

export const UserDescription = styled.p`
  position: absolute;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16pt;
  font-weight: normal;
  width: 90%;
  text-align: left;
  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media (max-width: 320px) {
    font-size: 14pt;
    top: 80%;
  }
  @media (max-width: 360px) {
    font-size: 12pt;
    top: 85%;
  }
`;
