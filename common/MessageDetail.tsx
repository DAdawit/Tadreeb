"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { Course, Schedule } from "@/Types";
import MoreIcon from "@mui/icons-material/More";

type PropType = {
  message: string | undefined;
};

const MessageDetail: React.FC<PropType> = ({ message }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Show Message" placement="top">
        <button
          className="flex gap-x-2 border-2 border-blue-500 rounded-full text-blue-500 px-3 py-1 items-center "
          onClick={handleClickOpen}
        >
          <span>message</span>
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg" // set the maxWidth
        PaperProps={{ style: { width: "80%" } }} // set custom width
      >
        <DialogTitle id="alert-dialog-title">{"Message Detail"}</DialogTitle>
        <DialogContent>
          {message !== null ? (
            <>
              <p>{message}</p>
            </>
          ) : (
            <>
              <p>No message!</p>
            </>
          )}
          <p></p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessageDetail;
