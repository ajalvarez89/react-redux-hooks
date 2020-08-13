import { actionsTypes } from '../constans/counter'

const actions = {
  increment: () => ({
    type: actionsTypes.COUNTER_INCREMENT
  }),

  decrement: () => ({
    type: actionsTypes.COUNTER_DECREMENT
  })
}

export { actions }