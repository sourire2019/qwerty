
import types from './types'

const getChannels = (channels) => ({
  type: types.CHANNELS,
  payload: channels
})

const getBlockPerHour = (blockPerHour) => ({
  type: types.BLOCK_CHART_HOUR,
  payload: { blockPerHour }
})

const getBlockPerMin = (blockPerMin) => ({
  type: types.BLOCK_CHART_MIN,
  payload: { blockPerMin }
})

const getChannel = (channel) => ({
  type: types.CHANNEL,
  payload: { channel }
})

const getChannelList = (channelList) => ({
  type: types.CHANNEL_LIST,
  payload: channelList
})

const getDashStats = (dashStats) => ({
  type: types.DASHBOARD_STATS,
  payload: dashStats
})


const getTransactionPerHour = (transactionPerHour) => ({
  type: types.TRANSACTION_CHART_HOUR,
  payload: { transactionPerHour }
})

const getTransactionPerMin = (transactionPerMin) => ({
  type: types.TRANSACTION_CHART_MIN,
  payload: { transactionPerMin }
})


export default {
  getChannels,
  getBlockPerHour,
  getBlockPerMin,
  getChannel,
  getChannelList,
  getDashStats,
  getTransactionPerHour,
  getTransactionPerMin
}
