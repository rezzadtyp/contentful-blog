import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TestContent from "@/components/TestContent";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto">
      <Navbar />
      {/* <Content /> */}
      <TestContent />
      <Footer />
    </div>
  );
}
