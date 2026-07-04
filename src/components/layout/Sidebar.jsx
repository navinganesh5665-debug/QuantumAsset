import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import { navigation } from "../../config/navigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 px-6 py-6">
      
      <Logo />

      <nav className="mt-10 flex flex-1 flex-col gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-sm font-semibold text-white">Navin</p>
        <p className="text-xs text-slate-400">
          Premium Member
        </p>
      </div>
    </aside>
  );
}