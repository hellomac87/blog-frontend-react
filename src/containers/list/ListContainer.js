import React, { Component } from 'react';
import PostList from "components/list/PostList/PostList";
import Pagenation from "components/list/Pagenation/Pagenation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component {
    getPostList = () => {
        // 페이지와 태그 값을 부모에게서 받아옵니다.
        const { tag, page, ListActions } = this.props;
        ListActions.getPostList({
            page,
            tag
        })
    }

    componentDidMount(){
        this.getPostList();
    }

    componentDidUpdate(prevProps, prevState){
        // 페이지/태그가 바뀔 때 리스트를 다시 불러옵니다.
        if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag){
            this.getPostList();
            // 스크롤바를 맨 위로 올립니다.
            document.documentElement.scrollTop = 0;
        }
    }
    render() {
        const { loading, posts, page, lastPage, tag } = this.props;
        if(loading) return null; // 로딩중일때는 아무것도 보여주지 않는다.
        return (
            <div>
                <PostList posts={posts}/>
                <Pagenation page={page} lastPage={lastPage} tag={tag}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        lastPage: state.list.get('lastPage'),
        posts: state.list.get('posts'),
        loading: state.pender.pending['list/GET_POST_LIST']
    }),
    (dispatch) => ({
        ListActions : bindActionCreators(listActions, dispatch)
    })
)(ListContainer);