import { create } from 'zustand'

interface InitialType {
  type: 'sewol' | 'safty'
  question: number | null
  changeType: () => void
  reset: () => void
  setQuestion: (question: number) => void
}

const useQuize = create<InitialType>((set) => ({
  type: 'sewol',
  question: null,

  changeType: () =>
    set((state) => ({
      ...state,
      type: state.type === 'sewol' ? 'safty' : 'sewol',
    })),

  setQuestion: (question: number) =>
    set((state) => ({
      ...state,
      question,
    })),

  reset: () =>
    set(() => ({
      type: 'sewol',
      question: null,
    })),
}))

export default useQuize
