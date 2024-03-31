import { NumericFormat } from "react-number-format";

interface RowProps {
  label: string;
  value: string | number;
  className?: 'color-palette-4';
}

export default function Row(props: Readonly<Partial<RowProps>>) {
  const { label, value, className } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span
        className={`purchase-details ${className}`}
      >
        {typeof value === "number" ? (
          <NumericFormat
            value={value}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        ) : (
          value
        )}
      </span>
    </p>
  )
}
