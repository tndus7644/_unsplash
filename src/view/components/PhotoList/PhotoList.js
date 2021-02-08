import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";

const PhotoList = ({photos = []}) => {

    return (
        <Container>
            <Row>
                {photos.map((item, index) =>
                    <Col key={index}>
                        <PhotoCard {...item}/>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

const Container = styled.div`
`;

const Row = styled.div`
  column-width: 350px;
  column-gap: 0;
`;

const Col = styled.div`
    padding: 10px;
`;

export default PhotoList;