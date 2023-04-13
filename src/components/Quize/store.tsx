import { create } from 'zustand'

interface InitialType {
  type: 'sewol' | 'safty'
  question: number | null
  answerCount: number
  changeType: () => void
  reset: () => void
  setQuestion: (question: number) => void
  setAnswerCount: (count: number) => void
}

const useQuize = create<InitialType>((set) => ({
  type: 'sewol',
  question: null,
  answerCount: 0,

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

  setAnswerCount: (count: number) =>
    set((state) => ({ ...state, answerCount: count })),
}))

export default useQuize
