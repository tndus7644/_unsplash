import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";

const PhotoList = ({photos = []}) => {

    if (photos.length === 0) return null;

    const setGroups = (data) => {
        let groups = [[], [], []];
        let groupsRatio = [0, 0, 0];
        for (let i = 0; i < data.length; i++) {
            const ratio = data[i].height / data[i].width;

            const minValue = Math.min(...groupsRatio);
            const minIndex = groupsRatio.indexOf(minValue);
            groups[minIndex].push(data[i]);
            groupsRatio[minIndex] = groupsRatio[minIndex] + ratio;
        }

        return groups;

    };

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