import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-800">
      <div className="mx-auto w-full text-center max-w-screen-xl py-4 sm:py-4 lg:py-4 px-4 sm:px-4 lg:px-4">
        <span className="text-md text-gray-400 sm:text-center ">
          © {new Date().getFullYear()} All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
