import React, {useEffect} from 'react';
import styled from 'styled-components';
import SearchPhotoContainer from "../containers/SearchPhotoContainer";
import {SearchName} from "../../SearchName/SearchName";

const Search = ({match}) => {

    return (
        <Container>
            <Title>{match.params.query}</Title>
            <SearchPhotoContainer match={match}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1290px;
  margin: 50px auto;
`;

const Title = styled(SearchName)`
  margin-bottom: 50px;
  font-size: 46px;
  font-weight: bold;
  text-transform: capitalize;
`;

export default Search;