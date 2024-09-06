import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export function Header() {
  return (
    <div className="flex items-end justify-between">
      <Image src="/logo.png" alt="FSW Food" width={100} height={30} />

      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
}
