import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as baseActions from 'store/modules/base';
import * as postActions from "store/modules/post";
import AskRemoveModal from "components/modal/AskRemoveModal/AskRemoveModal";

class AskRemoveModalContainer extends Component {
    handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal('remove');
        console.log('aa');
    }
    handleConfirm = async () => {
        const { BaseActions, PostActions, history, match } = this.props;
        const { id } = match.params;

        try{
            // 포스트 삭제 후, 모달 닫고 웹사이트로 이동
            await PostActions.removePost(id);
            BaseActions.hideModal('remove');
            history.push('/');
        }catch(e){
            console.log(e);
        }
    }
    render() {
        const { visible } = this.props;
        const { handleCancel, handleConfirm } = this;
        return (
            <div>
                <AskRemoveModal
                visible={visible}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal', 'remove'])
    }),
    (dispatch) => ({
        BaseActions : bindActionCreators(baseActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch),
    })
)(withRouter(AskRemoveModalContainer));