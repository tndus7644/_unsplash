import React from 'react';
import styled from 'styled-components';
import SearchBox from "../searchBox";
import {navigate} from "../../../lib/History";
import Nav from "./Nav";
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
            </HeaderWrap>
        </>
    )
}

const HeaderWrap = styled.div`
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