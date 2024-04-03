import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[1200px] relative">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
