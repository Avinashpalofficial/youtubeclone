import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import { VideoCard } from "@/component/VideoCard";
import { VideoGrid } from "@/component/VideoGrid";
export default function Home() {
  return (
    <div>
      <VideoGrid />
    </div>
  );
}
