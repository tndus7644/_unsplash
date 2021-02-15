import React from 'react';
import styled from 'styled-components';
import PhotoDetailContainer from "../containers/PhotoDetailContainer";
import PhotoListContainer from "../containers/PhotoListContainer";
import HeaderContainer from "../containers/HeaderContainer";


const PhotoDetail = () => {


    return (
        <Container className={"PhotoDetailContainer"}>
            <HeaderContainer/>
            <PhotoListContainer/>
            <PhotoDetailContainer/>
        </Container>
    )
}

const Container = styled.div`

`;


export default PhotoDetail;