import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = { title: "Legal" };

export default function Page() {
  return <PagePlaceholder eyebrow="Legal" title={<>Términos del <em className="font-light italic text-electric">servicio</em></>} text="Texto legal definitivo pendiente de revisión antes de producción." />;
}
