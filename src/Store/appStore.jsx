import { create } from "zustand";

const AppStore = create((set) => ({
  calculate: true,
  setCalculate: (calculate) => set({ calculate }),
  mortgageAmount: "",
  setMortgageAmount: (mortgageAmount) => set({ mortgageAmount }),
  mortgageTerm: "",
  setMortgageTerm: (mortgageTerm) => set({ mortgageTerm }),
  interestRate: "",
  setInterestRate: (interestRate) => set({ interestRate }),
  mortgageType: "repayment",
  setMortgageType: (mortgageType) => set({ mortgageType }),
  monthlyPayment: 0,
  setMonthlyPayment: (monthlyPayment) => set({ monthlyPayment }),
  totalRepayment: 0,
  setTotalRepayment: (totalRepayment) => set({ totalRepayment }),
}));

export default AppStore;
