import React from 'react';
import EditorTemplate from "components/editor/EditorTemplate/EditorTemplate";
import EditorHeaderContainer from "containers/editor/EditorHeaderContainer";
import EditorContainer from "containers/editor/EditorPaneContainer";
import PreviewPaneContainer from "containers/editor/PreviewPaneContainer";

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeaderContainer/>}
            editor={<EditorContainer/>}
            preview={<PreviewPaneContainer/>}
        />
    );
};

export default EditorPage;