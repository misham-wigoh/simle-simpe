import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/sub/SubPage";
import { getPage, pages } from "@/lib/site-content";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) return {};
  return { title: page.metaTitle, description: page.description };
}

export default async function SubRoute({ params }: Props) {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) notFound();
  return <SubPageView page={page} />;
}
