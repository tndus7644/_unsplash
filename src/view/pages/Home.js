import React from 'react'
import styled from 'styled-components';
import HomeContainer from "../containers/HomeContainer";
import PhotoListContainer from "../containers/PhotoListContainer";
import HeaderContainer from "../containers/HeaderContainer";

const Home = () => {

    return (
        <Container>
            <HeaderContainer/>
            <HomeContainer/>
            <PhotoListContainer/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;