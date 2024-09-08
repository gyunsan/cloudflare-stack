"use client";

import React from "react";
import { Avatar, cn } from "@nextui-org/react";

interface UserBarProps {
    isCollapsed: boolean;
    userName: string;
    userEmail: string;
    userImage: string;
}

const UserBar: React.FC<UserBarProps> = ({ isCollapsed, userName, userEmail, userImage }) => {
    return (
        <div className="flex items-center gap-3 px-3">
            <Avatar
                isBordered
                size="sm"
                src={userImage}
            />
            <div className={cn("flex max-w-full flex-col", { hidden: isCollapsed })}>
                <p className="text-small font-medium text-foreground">{userName}</p>
                <p className="text-tiny font-medium text-default-400">{userEmail}</p>
            </div>
        </div>
    );
};

export default UserBar;
