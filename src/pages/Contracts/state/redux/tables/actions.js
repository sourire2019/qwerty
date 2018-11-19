
import types from './types'


const getContractList = (contractList) => ({
  type: types.CONTRACT_LIST,
  payload: contractList
})

const getChannels = (channels) => ({
  type: types.CHANNELS,
  payload: channels
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
  getContractList,
  getChannels,
  getChannel,
  getChannelList,
  getDashStats
}
