import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../../components/PhotoList/PhotoList";
import {photoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import SearchContainer from "../../containers/SearchContainer";

const Search = ({match}) => {

    return (
        <Container>
            <SearchName>{match.params.query}</SearchName>
            <SearchContainer/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1290px;
  margin: 50px auto;
`;

const SearchName = styled.div`
  margin-bottom: 50px;
  font-size: 46px;
  font-weight: bold;
  text-transform: capitalize;
`;

export default Search;