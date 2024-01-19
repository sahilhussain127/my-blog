import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="font-bold before:text-gray-400 text-3xl">
        {" "}
        Hello ! SAHIL HUSSAIN
      </h1>
    </div>
  );
}
