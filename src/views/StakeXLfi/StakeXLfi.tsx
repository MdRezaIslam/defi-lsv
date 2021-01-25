import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useLfi from '../../hooks/useLfi'
import {getContract} from '../../utils/erc20'
import UnstakeXLfi from './components/UnstakeXLfi'
import StakeLfi from "./components/StakeLfi";

import {contractAddresses} from '../../lfi/lib/constants'
import {getXLfiSupply} from "../../lfi/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";

const StakeXLfi: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xLfi[3],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const lfi = useLfi()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXLfiSupply(lfi)
      setTotalSupply(supply)
    }
    if (lfi) {
      fetchTotalSupply()
    }
  }, [lfi, setTotalSupply])



  const lpContract = useMemo(() => {
    debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXLfi
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeLfi
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xLfi held relative the weight of the staking. xLfi can be minted
              by staking Lfi. To redeem Lfi staked plus swap fees convert xLfi
              back to Lfi. {totalSupply ? `There are currently ${getBalanceNumber(totalSupply)} xLFI in existence.` : '' }
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXLfi
