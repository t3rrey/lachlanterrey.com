import { ResizeProvider, ResizeConsumer } from "react-resize-context";
import { Component } from "react";
import { DragSource } from "react-dnd";
import crossIcon from "../../assets/icons/crossIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";
import "../../styles/stickynote.css";
import "./note.css";

const StickyNote = ({ children, ...props }) => {
  return (
    <div className="main-sticky-wrapper" {...props}>
      <div className="sticky-menu">
        <img className="menu-icon" src={crossIcon} alt="" />
        <img className="menu-icon" src={plusIcon} alt="" />
      </div>
      <div className="sticky-content">{children}</div>
    </div>
  );
};

const style = {
  position: "absolute",
  cursor: "move",
};

class Box extends Component {
  state = {
    size: {},
  };

  getDatasetBySize = (size) => ({
    widthRange: size.width > 200 ? "large" : "small",
    heightRange: size.height > 200 ? "large" : "small",
  });

  handleSizeChanged = (size) => {
    this.setState({ size });
  };

  render() {
    const {
      hideSourceOnDrag,
      left,
      top,
      connectDragSource,
      isDragging,
      children,
    } = this.props;

    if (isDragging && hideSourceOnDrag) {
      return null;
    }
    return connectDragSource(
      <div style={{ ...style, left, top }} role="Box">
        <ResizeProvider>
          <ResizeConsumer
            className="note-container"
            onSizeChanged={this.handleSizeChanged}
            updateDatasetBySize={this.getDatasetBySize}
          >
            <StickyNote {...children} />
          </ResizeConsumer>
        </ResizeProvider>
      </div>
    );
  }
}

export default DragSource(
  "box",
  {
    beginDrag(props) {
      const { id, left, top } = props;
      return { id, left, top };
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(Box);
