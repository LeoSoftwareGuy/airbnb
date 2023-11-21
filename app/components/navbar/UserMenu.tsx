"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegister = () => {
    registerModal.onOpen();
  };

  const toggleLogin = () => {
    loginModal.onOpen();
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="py-3
           px-4
           hidden
             md:block 
             text-sm 
             font-semibold
              rounded-full
               hover:bg-neutral-100 
               transition 
               cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4
         md:py-1
         md:px-2
         flex
         flex-row
         items-center
         gap-3
         rounded-full
         cursor-pointer
         hover:shadow-md
         transitions
         border-[1px]
         border-neutral-200
         "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
       absolute
       right-0
       top-12
       w-[40vw]
       md:w-3/4
       rounded-xl
       overflow-hidden
       shadow-md
       bg-white
       text-sm
       "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem onClick={() => {}} label="Airbnb my home" />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    toggleLogin();
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    toggleRegister();
                  }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
