import React from 'react';
import EditorTemplate from "components/editor/EditorTemplate/EditorTemplate";
import EditorHeader from "components/editor/EditorHeader/EditorHeader";
import EditorPane from "components/editor/EditorPane/EditorPane";

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={<EditorPane/>}
            preview="프리뷰"
        />
    );
};

export default EditorPage;