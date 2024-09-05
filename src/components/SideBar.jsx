/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { FaBook, FaUser, FaClipboardList, FaBlogger, FaTachometerAlt } from 'react-icons/fa';
import { logo_s } from '../assets';


const Sidebar = () => {
    const SideBar = styled.div`
    margin: 20px;
    `;

    const SidebarStyle = css`
    width: 250px;
    height: 100vh;
    background-color: #00a9b7;
    color: white;
    box-shadow: 2px 0 8px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    `;

    const LogoStyle = css`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    gap: 0px;
    align-items: center;
    h1 {
    font-size: 24px;
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    text-align: center;
    }
    `;

    const Logo = styled.img`
    width: 50px;
    height: 50px;
    `;

    const MenuStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
    display: flex;
    align-items: center;
    padding: 5px 0;
    padding-left: 5px;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Bebas Neue', sans-serif;

    svg {
        margin-right: 10px;
        font-size: 22px;
    }

    &:hover {
        color: #393E46;
        background-color: #FFF;
        border-radius: 5px;
    }
    }
    `;
    return (
    <div css={SidebarStyle}>
        <SideBar>
        <div css={LogoStyle}>
        <Logo src={logo_s} alt="Logo" />
        <h1>DESTINY BOOK STORE</h1>
        </div>
        <ul css={MenuStyle}>
        <li>
            <FaTachometerAlt />
            <span>Dashboard</span>
        </li>
        <li>
            <FaBook />
            <span>Books</span>
        </li>
        <li>
            <FaClipboardList />
            <span>Orders</span>
        </li>
        <li>
            <FaUser />
            <span>Users</span>
        </li>
        <li>
            <FaBlogger />
            <span>Blogs</span>
        </li>
        </ul>
        </SideBar>
    </div>
    );
    };


    export default Sidebar;
