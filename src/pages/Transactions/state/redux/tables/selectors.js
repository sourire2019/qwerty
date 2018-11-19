
export const channelsSelector = (state) => (state.tables.channels.rows)
export const transactionSelector = (state) => (state.tables.transaction.transaction)
export const transactionListSelector = (state) => (state.tables.transactionList.rows)
export const channelListSelector = (state) => (state.tables.channelList.list)
export const currentChannelSelector = (state) => (state.tables.channel.currentChannel)
export const dashStatsSelector = (state) => (state.tables.dashStats)
