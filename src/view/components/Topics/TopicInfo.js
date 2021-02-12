import React from 'react';
import styled from 'styled-components';
import {CuratorSvg, PhotoSvg, StatusSvg, UserSvg} from "../Svg";

const TopicInfo = ({topics}) => {

    const {
        owners,
        status,
        total_photos,
        top_contributors
    } = topics


    return (
        <Container>
            <Info>
                <div>
                    <StatusSvg/>
                    <p>Status</p>
                </div>
                <Status>
                    <div/>
                    {status}
                </Status>
            </Info>
            <Info>
                <div>
                    <CuratorSvg/>
                    <p>Curator</p>
                </div>
                <img className={"OwnersImage"} src={owners[0]?.profile_image?.small} alt=""/>
            </Info>
            <Info>
                <div>
                    <PhotoSvg/>
                    <p>Contributions</p>
                </div>
                {total_photos}
            </Info>
            <Info>
                <div>
                    <UserSvg/>
                    <p>Top contributors</p>
                </div>
                <Contributors>
                    {top_contributors.map((item, index) =>
                        <ProfileImage key={index}>
                            <img src={item.profile_image.small} alt=""/>
                        </ProfileImage>
                    )}
                </Contributors>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px 20px;
  width: 416px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  
  div{
    display: flex;
    align-items: center;
    
    svg{
      fill: #ddd;
      width: 18px;
    }
    
    p{
      margin-left: 10px;
    }
  }

  img {
    border-radius: 50%;
    border: 1px solid #eee;
    width: 17px;
    cursor: pointer;
  }

  &:last-child {
    border: 0;
  }

  img.OwnersImage {
    width: 30px;
  }

  p {
    padding: 18px 0;
  }
`;

const Status = styled.div`
  background: #c2ebd3;
  padding: 5px 9px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;

  div {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #3db46d;
    margin-right: 7px;
  }
`;

const ProfileImage = styled.div`
  margin-left: 7px;
`;

const Contributors = styled.div`
  display: flex;
`;

export default TopicInfo;