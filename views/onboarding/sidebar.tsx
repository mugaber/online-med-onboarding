import Image from "next/image";
import Testimony from "@/components/testimony";

export default function Sidebar() {
  return (
    <aside
      className="h-screen p-6 flex flex-col justify-between sm:w-full md:w-[27%]"
      role="complementary"
      aria-label="product information and testimonials"
    >
      <div className="space-y-1 pt-23">
        <div
          className="flex items-center gap-2 mb-2"
          role="status"
          aria-label="Money back guarantee"
        >
          <Image
            src="/icons/correct.svg"
            alt="correct icon"
            width={22}
            height={22}
          />
          <p className="font-semibold text-[15px] leading-5 text-primary">
            100% Money Back Guarantee
          </p>
        </div>

        <h1 className="font-bold text-[33px] leading-13 text-dark">
          Your <span className="text-primary">Work</span> Note is Minutes Away
        </h1>

        <p className="text-[17px] leading-6 text-dark">
          Answer a few questions, pay securely, and have your note delivered to
          your inbox in minutes.
        </p>
      </div>

      <section
        className="space-y-5"
        role="group"
        aria-label="Customer testimonials"
      >
        <Testimony
          user={{
            name: "Nick P.",
            avatar: "NP",
            role: "Student",
            location: "New York",
          }}
          rating={5}
          date="1 week ago"
          text="Woke up with severe stomach flu and needed documentation for work. 
            The doctor was thorough, professional, and I had my note in minutes."
        />

        <nav
          className="flex gap-2"
          role="navigation"
          aria-label="testimonials navigation"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              aria-current={index === 0}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === 0 ? "bg-primary" : "bg-primary/24"
              }`}
            />
          ))}
        </nav>
      </section>
    </aside>
  );
}
