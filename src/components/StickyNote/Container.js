import { Component } from "react";
import { DropTarget } from "react-dnd";
import update from "immutability-helper";
import Box from "./Note";
const styles = {
  position: "relative",
  height: "100vh",
};
class Container extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      boxes: {
        a: { top: 20, left: 80, title: "Drag me around" },
        b: { top: 180, left: 20, title: "Drag me too" },
      },
    };
  }

  moveBox(id, left, top) {
    console.log({ left, top });

    this.setState(
      update(this.state, {
        boxes: {
          [id]: {
            $merge: { left, top },
          },
        },
      })
    );
  }

  render() {
    const { connectDropTarget } = this.props;
    const { boxes } = this.state;

    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map((key) => {
          const { left, top, title } = boxes[key];
          return (
            <Box
              key={key}
              id={key}
              left={left}
              top={top}
              hideSourceOnDrag={true}
            >
              {title}
            </Box>
          );
        })}
      </div>
    );
  }
}

export default DropTarget(
  "box",
  {
    drop(props, monitor, component) {
      console.log({ component });
      if (!component) {
        return;
      }
      const item = monitor.getItem();
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      component.moveBox(item.id, left, top);
    },
  },
  (connect) => ({
    connectDropTarget: connect.dropTarget(),
  })
)(Container);
