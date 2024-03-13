import { create } from 'zustand';

const useDisplayScore = create((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useDisplayScore