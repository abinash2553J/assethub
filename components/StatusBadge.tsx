const STYLES: Record<string, string> = {
  "In-Use": "bg-blue-50 text-blue-600",
  Available: "bg-green-50 text-green-600",
  Maintenance: "bg-orange-50 text-orange-600",
  Scrap: "bg-neutral-100 text-neutral-500",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[13px] font-medium ${STYLES[status] ?? "bg-neutral-100 text-neutral-500"
        }`}
    >
      {status}
    </span>
  );
}