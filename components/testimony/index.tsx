import Image from "next/image";

interface TestimonyProps {
  user: {
    name: string;
    avatar: string;
    role: string;
    location: string;
  };
  rating: number;
  date: string;
  text: string;
}

export default function Testimony({
  user,
  rating,
  date,
  text,
}: TestimonyProps) {
  return (
    <article className="flex flex-col gap-4 items-start px-4.5 py-5 rounded-2xl bg-[#ffffff99]">
      <header className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-[#FAB020] flex items-center justify-center">
          <span className="text-[17px] font-semibold">{user.avatar}</span>
        </div>

        <div>
          <h3 className="font-semibold text-[17px] text-dark">{user.name}</h3>

          <p className="text-sm text-gray flex items-center">
            {user.role}
            <Image
              src="/icons/ellipse.svg"
              alt="ellipse icon"
              className="mx-2"
              width={4}
              height={4}
            />
            {user.location}
          </p>
        </div>
      </header>

      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-1"
            role="img"
            aria-label="rating"
          >
            {Array.from({ length: rating }).map((_, index) => (
              <Image
                key={index}
                src="/icons/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            ))}
          </div>

          <p className="text-sm text-gray">{date}</p>
        </div>

        <blockquote className="text-[16px] leading-6 text-dark">
          {text}
        </blockquote>
      </div>
    </article>
  );
}
