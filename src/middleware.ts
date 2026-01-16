import { defineMiddleware } from "astro:middleware";

// Verified types are okay. No change needed here.
// But wait, I need to check if index.astro has type errors for `content[locale].links`
// Since `content` is `as const`, TS might infer specific shapes for each key.
// Let's rely on `as const` inference for now.
export const onRequest = defineMiddleware((context: any, next: any) => {
  const host = context.request.headers.get("host") || "";
  
  // Clean host (remove port if present)
  const domain = host.split(":")[0];

  let locale = "zh"; // Default

  if (domain === "zhouchaoran.com") {
    locale = "zh";
  } else if (domain === "shuchozen.com" || domain === "chozen.me") {
    locale = "ja";
  } else if (domain === "travischow.com") {
    locale = "en";
  }

  context.locals.locale = locale;

  return next();
});
