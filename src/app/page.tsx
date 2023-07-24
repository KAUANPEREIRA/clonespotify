import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semi-bold text-3xl mt-10">Good afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Waiting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>{" "}
            <a
              href=""
              className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Waiting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Waiting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Waiting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Waiting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Waiting Light</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h1 className="font-semi-bold text-3xl mt-10">
            Made in For John Doe
          </h1>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-2 rounded hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wallows, Coin, girl in read and more
              </span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Daily mix 1</strong>
              <span>Wallows, Coin, girl in read and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Daily mix 1</strong>
              <span>Wallows, Coin, girl in read and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Daily mix 1</strong>
              <span>Wallows, Coin, girl in read and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="capa do album"
              />
              <strong>Daily mix 1</strong>
              <span>Wallows, Coin, girl in read and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
