"use client"

import Link from "next/link";
import { UserCircle } from "@phosphor-icons/react";

const ProfileButton = () => {
    return (
        <Link href="/users/dashboard" className="py-1 text-color-primary hover:text-color-accent">
            <UserCircle size={40} />
        </Link>
    );
}

export default ProfileButton;
