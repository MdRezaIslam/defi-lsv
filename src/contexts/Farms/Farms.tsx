import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useLfi from '../../hooks/useLfi'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../lfi/utils'
import { getFarms } from '../../lfi/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const lfi = useLfi()
  const { account } = useWallet()

  const farms = getFarms(lfi)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
