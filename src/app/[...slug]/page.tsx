import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/sub/SubPage";
import { getPage, pages } from "@/lib/site-content";
import { BreadcrumbJsonLd } from "@/lib/structured-data";

const BASE_URL = "https://www.simplesmileendo.com";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `${BASE_URL}${page.path}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `${BASE_URL}${page.path}`,
      type: "article",
      images: page.img
        ? [{ url: `${BASE_URL}${page.img}`, width: 1200, height: 630, alt: page.imgAlt }]
        : undefined,
    },
  };
}

export default async function SubRoute({ params }: Props) {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) notFound();

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: page.crumb, url: `${BASE_URL}${page.crumbHref}` },
    { name: page.title, url: `${BASE_URL}${page.path}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SubPageView page={page} />
    </>
  );
}
