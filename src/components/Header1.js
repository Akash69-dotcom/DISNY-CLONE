import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const navMenus = [
  {
    link: "/home",
    name: "HOME",
  },
  {
    link: "/search",
    name: "SEARCH",
  },
  {
    link: "/watchlist",
    name: "WATCHLIST",
  },
  {
    link: "/orginials",
    name: "ORGINALS",
  },
  {
    link: "/movies",
    name: "MOVIES",
  },
  {
    link: "/series",
    name: "SERIES",
  },
];

const Header1 = () => {
  const { pathname } = useLocation();
  return (
    <Nav>
      <Logo>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/en_dplus_lg_r_2x_54572343.png"
          alt="Disny+"
        />
      </Logo>
      <NavMenu>
        {navMenus.map((e, i) => (
          <li key={i} className={pathname === e.link ? "active" : ""}>
            <Link to={e.link}>{e.name}</Link>
          </li>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Header1;
const Logo = styled.a`
  padding: 0;
  padding-bottom: 15px;
  width: 80px;
  margin-top: 4px;
  max-height: 90px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 150%;
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  li {
    list-style: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
