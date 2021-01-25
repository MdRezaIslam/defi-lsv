import {useCallback} from 'react'

import useLfi from './useLfi'
import {useWallet} from 'use-wallet'

import {enter, getXLfiStakingContract} from '../lfi/utils'

const useEnter = () => {
  const {account} = useWallet()
  const lfi = useLfi()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXLfiStakingContract(lfi),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, lfi],
  )

  return {onEnter: handle}
}

export default useEnter
