import AppShell from "@/components/AppShell";
import DetailField from "@/components/DetailField";

const tabs = [
  "Asset Details",
  "Assigned List",
  "History",
  "Files",
];

const LAPTOP_IMG = "/legion-pro.avif";

export default function AssetDetailsPage() {
  return (
    <AppShell>
      <div className="detail-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`detail-tab ${i === 0 ? "active" : ""
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="detail-header">
        <div className="detail-title-area">
          <div className="detail-image">
            <img
              src={LAPTOP_IMG}
              alt="Lenovo Legion Pro"
            />
          </div>

          <div>
            <h1 className="detail-title">
              Lenovo Legion Pro
            </h1>

            <p className="detail-id">
              #AST-0168
            </p>
          </div>
        </div>

        <div className="detail-actions">
          <button className="detail-action approve">
            Approve
          </button>

          <button className="detail-action reject">
            Reject
          </button>

          <button className="detail-action close">
            Close
          </button>
        </div>
      </div>

      <section className="detail-section">
        <div className="detail-grid">
          <DetailField
            label="Asset Type"
            value="Laptop"
          />

          <DetailField
            label="Manufacturer"
            value="Lenovo"
          />

          <DetailField
            label="Model"
            value="A16870"
          />

          <DetailField
            label="Serial Number"
            value="D924GWYRQ3"
          />

          <DetailField
            label="Description"
            value="8gb RAM, 512 SSD, M1 pro Processor"
          />

          <DetailField
            label="Status"
            value="Available"
          />

          <DetailField
            label="Condition"
            value="Good"
          />

          <DetailField
            label="Depreciation Value"
            value="₹ 1,50,000"
            valueClassName="green"
          />
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-grid">
          <DetailField
            label="Supplier"
            value="Richard Enterprises"
          />

          <DetailField
            label="Purchase Cost"
            value="₹ 2,25,000"
          />

          <DetailField
            label="Warranty Expiry"
            value="16 Jan 2030"
          />

          <DetailField
            label="Invoice Number"
            value="395C508E-0025"
          />

          <DetailField
            label="Purchase Date"
            value="12 Jan 2025"
          />
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-grid">
          <DetailField
            label="AMC Provider Name"
            value="Dell Support Services"
          />

          <DetailField
            label="Provider Contact Person"
            value="John Peterson"
          />

          <DetailField
            label="End Date"
            value="16 Jan 2027"
          />

          <DetailField
            label="Contact Number"
            value="+91 6758492031"
          />

          <DetailField
            label="Mail ID"
            value="support@dellservices.com"
          />

          <DetailField
            label="AMC Cost"
            value="₹ 50,000"
          />
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-grid">
          <DetailField
            label="Last Audit Date"
            value="12 Jan 2026"
          />

          <DetailField
            label="Description"
            value="Everything is working fine,"
          />
        </div>
      </section>
    </AppShell>
  );
}