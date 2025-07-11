"use client"

import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  const pages = [
    {
      title: "About",
      href: "#",
    },
    {
      title: "Projects", 
      href: "#",
    },
    {
      title: "Skills",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];

  return (
    <div className="border-t border-slate-600 px-8 py-20 bg-slate-900 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-slate-300 justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-slate-200 text-slate-300 list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-accent font-[var(--font-inter)]"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-slate-400 mb-8 sm:mb-0 font-[var(--font-inter)]">
            &copy; {new Date().getFullYear()} Zhi Jian. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/Zeddli" className="group">
              <Github className="h-6 w-6 text-slate-400 group-hover:text-accent transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/sam-zhi-jian-6907182b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group">
              <Linkedin className="h-6 w-6 text-slate-400 group-hover:text-accent transition-colors" />
            </Link>
            <Link href="https://x.com/zhijiandv" className="group">
              <Twitter className="h-6 w-6 text-slate-400 group-hover:text-accent transition-colors" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=zhijiandev23@example.com&su=SUBJECT&body=ENQUIRY" className="group">
              <Mail className="h-6 w-6 text-slate-400 group-hover:text-accent transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#1e293b",
          "--color": "rgba(148, 163, 184, 0.3)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(148, 163, 184, 0.3)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20"
    >
      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
        <span className="font-bold text-white text-lg font-[var(--font-inter)]">ZJ</span>
      </div>
      <span className="font-medium text-white font-[var(--font-inter)]">Zhi Jian</span>
    </Link>
  );
};