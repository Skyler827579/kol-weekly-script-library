const START_MONDAY = new Date("2026-05-18T00:00:00+08:00");
const WEEKLY_UPDATE_DAYS = ["周一", "周三", "周五"];

const LIBRARIES = {
  william: {
    name: "William",
    symbols: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "XAUUSD"],
    fallback: {
      BTCUSDT: { price: 102400, change: 1.2, rsi: 56, macd: 120, signal: 80, atr: 2100 },
      ETHUSDT: { price: 3900, change: .8, rsi: 54, macd: 18, signal: 12, atr: 105 },
      SOLUSDT: { price: 172, change: 1.7, rsi: 58, macd: 1.4, signal: 1.1, atr: 6.2 },
      XAUUSD: { price: 3340, change: .42, rsi: 52, macd: 5.5, signal: 4.2, atr: 32 }
    },
    scripts: [
      {
        week: 0,
        date: "周一更新",
        title: "ICT 策略专项：先扫流动性，再等结构确认",
        indicators: "ICT / Liquidity Sweep / Market Structure",
        assets: "BTC + ETH",
        duration: "8 分钟",
        summary: "William 周一专项：用 ICT 的流动性扫单、BOS/CHOCH 和回踩确认，训练用户先等结构再谈 entry。",
        hook: "今天 William 这条要特别更新 ICT 策略：不要看到突破就追，先看前高前低有没有被扫，再看结构有没有真正改变。",
        outline: [
          "0:00-0:45 开场：说明本周 William 先讲 ICT 策略专项，核心是 liquidity、structure、confirmation。",
          "0:45-2:30 Liquidity Sweep：标出前高/前低，解释为什么扫掉止损后才更容易出现真实方向。",
          "2:30-4:50 BOS / CHOCH：扫完以后不急着进，等待结构突破或结构转换。",
          "4:50-6:50 Entry Model：回踩到 fair value gap 或 order block，再用 RSI/MACD 检查动能是否配合。",
          "6:50-8:00 结尾：把 entry、SL、TP 画在图上，提醒群成员没有无效位就没有交易。"
        ],
        talk: [
          "William 可以这样讲：ICT 不是让大家把图画复杂，而是先回答三个问题：市场扫了哪里，结构有没有改变，回踩有没有给我明确无效位。",
          "如果 BTC 刚刚刺破前高，但马上收回并跌破短线结构，这更像 liquidity grab，不是健康突破。这个时候不要追多，要等下一次回踩确认。",
          "RSI 和 MACD 在这里不是主角，它们只负责做最后确认。ICT 给位置，指标看动能，风控决定这笔交易能不能做。"
        ],
        marketTemplate: "如果实时 BTC 扫前高后站稳结构，主讲 bullish BOS 后的回踩入场；如果扫高失败，就改讲 liquidity grab 后如何避免追多。",
        assignment: "让成员提交一张 BTC 或 ETH 4H 图：标出最近一次 liquidity sweep、BOS/CHOCH、entry zone、SL 和 TP。"
      },
      {
        week: 1,
        date: "周三更新",
        title: "EMA 20 + RSI：趋势回踩怎么找 entry",
        indicators: "20 EMA / RSI",
        assets: "BTC + ETH",
        duration: "7 分钟",
        summary: "用一条均线降低入场犹豫，适合 William 群里常问 entry 的成员。",
        hook: "今天只回答一个问题：价格涨上去了，我是不是已经错过？不一定，关键看 20 EMA 回踩。",
        outline: [
          "解释 20 EMA 是短线趋势的动态支撑/压力。",
          "趋势向上时，价格回踩 20 EMA，RSI 保持 45-55 上方，是更健康的等待点。",
          "不要在 RSI 70 以上直接追，等回踩时观察有没有买盘重新进入。",
          "结合 BTC 或 ETH 的 4H 图给出两个场景：延续和跌破。"
        ],
        talk: [
          "如果价格在 20 EMA 上方，说明短线买盘还在。但我们不要一看到上涨就冲进去，要等价格回到均线附近，看 RSI 有没有守住中线。",
          "这套方法对 William 的 VIP 群很实用，因为它把 entry 变成一个流程，而不是感觉。"
        ],
        marketTemplate: "若 BTC/ETH 价格高于近期均价且 RSI 守 50，主讲回踩做多；若跌破，则主讲观望和等待重新站回。",
        assignment: "截图 4H 图，标出最近三次触碰 20 EMA 后的 RSI 变化。"
      },
      {
        week: 2,
        date: "周五更新",
        title: "布林带 + ATR：行情变窄时为什么不要 overtrade",
        indicators: "Bollinger Bands / ATR",
        assets: "BTC + ETH",
        duration: "8 分钟",
        summary: "针对 William 群里 discipline 和 overtrade 问题，讲波动率收缩时如何降低交易频率。",
        hook: "不是每天都适合交易。行情越窄，越容易把手续费和止损交出去。",
        outline: [
          "布林带收窄代表波动压缩，不代表马上大涨或大跌。",
          "ATR 下降时，止盈空间变小，追单性价比下降。",
          "用 BTC 最近波动说明为什么 scalp 机会减少时要减少下单。",
          "给出规则：ATR 低、布林带窄，只做边界反应，不做中间追单。"
        ],
        talk: [
          "很多人以为不交易就是错过机会，其实窄幅行情里乱交易才是最大的成本。",
          "当 ATR 下降，止损不能放太近，止盈又不够远，这时候最重要的是等价格走出区间。"
        ],
        marketTemplate: "若 ATR 偏低，主讲减少交易；若 ATR 扩大，主讲等待突破后回踩确认。",
        assignment: "标出 BTC 4H 布林带最窄的一段，并写下当时是否适合高杠杆。"
      },
      {
        week: 3,
        date: "2026-06-02",
        title: "Fibonacci + MACD：回调不是反转",
        indicators: "Fibonacci / MACD",
        assets: "BTC + ETH",
        duration: "9 分钟",
        summary: "把 ICT/SMC 用户熟悉的结构回调和 MACD 动能结合，避免过早判断趋势结束。",
        hook: "上涨中的回调，不等于趋势结束。我们要看回调到哪里，以及动能有没有真的翻空。",
        outline: [
          "选择一段清晰上涨或下跌，画 0.382、0.5、0.618 回撤。",
          "回撤到关键区间时，不马上进场，等待 MACD 柱体停止恶化。",
          "如果回撤破 0.618 且 MACD 进入零轴下方，趋势风险升高。",
          "用 BTC/ETH 做一遍完整示范。"
        ],
        talk: [
          "Fibonacci 给我们位置，MACD 给我们动能。只有位置，没有动能确认，进场还是太早。",
          "William 可以提醒成员：不要因为价格跌到 0.5 就 all in，要等卖压变弱。"
        ],
        marketTemplate: "根据实时 MACD 正负调整为回调做多或反弹减仓脚本。",
        assignment: "画出最近一段 BTC 波段的 0.5 回撤，并说明 MACD 是否支持进场。"
      }
    ]
  },
  kc: {
    name: "KC",
    symbols: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "XAUUSD"],
    fallback: {
      BTCUSDT: { price: 81000, change: .38, rsi: 53, macd: -15, signal: -2, atr: 738 },
      ETHUSDT: { price: 2307, change: -.95, rsi: 43, macd: -2.6, signal: .1, atr: 26 },
      SOLUSDT: { price: 96, change: 1.68, rsi: 64, macd: -.08, signal: 0, atr: 1.7 },
      XAUUSD: { price: 3340, change: .42, rsi: 52, macd: 5.5, signal: 4.2, atr: 32 }
    },
    scripts: [
      {
        week: 0,
        date: "周一更新",
        title: "20 EMA + RSI：Clean Entry Confirmation",
        indicators: "20 EMA / RSI",
        assets: "BTC + Gold/SOL",
        duration: "7 分钟",
        summary: "KC 群最常问 entry、target、SL，本集用 20 EMA 判断趋势，用 RSI 判断回踩质量。",
        hook: "If you always enter late, this video is for you. Today we use one line, the 20 EMA, to stop chasing and start waiting.",
        outline: [
          "0:00-0:45 开场：说明 20 EMA 不是神奇指标，而是帮助大家判断趋势和等待回踩。",
          "0:45-2:20 20 EMA：价格在上方，只找回踩做多；价格在下方，只找反弹做空。",
          "2:20-4:40 RSI：回踩时 RSI 守住 45-55 区间，说明趋势还健康；跌破则等待。",
          "4:40-6:20 图表套用：用 BTC 或 SOL 讲 entry zone、SL、TP 三个位置。",
          "6:20-7:00 结尾：让成员截图标注 20 EMA、entry、SL、TP。"
        ],
        talk: [
          "KC 可以这样讲：20 EMA is not here to predict the future. It is here to stop you from buying the top and selling the bottom.",
          "If price is above the 20 EMA, we respect the bullish side. But we do not chase. We wait for price to pull back near the EMA, then check RSI.",
          "The clean setup is simple: trend above 20 EMA, pullback into the line, RSI holds the middle, then we plan entry, stop loss, and target."
        ],
        marketTemplate: "如果 BTC/SOL 在 20 EMA 上方且 RSI 高于 50，主讲 trend continuation；如果价格跌破 20 EMA，改讲等待 reclaim。",
        assignment: "让成员提交一张 BTC、Gold 或 SOL 图，必须标出 20 EMA、entry zone、SL、TP。"
      },
      {
        week: 1,
        date: "周三更新",
        title: "20 EMA + MACD：Trend Continuation or Fake Pullback",
        indicators: "20 EMA / MACD",
        assets: "BTC + Gold/SOL",
        duration: "8 分钟",
        summary: "用 MACD 判断回踩后动能是否恢复，避免只靠一条 EMA 盲目进场。",
        hook: "A pullback is only useful if momentum comes back. Today we use 20 EMA for location and MACD for confirmation.",
        outline: [
          "先确认价格在 20 EMA 上方还是下方。",
          "回踩到 EMA 附近时，不急着进，看 MACD 柱体是否停止变弱。",
          "MACD 重新放大，代表趋势可能继续；继续恶化则放弃。",
          "讲清楚 entry、SL、TP：止损放在回踩低点外侧。"
        ],
        talk: [
          "20 EMA gives us the area. MACD tells us whether the engine is turning back on.",
          "If price touches the EMA but MACD keeps getting weaker, do not force the trade.",
          "The best KC-style setup is simple and visual: trend, pullback, momentum return, then entry."
        ],
        marketTemplate: "根据实时 MACD 柱体正负决定主讲趋势延续或假回踩。",
        assignment: "截图最近一次 20 EMA 回踩，标出 MACD 柱体由缩短到放大的位置。"
      },
      {
        week: 2,
        date: "周五更新",
        title: "20 EMA + ATR：How Far Can This Move Go",
        indicators: "20 EMA / ATR",
        assets: "BTC + Gold/SOL",
        duration: "7 分钟",
        summary: "KC 群常问 target，本集用 ATR 帮成员设置更现实的止盈距离。",
        hook: "Most traders do not lose because their direction is wrong. They lose because their target makes no sense.",
        outline: [
          "20 EMA 决定交易方向和 entry zone。",
          "ATR 决定目标不能定得过远。",
          "ATR 低时目标短一点；ATR 高时可以给价格更多空间。",
          "用图表示范 1 ATR 和 1.5 ATR 目标。"
        ],
        talk: [
          "ATR is not a signal. ATR is a reality check.",
          "If the average move is small, do not expect a giant target on every trade.",
          "KC can tell the group: before you ask me target, first check the ATR."
        ],
        marketTemplate: "如果 ATR 扩大，主讲延伸目标；如果 ATR 收缩，主讲短目标和减少交易。",
        assignment: "让成员用 ATR 标出一个 realistic TP，并解释为什么不是随便定目标。"
      },
      {
        week: 3,
        date: "2026-06-02",
        title: "20 EMA + Fibonacci：Pullback Entry Zone",
        indicators: "20 EMA / Fibonacci",
        assets: "BTC + Gold/SOL",
        duration: "9 分钟",
        summary: "用 20 EMA 和 0.382/0.5/0.618 回撤区间重叠，找到更清楚的入场区域。",
        hook: "If the 20 EMA and Fibonacci are pointing to the same zone, that area deserves attention.",
        outline: [
          "找到最近一段明显推动浪。",
          "画 Fibonacci 回撤，观察 0.382、0.5、0.618。",
          "如果 20 EMA 与回撤区间重叠，形成 entry zone。",
          "跌破 0.618 且失去 EMA，放弃原方向。"
        ],
        talk: [
          "Fibonacci gives us the pullback map. The 20 EMA gives us trend location.",
          "When both tools meet in the same zone, the entry becomes cleaner.",
          "But if price loses both the EMA and 0.618, we do not argue. The setup is invalid."
        ],
        marketTemplate: "根据价格是否在 20 EMA 上方，选择讲回踩做多或反弹做空。",
        assignment: "画出一段 BTC、Gold 或 SOL 波段，标出 20 EMA 与 Fibonacci 重叠区域。"
      }
    ]
  },
  caven: {
    name: "Caven",
    symbols: ["BTCUSDT", "SOLUSDT", "ETHUSDT", "XAUUSD"],
    fallback: {
      BTCUSDT: { price: 102400, change: 1.2, rsi: 56, macd: 120, signal: 80, atr: 2100 },
      ETHUSDT: { price: 3900, change: .8, rsi: 54, macd: 18, signal: 12, atr: 105 },
      SOLUSDT: { price: 172, change: 1.7, rsi: 58, macd: 1.4, signal: 1.1, atr: 6.2 },
      XAUUSD: { price: 3340, change: .42, rsi: 52, macd: 5.5, signal: 4.2, atr: 32 }
    },
    scripts: [
      {
        week: 0,
        date: "周一更新",
        title: "Liquidity Sweep + VWAP：短线不要追突破，等扫完再确认",
        indicators: "Liquidity Sweep / VWAP",
        assets: "BTC + SOL",
        duration: "7 分钟",
        summary: "给 Caven 群建立 scalp 核心框架：先看高低点流动性是否被扫，再看价格是否回到 VWAP。",
        hook: "短线交易最容易亏在假突破。今天我们只讲一个动作：先等 liquidity sweep，再看 VWAP 确认。",
        outline: [
          "0:00-0:45 开场：Caven 可以直接说，scalp 不是追最快那根 K 线，而是等市场扫掉追单的人。",
          "0:45-2:40 Liquidity Sweep：标出上一高点/上一低点，价格刺破后快速收回，代表扫流动性。",
          "2:40-4:50 VWAP：扫完以后，如果价格重新站回 VWAP，上方多头更有优势；跌回 VWAP 下方则放弃。",
          "4:50-6:20 SOL 实盘套用：SOL 用户多，优先用 SOL 15M 或 30M 图讲一次。",
          "6:20-7:00 结尾：给出 scalp 规则，最多等两个确认，不在中间位置乱开。"
        ],
        talk: [
          "Caven 可以这样讲：如果 SOL 刚刚刺破前低，很多人会恐慌做空。但如果下一根 K 线收回前低上方，并且重新站回 VWAP，这反而可能是短线反弹信号。",
          "Liquidity sweep 是位置，VWAP 是确认。只看到扫单，不代表马上做多；只看到 VWAP，也不代表有好的盈亏比。两个条件一起出现，才适合 scalp。",
          "Caven 群有很多短线和 Omni 用户，所以这集不要讲太多理论，直接在图上画三个点：前高/前低、扫单 K 线、VWAP 回收。"
        ],
        marketTemplate: "如果 SOL 当日波动扩大，主讲 SOL 15M；如果 SOL 很窄，改用 BTC 讲假突破和等待。",
        assignment: "让成员找一张 SOL 15M 图，圈出一次扫前低后重新站回 VWAP 的位置，并写出止损应该放在哪里。"
      },
      {
        week: 1,
        date: "周三更新",
        title: "Volume Spike + RSI：扫单后有没有真的进量",
        indicators: "成交量尖峰 / RSI",
        assets: "SOL + BTC",
        duration: "6 分钟",
        summary: "过滤假 sweep：扫单以后必须有成交量和 RSI 配合，不能只靠影线进场。",
        hook: "一根长影线很好看，但没有成交量，它可能只是噪音。",
        outline: [
          "解释 volume spike：当前量明显高于过去 20 根平均量。",
          "扫前低后，若成交量放大且 RSI 从 30 附近回升，更像有效反应。",
          "扫前高后，若量放大但 RSI 不能继续创新高，警惕诱多。",
          "用 SOL 做一组多空场景。"
        ],
        talk: [
          "Caven 要提醒成员：影线只是告诉你有人被打掉，成交量才告诉你有没有新资金接住。",
          "如果扫低后 RSI 还在下滑，不要急着接。等 RSI 拐头，比抢最低点更重要。"
        ],
        marketTemplate: "用实时 RSI 判断主讲多头反应还是诱多失败。",
        assignment: "找出一次 SOL 放量扫低，标注进场、止损、第一止盈。"
      },
      {
        week: 2,
        date: "周五更新",
        title: "Session High/Low + ATR：哪几个时间段更适合 scalp",
        indicators: "Session High/Low / ATR",
        assets: "BTC + SOL",
        duration: "8 分钟",
        summary: "帮助 Caven 用户避开无效时间段，把交易集中在波动更容易释放的时段。",
        hook: "Scalp 不只是看方向，还要看时间。没波动的时候，技术再好也容易被磨损。",
        outline: [
          "标出亚洲盘、伦敦盘、纽约盘高低点。",
          "ATR 扩大时，扫 session high/low 后更容易有延续。",
          "ATR 很低时，只做快速反应，不期待大行情。",
          "给出 Caven 群的执行规则：只交易 session 边界，不追中间。"
        ],
        talk: [
          "Session high/low 是短线资金最容易盯的位置，因为那里有止损，也有突破单。",
          "如果 ATR 很低，扫完也可能走不远，所以目标要小，止损要快。"
        ],
        marketTemplate: "根据 BTC/SOL ATR 决定主讲放大目标还是缩短目标。",
        assignment: "标出今天 SOL 的亚洲盘高低点，等待其中一边被扫。"
      },
      {
        week: 3,
        date: "2026-06-02",
        title: "Order Block + VWAP：扫完以后回到哪里接",
        indicators: "Order Block / VWAP",
        assets: "BTC + SOL",
        duration: "9 分钟",
        summary: "把 liquidity sweep 与更具体的回踩区域结合，提高短线盈亏比。",
        hook: "扫完流动性以后，不是任何位置都能接。我们要找价格愿意重新成交的区域。",
        outline: [
          "找扫单前最后一根反向 K 线作为短线 order block。",
          "价格回到 order block，同时靠近 VWAP，才是更好的观察区。",
          "若回踩区被实体跌破，放弃，不补仓。",
          "用 SOL 做完整标注：扫低、回收、回踩、止损。"
        ],
        talk: [
          "Order block 给我们区域，VWAP 告诉我们市场均价在哪里。区域和均价重合时，scalp 的盈亏比更好。",
          "这集要强调：失败就走，不能把 scalp 做成长期扛单。"
        ],
        marketTemplate: "若 SOL 趋势强，主讲回踩做多；若低于 VWAP，主讲反弹做空。",
        assignment: "找一个 SOL 15M order block，写出无效条件。"
      }
    ]
  }
};

let state = { market: {}, lib: null, script: null, updatedAt: null, marketFresh: false };

document.addEventListener("DOMContentLoaded", () => {
  const key = document.body.dataset.kol;
  if (!key || !LIBRARIES[key]) return;
  state.lib = LIBRARIES[key];
  state.market = { ...state.lib.fallback };
  state.script = getCurrentScript(state.lib);
  bindEvents();
  renderDirectory();
  loadMarket();
  const requested = location.hash.replace("#", "");
  if (requested) openScript(requested);
});

function bindEvents() {
  document.querySelectorAll("[data-refresh]").forEach(btn => btn.addEventListener("click", loadMarket));
  document.querySelector("[data-back]")?.addEventListener("click", () => {
    document.querySelector("#detail").hidden = true;
    document.querySelector("#directory").hidden = false;
    history.replaceState(null, "", location.pathname);
  });
}

function getCurrentScript(lib) {
  const now = new Date();
  const diff = Math.max(0, Math.floor((startOfShanghaiDay(now) - START_MONDAY) / 86400000));
  const dayInWeek = diff % 7;
  const slot = dayInWeek >= 4 ? 2 : dayInWeek >= 2 ? 1 : 0;
  return getWeeklyScripts(lib)[slot] || lib.scripts[0];
}

function startOfShanghaiDay(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date).reduce((acc, p) => (acc[p.type] = p.value, acc), {});
  return new Date(`${parts.year}-${parts.month}-${parts.day}T00:00:00+08:00`);
}

async function loadMarket() {
  renderMarket(true);
  const results = await Promise.allSettled(state.lib.symbols.map(fetchSymbol));
  let freshCount = 0;
  results.forEach((res, idx) => {
    if (res.status === "fulfilled") {
      state.market[state.lib.symbols[idx]] = res.value;
      freshCount += 1;
    }
  });
  state.updatedAt = new Date();
  state.marketFresh = freshCount > 0;
  renderMarket(false);
  if (!document.querySelector("#detail").hidden) renderDetail(state.script);
}

async function fetchSymbol(symbol) {
  if (symbol === "XAUUSD") return fetchGold();
  try {
    return await fetchSymbolFromBinance(symbol);
  } catch (error) {
    return fetchSymbolFromCoinGecko(symbol);
  }
}

async function fetchGold() {
  const url = "https://query1.finance.yahoo.com/v8/finance/chart/GC=F?range=14d&interval=1h";
  const data = await fetch(url).then(assertJson);
  const result = data.chart.result[0];
  const quote = result.indicators.quote[0];
  const closes = quote.close.filter(Number.isFinite);
  const highs = quote.high.filter(Number.isFinite);
  const lows = quote.low.filter(Number.isFinite);
  const price = closes.at(-1);
  const prev = closes.at(-25) || closes.at(-2);
  const change = ((price - prev) / prev) * 100;
  return buildMarketPoint(price, change, highs, lows, closes);
}

async function fetchSymbolFromBinance(symbol) {
  const tickerUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`;
  const klineUrl = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=4h&limit=120`;
  const [ticker, klines] = await Promise.all([
    fetch(tickerUrl).then(assertJson),
    fetch(klineUrl).then(assertJson)
  ]);
  return buildMarketPoint(
    Number(ticker.lastPrice),
    Number(ticker.priceChangePercent),
    klines.map(k => Number(k[2])),
    klines.map(k => Number(k[3])),
    klines.map(k => Number(k[4]))
  );
}

async function fetchSymbolFromCoinGecko(symbol) {
  const ids = { BTCUSDT: "bitcoin", ETHUSDT: "ethereum", SOLUSDT: "solana" };
  const id = ids[symbol];
  if (!id) throw new Error(`Unsupported symbol ${symbol}`);
  const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=14`;
  const rows = await fetch(url).then(assertJson);
  const highs = rows.map(row => Number(row[2]));
  const lows = rows.map(row => Number(row[3]));
  const closes = rows.map(row => Number(row[4]));
  const price = closes.at(-1);
  const change = ((price - closes.at(-7)) / closes.at(-7)) * 100;
  return buildMarketPoint(price, change, highs, lows, closes);
}

async function assertJson(response) {
  if (!response.ok) throw new Error(`Market API returned ${response.status}`);
  return response.json();
}

function buildMarketPoint(price, change, highs, lows, closes) {
  const macd = calcMacd(closes);
  return {
    price,
    change,
    rsi: calcRsi(closes, 14),
    macd: macd.macd,
    signal: macd.signal,
    atr: calcAtr(highs, lows, closes, 14)
  };
}

function calcRsi(values, period) {
  let gains = 0, losses = 0;
  for (let i = values.length - period; i < values.length; i++) {
    const diff = values[i] - values[i - 1];
    if (diff >= 0) gains += diff; else losses -= diff;
  }
  if (!losses) return 100;
  const rs = gains / losses;
  return 100 - (100 / (1 + rs));
}

function ema(values, period) {
  const k = 2 / (period + 1);
  let current = values[0];
  return values.map(v => current = v * k + current * (1 - k));
}

function calcMacd(values) {
  const fast = ema(values, 12);
  const slow = ema(values, 26);
  const line = values.map((_, i) => fast[i] - slow[i]);
  const signalLine = ema(line, 9);
  return { macd: line.at(-1), signal: signalLine.at(-1) };
}

function calcAtr(highs, lows, closes, period) {
  const trs = [];
  for (let i = 1; i < highs.length; i++) {
    trs.push(Math.max(highs[i] - lows[i], Math.abs(highs[i] - closes[i - 1]), Math.abs(lows[i] - closes[i - 1])));
  }
  return trs.slice(-period).reduce((a, b) => a + b, 0) / period;
}

function renderDirectory() {
  const currentScripts = getWeeklyScripts(state.lib);
  const archivedScripts = getArchivedScripts(state.lib);
  document.querySelector("#script-list").innerHTML = `
    <div class="script-group-title">
      <span>本周新增</span>
      <p>周一、周三、周五各新增一篇。刷新行情只更新价格、涨跌幅和指标，不会覆盖脚本主题。</p>
    </div>
    ${currentScripts.map((script, index) => renderScriptCard(script, WEEKLY_UPDATE_DAYS[index])).join("")}
    ${archivedScripts.length ? `
      <div class="script-group-title archive-title">
        <span>历史归档</span>
        <p>之前产出的口播稿会一直保留，可以随时打开并用最新行情重新生成行情段。</p>
      </div>
      ${archivedScripts.map(script => renderScriptCard(script, "历史稿件")).join("")}
    ` : ""}
  `;
  document.querySelectorAll("[data-open]").forEach(card => {
    card.addEventListener("click", () => openScript(card.dataset.open));
  });
  renderMarket(false);
}

function renderScriptCard(script, label) {
  return `
    <article class="script-card ${script.week === state.script.week ? "current" : ""}" data-open="${script.week}">
      <div class="script-meta">
        <span>${label}</span>
        <span>${script.date}</span>
        <span>${script.duration}</span>
        <span>${script.indicators}</span>
      </div>
      <h3>${script.title}</h3>
      <p>${script.summary}</p>
    </article>
  `;
}

function renderMarket(loading) {
  const html = state.lib.symbols.map(symbol => {
    const m = state.market[symbol] || state.lib.fallback[symbol];
    const up = m.change >= 0;
    return `
      <div class="market-card">
        <b>${displaySymbol(symbol)} · ${symbol === "XAUUSD" ? "1H" : "4H"}</b>
        <strong>$${formatPrice(m.price)} <em class="${up ? "up" : "down"}">${up ? "+" : ""}${m.change.toFixed(2)}%</em></strong>
        <span>${loading ? "正在读取实时行情..." : `RSI ${m.rsi.toFixed(1)} · MACD ${(m.macd - m.signal).toFixed(2)} · ATR ${formatPrice(m.atr)}`}</span>
      </div>
    `;
  }).join("");
  const updatedText = loading
    ? "正在读取实时行情，完成后会同步更新下方脚本和口播稿。"
    : state.updatedAt
      ? `${state.marketFresh ? "实时行情已更新" : "行情接口暂不可用，当前显示备用行情"} · ${formatUpdatedAt(state.updatedAt)} · 点“刷新行情”会重新读取价格并重写口播稿数据。`
      : "打开页面会自动读取实时行情；点“刷新行情”会重新读取价格并重写口播稿数据。";
  document.querySelector("#market-strip").innerHTML = `${html}<p class="market-status">${updatedText}</p>`;
}

function openScript(week) {
  const script = state.lib.scripts.find(s => String(s.week) === String(week)) || state.script;
  state.script = script;
  document.querySelector("#directory").hidden = true;
  document.querySelector("#detail").hidden = false;
  renderDetail(script);
  history.replaceState(null, "", `#${script.week}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetail(script) {
  const primary = script.assets.includes("SOL") ? "SOLUSDT" : "BTCUSDT";
  const secondary = script.assets.includes("ETH") ? "ETHUSDT" : "BTCUSDT";
  const m = state.market[primary] || state.lib.fallback[primary];
  const s = state.market[secondary] || state.lib.fallback[secondary];
  const bias = getBias(m);
  document.querySelector("#script-detail").innerHTML = `
    <section class="script-hero">
      <p class="eyebrow">Page 2 · ${getWeeklyScripts(state.lib).includes(script) ? "本周新增脚本" : "历史归档脚本"}</p>
      <h2>${script.title}</h2>
      <p>${script.summary}</p>
      <div class="mini-row">
        <span>${script.date}</span>
        <span>${script.duration}</span>
        <span>${script.assets}</span>
        <span>${script.indicators}</span>
      </div>
    </section>

    <section class="script-block">
      <h3>实时行情插入</h3>
      <p class="market-status detail-status">${state.updatedAt ? `这段数据来自最近一次行情读取：${formatUpdatedAt(state.updatedAt)}。点击上方“刷新行情”后，价格、RSI、MACD、ATR 和 English Read-Aloud Script 会一起更新。` : "这段会在页面打开或点击“刷新行情”后读取最新行情，并同步更新口播稿。"} </p>
      <div class="talk-line">${displaySymbol(primary)} 当前约 $${formatPrice(m.price)}，24H ${m.change >= 0 ? "上涨" : "下跌"} ${Math.abs(m.change).toFixed(2)}%，RSI ${m.rsi.toFixed(1)}，MACD 柱体 ${(m.macd - m.signal).toFixed(2)}，ATR ${formatPrice(m.atr)}。当前讲解倾向：${bias}。</div>
      <div class="talk-line">${displaySymbol(secondary)} 可作为第二张图，RSI ${s.rsi.toFixed(1)}，用于对比主流品种是否同步。</div>
      <p>${script.marketTemplate}</p>
    </section>

    <section class="script-block">
      <h3>开场 Hook</h3>
      <div class="talk-line">${script.hook}</div>
    </section>

    <section class="script-block teleprompter">
      <h3>English Read-Aloud Script</h3>
      <div class="placeholder-note">
        <strong>Before recording:</strong> replace every <code>[CHANGE THIS: ...]</code> part with the speaker name, LBank invite code, bonus details, deadline, or campaign requirement.
      </div>
      ${renderScriptVersions(getEnglishScript(state.lib.name, script, primary, secondary, m, s))}
    </section>

    <section class="script-block">
      <h3>视频结构</h3>
      <ol>${script.outline.map(item => `<li>${item}</li>`).join("")}</ol>
    </section>

    <section class="script-block">
      <h3>讲解台词</h3>
      ${script.talk.map(line => `<div class="talk-line">${line}</div>`).join("")}
    </section>

    <section class="script-block risk-note">
      <h3>群内转化动作</h3>
      <ul>
        <li>${script.assignment}</li>
        <li>视频结尾提醒：想要我帮你看图，就把截图发到 VIP 群，必须带 entry、SL、TP 三个位置。</li>
        <li>风险提示：这条视频只做教学，不承诺收益；高杠杆必须先定止损。</li>
      </ul>
    </section>
  `;
}

function getWeeklyScripts(lib) {
  return lib.scripts.slice(0, 3);
}

function getArchivedScripts(lib) {
  return lib.scripts.slice(3);
}

function renderScriptVersions(longLines) {
  const orderedLongLines = reorderLongVersion(longLines);
  const shortLines = buildShortVersion(orderedLongLines);
  return `
    <div class="version-label">Short Version · 3-5 minutes</div>
    ${shortLines.map(line => `<p>${line}</p>`).join("")}
    <div class="version-label long">Long Version · 7-10 minutes</div>
    ${orderedLongLines.map(line => `<p>${line}</p>`).join("")}
  `;
}

function buildShortVersion(lines) {
  const content = lines.filter(line => !isIntroLine(line) && !isLbankLine(line));
  const picked = [
    content[0],
    content.find(line => /trading around|comparison chart/i.test(line)),
    content.find(line => /Today we are|Today we combine|Today we add|The two tools|we are using/i.test(line)),
    content.find(line => /framework|rule|formula|process|setup|20 EMA|RSI|VWAP|MACD|ATR|Fibonacci/i.test(line)),
    content.find(line => /example|Imagine|Suppose|Let us use/i.test(line)),
    content.find(line => /takeaway|remember|lesson|key idea|simple rule|full process/i.test(line)),
    content.find(line => /Homework|Your homework|homework/i.test(line))
  ];
  return [...new Set(picked)].filter(Boolean);
}

function reorderLongVersion(lines) {
  const introLines = lines.filter(isIntroLine);
  const lbankLines = lines.filter(isLbankLine);
  const contentLines = lines.filter(line => !isIntroLine(line) && !isLbankLine(line));
  const insertAt = Math.min(5, Math.max(3, Math.floor(contentLines.length * .35)));
  return [
    ...contentLines.slice(0, insertAt),
    ...introLines,
    ...contentLines.slice(insertAt),
    ...lbankLines
  ];
}

function isIntroLine(line) {
  return /Quick intro before we start|My style is based|My content is mainly|My trading education is built/i.test(line);
}

function isLbankLine(line) {
  return /LBank|invite code|CHANGE THIS|campaign|bonus|promotion/i.test(line);
}

function getEnglishScript(kolName, script, primary, secondary, market, secondMarket) {
  if (kolName === "William") return getWilliamScript(script, primary, secondary, market, secondMarket);
  if (kolName === "KC") return getKcScript(script, primary, secondary, market, secondMarket);
  return getCavenScript(script, primary, secondary, market, secondMarket);
}

function introBlock(kolName, styleLine) {
  return [
    `Quick intro before we start. My name is ${kolName}, and on this channel I focus on practical trading education, not random signals. The goal is to help you understand why a setup matters, where the entry can be, where the setup becomes invalid, and how to manage risk before you click the button.`,
    `${styleLine} If you are new here, do not rush to copy trades. Watch the logic first, pause the video, mark the chart, and only trade when you can explain the setup in your own words.`,
    `Also, if you want to trade on LBank, you can use my invite code here: [CHANGE THIS: LBank invite code]. If there is a current deposit bonus, fee discount, or campaign, say it like this: [CHANGE THIS: mention the exact LBank bonus, expiry date, and requirement]. Please update this part before recording, because promotions can change.`
  ];
}

function marketLine(primary, secondary, market, secondMarket) {
  return `${primary.replace("USDT", "")} is trading around $${formatPrice(market.price)}, with a 24-hour move of ${market.change >= 0 ? "plus" : "minus"} ${Math.abs(market.change).toFixed(2)}%. The 4-hour RSI is ${market.rsi.toFixed(1)}, the MACD histogram is ${(market.macd - market.signal).toFixed(2)}, and ATR is around ${formatPrice(market.atr)}. ${secondary.replace("USDT", "")} is the comparison chart today, with RSI at ${secondMarket.rsi.toFixed(1)}.`;
}

function getWilliamScript(script, primary, secondary, market, secondMarket) {
  const commonOpen = [
    `Alright team, quick reality check before we touch the chart: the market does not pay you for being early. The market pays you for being patient, clean, and prepared. Today we are going to keep it very simple, because simple is what saves accounts when everyone else is chasing candles.`,
    ...introBlock("William", "My style is based on structure, ICT and SMC ideas, but I always want to turn those ideas into simple steps that beginners can actually follow."),
    `In this video, I want you to watch this like a trader, not like a gambler. Do not ask, "Can I enter now?" Ask this instead: "Do I have direction, do I have confirmation, and do I know where I am wrong?" If you can answer those three questions, your trading immediately becomes more professional.`,
    marketLine(primary, secondary, market, secondMarket)
  ];

  if (script.week === 0) {
    return [
      ...commonOpen,
      `Today is the special ICT strategy update. We are not starting with indicators. We are starting with liquidity and structure, because ICT is about understanding where orders are likely sitting before we talk about entry.`,
      `The first step is liquidity. Mark the previous high and the previous low. These are the areas where breakout traders enter and where stop losses sit. When price sweeps one of those levels and quickly comes back, that is information. It tells us the market may have grabbed liquidity before choosing the real direction.`,
      `The second step is structure. After the sweep, do not enter immediately. Wait for a break of structure or a change of character. If price sweeps the low, then breaks a short-term high, we can start thinking about a bullish model. If price sweeps the high, then breaks a short-term low, we can start thinking about a bearish model.`,
      `The third step is the entry area. I want to see price return into a fair value gap, an order block, or a clean discount or premium area. The entry should have a clear invalidation level. If you cannot say where the idea is wrong, you do not have an ICT setup yet.`,
      `Now we can add RSI and MACD as confirmation. They are not the main strategy today. They simply help us check whether momentum supports the structure. If BTC sweeps a low, breaks structure upward, and RSI reclaims the middle while MACD improves, the long idea becomes cleaner.`,
      `For ETH, use it as confirmation. If BTC gives a bullish ICT setup but ETH is still weak, reduce confidence. If both BTC and ETH show liquidity sweep, structure shift, and improving momentum, the environment is stronger.`,
      `The clean rule is: liquidity first, structure second, entry model third, risk management last. No sweep, no structure shift, no clear invalidation, no trade.`,
      `This is the most important message for the group: ICT should make you more patient, not more aggressive. The setup is not the wick. The setup is the sequence after the wick.`,
      `Homework: open the BTC or ETH 4-hour chart. Mark one liquidity sweep, one BOS or CHOCH, one entry zone, one stop loss, and one target. Post the chart in the VIP group. If one of those labels is missing, the setup is incomplete.`
    ];
  }

  if (script.week === 1) {
    return [
      ...commonOpen,
      `Today we are using 20 EMA and RSI to answer the question everyone asks after a move already happened: "Did I miss the entry?" The honest answer is: maybe yes, maybe no. But we do not chase. We wait for the market to come back to our area.`,
      `The 20 EMA is a simple trend guide. When price is above the 20 EMA, short-term buyers are still in control. When price is below it, sellers are pressuring the market. I do not use it as magic. I use it as a line that tells me where the market is accepting price.`,
      `Here is the setup. In an uptrend, price pushes away from the 20 EMA. Retail traders chase the green candle. We wait. If price comes back near the 20 EMA and RSI stays around or above 50, the trend is still healthy. That is where we start looking for an entry trigger.`,
      `But if price comes back to the 20 EMA and RSI breaks under 45, that is not a clean dip anymore. That may be a shift in momentum. In that case, we do not argue with the chart. We wait for price to reclaim the EMA again.`,
      `The key idea is this: the EMA gives us location, RSI gives us quality. Location without quality is not enough. A pullback to the EMA with a weak RSI can keep dropping. But a pullback to the EMA with RSI holding the midline gives us a much cleaner continuation setup.`,
      `For today, use BTC first. If BTC is above the 20 EMA and RSI is holding above 50, we can discuss buy-the-dip setups. If BTC is below the EMA and RSI is weak, we do not force longs. We wait for a reclaim. ETH is the second chart, just to see if the market is moving together or if BTC is alone.`,
      `And please remember: a good entry should feel boring. If your heart is racing, you are probably late. Let the market pull back, let RSI confirm, then execute with a predefined stop.`,
      `Homework for the VIP group: screenshot the 4-hour chart, draw the 20 EMA, and mark the last three touches. Under each touch, write whether RSI stayed above 50 or broke below it. That is how we train the eye.`
    ];
  }

  if (script.week === 2) {
    return [
      ...commonOpen,
      `Today is not about finding more trades. Today is about knowing when not to trade. We are using Bollinger Bands and ATR to understand volatility, because low volatility is where overtrading quietly destroys accounts.`,
      `Bollinger Bands show us whether price is expanding or compressing. When the bands get tight, the market is not giving a lot of space. It means traders are waiting, liquidity is building, and the next move may be strong, but the timing is not confirmed yet.`,
      `ATR tells us the average size of recent movement. If ATR is falling, your profit target should not be huge. The market is moving less. If you still use big targets in a low-ATR market, you are asking the chart to do something it is not currently doing.`,
      `This is where a lot of people overtrade. Price moves a little, they enter. Price comes back, they stop out. Then they reverse. Then they stop out again. The market did not beat them with a trend. It beat them with boredom.`,
      `So the rule is simple: when Bollinger Bands are tight and ATR is low, do not trade the middle. Only react near the edge of the range, or wait for a clean breakout and retest. Middle entries are where your risk-reward goes to die.`,
      `If BTC volatility expands, then we can talk about continuation. But if BTC is still compressed, the best trade may be no trade. That is not weakness. That is professional discipline.`,
      `Homework: find the tightest Bollinger Band squeeze on BTC 4-hour. Mark the range high and range low. Then write one sentence: "Would I trade inside this range, or wait for a break?" That answer will tell me a lot about your discipline.`
    ];
  }

  return [
    ...commonOpen,
    `Today we are combining Fibonacci and MACD. This is important because a pullback is not automatically a reversal. A lot of traders panic when price retraces, but smart traders ask: where is the pullback, and is momentum truly changing?`,
    `Fibonacci gives us the location. The main areas I care about are 0.382, 0.5, and 0.618. If price is trending up and pulls back into those levels, I do not instantly buy. I watch how price behaves there.`,
    `Now MACD gives us the momentum check. If price pulls back into the 0.5 or 0.618 area, but MACD starts to stop falling and the histogram improves, sellers may be losing strength. That is when the setup becomes interesting.`,
    `But if price breaks below 0.618 and MACD also moves under the zero line, that is different. That tells us the pullback may be turning into a real trend shift. In that case, we protect capital first.`,
    `So the framework is: Fibonacci for area, MACD for timing, structure for invalidation. Do not use Fibonacci like a magic buy button. Use it as a map.`,
    `For the VIP group, I want you to draw one recent BTC swing. Mark 0.382, 0.5, and 0.618. Then tell me whether MACD supports a continuation or warns of weakness. If you can explain that clearly, your analysis is improving.`
  ];
}

function getCavenScript(script, primary, secondary, market, secondMarket) {
  const commonOpen = [
    `Alright guys, listen closely, because this one can save you from chasing fake breakouts. Scalp trading is not about clicking faster than everyone else. It is about waiting for the market to trap impatient traders, then taking the cleaner side of the move.`,
    ...introBlock("Caven", "My content is mainly for short-term traders who like clean chart levels, liquidity, fast decisions, and strict invalidation."),
    `Today we keep it sharp, visual, and practical. I want you to think in three questions: where is the liquidity, did price sweep it, and did price confirm after the sweep? If you do not have those three answers, you do not have a scalp setup yet.`,
    marketLine(primary, secondary, market, secondMarket)
  ];

  if (script.week === 0) {
    return [
      ...commonOpen,
      `The two tools today are liquidity sweep and VWAP. A liquidity sweep happens when price breaks above a recent high or below a recent low, grabs stops, and then quickly comes back inside the range. That move is important because it shows us where traders got trapped.`,
      `Let me give you a simple example. Imagine SOL has been ranging between a clear session low and a clear session high for a few hours. Everyone can see the low. That level becomes obvious. When a level is obvious, stop losses collect there. Short sellers also wait for a breakdown there. So if price suddenly dips under that low, a lot of people react at the same time.`,
      `But the key question is: does price stay below the session low, or does it snap back above? If price breaks below the low and immediately reclaims it, that tells us the breakdown may be a trap. The market took liquidity from late sellers and stop losses, then returned back into the range. That is the first clue.`,
      `Now here is the part most beginners miss. A sweep alone is not a trade. A long wick is not enough. After the sweep, I want to see price reclaim VWAP. VWAP is the average price where real volume has traded. If price gets back above VWAP after sweeping a low, buyers may be taking control again.`,
      `This is why VWAP is useful for scalp trading. It gives us a quick read of where the market is accepting price for the session. If price is below VWAP, sellers still have control. If price sweeps a low and then climbs back above VWAP, the story changes. Now we can say buyers are not only defending the low, they are also reclaiming the average price.`,
      `Let us use SOL because a lot of this community watches SOL and short-term moves. Imagine SOL breaks below the previous low. Everyone panics. Shorts enter late. Then the candle closes back above that previous low. That is step one. But we still wait. If price then reclaims VWAP, now we have a cleaner long scalp idea.`,
      `The stop loss is not random. If we are taking a long after a sweep of the low, the invalidation is below the sweep low. If price goes back under that level, the setup failed. We exit. We do not turn a scalp into a long-term bag.`,
      `For a short setup, flip the logic. Price sweeps the previous high, traps breakout buyers, comes back below the high, and then loses VWAP. That gives us a short scalp idea. Again, stop goes above the sweep high. Clean, simple, no drama.`,
      `Here is a sample way to say it on the chart: "Guys, this is not a buy just because we have a wick. First, price swept the low. Second, price closed back inside the range. Third, price reclaimed VWAP. Now, if we enter, the stop is under the sweep low, and the first target is the middle or high of the range."`,
      `If you want to mention LBank here, keep it natural. Say: "If you are practicing this setup on LBank, use low leverage first. You can use my invite code [CHANGE THIS: LBank invite code], and if there is a campaign, check [CHANGE THIS: exact campaign name]. But do not use the bonus as a reason to overtrade."`,
      `The biggest mistake is entering in the middle. If price is sitting between the previous high, previous low, and VWAP, there is no edge. That is where traders get chopped. We want extremes, sweep, reclaim or rejection, then execution.`,
      `Here is the rule for today: liquidity first, VWAP second, risk third. If you skip any step, you are gambling. If SOL has strong movement today, use SOL on the 15-minute chart. If SOL is quiet, use BTC as the cleaner example.`,
      `Before I end, remember this: a scalp setup should be easy to explain in one sentence. For example: "SOL swept the previous low, reclaimed VWAP, and my stop is below the sweep." If you need five excuses to explain why you entered, the setup is probably not clean.`,
      `Your homework: find one SOL 15-minute chart where price sweeps a low and then reclaims VWAP. Mark the sweep, mark VWAP, mark entry, stop loss, and first target. Send it to the group. If your stop is not clear, the trade is not clear.`
    ];
  }

  if (script.week === 1) {
    return [
      ...commonOpen,
      `Today we add volume spike and RSI. Why? Because not every sweep is real. Sometimes price makes a wick, but there is no real reaction. Volume tells us whether traders actually participated in the move.`,
      `Think of liquidity sweep as the trap, volume as the reaction, and RSI as the momentum check. If price sweeps a level but volume is dead, maybe nobody cares. If price sweeps a level with strong volume, now we know real orders were triggered there.`,
      `A volume spike means current volume is much higher than recent average volume. After a sweep of the low, I want to see strong volume and RSI turning up from an oversold area. That tells me buyers may be stepping in.`,
      `But if price sweeps the low and volume is weak, be careful. That can just be noise. If RSI keeps falling, also be careful. We do not catch falling knives just because a candle has a wick.`,
      `For shorts, if price sweeps the high with big volume but RSI fails to make a stronger high, that can be a trap. Buyers pushed, but momentum did not confirm. That is when a rejection can become interesting.`,
      `Example: SOL runs above a previous high. Everyone thinks breakout. But volume spikes, price cannot hold above the high, and RSI starts making a lower high. That tells me buyers may be exhausted. I am not shorting blindly, but I am now watching for a rejection setup.`,
      `For LBank users, this is where you remind them about execution. Say: "If you trade this on LBank, do not market-enter with high leverage just because you see a wick. Wait for the candle close, check volume, check RSI, then plan your stop." Invite code line can be: [CHANGE THIS: LBank invite code and current bonus details].`,
      `The educational point is very simple: one signal is weak, two signals are better, three signals can create a plan. Sweep plus volume plus RSI turn is much stronger than sweep alone.`,
      `The simple formula is: sweep plus volume plus RSI turn. Three pieces. If you only have one piece, wait. Scalp trading rewards selectivity.`,
      `If you want a strong ending line, say this: "We are not here to catch every wick. We are here to catch the wick where the market shows real reaction." That is the difference between random clicking and structured scalp trading.`,
      `Homework: find a SOL or BTC sweep with a clear volume spike. Mark whether RSI confirmed or disagreed. This will help you filter fake setups.`
    ];
  }

  if (script.week === 2) {
    return [
      ...commonOpen,
      `Today we are talking about session highs, session lows, and ATR. This matters because scalp trading is not only about direction. Timing is part of the edge.`,
      `A lot of traders open the chart at a random time, see one candle move, and immediately feel like they need to trade. That is how you get chopped. Professional short-term trading starts with asking: which session are we in, and where is liquidity building?`,
      `The market usually builds liquidity around session highs and lows. Asia high, Asia low, London high, London low, New York high, New York low. These levels attract stops and breakout traders.`,
      `When price sweeps one of these session levels, we pay attention. But before entering, check ATR. If ATR is expanding, the market has enough range to pay you. If ATR is tiny, your target needs to be smaller, or you should skip the trade.`,
      `Here is an example. If SOL is moving only a small ATR in the current session, but your target is several times that range away, that target is not realistic for a scalp. You may be right on direction and still fail because your expectation does not match volatility.`,
      `This is especially important for SOL. SOL can move fast, but it can also chop hard. If you scalp inside the middle of the session range, you are trading where the edge is weakest.`,
      `The rule is: trade near session boundaries, not in the middle. If price sweeps Asia low and reclaims, look for a long scalp. If price sweeps Asia high and rejects, look for a short scalp. ATR decides how ambitious your target should be.`,
      `If you want to include LBank naturally, say: "For anyone using LBank, do not use the same leverage in every session. When ATR is low, reduce expectations. When ATR expands, still keep your stop fixed. You can use my invite code [CHANGE THIS: LBank invite code], and if there is a fee or deposit campaign, update this line before posting."`,
      `Let me make the rule even simpler. Step one, mark the session high and low. Step two, wait for one side to be swept. Step three, check ATR. Step four, enter only if the reclaim or rejection is clean. If price is in the middle, take your hands off the mouse.`,
      `This is a good video for community discipline because it gives people permission not to trade. Sometimes the best scalp is the one you skip. If there is no sweep, no volatility, and no clear invalidation, there is no setup.`,
      `Homework: mark today's Asia high and Asia low on SOL. Do nothing until one side is swept. That is the discipline.`
    ];
  }

  return [
    ...commonOpen,
    `Today we combine order block and VWAP. This is how we improve entry after a liquidity sweep. We do not want to enter anywhere. We want the area where price is likely to react again.`,
    `The reason this matters is simple. After a sweep, many traders enter too late. They see the move already happening, they chase, and then the pullback stops them out. Order block helps us wait for the pullback area instead of chasing the first reaction.`,
    `After price sweeps liquidity, look for the last opposite candle before the strong move. That area can become a short-term order block. It is not magic. It is simply a zone where aggressive buying or selling started.`,
    `Now add VWAP. If the order block is close to VWAP, that area becomes more interesting because we have both structure and average traded price in the same zone.`,
    `For a long scalp, price sweeps the low, reclaims, then pulls back into the order block near VWAP. If it holds, we can look for entry. If it breaks below the block with a strong candle, setup failed. We leave it alone.`,
    `For a short scalp, price sweeps the high, rejects, then retests an order block near VWAP from below. If it fails there, that can be the short entry.`,
    `Here is a sample explanation for the video: "This candle created the impulse after the sweep. I do not want to chase up here. I want price to come back into this small zone near VWAP. If buyers defend it, I have a long. If they fail, I have nothing."`,
    `Add the LBank line only after the teaching part, not before. Say: "If you want to practice this setup, start small. On LBank you can use invite code [CHANGE THIS: LBank invite code]. If there is a current bonus, update this part with the exact offer. But remember, a bonus does not replace risk management."`,
    `The main lesson is this: do not make scalp trading emotional. Sweep, zone, VWAP, invalidation. If those are clear, execute. If they are not clear, pass.`,
    `This is the type of setup that works well as a short video because it is visual. Draw the sweep, draw the order block, draw VWAP, draw the stop. If viewers can screenshot the chart and understand it in five seconds, the lesson is strong.`,
    `Homework: find one SOL 15-minute order block after a sweep. Mark the exact level where the idea becomes invalid. That is what separates a trade plan from a random entry.`
  ];
}

function getKcScript(script, primary, secondary, market, secondMarket) {
  const commonOpen = [
    `Alright team, today we keep it clean. No complicated chart, no twenty indicators, no guessing. We are going to use the 20 EMA as our main guide, because most of you are asking the same three questions every day: where is the entry, where is the stop loss, and where is the target?`,
    ...introBlock("KC", "My trading education is built around the 20 EMA Blueprint: one clear trend line, one clean pullback, one planned entry, one stop loss, and one realistic target."),
    `The goal of this video is not to predict every candle. The goal is to build a repeatable process. If price is above the 20 EMA, we respect the bullish side. If price is below the 20 EMA, we respect the bearish side. After that, we wait for a clean pullback instead of chasing the move.`,
    marketLine(primary, secondary, market, secondMarket)
  ];

  if (script.week === 0) {
    return [
      ...commonOpen,
      `Today we combine 20 EMA and RSI. Think of the 20 EMA as the road, and RSI as the speed of the car. The road tells us direction. The speed tells us whether the move is still healthy or already getting weak.`,
      `First, look at the 20 EMA. If price is above the 20 EMA on the 15-minute, 30-minute, or 4-hour chart, I do not want to randomly short into strength. I want to wait for price to pull back toward the 20 EMA, because that is where the entry becomes cleaner.`,
      `If price is below the 20 EMA, the idea is the opposite. We do not randomly buy just because price looks cheap. We wait for price to bounce back toward the 20 EMA, then we see if sellers reject it. This one rule already removes a lot of bad trades.`,
      `Now add RSI. When price pulls back to the 20 EMA in an uptrend, I want RSI to hold the middle area, usually around 45 to 55 or higher. That tells me the pullback is normal. Buyers are still alive. The trend is not broken yet.`,
      `But if price touches the 20 EMA and RSI drops hard below the middle, that is no longer a clean pullback. That is weakness. In that case, we do not force the entry. We wait for price to reclaim the EMA again.`,
      `Let me give you a simple example. Suppose BTC is trading above the 20 EMA, then it pulls back toward the EMA area without losing the trend structure. A beginner sees red candles and gets scared. A trader asks a better question: is this a normal pullback, or is the trend breaking? If RSI stays near the middle and price holds the EMA, that is still a healthy pullback.`,
      `Now imagine the opposite. Price touches the 20 EMA, but the candle closes below it, RSI drops under the middle, and the next candle cannot reclaim the line. That is not the entry. That is a warning. We do not buy just because price touched the EMA. We need the market to prove it can hold.`,
      `For the chart, mark three things. Number one: the 20 EMA. Number two: the entry zone near the EMA. Number three: the invalidation level. For a long setup, the stop loss should usually be below the pullback low. For a short setup, it should be above the pullback high.`,
      `Now for target, keep it simple. First target can be the recent high if we are long, or the recent low if we are short. Do not ask for a huge target before price proves it can move. KC-style trading should be clean: entry, stop, target, done.`,
      `Here is a sample line you can say while drawing: "This is my entry zone, not my entry button. I still need a reaction candle. My stop is below this pullback low. My first target is the previous high. If price cannot hold the EMA, I do nothing." This teaches the audience patience.`,
      `For LBank, keep the recommendation professional. Say: "If you want to practice this setup on LBank, start with small size and low leverage. My invite code is [CHANGE THIS: LBank invite code]. If LBank has a current bonus or fee discount, update this part here: [CHANGE THIS: exact offer and requirement]. But remember, the code is only useful if you trade with a plan."`,
      `If you are watching BTC today, ask this: is price above or below the 20 EMA? If it is above, we wait for a pullback and RSI holding the middle. If it is below, we wait for a reclaim before talking about longs. If you are watching gold or SOL, use the exact same process.`,
      `This is also why 20 EMA works well for gold. Gold traders often get trapped chasing fast moves. Instead of chasing, mark the 20 EMA and wait. If gold is above the EMA, wait for the pullback. If gold is below the EMA, wait for the bounce. The method is the same across BTC, gold, and SOL.`,
      `Here is the hook I want you to remember: the 20 EMA is not here to make you enter more trades. It is here to stop you from entering bad trades. If price is far away from the EMA, you are late. If price pulls back to the EMA and RSI stays healthy, now you have a plan.`,
      `End the video with this reminder: no entry is better than a bad entry. If you miss one trade, there will be another chart. If you lose discipline, you may not have capital for the next opportunity.`,
      `Homework for the group: send one screenshot. It can be BTC, gold, or SOL. Mark the 20 EMA, mark your entry zone, mark your stop loss, and mark your first target. If your chart does not show all four, do not take the trade yet.`
    ];
  }

  if (script.week === 1) {
    return [
      ...commonOpen,
      `Today we add MACD. The 20 EMA gives us location, but location alone is not enough. Price can touch the EMA and still break down. That is why we use MACD to check whether momentum is returning.`,
      `A lot of traders make one mistake with EMA. They treat the line like a wall. They think price touches it and must bounce. That is not how markets work. The EMA is an area of interest. MACD helps us decide if momentum is actually coming back from that area.`,
      `In a bullish setup, price is above the 20 EMA, then pulls back toward it. At that moment, do not rush. Look at MACD. If the MACD histogram has been shrinking but now starts to improve again, that means bearish pressure may be fading and buyers may be coming back.`,
      `If price touches the 20 EMA but MACD keeps getting worse, we skip it. Simple. We do not buy just because price touches a line. We buy when price touches the area and momentum starts to support the idea again.`,
      `For a bearish setup, flip the logic. Price is below the 20 EMA, bounces toward the line, and MACD fails to recover. If momentum turns down again, that can be a clean short continuation setup.`,
      `Example: BTC is above the 20 EMA and pulls back. The candle touches the line, but MACD histogram is still dropping deeper. That is not clean. Now wait two or three candles. If price holds the EMA and MACD histogram starts shrinking less, then turning up, now the setup improves.`,
      `For gold, this is very useful because gold can spike quickly. If gold pulls back to the 20 EMA but MACD does not recover, do not enter just because the line is there. Wait for momentum to agree.`,
      `The full process is: trend first, pullback second, MACD confirmation third, risk management last. Entry without confirmation is not a strategy. It is just hope.`,
      `Add the invite code line after the education, not in the first ten seconds. You can say: "If you want to follow the same chart setup on LBank, use invite code [CHANGE THIS: LBank invite code]. If there is an active bonus, update this sentence with the exact bonus. But do not open a trade only because there is a promotion."`,
      `The best part of this method is that it helps beginners slow down. They cannot just say "price touched EMA, I enter." They must say: trend is up, price pulled back, MACD is improving, stop is below the pullback. That is a real trade plan.`,
      `Your chart should have four labels: trend direction, 20 EMA pullback, MACD confirmation, and invalidation. If any label is missing, the setup is not ready.`,
      `Homework: find one chart where price pulled back to the 20 EMA. Tell me if MACD confirmed the continuation or warned you to stay out.`
    ];
  }

  if (script.week === 2) {
    return [
      ...commonOpen,
      `Today we answer one of the most important questions: where is the target? A lot of traders ask for TP, but they choose a target randomly. That is not professional. We need a target that matches volatility.`,
      `This is very important for the KC group because many of you ask for entry and target, but target cannot be separated from market range. If the market is only moving a little, a big target may not be realistic. If the market is expanding, then we can plan for more distance.`,
      `We still use 20 EMA for direction. If price is above the 20 EMA, we focus on long pullbacks. If price is below it, we focus on short bounces. But for target, we add ATR.`,
      `ATR tells us the average movement of the market. If ATR is small, the market is not moving far. So if you set a huge target in a low-ATR market, you may be asking too much. That is how profitable trades turn into break-even or losses.`,
      `If ATR is larger, then the market has more range. In that environment, you can give the trade more room and aim for a wider target. But still, the stop loss must be clear before the entry.`,
      `A simple method: after entering near the 20 EMA, use one ATR as a conservative first target, and one point five ATR as a more aggressive second target. You do not need to be perfect. You need to be realistic.`,
      `Example: if SOL pulls back to the 20 EMA and the live ATR is small, a realistic first target should stay close to one ATR, not several ATRs away. If BTC ATR is much larger, the BTC target can be wider. Different asset, different volatility, different target.`,
      `For gold, this helps a lot. Some gold sessions are fast, some are slow. If ATR is low, take partial profit earlier. If ATR is high and price respects the 20 EMA, you can let part of the position run. That is more professional than using the same target every day.`,
      `Here is the LBank placement: "If you trade this setup on LBank, check ATR before choosing leverage. My invite code is [CHANGE THIS: LBank invite code]. Current campaign details: [CHANGE THIS: exact bonus]. Use the platform tools, but make sure your TP and SL are based on the chart."`,
      `This is very useful for gold and BTC because some days they move cleanly, and some days they just chop. ATR tells you which type of day you are dealing with.`,
      `The big lesson: entry is only half of the trade. Target and stop loss decide whether the plan makes sense. A good entry with a bad target is still a bad trade.`,
      `Homework: choose BTC, gold, or SOL. Mark the 20 EMA entry zone, then use ATR to mark a realistic first target. Do not send a target without explaining the volatility.`
    ];
  }

  return [
    ...commonOpen,
    `Today we combine 20 EMA with Fibonacci. This is for finding a cleaner pullback zone. Sometimes price pulls back to the EMA, but we want a little more confidence. Fibonacci can help us see whether the pullback is happening in a meaningful area.`,
    `This is slightly more advanced, but still very clean. We are not adding Fibonacci to make the chart look smart. We are adding it to answer one question: is this pullback happening in a normal retracement zone?`,
    `First, find the latest strong move. If price moved up, draw Fibonacci from the swing low to the swing high. If price moved down, draw it from the swing high to the swing low. The levels we care about are 0.382, 0.5, and 0.618.`,
    `Now look at the 20 EMA. If the 20 EMA is sitting near the 0.5 or 0.618 pullback area, that zone becomes more important. Why? Because two tools are pointing to the same area: trend location and pullback structure.`,
    `But do not enter immediately. Wait for price reaction. If price taps the zone, holds it, and starts moving away, then we can plan the trade. If price breaks through the 0.618 level and loses the 20 EMA, the setup is invalid.`,
    `Example: BTC makes a clean impulse from a swing low to a swing high. You draw Fibonacci on that move. If the 0.5 pullback is near the 20 EMA, that becomes your attention zone. Not automatic entry. Attention zone.`,
    `Now wait for the reaction. Does price hold the zone? Does RSI or MACD support the bounce? Is your stop loss clear below the zone? If yes, you can create a plan. If price slices through the zone, you leave it alone.`,
    `This is how KC can explain it clearly: Fibonacci gives us the map, 20 EMA gives us the trend line, and the candle reaction gives us the trigger.`,
    `For target, keep it simple. First target is the previous high for longs or previous low for shorts. Stop loss goes beyond the pullback zone. Do not put the stop exactly on the EMA, because normal candles can touch it and shake you out.`,
    `For LBank mention, use this wording: "If you want to practice this on LBank, use invite code [CHANGE THIS: LBank invite code]. If there is a deposit or fee campaign, update this line before recording: [CHANGE THIS: offer]. But the real value is not the code. The real value is having a clear invalidation level."`,
    `Close with this: confluence does not mean certainty. It means better quality. 20 EMA plus Fibonacci gives you a better zone, but risk management still protects you when the market is wrong.`,
    `Homework: draw Fibonacci on one BTC, gold, or SOL move. Mark where the 20 EMA overlaps with the Fibonacci zone. Then write your entry, stop loss, and target.`
  ];
}

function getBias(m) {
  const hist = m.macd - m.signal;
  if (m.rsi >= 55 && hist > 0) return "偏多延续，但不追高，等回踩确认";
  if (m.rsi <= 45 && hist < 0) return "偏弱，优先等反弹失败或重新站回关键位";
  return "震荡，先等价格靠近关键位，不在中间开仓";
}

function formatPrice(value) {
  if (value >= 1000) return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (value >= 10) return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return value.toLocaleString(undefined, { maximumFractionDigits: 4 });
}

function formatUpdatedAt(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date);
}

function displaySymbol(symbol) {
  return symbol === "XAUUSD" ? "Gold" : symbol.replace("USDT", "");
}
