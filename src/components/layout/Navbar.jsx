import { Bell, Search, Moon, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search coins..."
          className="bg-transparent text-white outline-none placeholder:text-slate-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">
          <Bell className="text-white" size={20} />
        </button>

        <button className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">
          <Moon className="text-white" size={20} />
        </button>

        <div className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2">
          <UserCircle2 className="text-cyan-400" size={24} />
          <span className="text-sm text-white">Navin</span>
        </div>
      </div>
    </header>
  );
}