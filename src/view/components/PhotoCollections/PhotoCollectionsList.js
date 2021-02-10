import React from 'react';
import styled from 'styled-components';
import PhotoCollectionsCard from "./PhotoCollectionsCard";

const PhotoCollectionsList = ({collection = []}) => {


    return(

        <Container>
            {
                collection.map((item, index) => <PhotoCollectionsCard key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoCollectionsList;