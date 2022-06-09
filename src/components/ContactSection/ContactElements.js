import styled from "styled-components";

export const ContactContainer = styled.div`
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* @media screen and (max-width: 768px) {} */
`;

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
  padding: 20px 0;
  display: flex;
  align-items: center;
  h1{
    margin-right: 10px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    margin-bottom: 70px;
  } */
`;

export const ContentBox = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;


export const Input = styled.input`
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  border: none;
  /* border: 1px solid ${(p) => p.theme.text}; */
  border-radius: 6px;
  font-size: 1.2rem;
  outline: none;
  /* @media screen and (max-width: 768px) {
    width: 100%;
  } */
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  background: ${(p) => p.theme.onSurface};
  color: ${(p) => p.theme.text};
  margin-bottom: 12px;
  border: none;
  /* border: 1px solid ${(p) => p.theme.text}; */
  border-radius: 6px;
  font-size: 1.2rem;
  /* @media screen and (max-width: 800px) {
    width: 100%;
  } */

`;

export const ContactForm = styled.form`
  /* width: 350px; */
  display: flex;
  width: 100%;
  flex-direction: column;
  /* @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  } */
`;

export const Socials = styled.div`
  /* width: 350px; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  
  a{
    display: flex;
    text-decoration: none;
    color: ${(p) => p.theme.text};
    align-items: center;
    justify-content: space-between;
    margin: 14px;
  }

`;

