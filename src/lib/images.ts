/**
 * Responsive image helpers.
 *
 * Every resized asset follows one naming convention: the base file is the
 * largest variant, and each smaller step sits beside it as
 * `<name>-<width>.<ext>`. So `widths: [640, 1024, 1600]` on
 * `/media/hero.webp` resolves to hero-640.webp, hero-1024.webp, hero.webp.
 */

function stepFile(src: string, width: number) {
	const dot = src.lastIndexOf(".");
	return `${src.slice(0, dot)}-${width}${src.slice(dot)}`;
}

/** Builds a `srcset` string, or undefined when the asset has no variants. */
export function buildSrcSet(src: string, widths?: number[]) {
	if (!widths || widths.length === 0) return undefined;
	// Variant names are built by splicing the width in before the extension, so
	// an extensionless path (public/media has one) would yield a mangled name
	// that 404s. Drop the srcset instead and let `src` stand on its own.
	if (!src.includes(".")) return undefined;
	const largest = Math.max(...widths);
	return widths
		.map((w) => `${w === largest ? src : stepFile(src, w)} ${w}w`)
		.join(", ");
}

/**
 * The `background-image` equivalent of a srcset. Backgrounds can't use srcset,
 * so callers hand these two url() values to CSS custom properties and let
 * `image-set()` pick — see the `@supports` block in styles.css.
 */
export function backgroundUrls(src: string, oneXWidth: number) {
	return {
		oneX: `url("${stepFile(src, oneXWidth)}")`,
		twoX: `url("${src}")`,
	};
}
