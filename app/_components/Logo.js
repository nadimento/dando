import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Logo() {
  return (
    <div className="my-8 flex items-center justify-center">
      <Image src="/todo-icon.png" alt="Logo" width={100} height={100} />
    </div>
  );
}
