// import { createContext, useContext,  useState, ReactNode } from "react"

// interface CountContextProps {
//   count: number
//   increment: () => void
//   decrement: () => void
// }

// export const CountContext = createContext<CountContextProps | undefined>(undefined)

// export const CountProvider = ({ children }: { children: ReactNode}) => {

//   const [count, setCount] = useState<number>(0)

//   const increment = () => setCount((count ) =>count + 1)
//   const decrement = () => setCount((count) => count > 0 ? count - 1 : 0)

//   return (
//     <CountContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CountContext.Provider>
//   )
// }



// export const useCount = () => {
//   const context = useContext(CountContext)

//   if (!context) {
//     throw new Error("useCount must be within a Count Provider")
//   }

//   return context
// }
// context/CountContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextProps => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
