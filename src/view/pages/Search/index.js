import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../../components/PhotoList/PhotoList";
import {photoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const Search = (props) => {

    const {
        match
    } = props;

    const query = match.params.query;

    const {searchResult} = useSelector(state => state.photo);

    useEffect(() => {
        searchPhoto();
    }, [query])

    const searchPhoto = () => {
        photoActions.searchPhoto({
            per_page: 20,
            query
        })
    }

    return (
        <Container>
            <SearchName>{query}</SearchName>
            <PhotoList photos={searchResult?.results}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1290px;
  margin: 50px auto;
`;

const SearchName = styled.div`
  margin-bottom: 50px;
  font-size: 46px;
  font-weight: bold;
  text-transform: capitalize;
`;

export default Search;