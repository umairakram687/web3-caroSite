import { http, createConfig } from '@wagmi/core'
import { polygon, sepolia } from '@wagmi/core/chains'

export const config = createConfig({
    chains: [polygon, sepolia],
    transports: {
        [polygon.id]: http(),
        [sepolia.id]: http(),
    },
})