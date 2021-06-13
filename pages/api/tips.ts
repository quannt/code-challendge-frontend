import { Tip } from '../../models/tip'
import { TipType } from '../../models/tip-type'

export default function tipsAPI(req, res) {
  const data: Tip[] = [
    {
      title: 'Amazing savings rate! Keep it up 🔥',
      description: 'A good savings target is 15–20% of gross income.',
      type: TipType.Savings,
    },
    {
      title: 'Invest enough in employer\'s retirement plan to get the match',
      description: 'A match made by your employer is free money. This is a freebie you don\'t want to miss.',
      type: TipType.Retirement,
    },
    {
      title: 'Review eligibility of contributing to a health savings account (HSA)',
      description: 'HSAs let you set aside money on a pre-tax basis to pay for qualified medical expenses. By using untaxed dollars in a Health Savings Account (HSA) to pay for deductibles, copayments, coinsurance, and some other expenses, you may be able to lower your overall health care costs.',
      type: TipType.Medical,
    },
    {
      title: 'Consider obtaining a will and/or trust, healthcare power of attorney, and durable power of attorney',
      description: 'In the event of your death or incapacity, you want your family to be able to carry out your wishes as easily as possible. Proper estate documents ensure your family can carry out your wishes in a way you desire.',
      type: TipType.Estate,
    },
    {
      title: 'Consider a Roth IRA contribution for each spouse',
      description: 'A Roth IRA is an individual retirement account (IRA) that allows qualified withdrawals on a tax-free basis provided certain conditions are satisfied. Roth IRAs are funded with after-tax dollars; the contributions are not tax-deductible. But once you start withdrawing funds, the money is tax-free. You may fund a Roth IRA on behalf of your married partner who earns little or no income. Spousal Roth IRA contributions are subject to the same rules and limits as regular Roth IRA contributions.',
      type: TipType.Retirement,
    }
  ]

  res.status(200).json(data)
}
