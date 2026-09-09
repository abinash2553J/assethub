const STATUS_CLASSES: Record<string, string> = {
  "In-Use": "status-in-use",
  Available: "status-available",
  Maintenance: "status-maintenance",
  Scrap: "status-scrap",
};

export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  const statusClass =
    STATUS_CLASSES[status] ?? "status-scrap";

  return (
    <span
      className={`status-badge ${statusClass}`}
    >
      {status}
    </span>
  );
}