import { SearchIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export function Search() {
  return (
    <div className="flex items-center">
      <Input
        type="text"
        placeholder="Buscar Restaurantes"
        className="border-none bg-[#F4F4F5] text-[#7E8392]"
      />

      <Button
        size="icon"
        type="button"
        className="bg-[#EA1D2C] hover:bg-[#EA1D2C] hover:bg-opacity-80"
      >
        <SearchIcon size={20} />
      </Button>
    </div>
  );
}
