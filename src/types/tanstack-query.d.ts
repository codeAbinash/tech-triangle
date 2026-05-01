import '@tanstack/react-query'

interface QueryMeta extends Record<string, unknown> {
  message?: {
    error?: string
    success?: string
  }
  invalidates?: (string | number | undefined)[]
}

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: QueryMeta
    mutationMeta: QueryMeta
  }
}
