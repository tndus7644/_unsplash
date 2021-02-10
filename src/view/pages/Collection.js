import React from 'react';
import styled from 'styled-components';
import {SearchName} from "../../SearchName/SearchName";
import CollectionsPhotoContainer from "../containers/CollectionsPhotoContainer";

const Collection = ({match}) => {

    return(
        <Container>
            <Title>{match.params.query}</Title>
            <CollectionsPhotoContainer/>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled(SearchName)`
    
`;

export default Collection;