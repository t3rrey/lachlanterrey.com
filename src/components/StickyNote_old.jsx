import { DropTarget } from "react-dnd";

import React, { Component } from "react";
import "../styles/stickynote.css";
import crossIcon from "../assets/icons/crossIcon.svg";
import plusIcon from "../assets/icons/plusIcon.svg";

const styles = {
  width: 300,
  height: 300,
  border: "1px solid black",
  position: "relative",
};

//https://jsfiddle.net/Logan_Wayne/eovLdrao/

//https://codepen.io/ZeroX-DG/pen/vjdoYe

//https://htmldom.dev/make-a-resizable-element/

const StickyNote = () => {
  return (
    <div className="main-sticky-wrapper">
      <div className="sticky-menu">
        <img className="menu-icon" src={crossIcon} alt="" />
        <img className="menu-icon" src={plusIcon} alt="" />
      </div>
      <div className="sticky-content"></div>
    </div>
  );
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
    this.setState({
      boxes: {
        [id]: {
          $merge: { left, top },
        },
      },
    });
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props;
    const { boxes } = this.state;
    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map((key) => {
          const { left, top, title } = boxes[key];
          return (
            <StickyNote
              key={key}
              id={key}
              left={left}
              top={top}
              hideSourceOnDrag={hideSourceOnDrag}
            >
              {title}
            </StickyNote>
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
