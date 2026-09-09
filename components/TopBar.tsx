"use client";

import { Search, Sun, Moon, Monitor, Bell, Menu } from "lucide-react";

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-neutral-200 bg-white px-4 sm:h-[76px] sm:gap-4 sm:px-6 lg:px-8">
      {/* Hamburger — mobile/tablet only */}
      <button
        onClick={onMenuClick}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-4.5 w-4.5" strokeWidth={1.9} />
      </button>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          placeholder="Search assets, employees..."
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-3 text-[13.5px] text-neutral-600 placeholder:text-neutral-400 outline-none focus:border-blue-300 focus:bg-white sm:text-[14px]"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        {/* Theme switch group — hidden on the smallest screens */}
        <div className="hidden items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1 sm:flex">
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 bg-white text-amber-500 shadow-sm">
            <Sun className="h-4 w-4" strokeWidth={2} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 hover:text-neutral-600">
            <Moon className="h-4 w-4" strokeWidth={2} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 hover:text-neutral-600">
            <Monitor className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* Notification */}
        <button className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50">
          <Bell className="h-4.5 w-4.5" strokeWidth={1.9} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        {/* Settings — hidden below sm to save space */}
        <button className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50 sm:flex">
          <SettingsIcon />
        </button>

        {/* Avatar */}
        <button className="flex shrink-0 items-center gap-1.5 rounded-full">
          <img
            src="https://i.pravatar.cc/64?img=12"
            alt="User avatar"
            className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-9 sm:w-9"
          />
          <ChevronDown />
        </button>
      </div>
    </header>
  );
}

function SettingsIcon() {
  return (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      className="hidden h-4 w-4 text-neutral-400 sm:block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}