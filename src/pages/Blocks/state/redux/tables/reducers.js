/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import { combineReducers } from 'redux'
import types from './types'

const initialState = {}

const blockListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BLOCK_LIST: {
      return ({
        rows: action.payload.rows,
        loaded: true,
        errors: action.error
      })
    }
    default: {
      return state
    }
  }
}

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

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TRANSACTION: {
      return ({
        transaction: action.payload.row,
        loaded: true,
        errors: action.error
      })
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


const reducer = combineReducers({
  blockList: blockListReducer,
  channels: channelsReducer,
  transaction: transactionReducer,
  channel: channelReducer,
  channelList: channelListReducer,
  dashStats: dashStatsReducer
})

export default reducer
