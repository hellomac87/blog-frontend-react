import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from 'store/modules/base';
import * as postActions from "store/modules/post";
import AskRemoveModal from "components/modal/AskRemoveModal/AskRemoveModal";

class AskRemoveModalContainer extends Component {
    handleCancel = () => {

    }
    handleConfirm = () => {

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
)(AskRemoveModalContainer);