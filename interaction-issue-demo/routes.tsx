import React from "react"

// Eagerly loads page on server and code-splits on client (similar to loadable of webpack)
const crossEnvCodeSplit = async (importFn: () => any) => {
  if (import.meta.env.SSR) {
    return importFn().then((mod: any) => mod.default)
  } else {
    return React.lazy(importFn)
  }
}

const Index = await crossEnvCodeSplit(() => import('./src/pages/Index'));

export const routes = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/about',
    element: <Index />
  },
  // {
  //   path: '/about',
  //   element: <About />
  // }
]