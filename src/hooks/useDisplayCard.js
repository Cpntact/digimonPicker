import { create } from 'zustand';

const useDisplayCard = create((set) => ({
    isOpen: false,
    myimage: "",
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    setImage: (image) => set({myimage: image})

}));

export default useDisplayCard