import Image from "next/image";
import SecondaryButton from "@/components/buttons/secondary";
import PrimaryButton from "@/components/buttons/primary";

interface MainCardProps {
  currentStep: number;
  totalSteps: number;
}

const emergencySymptoms = [
  "Severe chest pain or difficulty breathing",
  "Severe abdominal pain",
  "High fever over 103°F (39.4°C)",
  "Severe headache with neck stiffness",
  "Sudden vision changes or confusion",
  "Severe dizziness or fainting",
];

export default function MainCard({ currentStep, totalSteps }: MainCardProps) {
  return (
    <main
      className="flex flex-col rounded-lg items-center justify-center
        sm:w-full lg:w-[73%] p-2 sm:p-0 bg-white h-[calc(100vh-20px)]"
      style={{
        margin: "10px 10px 10px 0",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
      role="main"
      aria-label="Onboarding questions"
    >
      <div className="w-full sm:w-[700px] flex flex-col gap-6">
        <header className="space-y-3 w-full sm:w-[650px]">
          <div className="text-primary font-semibold text-[21px]">
            Step {currentStep}
            <span className="text-gray-400 tracking-tight">/{totalSteps}</span>
          </div>

          <h2 className="text-4xl leading-[52px] text-dark font-semibold tracking-tight">
            Making sure inline care is the right choice for you?
          </h2>
        </header>

        <section
          className="flex flex-col space-y-4 border-t-2
           border-[#FF5254] bg-[#ff52540d] rounded-lg p-5"
          role="alert"
          aria-labelledby="emergency-alert"
        >
          <div>
            <h3 id="emergency-alert" className="text-[17px] text-dark mb-1">
              Please confirm your are{" "}
              <strong className="font-semibold">NOT</strong> experiencing any
              emergency symptoms:
            </h3>

            <ul
              className="space-y-.5 text-[17px] leading-6"
              role="list"
              aria-label="emergency symptoms"
            >
              {emergencySymptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-center gap-2 ml-1.5 text-dark"
                >
                  <span className="mb-1 mx-1">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-dark text-[17px] leading-6">
            If yes, please seek <strong>immediate medical attention</strong> by
            visiting your nearest <strong>emergency room</strong> or{" "}
            <strong>calling 911</strong>.
          </p>
        </section>

        <nav
          className="flex justify-between items-center gap-4 flex-col sm:flex-row"
          role="navigation"
          aria-label="cards navigation"
        >
          <SecondaryButton label="go to previous card">
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow left"
              width={10}
              height={10}
            />
            Back
          </SecondaryButton>

          <PrimaryButton label="confirm no emergency symptoms and continue">
            I am NOT Experiencing Any Emergency Symptoms
          </PrimaryButton>
        </nav>
      </div>
    </main>
  );
}
