import {useCallback} from 'react'

import useLfi from './useLfi'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getLfiContract,
  getXLfiStakingContract
} from '../lfi/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const lfi = useLfi()
  const lpContract = getLfiContract(lfi)
  const contract = getXLfiStakingContract(lfi)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
