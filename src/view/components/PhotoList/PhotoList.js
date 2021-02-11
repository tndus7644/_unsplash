import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";
import {setGroups} from "../../../lib/Common";

const PhotoList = ({photos}) => {

    if (photos.length === 0) return null;

    const groups = setGroups(photos);

    return (
        <Container>
            <Groups>
                {groups.map((group, groupIndex) =>
                    <Group key={groupIndex}>
                        {group.map((item, index) =>
                            <Col key={index}>
                                <PhotoCard {...item}/>
                            </Col>
                        )}
                    </Group>
                )}
            </Groups>
        </Container>
    )
}

const Container = styled.div`
`;

const Groups = styled.div`
  display: flex;
`;

const Group = styled.div`
  width: 33.3333%;
`;

const Row = styled.div`
  column-width: 350px;
  column-gap: 0;
`;

const Col = styled.div`
  padding: 10px;
`;

export default PhotoList;