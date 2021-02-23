import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {SearchActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import RelatedSearchNav from "../components/Search/RelatedSearchNav";
import {navigate} from "../../lib/History";
import {ContentContainer, Sentinel} from "../components/Layout/Layout.Styled";
import GridList from "../components/PhotoList/GridList";
import PhotoCollectionsCard from "../components/PhotoList/PhotoCollectionsCard";
import PhotoList from "../components/PhotoList/PhotoList";
import UsersListCard from "../components/PhotoList/UsersListCard";
import {useObserver} from "../../lib/Common";

const SearchContainer = ({match}) => {

    const sentinelRef = useRef(null);
    const {category, query} = match.params;

    const {
        photos,
        collections,
        users,
        related_searches
    } = useSelector(state => state.search);

    useEffect(() => {
        SearchActions.searchPhotos({
            query,
            per_page: 12
        })
    }, [query])
    const onClickNav = (title) => {
        navigate(`/search/${category}/${title}`)
    }


    const searchMorePhotos = () => {
        SearchActions.searchMorePhotos({
            query
        })
    }

    useObserver(sentinelRef, searchMorePhotos);

    const RenderList = () => {
        switch (category) {
            default:
                return null;
            case'photos': {
                return <PhotoList photos={photos.results}/>
            }
            case 'collections' : {
                return <GridList data={collections.results} render={(item) => <PhotoCollectionsCard {...item}/>}/>

            }
            case 'users': {
                return <GridList data={users.results} render={(item) => <UsersListCard {...item}/>}/>
            }
        }
    }

    return (
        <Container>
            <ContentContainer>
                <h1>{query}</h1>
                <RelatedSearchNav data={related_searches} onClick={onClickNav}/>
                <RenderList/>
                {
                    category === 'photos' &&
                    <Sentinel ref={sentinelRef}/>
                }
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
  padding: 100px 0;
  position: relative;

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;

export default SearchContainer;