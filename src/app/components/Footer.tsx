import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/album.jpg" width={56} height={56} alt="capa do album" />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo fighters</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className=" w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2 mt-10">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume />
        </div>
        <Maximize2 />
      </div>
    </footer>
  );
};
