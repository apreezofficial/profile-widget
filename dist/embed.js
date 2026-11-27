import { mountProfileWidget } from "./index.js";
const currenturl = new URL(import.meta.url).searchParams.get("currenturl");
mountProfileWidget({ currenturl: currenturl ?? undefined });
