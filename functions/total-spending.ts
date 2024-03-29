import {ParsedEntry} from '../types/base'
import {money} from "../utils"
import chalk from "chalk"

interface Totals {
  income: number
  spending: number
}

export function TotalSpending(entries: ParsedEntry[]) {
  const totals = entries
    .reduce((total: Totals, entry: ParsedEntry): Totals => {
      if (entry.difference > 0)
        total.income += entry.difference
      else
        total.spending -= entry.difference

      return total
    }, {income: 0, spending: 0})

  return chalk`Totals:\n\t{red spent in this period: ${money(totals.spending)}}\n\t{green income: ${money(totals.income)}}\n\tDifference: ${money(totals.income - totals.spending)}. `
}
