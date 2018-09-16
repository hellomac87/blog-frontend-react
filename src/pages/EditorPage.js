import React from 'react';
import EditorTemplate from "components/editor/EditorTemplate/EditorTemplate";
import EditorHeader from "components/editor/EditorHeader/EditorHeader";
import EditorContainer from "containers/editor/EditorPaneContainer";
import PreviewPane from "components/editor/PreviewPane/PreviewPane";

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={<EditorContainer/>}
            preview={<PreviewPane/>}
        />
    );
};

export default EditorPage;