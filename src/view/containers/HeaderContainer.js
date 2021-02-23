import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Lnb from "../components/Header/Lnb";
import {Route, useLocation} from "react-router-dom";
import SearchResultBar from "../components/Header/SearchResultBar";

const HeaderContainer = () => {

    const location = useLocation();


    return(
        <Container className={"HeaderContainer"}>
            <Header/>
            {
                (location.pathname === '/' || location.pathname.startsWith('/topics')) &&
                    <Lnb/>
            }
            <Route path={["/search/:category/:query"]} component={SearchResultBar}/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 0 8px 3px rgba(0,0,0,0.1);
`;

export default HeaderContainer;