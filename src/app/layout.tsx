import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Sidebar from "@/components/navigation/sidebar";
import Footer from "@/components/navigation/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blackPrimary">
        <div className=""> {/* Esto es el fondo de letras */}
          
        </div>
        <div className="fixed flex flex-col h-full w-full p-2">
          <Navbar></Navbar>

          <div className="flex flex-1 w-full h-[80%]">
            <Sidebar></Sidebar>
            <div className="w-full h-full overflow-y-auto scrollbar">{children}</div>
          </div>

          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
