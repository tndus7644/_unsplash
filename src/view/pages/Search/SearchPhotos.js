import React, {useEffect} from 'react';
import styled from 'styled-components';
import SearchPhotoContainer from "../../containers/SearchPhotoContainer";
import {SearchName} from "../../../styled/SearchName";
import {SearchContainer} from "../../../styled/Container";
import SearchHeaderContainer from "../../containers/SearchHeaderContainer";

const SearchPhotos = ({match}) => {

    return (
        <>
        <SearchHeaderContainer/>
        <Container>
            <Title>{match.params.query}</Title>
            <SearchPhotoContainer match={match}/>
        </Container>
        </>
    )
}

const Container = styled(SearchContainer)`
`;

const Title = styled(SearchName)`
`;

export default SearchPhotos;