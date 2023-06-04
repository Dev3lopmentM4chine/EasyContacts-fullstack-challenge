"use client";

interface iInputProps {
  placeHolder: string;
  type: string;
}

export default function Input({ placeHolder, type }: iInputProps) {
  return (
    <>
      <input
        className="flex h-[3.75rem] w-full max-w-[25rem] items-center rounded-[.625rem] border-none bg-white px-5 placeholder:text-gray-500"
        type={type}
        placeholder={placeHolder}
      />
    </>
  );
}
