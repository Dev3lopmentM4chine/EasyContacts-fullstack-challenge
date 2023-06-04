import Image from "next/image";
import logoImage from "../assets/logo.svg";

export default function Logo() {
  return (
    <div className="flex h-11 w-40 flex-row items-center gap-2">
      <Image src={logoImage} alt="" width={39} height={39} />
      <span className="text-white">EasyContacts</span>
    </div>
  );
}
