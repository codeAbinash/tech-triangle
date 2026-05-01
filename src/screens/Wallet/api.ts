import { client } from '@utils/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { Expense, ExpenseInput, Source, SourceInput, Summary, Tag, TagInput } from './types'

// Server always returns `{ success, message, data, error }`. Unwrap or throw.
async function unwrap<T>(res: Response): Promise<T> {
  const j = (await res.json()) as { success?: boolean; status?: boolean; message?: string; data?: T }
  if (!(j.success ?? j.status)) throw new Error(j.message || 'Request failed')
  return j.data as T
}

const ROOT = ['wallet'] as const
const useInvalidate = () => {
  const qc = useQueryClient()
  return () => qc.invalidateQueries({ queryKey: ROOT })
}

// Queries
export const useSummary = () =>
  useQuery({
    queryKey: [...ROOT, 'summary'],
    queryFn: async () => unwrap<Summary>(await client.api.wallet.summary.$get()),
  })

export const useSources = () =>
  useQuery({
    queryKey: [...ROOT, 'sources'],
    queryFn: async () => unwrap<Source[]>(await client.api.wallet.sources.$get()),
  })

export const useTags = () =>
  useQuery({ queryKey: [...ROOT, 'tags'], queryFn: async () => unwrap<Tag[]>(await client.api.wallet.tags.$get()) })

export const useExpenses = () =>
  useQuery({
    queryKey: [...ROOT, 'expenses'],
    queryFn: async () => unwrap<Expense[]>(await client.api.wallet.expenses.$get()),
  })

// Mutations (all invalidate the whole wallet tree)
export function useSaveSource() {
  const invalidate = useInvalidate()
  return useMutation({
    mutationFn: async ({ id, data }: { id?: string; data: SourceInput }) =>
      unwrap<Source>(
        id
          ? await client.api.wallet.sources[':id'].$put({ param: { id }, json: data })
          : await client.api.wallet.sources.$post({ json: data }),
      ),
    onSuccess: invalidate,
  })
}

export function useDeleteSource() {
  const invalidate = useInvalidate()
  return useMutation({
    mutationFn: async (id: string) =>
      unwrap<{ id: string }>(await client.api.wallet.sources[':id'].$delete({ param: { id } })),
    onSuccess: invalidate,
  })
}

export function useSaveTag() {
  const invalidate = useInvalidate()
  return useMutation({
    mutationFn: async ({ id, data }: { id?: string; data: TagInput }) =>
      unwrap<Tag>(
        id
          ? await client.api.wallet.tags[':id'].$put({ param: { id }, json: data })
          : await client.api.wallet.tags.$post({ json: data }),
      ),
    onSuccess: invalidate,
  })
}

export function useDeleteTag() {
  const invalidate = useInvalidate()
  return useMutation({
    mutationFn: async (id: string) =>
      unwrap<{ id: string }>(await client.api.wallet.tags[':id'].$delete({ param: { id } })),
    onSuccess: invalidate,
  })
}

export function useSaveExpense() {
  const invalidate = useInvalidate()
  return useMutation({
    mutationFn: async ({ id, data }: { id?: string; data: ExpenseInput }) =>
      unwrap<Expense>(
        id
          ? await client.api.wallet.expenses[':id'].$put({ param: { id }, json: data })
          : await client.api.wallet.expenses.$post({ json: data }),
      ),
    onSuccess: invalidate,
  })
}

export function useDeleteExpense() {
  const invalidate = useInvalidate()
  return useMutation({
    mutationFn: async (id: string) =>
      unwrap<{ id: string }>(await client.api.wallet.expenses[':id'].$delete({ param: { id } })),
    onSuccess: invalidate,
  })
}
