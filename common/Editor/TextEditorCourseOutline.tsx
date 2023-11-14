"use client";
import React from "react";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
type PropType = {
  course_outline: string | undefined;
  SetCourseOutline: any | undefined;
};

const TextEditorCourseOutline: React.FC<PropType> = ({
  course_outline,
  SetCourseOutline,
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
        value={course_outline}
        modules={toolbarOptions}
        onChange={SetCourseOutline}
      />
    </div>
  );
};

export default TextEditorCourseOutline;
