import Navbar from "@/ui/dashboard/navbar/navbar";
import Sidebar from "@/ui/dashboard/sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
