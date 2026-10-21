import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = { title: "Legal" };

export default function Page() {
  return <PagePlaceholder eyebrow="Legal" title={<>Aviso de <em className="font-light italic text-electric">privacidad</em></>} text="Texto legal definitivo pendiente de la jurisdicción y datos reales del estudio." />;
}
