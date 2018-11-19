import actions from './actions'
import axios from 'axios'
import moment from 'moment-timezone'
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

mock.onGet('/api/channels/info').reply(200, {
    "channels": [
        {
            "id": 65,
            "channelname": "justitia-chan1",
            "blocks": 40,
            "genesis_block_hash": "justitia-chan1",
            "transactions": 0,
            "createdat": "2018-10-17T06:10:09.000Z",
            "channel_hash": "justitia-chan1"
        }
    ]
});

mock.onGet('/api/curChannel').reply(200,{
  "currentChannel": "justitia-chan1"
})

mock.onGet('/api/channels').reply(200,{
  "channels": [
    "justitia-chan1"
  ]
})

// table channel
const channels = () => (dispatch) => {
  return axios.get('/api/channels/info')
    .then(resp => {
      if (resp['channels']) {
        resp['channels'].forEach(element => {
          element.createdat = moment(element.createdat)
            .tz(moment.tz.guess())
            .format('M-D-YYYY h:mm A zz')
        })
      }

      dispatch(actions.getChannels(resp.data))
    }).catch(error => {
      console.error(error)
    })
}

const channel = () => dispatch => {
  return axios.get('/api/curChannel')
    .then(resp => {
      dispatch(actions.getChannel(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}

const channelList = () => (dispatch) => {
  return axios.get('/api/channels')
    .then(resp => {
      dispatch(actions.getChannelList(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}


export default {
  channels,
  channel,
  channelList
}