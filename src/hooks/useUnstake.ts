import { useCallback } from 'react'

import useLfi from './useLfi'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../lfi/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const lfi = useLfi()
  const masterChefContract = getMasterChefContract(lfi)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, lfi],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
