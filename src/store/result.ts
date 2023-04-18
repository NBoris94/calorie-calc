import { create } from 'zustand'

type State = {
    normal: string
    day: string
}

type Actions = {
    setResult: (normal1: string, day1: string) => void
}

const useResultStore = create<State & Actions>((set) => ({
    normal: '0',
    day: '0',
    setResult: (normal1, day1) => set((state) => ({
        normal: normal1,
        day: day1
    }))
}))

export default useResultStore