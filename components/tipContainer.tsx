import { Tip } from '../models/tip'
import { Disclosure, Transition } from '@headlessui/react'
import CheveronDownIcon from '../assets/icons/chevron-down.svg'
import EstateIcon from '../assets/icons/estate.svg'
import MedicalIcon from '../assets/icons/medical.svg'
import RetirementIcon from '../assets/icons/retirement.svg'
import SavingsIcon from '../assets/icons/savings.svg'
import { TipType } from '../models/tip-type'

type Props = {
  className?: string,
  tip: Tip
}


const mapTipToIcon: Record<TipType, React.FunctionComponent<React.SVGAttributes<SVGElement>>> = {
  [TipType.Estate]: EstateIcon,
  [TipType.Medical]: MedicalIcon,
  [TipType.Retirement]: RetirementIcon,
  [TipType.Savings]: SavingsIcon
}

const TipContainer: React.FC<Props> = (props) => {
  const { className, tip } = props

  const Icon = mapTipToIcon[tip.type]
  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="w-full max-w-xl p-6 mx-auto bg-gray-900 rounded-3xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full px-4 py-2 text-base font-semibold leading-5 text-white text-left">
              <Icon className="mr-6" />
              <span>{tip.title}</span>
              <CheveronDownIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-purple-500`}
              />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm leading-6 tracking-wide text-white-light text-left">
                {tip.description}
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default TipContainer
