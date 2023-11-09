import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const MyEditor = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      style={{ height: "200px" }}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
};

export default MyEditor;
