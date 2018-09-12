import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper/ListWrapper';
import PostList from "components/list/PostList/PostList";
import Pagenation from "components/list/Pagenation/Pagenation";

const ListPage = () => {
    return (
        <PageTemplate>
            <ListWrapper>
                <PostList/>
                <Pagenation/>
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;