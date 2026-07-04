import Card from "../common/Card";

export default function StatCard({
  title,
  value,
  change,
  positive = true,
}) {
  return (
    <Card>
      <p className="text-sm text-slate-400">{title}</p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>
    </Card>
  );
}