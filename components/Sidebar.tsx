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
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "/dashboard-layout-svgrepo-com.svg",
    type: "svg",
  },
  {
    label: "Assets",
    href: "/assets",
    icon: "/box-svgrepo-com.svg",
    type: "svg",
  },
  {
    label: "Tickets",
    href: "/tickets",
    icon: Ticket,
    type: "lucide",
  },
  {
    label: "Chat",
    href: "/chat",
    icon: MessageCircle,
    type: "lucide",
  },
  {
    label: "Employees",
    href: "/employees",
    icon: Users,
    type: "lucide",
  },
  {
    label: "Vendors",
    href: "/vendors",
    icon: Store,
    type: "lucide",
  },
  {
    label: "Reports",
    href: "/reports",
    icon: "/graph-svgrepo-com.svg",
    type: "svg",
  },
];

const bottomNav = [
  {
    label: "Knowledge base",
    href: "/knowledge-base",
    icon: BookOpen,
  },
  {
    label: "Support & Help",
    href: "/support",
    icon: CircleHelp,
  },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname.startsWith(href);

  return (
    <>
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
        />
      )}

      <aside
        className={`sidebar ${open ? "open" : ""}`}
      >
        <div className="sidebar-logo">
          <div className="sidebar-logo-content">
            <div className="sidebar-logo-icon">
              <img
                src="/Logo.png"
                alt="AssetHub"
                width={32}
                height={32}
              />
            </div>

            <span className="sidebar-logo-text">
              AssetHub
            </span>
          </div>

          <button
            onClick={onClose}
            className="sidebar-close"
            aria-label="Close menu"
          >
            <X
              className="icon-md"
              strokeWidth={1.9}
            />
          </button>
        </div>

        <nav className="sidebar-nav">
          {mainNav.map(
            ({ label, href, icon, type }) => {
              const active = isActive(href);

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={onClose}
                  className={`sidebar-link ${active ? "active" : ""
                    }`}
                >
                  {type === "svg" ? (
                    <img
                      src={icon as string}
                      alt=""
                      className="sidebar-svg-icon"
                    />
                  ) : (
                    (() => {
                      const Icon = icon;
                      return (
                        <Icon
                          className="icon-md"
                          strokeWidth={1.9}
                        />
                      );
                    })()
                  )}

                  {label}
                </Link>
              );
            }
          )}
        </nav>

        <div className="sidebar-bottom">
          {bottomNav.map(
            ({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                onClick={onClose}
                className="sidebar-link"
              >
                <Icon
                  className="icon-md"
                  strokeWidth={1.9}
                />

                {label}
              </Link>
            )
          )}
        </div>
      </aside>
    </>
  );
}