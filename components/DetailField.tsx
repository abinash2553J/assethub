export default function DetailField({
  label,
  value,
  valueClassName = "text-neutral-900",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div>
      <p className="text-[13px] text-neutral-500">{label}</p>
      <p className={`mt-1.5 text-[14.5px] font-medium ${valueClassName}`}>
        {value}
      </p>
    </div>
  );
}