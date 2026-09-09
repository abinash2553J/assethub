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
        className="check-button disabled"
      >
        Check-out
      </button>
    );
  }

  if (row.assignee) {
    return (
      <button className="check-button checkin">
        Check-in
      </button>
    );
  }

  return (
    <button className="check-button checkout">
      Check-out
    </button>
  );
}

export default function AssetsListPage() {
  return (
    <AppShell>
      <div className="assets-title-row">
        <div className="assets-tabs">
          {topTabs.map((tab) => (
            <button
              key={tab.label}
              className={`assets-tab ${tab.active ? "active" : ""
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="action-buttons">
          <button className="action-button secondary">
            <Download className="icon-sm" />
            Export
          </button>

          <button className="action-button primary">
            <Plus className="icon-sm" />
            Add Asset
          </button>
        </div>
      </div>

      <div className="filters">
        <div className="search-field">
          <Search className="search-field-icon" />

          <input
            type="text"
            placeholder="Search assets by ID, Name ..."
          />
        </div>

        <div className="filter-buttons">
          <button className="filter-button">
            All Status
            <ChevronDown className="icon-sm" />
          </button>

          <button className="filter-button">
            All Categories
            <ChevronDown className="icon-sm" />
          </button>

          <button className="filter-button">
            <Sparkles className="icon-sm" />

            Added via Agents

            <span className="agent-count">
              10
            </span>
          </button>
        </div>
      </div>

      {/* Desktop/tablet */}
      <div className="asset-table-wrapper">
        <div className="asset-table-scroll">
          <table className="asset-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="checkbox"
                  />
                </th>

                <th>Asset Tag</th>
                <th>Name</th>
                <th>Model No.</th>
                <th>Warranty Exp date</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Check-in/out</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </td>

                  <td>
                    {row.assetTag}
                  </td>

                  <td>
                    <div className="asset-name">
                      <div className="asset-image">
                        <img
                          src={LAPTOP_IMG}
                          alt="Lenovo Legion Pro"
                        />
                      </div>

                      <div>
                        <p className="asset-name-title">
                          {row.name}
                        </p>

                        <p className="asset-name-type">
                          {row.type}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>{row.modelNo}</td>

                  <td>{row.warrantyExp}</td>

                  <td>
                    <StatusBadge
                      status={row.status}
                    />
                  </td>

                  <td>
                    {row.assignee ? (
                      <div className="assignee">
                        <img
                          src={row.assignee.avatar}
                          alt={row.assignee.name}
                          className="assignee-image"
                        />

                        <div>
                          <p className="assignee-name">
                            {row.assignee.name}
                          </p>

                          <p className="assignee-department">
                            {row.assignee.dept}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <span className="unassigned">
                        Unassigned
                      </span>
                    )}
                  </td>

                  <td>
                    <CheckButton row={row} />
                  </td>

                  <td>
                    <button className="more-button">
                      <MoreVertical className="icon-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile */}
      <div className="asset-mobile-list">
        {rows.map((row, i) => (
          <div
            key={i}
            className="asset-mobile-card"
          >
            <div className="asset-mobile-header">
              <div className="asset-mobile-main">
                <input
                  type="checkbox"
                  className="checkbox"
                />

                <div className="asset-mobile-image">
                  <img
                    src={LAPTOP_IMG}
                    alt="Lenovo Legion Pro"
                  />
                </div>

                <div>
                  <p className="asset-mobile-title">
                    {row.name}
                  </p>

                  <p className="asset-mobile-subtitle">
                    {row.type} · {row.assetTag}
                  </p>
                </div>
              </div>

              <button className="more-button">
                <MoreVertical className="icon-sm" />
              </button>
            </div>

            <div className="asset-mobile-details">
              <div>
                <p className="detail-label">
                  Model No.
                </p>

                <p className="detail-value">
                  {row.modelNo}
                </p>
              </div>

              <div>
                <p className="detail-label">
                  Warranty Exp
                </p>

                <p className="detail-value">
                  {row.warrantyExp}
                </p>
              </div>

              <div>
                <p className="detail-label">
                  Status
                </p>

                <div>
                  <StatusBadge
                    status={row.status}
                  />
                </div>
              </div>

              <div>
                <p className="detail-label">
                  Assigned To
                </p>

                {row.assignee ? (
                  <div className="mobile-assignee">
                    <img
                      src={row.assignee.avatar}
                      alt={row.assignee.name}
                      className="assignee-image"
                    />

                    <p className="detail-value">
                      {row.assignee.name.split(" ")[0]}
                    </p>
                  </div>
                ) : (
                  <p className="detail-value unassigned">
                    Unassigned
                  </p>
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