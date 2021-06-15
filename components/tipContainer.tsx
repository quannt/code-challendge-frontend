import { Tip } from '../models/tip'


export default function TipContainer({ tip }: { tip: Tip }) {
  return <div>
    <div>{tip.title}</div>
    <div>{tip.description}</div>
    <div>{tip.type}</div>
  </div>
}