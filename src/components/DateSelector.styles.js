import {css, merge, select as $} from 'glamor'
import { colors } from '@resmio/rollico/dist'

const _containerBase = css({
  display: 'flex',
  justifyContent: 'space-between'
})

const _margins = $(
  '& select:first-of-type + select',
  {
    marginRight: '.3em',
    marginLeft: '.3em'
  }
)

export const container = merge(_containerBase, _margins)

export const error = css({
  fontSize: '0.9em',
  color: colors.amaranth
})
