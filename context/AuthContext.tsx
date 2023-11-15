"use client";
import { UserType } from "@/Types";
import React, { AudioHTMLAttributes, Component } from "react";
import { createContext } from "react";
// import { UserType } from "@/types";
type AuthContextType = {
  user: UserType | null;
  auth: boolean;
  loading: boolean;
  setUserData: (user: UserType) => void;
  setLoadingFalse: (loading: boolean) => void;
  setAuthFalse: () => void;
};
export const AuthContext = createContext<AuthContextType>({
  user: {} as UserType,
  auth: false,
  loading: true,
  setUserData: (user: UserType) => {},
  setLoadingFalse: (loading: boolean) => {},
  setAuthFalse: () => {},
} as {
  user: UserType;
  auth: boolean;
  loading: boolean;
  setUserData: (user: UserType) => void;
  setLoadingFalse: (loading: boolean) => void;
  setAuthFalse: () => void;
});
export default class AuthContextProvider extends Component<{
  children: React.ReactNode;
}> {
  state = {
    user: {} as UserType,
    auth: false,
    loading: true,
  };
  setUserData = (user: UserType) => {
    this.setState({ user: user, auth: true, loading: false });
  };

  setLoadingFalse = (loading: boolean) => {
    this.setState({ loading: loading });
  };
  setAuthFalse = () => {
    this.setState({ auth: false });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          setUserData: this.setUserData,
          setLoadingFalse: this.setLoadingFalse,
          setAuthFalse: this.setAuthFalse,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
