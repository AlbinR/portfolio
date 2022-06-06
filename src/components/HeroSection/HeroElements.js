import styled from "styled-components";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 0 20px;
  z-index: 1;
  /* :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
    z-index: 2;
  } */
`;

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 600px;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    display: none;
  } ;
`;

export const SmallImg = styled.div`
  display: none;
  width: 100px;
  height: 90px;
  @media screen and (max-width: 768px) {
    display: block;
  } ;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageAr = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -o-object-fit: cover;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  max-height: 600px;
  padding-left: 20px;
  letter-spacing: 1.5px;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Text = styled.div`
 padding-top: 10px;
 font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  margin:30px 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroText = styled.div`
  padding: 10px;
`;

export const AboutText = styled.div`
  /* margin: auto;
  margin-bottom: 6%; */
  /* padding: 10px; */
  p {
    /* font-size: calc(10px + 1vw); */
    font-size: 1.1rem;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.text};
  text-decoration: none;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  a {
    color: ${(p) => p.theme.text};
    :hover{
      color: #ccc;
      /* transition: all 0.1s ease-in-out; */
    }
  }
`;

export const Line = styled.div`
  width: 20px;
  border-bottom: 2px solid #ccc;
  margin: 0 10px;
`;