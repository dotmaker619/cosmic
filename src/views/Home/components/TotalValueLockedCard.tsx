import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  background: transparent;
  align-items: center;
  display: flex;
  flex: 1;
  div {
    width: 100%;
    font-size: 24px !important;
    line-height: none !important;
  }
  .left {
    float: left;
    width: 50%;
  }
  .right {
    float: right;
    width: 50%;
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
      padding-left: 0px;
    }
  }
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <div className="left">
          <Heading size="lg">
            {TranslateString(999, 'Total Value Locked (TVL)')}
          </Heading>
        </div>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <div className="right">
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          </div>
          {/* </Heading> */}
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
