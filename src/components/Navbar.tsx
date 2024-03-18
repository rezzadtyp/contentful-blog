import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/MemoirLogo.svg";
import { Command, CommandInput } from "./ui/command";

const Navbar = () => {
  return (
    <div className="flex w-full h-fit">
      <div className="flex flex-col w-full my-4 px-10 py-4 bg-zinc-900 text-white rounded-xl h-fit">
        <div className="flex justify-between place-items-center">
          <div className="flex gap-6 place-items-center">
            <Image
              priority
              height={32}
              width={32}
              src={Logo}
              alt="Memoir Logo"
            />
            <h1 className="text-xl font-semibold">Memoir</h1>
          </div>
          <div className="flex gap-8">
            <Link href={"/"}>Subscribe</Link>
            <Link href={"/"}>About</Link>
          </div>
        </div>
        <div className="border border-white my-4"></div>
        <div className="grid grid-cols-2 gap-6">
          <h1 className="text-7xl w-1/2">UNFOLDING NARATIVES</h1>
          <div className="grid gap-y-2 place-items-end w-full">
            <div></div>
            <div className="flex flex-col items-end">
              <h2 className="text-zinc-500">SEARCH</h2>
              <Command className="h-fit rounded-lg border shadow-md">
                <CommandInput placeholder="Type something..." />
              </Command>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
