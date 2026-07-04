import MainLayout from "../layouts/MainLayout";
import AddAssetForm from "../components/portfolio/AddAssetForm";
import HoldingsTable from "../components/portfolio/HoldingsTable";

export default function Portfolio() {
 return (
  <MainLayout>
    <div className="grid gap-6 lg:grid-cols-3">
      <div>
        <AddAssetForm />
      </div>

      <div className="lg:col-span-2">
        <HoldingsTable />
      </div>
    </div>
  </MainLayout>
);
}