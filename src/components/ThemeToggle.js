import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeStore";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
// import { HiOutlineSun , HiOutlineMoon } from 'react-icons/hi';
import styled from "styled-components";

const Moon = styled(FaRegMoon)`
    margin: 10px;
    cursor: pointer;    
`;
const Sun = styled(FaRegSun)`
    margin: 10px;
    cursor: pointer;    
`;

export const ThemeToggler = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
    return (
    <>
        {theme === "dark" ? (
        <Moon size={26} color="#fff" onClick={() => switchTheme("light")} />
        ) : (
        <Sun size={26} color="#000" onClick={() => switchTheme("dark")} />
        )}
    </>
    );
};
