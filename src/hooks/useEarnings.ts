import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../lfi/utils'
import useLfi from './useLfi'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const lfi = useLfi()
  const masterChefContract = getMasterChefContract(lfi)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, lfi])

  useEffect(() => {
    if (account && masterChefContract && lfi) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, lfi])

  return balance
}

export default useEarnings
