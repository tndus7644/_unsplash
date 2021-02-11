import React from 'react';
import styled from 'styled-components';
import {useEffect} from "react/cjs/react.production.min";

const PhotoCollectionsCard = (props) => {

    const {
        title,
        preview_photos,
        total_photos,
        user,
        tags
    } = props

    const collectionsPhoto = preview_photos?.slice(0, 3)

    const photo1 = collectionsPhoto[0]?.urls?.regular
    const photo2 = collectionsPhoto[1]?.urls?.thumb
    const photo3 = collectionsPhoto[2]?.urls?.thumb

    const PhotoTags = tags.slice(0, 3)

    if (preview_photos === null) {
        return <div>존재하지 않습니다.</div>
    }

    console.log("collectionsPhoto", collectionsPhoto)


    return (
        <>
            <Container>
                <Collections>
                    <CollectionList className={"CollectionList"}>
                        <div>
                            <img className={"MainThumb"} src={photo1} alt=""/>
                        </div>
                        <div>
                            <img className={"SubThumb"} src={photo2} alt=""/>
                            <img className={"SubThumb"} src={photo3} alt=""/>
                        </div>
                    </CollectionList>
                    <Title className={"title"}>
                        {title}
                    </Title>
                </Collections>
                <Total>
                    {total_photos} photos &#183; Curated by <span>{user?.first_name}</span>
                </Total>
                <TagGroup>
                    {PhotoTags.map((item, index) => <Tags key={index}>{item.title}</Tags>)}
                </TagGroup>
            </Container>
        </>
    )
}

const Container = styled.div`
  height: 450px;
`;

const Collections = styled.div`
  cursor: pointer;
  position: relative;
  
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 40px;
    opacity: 0;
    transition: 0.2s;
    background: #fff;
  }
  
  &:hover:after{
    opacity: 0.2;
  }
`;

const CollectionList = styled.div`
  width: 416px;
  height: 290px;
  border-radius: 8px;
  background: #eee;
  overflow: hidden;
  display: flex;
  border:0;

  div:first-child{
    width: 70%;
  }
  
  div:last-child{
    width: 30%;
  }
  
  div > img.MainThumb {
    background: #eee;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
  }
  
  div > img.SubThumb{
    background: #eee;
    object-fit: cover;
    height: 50%;
    width: 100%;    
    border: 1px solid #fff;

  }

`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
  padding: 0;
`;

const Total = styled.div`
  color: #777;

  span:hover {
    color: #111;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const TagGroup = styled.div`
  display: flex;
`;

const Tags = styled.div`
  cursor: pointer;
  background: #eee;
  padding: 5px 7px 4px;
  color: #777;
  margin: 10px 10px 0 0;
  border-radius: 2px;
  font-size: 14px;
  text-transform: capitalize;
  transition: 0.2s;

  &:hover {
    background: #ddd;
    color: #333;
  }
`;

export default PhotoCollectionsCard;