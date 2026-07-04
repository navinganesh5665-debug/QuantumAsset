import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Portfolio Value"
          value="$124,580"
          change="+12.4%"
        />

        <StatCard
          title="Today's Profit"
          value="+$3,240"
          change="+5.1%"
        />

        <StatCard
          title="Assets"
          value="18"
          change="+2 Assets"
        />

        <StatCard
          title="AI Confidence"
          value="92%"
          change="Excellent"
        />
      </div>
    </MainLayout>
  );
}