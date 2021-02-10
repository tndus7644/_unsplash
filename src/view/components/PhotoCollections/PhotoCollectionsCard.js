import React from 'react';
import styled from 'styled-components';

const PhotoCollectionsCard = (props) => {

    const {
        id,
        title
    } = props

    console.log("title", title)

    return(
        <Container>
            {title}
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoCollectionsCard;