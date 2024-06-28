import { create } from "zustand";



const AppStore = create((set) => ({

    calculate:true,
    setCalculate:(calculate) => set({calculate})
  
}));

export default AppStore;

   