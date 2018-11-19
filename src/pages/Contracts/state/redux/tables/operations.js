import actions from './actions'
import axios from 'axios'
import moment from 'moment-timezone'
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

mock.onGet('/api/contract').reply(200, {
  "contract": [
    {
        "name": "0xf11902ca8bb5df180e0843a349f76be2f6c9f06e",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0x8a657c1e5e69a437ab7acabee54937f0a031225719a0bfab6ac0371c13189c18",
        "contract_code": null
    },
    {
        "name": "0x25b88fa14edee9a87a396432919f07d80965c732",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0x3298359ad17b4bb1ff2856ea75228455774a0a5c8e19d4c4bee07a2f81f5600a",
        "contract_code": null
    },
    {
        "name": "0x3d53ec23c0e58de07f5042d9b5a3fdeb4b33f7f3",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0x588972b57b48d5fd1f41be78c617f0e5116c21f8c4c2a7ca8277db6bd4ff04b9",
        "contract_code": null
    },
    {
        "name": "0x34824636703264c992f6955e90652f67607a930d",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0xd633747bdacaf8399197c2a0133ae87a821bb534c9c15780b1cc04e31d58e561",
        "contract_code": null
    },
    {
        "name": "0x05938a839301c9d6f3cb955acfd59cea29a955b3",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0xd0fa162d1db66f88df4393dd65c9c87958f67ae4619640c387290d515149c799",
        "contract_code": null
    },
    {
        "name": "0x9098d3ea16e71b9030b814fba0101af51e10c145",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0xe84a71c016f9015b40d2f17a248d4503e724ac791c01abc110dc66f3bce20a00",
        "contract_code": null
    },
    {
        "name": "0x0863a10c6873842667d4907f58a2c8518dc1c807",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0xa96945650ec4e3de4382613afeefdfc8790ad6bd85e91471a4cbfe2256dbd6b5",
        "contract_code": null
    },
    {
        "name": "0x7f027ee33d1642fdd4aebe09f8049ee65f021d2a",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0x746078dd03e33350ca20baa83e23f0f2d00f2168f2efff717e1073f9b6364880",
        "contract_code": null
    },
    {
        "name": "0x2ea7588addaaa29b95eec58102c9abab77fbca9e",
        "balance": "0",
        "txcount": 1,
        "creator": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "creator_hash": "0xcff76ab48d241860445fa0df8d2bb3de8d43a43db064ab1af4ea781dfb2d095f",
        "contract_code": null
    }
  ]
});

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

mock.onGet('/api/status').reply(200,{

    "contractCount": "49",
    "txCount": "4247",
    "latestBlock": "99",
    "nodeCount": "10",
    "channelCount": "100"
  
})





const contractList = (channel) => (dispatch) => {
  return axios.get(`/api/contract`)
    .then(resp => {
      dispatch(actions.getContractList(resp.data))
    }).catch(error => {
      console.error(error)
    })
}

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

const dashStats = (channel) => dispatch => {
  return axios.get('/api/status')
    .then(resp => {
      dispatch(actions.getDashStats(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}

export default {
  contractList,
  channels,
  dashStats,
  channel,
  channelList,
}