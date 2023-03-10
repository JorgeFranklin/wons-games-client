import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import Heading from 'components/Heading'

import { Info } from '@styled-icons/material-outlined/Info'

import * as S from './styles'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentForm from 'components/PaymentForm'

export type CartTemplateProps = {
  session: any
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`, {
  locale: 'en'
})

const Cart = ({
  session,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />
          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>

        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>

        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle}
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Cart
