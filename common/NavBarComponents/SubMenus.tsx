import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip } from "@mui/material";
type PropsType = {
  text?: string;
  id?: string;
  loading?: boolean;
  confirm?: (id: string) => void;
};
const SubMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = () => {
    // confirm(id);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* {loading ? (
        <span className="text-red-500">
          <Spinner />
        </span>
      ) : (
        <Tooltip title="Delete" placement="top">
          <button onClick={handleClickOpen} className="text-red-400">
            <DeleteOutlineIcon />
          </button>
        </Tooltip>
      )} */}
      <Tooltip title="Delete" placement="top">
        <button onClick={handleClickOpen} className="text-red-400">
          <span>SubMenu</span>
          <DeleteOutlineIcon />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam
            praesentium commodi sit aliquid itaque laborum modi adipisci nihil.
            Repudiandae perspiciatis error modi tempora voluptatum cumque
            dolores inventore nemo quod?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SubMenu;
