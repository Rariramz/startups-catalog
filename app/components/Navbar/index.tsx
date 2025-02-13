import React from "react";
import SignInFrom from "../SignInFrom";

export const Navbar: React.FC = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <SignInFrom/>
        </header>
    )
}