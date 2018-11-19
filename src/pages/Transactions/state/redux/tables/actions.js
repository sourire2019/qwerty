
import types from './types'

const getChannels = (channels) => ({
  type: types.CHANNELS,
  payload: channels
})

const getTransaction = (transaction) => ({
  type: types.TRANSACTION,
  payload: transaction
})

const getTransactionList = (transactionList) => ({
  type: types.TRANSACTION_LIST,
  payload: transactionList
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
  getChannels,
  getTransaction,
  getTransactionList,
  getChannel,
  getChannelList,
  getDashStats
}
