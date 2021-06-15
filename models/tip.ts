import { TipType } from './tip-type'

export interface Tip {
  id: number,
  title: string
  description: string
  type: TipType
}