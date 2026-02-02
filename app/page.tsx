import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { detectLocale } from "./i18n/detectLocale";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLang = headersList.get("accept-language") ?? "";
  redirect(`/${detectLocale(acceptLang)}`);
}
