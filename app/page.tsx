import { redirect } from "next/navigation";

// A raiz do subdomínio não tem conteúdo próprio: leva para o site principal.
export default function Home() {
  redirect("https://nutmed.com.br");
}
