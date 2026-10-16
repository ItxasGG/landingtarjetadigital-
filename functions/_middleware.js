export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Redirigir con 301 solo el hostname exacto landingtarjetadigital.pages.dev
  if (url.hostname === "landingtarjetadigital.pages.dev") {
    url.hostname = "tarjeta.estrategiadigitalestrella.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
