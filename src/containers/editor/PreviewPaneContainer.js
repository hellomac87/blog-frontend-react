import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewPane from "components/editor/PreviewPane/PreviewPane";

class PreviewPaneContainer extends Component {
    render() {
        const { markdown, title } = this.props;
        return (
            <div>
                <PreviewPane title={title} markdown={markdown}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown')
    })
)(PreviewPaneContainer);