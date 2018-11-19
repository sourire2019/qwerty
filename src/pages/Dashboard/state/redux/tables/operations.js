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


mock.onGet('/api/blocksByHour/1').reply(200, {
  "rows": [
    {
        "datetime": "2018-11-04T03:00:00.000Z",
        "count": "20"
    },
    {
        "datetime": "2018-11-04T04:00:00.000Z",
        "count": "10"
    },
    {
        "datetime": "2018-11-04T05:00:00.000Z",
        "count": "40"
    },
    {
        "datetime": "2018-11-04T06:00:00.000Z",
        "count": "50"
    },
    {
        "datetime": "2018-11-04T07:00:00.000Z",
        "count": "900"
    },
    {
        "datetime": "2018-11-04T08:00:00.000Z",
        "count": "20"
    }
  ]
});


mock.onGet('/api/blocksByMinute/1').reply(200,{
  "rows": [
    {
        "datetime": "2018-11-05T02:25:00.000Z",
        "count": "100"
    },
    {
        "datetime": "2018-11-05T02:26:00.000Z",
        "count": "0"
    },
    {
        "datetime": "2018-11-05T02:27:00.000Z",
        "count": "80"
    },
    {
        "datetime": "2018-11-05T02:28:00.000Z",
        "count": "0"
    },
    {
        "datetime": "2018-11-05T02:29:00.000Z",
        "count": "0"
    },
    {
        "datetime": "2018-11-05T02:30:00.000Z",
        "count": "0"
    }
  ]
})


mock.onGet('/api/curChannel').reply(200,{
  "currentChannel": "justitia-chan1"
})

mock.onGet('/api/channels').reply(200,{
  "channels": [
    "justitia-chan1"
  ]
})

mock.onGet('/api/status').reply(200,{

    "contractCount": "89",
    "txCount": "4247",
    "latestBlock": "997",
    "nodeCount": "1",
    "channelCount": "1"
  
})


mock.onGet('/api/txByHour/1').reply(200,{
  "rows": [
    {
        "datetime": "2018-11-04T03:00:00.000Z",
        "count": "10"
    },
    {
        "datetime": "2018-11-04T04:00:00.000Z",
        "count": "110"
    },
    {
        "datetime": "2018-11-04T05:00:00.000Z",
        "count": "40"
    },
    {
        "datetime": "2018-11-04T06:00:00.000Z",
        "count": "7"
    },
    {
        "datetime": "2018-11-04T07:00:00.000Z",
        "count": "20"
    },
    {
        "datetime": "2018-11-04T08:00:00.000Z",
        "count": "59"
    },
    {
        "datetime": "2018-11-04T09:00:00.000Z",
        "count": "60"
    }
  ]
})

mock.onGet('/api/txByMinute/1').reply(200,{
  "rows": [
    {
        "datetime": "2018-11-05T02:29:00.000Z",
        "count": "10"
    },
    {
        "datetime": "2018-11-05T02:30:00.000Z",
        "count": "20"
    },
    {
        "datetime": "2018-11-05T02:31:00.000Z",
        "count": "30"
    },
    {
        "datetime": "2018-11-05T02:32:00.000Z",
        "count": "40"
    },
    {
        "datetime": "2018-11-05T02:33:00.000Z",
        "count": "50"
    },
    {
        "datetime": "2018-11-05T02:34:00.000Z",
        "count": "60"
    },
    {
        "datetime": "2018-11-05T02:35:00.000Z",
        "count": "70"
    }
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


const blockPerHour = channel => dispatch => {
  return axios.get(`/api/blocksByHour/1`)
    .then(resp => {
      dispatch(actions.getBlockPerHour(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}

const blockPerMin = channel => dispatch => {
  return axios.get(`/api/blocksByMinute/1`)
    .then(resp => {
      dispatch(actions.getBlockPerMin(resp.data))
    })
    .catch(error => {
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

const dashStats = () => dispatch => {
  return axios.get('/api/status')
    .then(resp => {
      dispatch(actions.getDashStats(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}

const transactionPerHour = channel => dispatch => {
  return axios.get(`/api/txByHour/1`)
    .then(resp => {
      dispatch(actions.getTransactionPerHour(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}

const transactionPerMin = channel => dispatch => {
  return axios.get(`/api/txByMinute/1`)
    .then(resp => {
      dispatch(actions.getTransactionPerMin(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}
export default {
  channels,
  blockPerHour,
  blockPerMin,
  transactionPerHour,
  transactionPerMin,
  dashStats,
  channel,
  channelList
}