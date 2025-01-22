
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
   <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <h1 className="font-poppins font-bold text-[4rem]">
          BIENVENUR SUR CLXT BLOG
        </h1>
        <Button className="px-20"asChild>
          <Link href="/blog" className="font-poppins">
            COMMENCER
          </Link>
        </Button>
   </div>
  );
}
