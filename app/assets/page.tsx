import AppShell from "@/components/AppShell";
import StatusBadge from "@/components/StatusBadge";
import {
  Search,
  Download,
  Plus,
  ChevronDown,
  Sparkles,
  MoreVertical,
} from "lucide-react";

const LAPTOP_IMG = "/legion-pro.avif";

type Row = {
  assetTag: string;
  name: string;
  type: string;
  modelNo: string;
  warrantyExp: string;
  status: "In-Use" | "Available" | "Maintenance" | "Scrap";
  assignee: { name: string; dept: string; avatar: string } | null;
};

const rows: Row[] = [
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "In-Use", assignee: { name: "Livia Rhiel Madsen", dept: "Front-End", avatar: "https://i.pravatar.cc/64?img=5" } },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "Available", assignee: null },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "In-Use", assignee: { name: "Livia Rhiel Madsen", dept: "Front-End", avatar: "https://i.pravatar.cc/64?img=5" } },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "Maintenance", assignee: null },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "Scrap", assignee: null },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "In-Use", assignee: { name: "Livia Rhiel Madsen", dept: "Front-End", avatar: "https://i.pravatar.cc/64?img=5" } },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "Scrap", assignee: null },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "In-Use", assignee: { name: "Livia Rhiel Madsen", dept: "Front-End", avatar: "https://i.pravatar.cc/64?img=5" } },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "Maintenance", assignee: null },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "In-Use", assignee: { name: "Livia Rhiel Madsen", dept: "Front-End", avatar: "https://i.pravatar.cc/64?img=5" } },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "Available", assignee: null },
  { assetTag: "AST-0008", name: "Lenovo Legion Pro", type: "Laptop", modelNo: "A16870", warrantyExp: "Wed, 14 Jan 2026", status: "In-Use", assignee: { name: "Livia Rhiel Madsen", dept: "Front-End", avatar: "https://i.pravatar.cc/64?img=5" } },
];

const topTabs = [
  { label: "Assets", active: true },
  { label: "Accessories", active: false },
  { label: "Consumables", active: false },
  { label: "Licenses", active: false },
];

function CheckButton({ row }: { row: Row }) {
  if (row.status === "Scrap") {
    return (
      <button
        disabled
        className="w-full cursor-not-allowed rounded-lg bg-neutral-100 px-4 py-1.5 text-[13.5px] font-medium text-neutral-400 sm:w-auto"
      >
        Check-out
      </button>
    );
  }
  if (row.assignee) {
    return (
      <button className="w-full rounded-lg bg-green-600 px-4 py-1.5 text-[13.5px] font-medium text-white hover:bg-green-700 sm:w-auto">
        Check-in
      </button>
    );
  }
  return (
    <button className="w-full rounded-lg bg-blue-600 px-4 py-1.5 text-[13.5px] font-medium text-white hover:bg-blue-700 sm:w-auto">
      Check-out
    </button>
  );
}

export default function AssetsListPage() {
  return (
    <AppShell>
      {/* Title row */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-5 overflow-x-auto sm:gap-6">
          {topTabs.map((t) => (
            <span
              key={t.label}
              className={
                t.active
                  ? "shrink-0 text-[19px] font-semibold text-neutral-900 sm:text-[22px]"
                  : "shrink-0 cursor-pointer text-[14px] font-medium text-neutral-400 hover:text-neutral-600 sm:text-[15px]"
              }
            >
              {t.label}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-[13.5px] font-medium text-neutral-700 hover:bg-neutral-50 sm:flex-none sm:text-[14px]">
            <Download className="h-4 w-4" strokeWidth={1.9} />
            Export
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-[13.5px] font-medium text-white hover:bg-blue-700 sm:flex-none sm:text-[14px]">
            <Plus className="h-4 w-4" strokeWidth={2} />
            Add Asset
          </button>
        </div>
      </div>

      {/* Filter row */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search assets by ID, Name ..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-[14px] text-neutral-600 placeholder:text-neutral-400 outline-none focus:border-blue-300"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1 sm:pb-0">
          <button className="flex shrink-0 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-[14px] font-medium text-neutral-600 hover:bg-neutral-50">
            All Status
            <ChevronDown className="h-4 w-4 text-neutral-400" />
          </button>

          <button className="flex shrink-0 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-[14px] font-medium text-neutral-600 hover:bg-neutral-50">
            All Categories
            <ChevronDown className="h-4 w-4 text-neutral-400" />
          </button>

          <button className="flex shrink-0 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-[14px] font-medium text-neutral-600 hover:bg-neutral-50">
            <Sparkles className="h-4 w-4 text-neutral-400" />
            Added via Agents
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[12px] font-semibold text-blue-600">
              10
            </span>
          </button>
        </div>
      </div>

      {/* ---- Desktop / tablet table (md and up) ---- */}
      <div className="hidden overflow-hidden rounded-xl border border-neutral-200 bg-white md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-200 text-[13px] font-bold text-neutral-700">
                <th className="w-11 px-5 py-3.5">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
                </th>
                <th className="px-3 py-3.5">Asset Tag</th>
                <th className="px-3 py-3.5">Name</th>
                <th className="px-3 py-3.5">Model No.</th>
                <th className="px-3 py-3.5">Warranty Exp date</th>
                <th className="px-3 py-3.5">Status</th>
                <th className="px-3 py-3.5">Assigned To</th>
                <th className="px-3 py-3.5">Check-in/out</th>
                <th className="w-11 px-3 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-neutral-100 text-[14px] last:border-b-0 hover:bg-neutral-50/70"
                >
                  <td className="px-5 py-3.5">
                    <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
                  </td>
                  <td className="px-3 py-3.5 font-medium text-neutral-700">
                    {row.assetTag}
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                        <img
                          src={LAPTOP_IMG}
                          alt="Lenovo Legion Pro"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{row.name}</p>
                        <p className="text-[12.5px] text-neutral-400">{row.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3.5 text-neutral-600">{row.modelNo}</td>
                  <td className="px-3 py-3.5 text-neutral-600">{row.warrantyExp}</td>
                  <td className="px-3 py-3.5">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-3 py-3.5">
                    {row.assignee ? (
                      <div className="flex items-center gap-2.5">
                        <img
                          src={row.assignee.avatar}
                          alt={row.assignee.name}
                          className="h-8 w-8 shrink-0 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-neutral-800">
                            {row.assignee.name}
                          </p>
                          <p className="text-[12.5px] text-neutral-400">
                            {row.assignee.dept}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <span className="text-neutral-400">Unassigned</span>
                    )}
                  </td>
                  <td className="px-3 py-3.5">
                    <CheckButton row={row} />
                  </td>
                  <td className="px-3 py-3.5 text-neutral-400">
                    <MoreVertical className="h-4.5 w-4.5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---- Mobile card list (below md) ---- */}
      <div className="flex flex-col gap-3 md:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-200 bg-white p-4"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-neutral-300" />
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                  <img
                    src={LAPTOP_IMG}
                    alt="Lenovo Legion Pro"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{row.name}</p>
                  <p className="text-[12.5px] text-neutral-400">
                    {row.type} · {row.assetTag}
                  </p>
                </div>
              </div>
              <button className="text-neutral-400">
                <MoreVertical className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-y-2.5 text-[13px]">
              <div>
                <p className="text-neutral-400">Model No.</p>
                <p className="font-medium text-neutral-700">{row.modelNo}</p>
              </div>
              <div>
                <p className="text-neutral-400">Warranty Exp</p>
                <p className="font-medium text-neutral-700">{row.warrantyExp}</p>
              </div>
              <div>
                <p className="text-neutral-400">Status</p>
                <div className="mt-0.5">
                  <StatusBadge status={row.status} />
                </div>
              </div>
              <div>
                <p className="text-neutral-400">Assigned To</p>
                {row.assignee ? (
                  <div className="mt-1 flex items-center gap-2">
                    <img
                      src={row.assignee.avatar}
                      alt={row.assignee.name}
                      className="h-6 w-6 shrink-0 rounded-full object-cover"
                    />
                    <p className="font-medium text-neutral-700">
                      {row.assignee.name.split(" ")[0]}
                    </p>
                  </div>
                ) : (
                  <p className="mt-1 font-medium text-neutral-400">Unassigned</p>
                )}
              </div>
            </div>

            <CheckButton row={row} />
          </div>
        ))}
      </div>
    </AppShell>
  );
}