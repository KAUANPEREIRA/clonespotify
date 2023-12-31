import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
