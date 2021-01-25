import { useCallback } from 'react'

import useLfi from './useLfi'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../lfi/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const lfi = useLfi()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(lfi),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, lfi],
  )

  return { onStake: handleStake }
}

export default useStake
