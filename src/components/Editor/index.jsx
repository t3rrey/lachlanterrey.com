import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import styled from "styled-components";

const Ewrap = styled.div`
  background: '#ffffff;
`;
const editor = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */
  holder: "editorjs",

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    header: Header,
    list: List,
  },
});

const Editor = () => {
  return <div id="editorjs">Editor</div>;
};

export default Editor;
