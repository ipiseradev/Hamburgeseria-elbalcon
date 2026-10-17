import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/nosotros", "/sucursales-y-precios", "/el-balcon-vgb"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
