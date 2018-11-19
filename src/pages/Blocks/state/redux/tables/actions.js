
import types from './types'

const getBlockList = (blockList) => ({
  type: types.BLOCK_LIST,
  payload: blockList
})


const getChannels = (channels) => ({
  type: types.CHANNELS,
  payload: channels
})

const getTransaction = (transaction) => ({
  type: types.TRANSACTION,
  payload: transaction
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

export default {
  getBlockList,
  getChannels,
  getTransaction,
  getChannel,
  getChannelList,
  getDashStats
}
