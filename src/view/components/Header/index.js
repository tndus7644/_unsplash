import React from 'react';
import styled from 'styled-components';
import SearchBox from "../searchBox";
import {navigate} from "../../../lib/History";
import Nav from "./Nav";
import Lnb from "./Lnb";
import {LogoSvg} from "../Svg";

const Header = () => {

    return (
        <>
            <HeaderWrap>
                <Container>
                    <HomeLink onClick={() => navigate("/")}>
                        <Logo>
                            <LogoSvg/>
                        </Logo>
                        <Title>
                            <h1>Unsplash</h1>
                            <h3>Photos for everyone</h3>
                        </Title>
                    </HomeLink>
                    <SearchBox shape={"round"}/>
                    <Nav/>
                </Container>
                <Lnb/>
            </HeaderWrap>
        </>
    )
}

const HeaderWrap = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 0 8px 3px rgba(0,0,0,0.1);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 62px;
`;

const HomeLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div`
  margin-right: 15px;
`;

const Title = styled.div`
  margin-right: 20px;

  h1 {
    font-size: 15px;
    font-weight: bold;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export default Header;