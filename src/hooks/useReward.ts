import { useCallback } from 'react'

import useLfi from './useLfi'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../lfi/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const lfi = useLfi()
  const masterChefContract = getMasterChefContract(lfi)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, lfi])

  return { onReward: handleReward }
}

export default useReward
