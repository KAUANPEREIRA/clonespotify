import { HomeIcon, Library, Search } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <Library />
          Your library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aniver Funk
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
      </nav>
    </aside>
  );
};
