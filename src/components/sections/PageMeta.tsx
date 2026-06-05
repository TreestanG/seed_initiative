import { useEffect } from "react";
import type { PageMeta as PageMetaType } from "@/types/content";
import { site } from "@/data/site";

export function PageMeta({ meta }: { meta: PageMetaType }) {
	useEffect(() => {
		document.title = meta.title;
		setMeta("description", meta.description);
		setProperty("og:title", meta.title);
		setProperty("og:description", meta.description);
		setProperty("og:url", `${site.origin}${meta.path}`);
		setProperty("og:image", `${site.origin}/ogbanner.webp`);
		setMeta("twitter:card", "summary_large_image");
		setMeta("twitter:title", meta.title);
		setMeta("twitter:description", meta.description);
		setMeta("twitter:image", `${site.origin}/ogbanner.webp`);
		setCanonical(`${site.origin}${meta.path}`);
	}, [meta]);

	return null;
}

function setMeta(name: string, content: string) {
	let element = document.querySelector(`meta[name="${name}"]`);
	if (!element) {
		element = document.createElement("meta");
		element.setAttribute("name", name);
		document.head.append(element);
	}
	element.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
	let element = document.querySelector(`meta[property="${property}"]`);
	if (!element) {
		element = document.createElement("meta");
		element.setAttribute("property", property);
		document.head.append(element);
	}
	element.setAttribute("content", content);
}

function setCanonical(href: string) {
	let element = document.querySelector('link[rel="canonical"]');
	if (!element) {
		element = document.createElement("link");
		element.setAttribute("rel", "canonical");
		document.head.append(element);
	}
	element.setAttribute("href", href);
}
