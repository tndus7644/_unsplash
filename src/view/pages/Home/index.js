import React from 'react'
import styled from 'styled-components';
import HomeContainer from "../../containers/HomeContainer";
import List from "../../components/Home/List";

const Home = () => {
    
    return (
        <Container>
            <HomeContainer/>
            <List/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;