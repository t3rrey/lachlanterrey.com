import React, { useState } from "react";
import "../../styles/stickynote.css";
import crossIcon from "../../assets/icons/crossIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";
import { Rnd } from "react-rnd";

const defaultSize = {
  width: 200,
  height: 200,
};
const defaultNotes = [
  {
    id: 1,
    text: "Welcome to my Portfolio!",
    x: 250,
    y: 200,
    width: 500,
    height: 300,
  },
  {
    id: 2,
    text: "Hello world!!!",
    x: 830,
    y: 100,
    width: 220,
    height: 200,
  },
];

const StickyNote = () => {
  const [notes, setNotes] = useState(defaultNotes);

  const close = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };
  const addNote = ({ x, y, width, height }) => {
    const position = {
      x: x + width + 20,
      y,
    };
    const id = notes[notes.length - 1].id + 1;
    setNotes([...notes, { id, text: "", ...position, ...defaultSize }]);
  };
  const updateNote = (index, value) => {
    notes[index].text = value;
    setNotes([...notes]);
  };
  const onDragResize = (index, event, corner, target, size, position) => {
    console.log({ event, corner, target, size, position });
    if (!target) {
      target = corner.node;
      position = {
        x: corner.x,
        y: corner.y,
      };
    }
    const note = notes[index];
    note.x = position.x;
    note.y = position.y;
    note.width = target.clientWidth;
    note.height = target.clientHeight;
    setNotes([...notes]);
  };
  console.log(notes);

  return notes.map((note, index) => (
    <Rnd
      default={{
        x: note.x,
        y: note.y,
        width: note.width,
        height: note.height,
      }}
      onDrag={onDragResize.bind(null, index)}
      onResize={onDragResize.bind(null, index)}
      key={note.id}
    >
      <div className="main-sticky-wrapper">
        <div className="sticky-menu">
          <img
            className="menu-icon"
            src={crossIcon}
            alt=""
            onClick={() => close(index)}
          />
          <img
            className="menu-icon"
            src={plusIcon}
            alt=""
            onClick={() => addNote(note)}
          />
        </div>
        <textarea
          value={note.text}
          className="sticky-content"
          placeholder="Some text"
          onChange={(event) => updateNote(index, event.target.value)}
        ></textarea>
      </div>
    </Rnd>
  ));
};

export default StickyNote;
