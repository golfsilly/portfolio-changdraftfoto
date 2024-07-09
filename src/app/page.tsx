import Image from "next/image";
import Link from "next/link";
import Type from "@/components/home/Type";
import { anton } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Home1 from "@/components/home/Home1";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Home1 />
    </main>
  );
}
