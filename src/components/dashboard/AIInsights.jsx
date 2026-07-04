import Card from "../common/Card";
import { BrainCircuit, TrendingUp, ShieldCheck } from "lucide-react";
import { aiInsights } from "../../data/aiInsights";

export default function AIInsights() {
  return (
    <Card className="mt-8">
      <div className="flex items-center gap-3 mb-5">
        <BrainCircuit className="text-cyan-400" size={28} />
        <h2 className="text-xl font-bold text-white">
          AI Market Insights
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-slate-800 p-5">
          <TrendingUp className="mb-3 text-green-400" />
          <p className="text-slate-400">Market Sentiment</p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            {aiInsights.sentiment}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <BrainCircuit className="mb-3 text-cyan-400" />
          <p className="text-slate-400">AI Confidence</p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            {aiInsights.confidence}%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <ShieldCheck className="mb-3 text-yellow-400" />
          <p className="text-slate-400">Risk Level</p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            {aiInsights.risk}
          </h3>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <h3 className="mb-2 text-lg font-semibold text-white">
          AI Recommendation
        </h3>

        <p className="text-cyan-400 font-medium">
          {aiInsights.recommendation}
        </p>

        <p className="mt-4 text-slate-400 leading-7">
          {aiInsights.summary}
        </p>
      </div>
    </Card>
  );
}