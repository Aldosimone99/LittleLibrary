
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/results/*"
  },
  {
    "renderMode": 0,
    "route": "/book/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 773, hash: '0834e21961e28b5678b4201022b5a7b07076c4ae7f90c81c9ffc8cc97a460d2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '8f2e46d5922a1f282dcde85753a2d71aa91596959d3e5ad3a6e38f877626b4a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WQGKDTP5.css': {size: 151, hash: 'atAxPXehOPk', text: () => import('./assets-chunks/styles-WQGKDTP5_css.mjs').then(m => m.default)}
  },
};
