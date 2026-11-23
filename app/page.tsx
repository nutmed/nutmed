import { redirect } from "next/navigation";

// A raiz do subdomínio não tem conteúdo próprio: leva para a LP principal (307, temporário).
export default function Home() {
  redirect("/pos-nutricao-de-precisao");
}
