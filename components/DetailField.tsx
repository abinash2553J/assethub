export default function DetailField({
  label,
  value,
  valueClassName = "",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div>
      <p className="detail-field-label">
        {label}
      </p>

      <p
        className={`detail-field-value ${valueClassName}`}
      >
        {value}
      </p>
    </div>
  );
}