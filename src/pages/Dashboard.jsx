import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="rounded-2xl bg-slate-800 p-8">
        <h1 className="text-4xl font-bold text-white">
          QuantumAsset 🚀
        </h1>

        <p className="mt-4 text-slate-400">
          Premium Crypto Portfolio & AI Analytics Dashboard
        </p>
      </div>
    </MainLayout>
  );
}