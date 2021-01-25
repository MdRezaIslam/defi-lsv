import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Lfi } from '../../lfi'

export interface LfiContext {
  lfi?: typeof Lfi
}

export const Context = createContext<LfiContext>({
  lfi: undefined,
})

declare global {
  interface Window {
    lfisauce: any
  }
}

const LfiProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [lfi, setLfi] = useState<any>()

  // @ts-ignore
  window.lfi = lfi
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const lfiLib = new Lfi(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setLfi(lfiLib)
      window.lfisauce = lfiLib
    }
  }, [ethereum])

  return <Context.Provider value={{ lfi }}>{children}</Context.Provider>
}

export default LfiProvider
