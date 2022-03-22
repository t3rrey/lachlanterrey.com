import { Editor, EditorState } from "draft-js";
import React, { useState } from "react";
import "draft-js/dist/Draft.css";

export default function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}
