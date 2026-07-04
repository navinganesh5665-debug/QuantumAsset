export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white shadow-lg">
        Q
      </div>

      <div>
        <h2 className="text-lg font-bold text-white">
          QuantumAsset
        </h2>

        <p className="text-xs text-slate-400">
          AI Wealth Platform
        </p>
      </div>
    </div>
  );
}