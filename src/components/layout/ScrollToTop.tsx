import { useEffect } from "react";

export function ScrollToTop({ path }: { path: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [path]);

  return null;
}
