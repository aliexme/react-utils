import { type PropsWithChildren, type FC, type ReactElement, Fragment, cloneElement } from 'react'

export type MaybeProps = PropsWithChildren<{
  cond: boolean
  thenComponent: ReactElement
  elseComponent?: ReactElement
}>

export const Maybe: FC<MaybeProps> = (props) => {
  const { cond, thenComponent, elseComponent = <Fragment />, children } = props

  if (cond) {
    return cloneElement(thenComponent, { children })
  }

  return cloneElement(elseComponent, { children })
}
