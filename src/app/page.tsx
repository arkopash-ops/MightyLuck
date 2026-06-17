import Navbar from "@/components/guest/Navbar";
import Sidebar from "@/components/guest/Sidebar";

export default function Home() {
  return (
    <main className="w-full bg-[#091741]">
      <Navbar />
      <Sidebar />
      <div className="max-w-360 mx-auto flex flex-col"></div>
    </main>
  );
}
