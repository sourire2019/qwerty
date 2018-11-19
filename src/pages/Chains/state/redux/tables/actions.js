
import types from './types'


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


export default {
  getChannels,
  getChannel,
  getChannelList
}
