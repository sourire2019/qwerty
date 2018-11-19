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


const reducer = combineReducers({
  channels: channelsReducer,
  channel: channelReducer,
  channelList: channelListReducer
})

export default reducer
