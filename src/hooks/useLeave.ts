import {useCallback} from 'react'

import useLfi from './useLfi'
import {useWallet} from 'use-wallet'

import {leave, getXLfiStakingContract} from '../lfi/utils'

const useLeave = () => {
  const {account} = useWallet()
  const lfi = useLfi()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXLfiStakingContract(lfi),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, lfi],
  )

  return {onLeave: handle}
}

export default useLeave
