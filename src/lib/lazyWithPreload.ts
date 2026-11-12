import { createElement, lazy, type ComponentType } from 'react';

// Like React.lazy, but the chunk can be fetched ahead of time with `.preload()`.
// Once loaded, the component renders directly (no Suspense fallback), so the
// first client render on a prerendered page doesn't replace the HTML with an
// empty placeholder (which caused the CLS and the LCP delay).
export function lazyWithPreload<P extends object>(factory: () => Promise<{ default: ComponentType<P> }>) {
  let loaded: ComponentType<P> | undefined;
  let pending: Promise<unknown> | undefined;
  const preload = () =>
    (pending ??= factory().then((mod) => {
      loaded = mod.default;
      return mod;
    }));
  const Lazy = lazy(() => preload() as Promise<{ default: ComponentType<P> }>);
  function LazyWithPreload(props: P) {
    return createElement((loaded ?? Lazy) as ComponentType<P>, props);
  }
  return Object.assign(LazyWithPreload, { preload });
}
