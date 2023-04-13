import { create } from 'zustand'

interface InitialType {
  type: 'sewol' | 'safty'
  question: number | null
  changeType: () => void
  setQuestion: (question: number) => void
  setOXQuestion: (choice: boolean) => void
  setSelectQuestion: (choice: number) => void
  setQuestionType: (type: 'select' | 'ox' | null) => void
}

interface OXQuestion extends InitialType {
  questionType: 'ox' | null
  choice: boolean | undefined
}

interface SelectQuestion extends InitialType {
  questionType: 'select' | null
  choice: number | undefined
}

const useQuize = create<OXQuestion | SelectQuestion>((set) => ({
  type: 'sewol',
  questionType: null,
  choice: undefined,
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

  setOXQuestion: (choice: boolean) =>
    set((state) => {
      if (state.questionType !== 'ox') return state
      return {
        ...state,
        choice,
      }
    }),

  setSelectQuestion: (choice: number) =>
    set((state) => {
      if (state.questionType !== 'select') return state
      return {
        ...state,
        choice,
      }
    }),

  setQuestionType: (type: 'select' | 'ox' | null) =>
    set((state) => ({
      ...state,
      questionType: type,
      choice: undefined,
    })),
}))

export default useQuize
