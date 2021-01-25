import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../lfi/utils'
import useLfi from './useLfi'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const lfi = useLfi()
  const masterChefContract = getMasterChefContract(lfi)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, lfi])

  useEffect(() => {
    if (account && lfi) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, lfi])

  return balance
}

export default useStakedBalance
