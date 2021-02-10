import React from 'react';
import styled from 'styled-components';
import {UnsplashButton} from "../Button/Button.Styled";
import {AddSvg, DownloadSvg, LikeSvg} from "../Svg";
import {navigate} from "../../../lib/History";
import {useLocation} from "react-router-dom";

const PhotoCard = (props) => {

    const location = useLocation();

    const {
        alt_description,
        urls,
        user,
        id
    } = props


    return (
        <Container>
            <Thumb>
                <img className={"ListPhoto"} src={urls.regular} alt={alt_description} onClick={() => navigate({
                    pathname: `/photos/${id}`,
                    state:{from: location.pathname}
                })}/>
                <Info className={"Photo-info"}>
                    <User>
                        <img src={user.profile_image.small} alt=""/>
                        <span>{user.name}</span>
                    </User>
                    <Like>
                        <LikeSvg/>
                    </Like>
                    <Add>
                        <AddSvg/>
                    </Add>
                    <Down>
                        <DownloadSvg/>
                    </Down>
                </Info>
            </Thumb>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
`;

const Thumb = styled.div`
  cursor: pointer;
  position: relative;
  user-select: none;
  width: 100%;
  height: 100%;

  img.Photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 0.2s;
  }
  
  &:hover {
    .Photo-info{
      opacity: 1;
    }
  }
  
`;

const Info = styled.div`
  opacity: 0;
  transition: 0.2s;
`;

const User = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 14px;

  img {
    margin-right: 8px;
    border-radius: 50%;
  }
`;

const Add = styled(UnsplashButton)`
  position: absolute;
  top: 10px;
  right: 60px;
`;

const Like = styled(UnsplashButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Down = styled(UnsplashButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default PhotoCard;