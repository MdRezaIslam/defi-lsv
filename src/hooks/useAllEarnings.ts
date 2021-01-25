import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../lfi/utils'
import useLfi from './useLfi'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const lfi = useLfi()
  const farms = getFarms(lfi)
  const masterChefContract = getMasterChefContract(lfi)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, lfi])

  useEffect(() => {
    if (account && masterChefContract && lfi) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, lfi])

  return balances
}

export default useAllEarnings
