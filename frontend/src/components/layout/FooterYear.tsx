"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientYear = () => String(new Date().getFullYear());
const getServerYear = () => "";

/** Año actual sin bloquear el prerender estático (Next 16 / Cache Components). */
export function FooterYear() {
  return <>{useSyncExternalStore(subscribe, getClientYear, getServerYear)}</>;
}
