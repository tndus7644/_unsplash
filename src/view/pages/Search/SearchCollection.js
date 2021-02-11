import React from 'react';
import styled from 'styled-components';
import {SearchName} from "../../../styled/SearchName";
import SearchCollectionsContainer from "../../containers/SearchCollectionsContainer";
import {SearchContainer} from "../../../styled/Container";
import SearchHeaderContainer from "../../containers/SearchHeaderContainer";

const SearchCollection = ({match}) => {

    return (
        <>
            <SearchHeaderContainer/>
            <Container>
                <Title>{match.params.query}</Title>
                <SearchCollectionsContainer/>
            </Container>
        </>
    )
}

const Container = styled(SearchContainer)`
`;

const Title = styled(SearchName)`
`;

export default SearchCollection;