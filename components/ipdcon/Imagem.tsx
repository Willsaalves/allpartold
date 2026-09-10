"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Imagem que se remove do fluxo quando o arquivo não carrega, deixando à
 * mostra o fundo do bloco que a contém (todos têm degradê próprio). Evita o
 * ícone de imagem quebrada quando uma foto ainda não foi publicada.
 */
export function Imagem(props: ImageProps) {
  const [falhou, setFalhou] = useState(false);

  if (falhou) return null;

  return <Image {...props} onError={() => setFalhou(true)} />;
}
