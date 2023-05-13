import { type PropsWithChildren, type FC, type ReactElement, Fragment, cloneElement } from 'react'

export type MaybeProps = PropsWithChildren<{
  cond: boolean
  component: ReactElement
  fallback?: ReactElement
}>

export const Maybe: FC<MaybeProps> = (props) => {
  const { cond, component, fallback = <Fragment />, children } = props

  if (cond) {
    return cloneElement(component, { children })
  }

  return cloneElement(fallback, { children })
}
