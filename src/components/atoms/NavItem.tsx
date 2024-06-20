import React from "react";
import Link from "next/link";

type navItemProps = {
  children: React.ReactNode;
  pageLink: string;
};

export default function NavItem({ children, pageLink }: navItemProps) {
  return (
    <Link
      href={pageLink}
      className="text-blue-800 hover:text-slate-300 flex gap-1 font-medium items-center px-4 py-1"
    >
      {children}
    </Link>
  );
}
