import React from 'react'
import styled from 'styled-components';
import HomeContainer from "../containers/HomeContainer";
import PhotoListContainer from "../containers/PhotoListContainer";

const Home = () => {
    
    return (
        <Container>
            <HomeContainer/>
            <PhotoListContainer/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;