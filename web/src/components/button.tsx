"use client";

export default function Button({
  text,
}: {
  text: string;
}) {
  return (
    <>
      <button className="h-14 w-full max-w-[25rem] rounded-[10px] bg-brand text-black hover:opacity-[0.5] hover:duration-300 hover:ease-in-out">
        {text}
      </button>
    </>
  );
}
