"use client";

import {
  Search,
  Sun,
  Moon,
  Monitor,
  Bell,
  Menu,
} from "lucide-react";

export default function TopBar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="topbar">
      <button
        onClick={onMenuClick}
        className="topbar-icon-button"
        aria-label="Open menu"
      >
        <Menu
          className="icon-sm"
          strokeWidth={1.9}
        />
      </button>

      <div className="topbar-search">
        <Search className="topbar-search-icon" />

        <input
          type="text"
          placeholder="Search assets, employees..."
        />
      </div>

      <div className="topbar-actions">
        <div className="theme-switcher">
          <button className="theme-button active">
            <Sun
              className="icon-sm"
              strokeWidth={2}
            />
          </button>

          <button className="theme-button">
            <Moon
              className="icon-sm"
              strokeWidth={2}
            />
          </button>

          <button className="theme-button">
            <Monitor
              className="icon-sm"
              strokeWidth={2}
            />
          </button>
        </div>

        <button className="topbar-icon-button">
          <Bell
            className="icon-sm"
            strokeWidth={1.9}
          />

          <span className="notification-dot" />
        </button>

        <button className="topbar-icon-button settings-button">
          <SettingsIcon />
        </button>

        <button className="avatar-button">
          <img
            src="https://i.pravatar.cc/64?img=12"
            alt="User avatar"
            className="avatar"
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
      className="icon-sm"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
      />

      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      className="avatar-chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}