import AppShell from "@/components/AppShell";
import DetailField from "@/components/DetailField";

const tabs = ["Asset Details", "Assigned List", "History", "Files"];

const LAPTOP_IMG = "/legion-pro.avif";

export default function AssetDetailsPage() {
  return (
    <AppShell>
      {/* Tabs */}
      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl bg-neutral-100 p-1 text-[13.5px] font-medium sm:text-[14px]">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`shrink-0 rounded-lg px-4 py-2.5 whitespace-nowrap transition-colors sm:flex-1 sm:px-0 ${i === 0
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-500 hover:text-neutral-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header row */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:h-14 sm:w-14">
            <img
              src={LAPTOP_IMG}
              alt="Lenovo Legion Pro"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-[17px] font-semibold text-neutral-900 sm:text-[19px]">
              Lenovo Legion Pro
            </h1>
            <p className="text-[13px] text-neutral-500 sm:text-[13.5px]">#AST-0168</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-[13.5px] font-medium text-white hover:bg-blue-700 sm:flex-none sm:px-5 sm:text-[14px]">
            Approve
          </button>
          <button className="flex-1 rounded-lg bg-red-50 px-4 py-2.5 text-[13.5px] font-medium text-red-500 hover:bg-red-100 sm:flex-none sm:px-5 sm:text-[14px]">
            Reject
          </button>
          <button className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-[13.5px] font-medium text-neutral-700 hover:bg-neutral-50 sm:flex-none sm:px-5 sm:text-[14px]">
            Close
          </button>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mb-4 rounded-xl bg-[#eef2fa] px-5 py-5 sm:px-7 sm:py-6">
        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
          <DetailField label="Asset Type" value="Laptop" />
          <DetailField label="Manufacturer" value="Lenovo" />
          <DetailField label="Model" value="A16870" />
          <DetailField label="Serial Number" value="D924GWYRQ3" />
          <DetailField
            label="Description"
            value="8gb RAM, 512 SSD, M1 pro Processor"
          />
          <DetailField label="Status" value="Available" />
          <DetailField label="Condition" value="Good" />
          <DetailField
            label="Depreciation Value"
            value="₹ 1,50,000"
            valueClassName="text-green-600"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-4 rounded-xl bg-[#eef2fa] px-5 py-5 sm:px-7 sm:py-6">
        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
          <DetailField label="Supplier" value="Richard Enterprises" />
          <DetailField label="Purchase Cost" value="₹ 2,25,000" />
          <DetailField label="Warranty Expiry" value="16 Jan 2030" />
          <DetailField label="Invoice Number" value="395C508E-0025" />
          <DetailField label="Purchase Date" value="12 Jan 2025" />
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-4 rounded-xl bg-[#eef2fa] px-5 py-5 sm:px-7 sm:py-6">
        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
          <DetailField label="AMC Provider Name" value="Dell Support Services" />
          <DetailField label="Provider Contact Person" value="John Peterson" />
          <DetailField label="End Date" value="16 Jan 2027" />
          <DetailField label="Contact Number" value="+91 6758492031" />
          <DetailField label="Mail ID" value="support@dellservices.com" />
          <DetailField label="AMC Cost" value="₹ 50,000" />
        </div>
      </section>

      {/* Section 4 */}
      <section className="rounded-xl bg-[#eef2fa] px-5 py-5 sm:px-7 sm:py-6">
        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
          <DetailField label="Last Audit Date" value="12 Jan 2026" />
          <DetailField label="Description" value="Everything is working fine," />
        </div>
      </section>
    </AppShell>
  );
}