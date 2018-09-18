import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
// import PostList from "components/list/PostList/PostList";
// import Pagenation from "components/list/Pagenation/Pagenation";

const ListPage = ({match}) => {
    // 페이지의 기본 값을 1로 설정합니다.
    const { page = 1, tag } = match.params;
    return (
        <PageTemplate>
            <ListWrapper>
                <ListContainer
                page={parseInt(page, 10)}
                tag={tag}/>
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;