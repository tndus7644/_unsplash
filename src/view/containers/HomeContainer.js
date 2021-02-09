import React from 'react';
import styled from 'styled-components';
import Visual from "../components/Home/Visual";
import PhotoListContainer from "./PhotoListContainer";

const HomeContainer = () => {

    return(
        <Container>
            <Visual/>
            <PhotoListContainer/>
        </Container>
    )
}

const Container = styled.div`

`;

export default HomeContainer;