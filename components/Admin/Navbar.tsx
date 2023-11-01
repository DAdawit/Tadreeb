"use client";
import React from "react";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import AdminDrawer from "./AdminDrawer";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import api from "@/app/axios";
const Navbar = () => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
    router.push("/");
  };

  return (
    <>
      {auth && (
        <nav className="flex justify-between px-5 items-center bg-primary text-white py-3">
          <div className="flex gap-x-3 items-center">
            <AdminDrawer />
          </div>
          <div className="flex gap-x-3 items-center">
            <button
              className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full text-sm"
              onClick={logout}
            >
              <span>Logout</span>
              <span>
                <LogoutIcon fontSize="small" />
              </span>
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
