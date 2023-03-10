import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const FreeGames = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding-top: ${theme.spacings.xsmall};
    color: ${theme.colors.red};

    span {
      margin-left: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`
