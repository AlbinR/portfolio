import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardText,
  CardInfoBox,
  IconBox,
  GitIcon,
  Year,
  AButton,
} from "./CardElements";

export const Card = ({ title, imageUrl, body, year, gitLink, siteLink }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={imageUrl} alt=""></img>
          <Year>{year}</Year>
        </ImageContainer>
        <CardInfoBox>
          <CardTitle>{title}</CardTitle>
          <CardText>{body}</CardText>
          <IconBox>
            <AButton  target="_blank" primary dark href={gitLink} ><GitIcon/> GitHub</AButton>
            {siteLink ? <AButton href={siteLink} target="_blank">Live Demo</AButton> : null}
          </IconBox>
        </CardInfoBox>
      </CardContainer>
    </>
  );
};

export default Card;

// import React from "react";
// import {
//   CardContainer,
//   ImageContainer,
//   CardTitle,
//   CardText,
//   CardInfoBox,
//   CardContent,
//   IconBox,
//   GitIcon,
//   CardAge,
// } from "./CardElements";

// export const Card = ({ title, imageUrl, body, year }) => {
//   return (
//     <>
//       <CardContainer>
//         <CardInfoBox>
//           <CardContent>
//             <CardTitle>{title}</CardTitle>
//             <CardText>{body}</CardText>
//           </CardContent>
//           <IconBox>
//             <GitIcon />
//             <CardAge>
//               <p>{year}</p>
//             </CardAge>
//           </IconBox>
//         </CardInfoBox>
//         <ImageContainer>
//           <img src={imageUrl} alt=""></img>
//         </ImageContainer>
//       </CardContainer>
//     </>
//   );
// };

// export default Card;
