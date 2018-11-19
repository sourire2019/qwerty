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

mock.onGet('/api/transaction').reply(200, {
  "row": {
    "txhash": "0x8e1adeaad8927c1e5212c041abec70af92cf4a711d21dd77cc0772210ea3074a",
    "validation_code": null,
    "payload_proposal_hash": null,
    "creator_msp_id": null,
    "endorser_msp_id": null,
    "contractname": "",
    "type": "0",
    "createdt": "2018-10-16T22:59:23.000Z",
    "read_set": {},
    "write_set": {},
    "channelname": "justitia-chan1"
  }
});

mock.onGet('/api/txList').reply(200, {
  "rows": [
    {
        "creator_msp_id": null,
        "txhash": "0x2f29089d8c1748adc09b2962e75348e5b8056b1cbdd0bd02fdeb5e4170aad931",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x87f029b41ea019dfbabf17bb579870c3e87faf8a",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0x412747a1435b433c28ce0548943c163734a2c53637b5fba29e84223d31993630",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x01c91a1b352a2903bc8378e5f645c9bc8685029e",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0xda74d3118805afe0e629e1425b62c41a22236d4a80bbeacb1da04e46c6e53bc8",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x1f851d4d373e3e4d93bc1f26718b3ea0e5d3b1f1",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0xdd4e2bccaed9522682a965a11f2f366ae38006c86a73f2cbe33143039b9fc41e",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x57924a847e363a49c757792aa2f30f46fa922370",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0xc3971cf9c8be7c2e30ba91481ea66592d55fdb88214d0a43165a4653095cadb3",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x1d1602e497f7a6d13a4e846ea469a1bfa24ecb13",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0x472e22f461a4678c6473b200c7df074c2eb6d0c230bac31d5e2a1f9696592fcd",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x926794f9785ed0ffe92364ee796f2234998f6f20",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0xb5e96154bd58aa978ef7b48a634a96e13e14a99b02754ecb8004fa6c41e414d9",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x3be86cf6b79472aa0ad787ec410e08b877e52feb",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0x3462a47fd4e62bd619fa8a90ee1c9fddc7f95646e15cf839baa485d7b172094e",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x7a445eaf276834d9aaeda583f46d6b505489923e",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0xfc64fe1ca4b9a97b0506ef5cb214069cdf0fc3a0eff3ec741980e651c0feb3e7",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:10.000Z",
        "blockid": 18986,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x8be461ea3c27b698a31515a98b8fa339b4bea51a",
        "channelname": "justitia-chan1"
    },
    {
        "creator_msp_id": null,
        "txhash": "0xcfc066dea7d3827be02c340f907ddb0e654e95342be28a6d2a08e169c18bfc05",
        "type": "0",
        "contractname": "",
        "createdt": "2018-10-16T23:08:06.000Z",
        "blockid": 18984,
        "blocktime": null,
        "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "to": "0x926794f9785ed0ffe92364ee796f2234998f6f20",
        "channelname": "justitia-chan1"
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

    "contractCount": "129",
    "txCount": "4247",
    "latestBlock": "1997",
    "nodeCount": "1",
    "channelCount": "1"
  
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

const transaction = (channel, transactionId) => (dispatch) => {
  return axios.get(`/api/transaction`)
    .then(resp => {
      dispatch(actions.getTransaction(resp.data))
    }).catch(error => {
      console.error(error)
    })
}

const transactionList = (channel) => (dispatch) => {
  return axios.get(`/api/txList`)
    .then(resp => {
      resp.data.rows.forEach(element => {
        element.createdt = moment(element.createdt)
          .tz(moment.tz.guess())
          .format('M-D-YYYY h:mm A zz')
      })

      dispatch(actions.getTransactionList(resp.data))
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

const dashStats = () => dispatch => {
  return axios.get('/api/status')
    .then(resp => {
      dispatch(actions.getDashStats(resp.data))
    })
    .catch(error => {
      console.error(error)
    })
}

export default {
  channels,
  transaction,
  transactionList,
  dashStats,
  channel,
  channelList,
}