import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useClaim } from 'hooks/useClaim'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledCakeStats = styled(Card)`
  background-image: url('/images/egg/2a.png');
  margin-left: auto;
  margin-right: auto;
  max-height: 23.2em;
  align-items: center;
  display: flex;
  flex: 1;
  & > * {
    margin-left: auto;
    margin-right: auto;
  }
`

const Actions = styled.div`
  margin-top: 24px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
`

const ClaimCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()

  const { onReward } = useClaim()

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          Claim COSMIC From Presale
        </Heading>
        <Label>You can claim 10% of your purchased presale tokens everyday for 10 days</Label>
        <Actions>
          {account ? (
            <Button id="harvest-all" disabled={pendingTx} onClick={harvestAllFarms} fullWidth>
              {pendingTx ? 'Claiming COSMIC' : 'Claim your COSMIC'}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledCakeStats>
  )
}

export default ClaimCard
