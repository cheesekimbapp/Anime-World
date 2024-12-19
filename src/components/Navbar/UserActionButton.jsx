import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";
import ProfileButton from "./Profile"; // Impor ProfileButton

const UserActionButton = async () => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <div className="flex justify-between gap-3">
            {/* Menampilkan tombol Profile hanya jika ada user yang login */}
            {user ? <ProfileButton /> : null}
            <Link href={actionURL} className=" text-color-primary hover:text-color-accent py-3 px-1 inline-block">
                {actionLabel}
            </Link>
        </div>
    );
}

export default UserActionButton;
