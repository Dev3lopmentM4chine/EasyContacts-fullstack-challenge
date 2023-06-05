interface iButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined ;
}

export default function Button({ text, type }: iButtonProps) {
  return (
    <>
      <button type={type} className="h-14 w-full max-w-[25rem] rounded-[10px] bg-brand text-black hover:opacity-[0.5] hover:duration-300 hover:ease-in-out">
        {text}
      </button>
    </>
  );
}
