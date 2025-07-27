import Sidebar from "./sidebar";
import MainCard from "./main-card";

export default function Onboarding() {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row"
      style={{
        background: "linear-gradient(to bottom, #EFF6FF 0%, #DCEAFE 100%)",
      }}
    >
      <Sidebar />
      <MainCard currentStep={5} totalSteps={12} />
    </div>
  );
}
