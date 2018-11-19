
export const channelsSelector = (state) => (state.tables.channels.rows)
export const blockPerHourSelector = (state) => (state.tables.blockPerHour)
export const blockPerMinSelector = (state) => (state.tables.blockPerMin)
export const channelListSelector = (state) => (state.tables.channelList.list)
export const currentChannelSelector = (state) => (state.tables.channel.currentChannel)
export const dashStatsSelector = (state) => (state.tables.dashStats)
export const transactionPerHourSelector = (state) => (state.tables.transactionPerHour)
export const transactionPerMinSelector = (state) => (state.tables.transactionPerMin)
