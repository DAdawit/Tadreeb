import React from "react";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
type PropType = {
  description?: string | undefined;
  setDescription?: any | undefined;
};

const TextEditorDescription: React.FC<PropType> = ({
  description,
  setDescription,
}) => {
  const toolbarOptions = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link"],
      ["clean"],
    ],
  };
  return (
    <div>
      <ReactQuill
        style={{ height: "200px" }}
        theme="snow"
        value={description}
        modules={toolbarOptions}
        onChange={setDescription}
      />
    </div>
  );
};

export default TextEditorDescription;
