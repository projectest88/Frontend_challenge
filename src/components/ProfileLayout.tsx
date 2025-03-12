import Footer from "./Footer";
import Navbar from "./Navbar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
