"use client";
import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Groups3Icon from "@mui/icons-material/Groups3";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RedeemIcon from "@mui/icons-material/Redeem";
import PaidIcon from "@mui/icons-material/Paid";
import TollIcon from "@mui/icons-material/Toll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MessageIcon from "@mui/icons-material/Message";
import ForumIcon from "@mui/icons-material/Forum";
import InboxIcon from "@mui/icons-material/Inbox";
import OutboxIcon from "@mui/icons-material/Outbox";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import SubMenuLists from "@/common/SubMenuLists";
import UserAvatar from "@/common/UserAvatar";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import SettingsIcon from "@mui/icons-material/Settings";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
type Anchor = "left";
export default function AdminDrawer() {
  const { user } = useContext(AuthContext);
  const [state, setState] = React.useState({
    left: false,
  });
  const [users, setUsers] = useState<boolean>(false);
  const [members, setMemebers] = useState<boolean>(false);
  const [account, setAccount] = useState<boolean>(false);
  const [gifts, setGifts] = useState<boolean>(false);
  const [serviceCharge, setServiceCharge] = useState<boolean>(false);
  const [registrationFee, setRegistrationFee] = useState<boolean>(false);
  const [Message, setMessages] = useState<boolean>(false);
  const [adminFee, setAdminFee] = useState<boolean>(false);
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };
  // console.log(user?.level);
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "#fff",
                height: "100%",
              }}
              role="presentation"
              onKeyDown={toggleDrawer("left", false)}
            >
              <div className="h-full w-full ">
                <div className="w-fll flex justify-center mt-3">
                  <Link href="/">
                    <Image
                      src="/logo-tadreeb-1.png"
                      alt="logo"
                      width={1000}
                      height={1000}
                      className="h-12 w-24 xxl:h-24 xxl:w-32 object-contain"
                    />
                  </Link>
                </div>
                <section className="">
                  <div className="grid gap-y-3 mt-5">
                    <Link
                      href="/admin/dashboard"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <DashboardIcon />
                        <h3>Dashboard</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/training-formats"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <FormatAlignCenterIcon />
                        <h3>Training Formats</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/venues"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <PlaceIcon />
                        <h3>Avenues</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/training-categories"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <CategoryIcon />
                        <h3>Training Categories</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/trainings"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <ClassIcon />
                        <h3>Trainings</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/pending-booked-courses"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <PendingActionsIcon />
                        <h3>Pending Booked Courses</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/approved-booked-courses"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <AssignmentTurnedInIcon />
                        <h3>Approved Booked Courses</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/rejected-booked-courses"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <RemoveDoneIcon />
                        <h3>Rejected Booked Courses</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/change-password"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <SettingsIcon />
                        <h3>Change Password</h3>
                      </div>
                    </Link>
                  </div>
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
