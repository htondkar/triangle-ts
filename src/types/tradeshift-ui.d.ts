declare module '@tradeshift/tradeshift-ui'

export interface TradehshiftUi {
  ui: {
    ready: (cb: CallbackFn) => void
  }
}

type CallbackFn = () => void
