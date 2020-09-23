const { ChainId, Token, Fetcher, Route } =  require('@uniswap/sdk');


function uniswapV2Factory (token1, token2) {
    return {
         getPrice:  async () => {
            const t1 = await Fetcher.fetchTokenData(ChainId.MAINNET, token1.address);
            const t2 = await Fetcher.fetchTokenData(ChainId.MAINNET, token2.address);
            
            const pair = await Fetcher.fetchPairData(t1, t2)
            const route = new Route([pair], t2)
            const mid = route.midPrice.toSignificant(6);
            return {
                mid
            }
        }
    }
}

module.exports = {uniswapV2Factory};

