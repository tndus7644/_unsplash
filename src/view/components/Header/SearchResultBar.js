import React from 'react';
import styled from 'styled-components';
import {CollectionSvg, PhotoSvg, UserSvg} from "../Svg";
import {navigate} from "../../../lib/History";
import {useRouteMatch} from "react-router-dom";

const SearchResultBar = () => {

    const match = useRouteMatch("/search/photos/:query");

    const query = match?.params?.query;

    return (
        <Container>
            <Search onClick={() => navigate(`/search/photos/${query}`)}>
                <PhotoSvg/>
                <h1>Photos</h1>
            </Search>
            <Search onClick={() => navigate(`/search/collections/${query}`)}>
                <CollectionSvg/>
                <h1>Collections</h1>
            </Search>
            <Search onClick={() => navigate(`/search/users/${query}`)}>
                <UserSvg/>
                <h1>Users</h1>
            </Search>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 56px;
`;

const Search = styled.a`
  display: flex;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;
  color: #777;
  transition: 0.1s;

  &:hover {
    color: #000;
    
    svg{
      fill:#000;
    }
  }

  h1 {
    padding-left: 7px;
  }

  svg {
    width: 18px;
    display: flex;
    align-items: center;
    fill: #cdcdcd;
    transition: 0.1s;
  }
  
  .collection &{
    color: #000;
  }

`;

export default SearchResultBar;