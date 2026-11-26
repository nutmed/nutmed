import { posNutricaoDePrecisao } from "@/content/pos-nutricao-de-precisao";
import { posNutricaoClinica } from "@/content/pos-nutricao-clinica";
import { posNutricaoEsportiva } from "@/content/pos-nutricao-esportiva";
import { posNutricaoMaternoInfantil } from "@/content/pos-nutricao-materno-infantil";
import { posNutricaoOncologia } from "@/content/pos-nutricao-oncologia";

// Lista única das LPs. Ao criar uma LP nova, inclua o curso aqui: o sitemap e a imagem de
// compartilhamento (/og/<slug>.jpg) saem desta lista.
export const courses = [posNutricaoDePrecisao, posNutricaoClinica, posNutricaoEsportiva, posNutricaoMaternoInfantil, posNutricaoOncologia];
