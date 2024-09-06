import { Header } from "@/components/ui/header";
import { Search } from "@/components/ui/search";

export default function Home() {
  return (
    <div>
      <div className="px-5 pt-6">
        <Header />
      </div>

      <div className="px-5 pt-6">
        <Search />
      </div>
    </div>
  );
}
