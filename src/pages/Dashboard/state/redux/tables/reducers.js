import { combineReducers } from 'redux'
import types from './types'

const initialState = {}

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANNELS: {
      return ({
        rows: action.payload.channels,
        loaded: true,
        errors: action.error
      })
    }
    default: {
      return state
    }
  }
}

const blockPerHourReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BLOCK_CHART_HOUR: {
      return {
        rows: action.payload.blockPerHour.rows,
        loaded: true,
        errors: action.errors
      }
    }
    default: {
      return state
    }
  }
}

const blockPerMinReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BLOCK_CHART_MIN: {
      return {
        rows: action.payload.blockPerMin.rows,
        loaded: true,
        errors: action.errors
      }
    }
    default: {
      return state
    }
  }
}

const channelListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANNEL_LIST: {
      return {
        list: action.payload.channels,
        loaded: true,
        errors: action.errors
      }
    }
    default: {
      return state
    }
  }
}

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANNEL: {
      return action.payload.channel
    }
    case types.CHANGE_CHANNEL: {
      return action.payload.channel
    }
    default: {
      return state
    }
  }
}

const dashStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DASHBOARD_STATS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const transactionPerHourReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TRANSACTION_CHART_HOUR: {
      return {
        rows: action.payload.transactionPerHour.rows,
        loaded: true,
        errors: action.errors
      }
    }
    default: {
      return state
    }
  }
}

const transactionPerMinReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TRANSACTION_CHART_MIN: {
      return {
        rows: action.payload.transactionPerMin.rows,
        loaded: true,
        errors: action.errors
      }
    }
    default: {
      return state
    }
  }
}

const reducer = combineReducers({
  channels: channelsReducer,
  blockPerHour: blockPerHourReducer,
  blockPerMin: blockPerMinReducer,
  channel: channelReducer,
  channelList: channelListReducer,
  dashStats: dashStatsReducer,
  transactionPerHour: transactionPerHourReducer,
  transactionPerMin: transactionPerMinReducer
})

export default reducer
