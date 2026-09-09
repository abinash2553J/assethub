"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Box,
  Ticket,
  MessageCircle,
  Users,
  Store,
  BarChart3,
  BookOpen,
  CircleHelp,
  X,
} from "lucide-react";

const mainNav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Assets", href: "/assets", icon: Box },
  { label: "Tickets", href: "/tickets", icon: Ticket },
  { label: "Chat", href: "/chat", icon: MessageCircle },
  { label: "Employees", href: "/employees", icon: Users },
  { label: "Vendors", href: "/vendors", icon: Store },
  { label: "Reports", href: "/reports", icon: BarChart3 },
];

const bottomNav = [
  { label: "Knowledge base", href: "/knowledge-base", icon: BookOpen },
  { label: "Support & Help", href: "/support", icon: CircleHelp },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-neutral-900/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-neutral-200 bg-white transition-transform duration-200 ease-out
        lg:static lg:z-auto lg:w-60 lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo row */}
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Box className="h-4.5 w-4.5 text-white" strokeWidth={2.25} />
            </div>
            <span className="text-[17px] font-semibold text-neutral-900">
              AssetHub
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-400 hover:bg-neutral-50 lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" strokeWidth={1.9} />
          </button>
        </div>

        {/* Main nav */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3">
          {mainNav.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors ${active
                    ? "bg-blue-50 text-blue-600"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
                  }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom nav */}
        <div className="flex flex-col gap-1 border-t border-neutral-100 px-3 py-4">
          {bottomNav.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
              {label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}