"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
type PropType = {
  description: string | undefined;
};

const AdminCourseDescriptions: React.FC<PropType> = ({ description }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Description" placement="top">
        <button
          className="text-secondary border-2 border-secondary px-4 py-2 rounded-full flex items-center justify-center gap-x-1"
          onClick={handleClickOpen}
        >
          <span>Description</span>
          <MoreHorizIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: "80%", // or any value you want
            maxWidth: "none", // optional, if you want to remove the maxWidth limit
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Course Description"}
        </DialogTitle>
        <DialogContent>
          <p
            className="text-textPrimary mt-5 lg:text-lg xll:text-xl"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          ></p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCourseDescriptions;
