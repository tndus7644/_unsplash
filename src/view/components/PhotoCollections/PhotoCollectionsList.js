import React from 'react';
import styled from 'styled-components';
import PhotoCollectionsCard from "./PhotoCollectionsCard";

const PhotoCollectionsList = ({collection = []}) => {


    return(

        <Container className={"PhotoCollectionsList"}>
            {
                collection.map((item, index) => <PhotoCollectionsCard key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default PhotoCollectionsList;