const START_MONDAY = new Date("2026-06-01T00:00:00+08:00");
const WEEKLY_UPDATE_DAYS = ["每日", "每日", "每日"];
const PREVIOUS_WEEK_DATES = ["2026-05-25", "2026-05-27", "2026-05-29"];
const OLDER_MARKET_READOUT_DATES = ["2026-05-18", "2026-05-20", "2026-05-22"];

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
        date: "2026-06-01",
        publishDate: "2026-06-01",
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
        date: "2026-06-03",
        publishDate: "2026-06-03",
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
        date: "2026-06-05",
        publishDate: "2026-06-05",
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
        date: "2026-05-12",
        publishDate: "2026-05-12",
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
        date: "2026-06-01",
        publishDate: "2026-06-01",
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
        date: "2026-06-03",
        publishDate: "2026-06-03",
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
        date: "2026-06-05",
        publishDate: "2026-06-05",
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
        date: "2026-05-12",
        publishDate: "2026-05-12",
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
        date: "2026-06-01",
        publishDate: "2026-06-01",
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
        date: "2026-06-03",
        publishDate: "2026-06-03",
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
        date: "2026-06-05",
        publishDate: "2026-06-05",
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
        date: "2026-05-12",
        publishDate: "2026-05-12",
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
  const updates = getMarketUpdates(lib);
  const today = formatShanghaiDate(new Date());
  return updates.find(script => script.date === today) || updates[0] || getBaseScripts(lib)[0] || lib.scripts[0];
}

function formatShanghaiDate(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date).reduce((acc, p) => (acc[p.type] = p.value, acc), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
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
  const baseScripts = getBaseScripts(state.lib);
  const marketUpdates = getMarketUpdates(state.lib);
  const archivedScripts = getArchivedScripts(state.lib);
  document.querySelector("#script-list").innerHTML = `
    <div class="script-group-title">
      <span>本周三篇基础稿件</span>
      <p>这三篇是本周固定教学框架，适合提前排期录制；刷新行情只更新价格、涨跌幅和指标，不会覆盖脚本主题。</p>
    </div>
    ${baseScripts.map(script => renderScriptCard(script, getScheduleLabel(script))).join("")}
    <div class="script-group-title market-title">
      <span>每日近期行情解读</span>
      <p>每日行情解读会按 KOL 风格跟进当天市场状态；录制前点“刷新行情”，价格、涨跌幅、趋势和口播行情段会同步更新。</p>
    </div>
    ${marketUpdates.map(script => renderScriptCard(script, getScheduleLabel(script))).join("")}
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
    <article class="script-card ${getScriptId(script) === getScriptId(state.script) ? "current" : ""}" data-open="${getScriptId(script)}">
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
  const script = getAllScripts(state.lib).find(s => getScriptId(s) === String(week)) || state.script;
  state.script = script;
  document.querySelector("#directory").hidden = true;
  document.querySelector("#detail").hidden = false;
  renderDetail(script);
  history.replaceState(null, "", `#${getScriptId(script)}`);
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
      <p class="eyebrow">Page 2 · ${getScriptTypeLabel(state.lib, script)}</p>
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

function getBaseScripts(lib) {
  return lib.scripts.slice(0, 3);
}

function getArchivedScripts(lib) {
  const archivedBaseScripts = getBaseScripts(lib).map((script, index) => ({
    ...script,
    id: `${lib.name.toLowerCase()}-base-${PREVIOUS_WEEK_DATES[index]}`,
    date: PREVIOUS_WEEK_DATES[index],
    publishDate: PREVIOUS_WEEK_DATES[index]
  }));
  return [...archivedBaseScripts, ...getArchivedMarketUpdates(lib), ...lib.scripts.slice(3)];
}

function getAllScripts(lib) {
  return [...getBaseScripts(lib), ...getMarketUpdates(lib), ...getArchivedScripts(lib)];
}

function getScriptId(script) {
  return String(script.id || script.week);
}

function getScriptTypeLabel(lib, script) {
  if (script.kind === "market") return "近期行情解读稿件";
  if (getBaseScripts(lib).includes(script)) return "本周基础稿件";
  return "历史归档脚本";
}

function getScheduleLabel(script) {
  if (script.label) return script.label;
  const map = { 0: "每日", 1: "每日", 2: "每日" };
  return map[script.week] || "历史稿件";
}

function getMarketUpdateConfig(lib) {
  const configs = {
    William: {
      tag: "ICT 行情解读",
      assets: "BTC + ETH",
      indicators: "Market Structure / RSI / MACD",
      focus: "用 ICT/SMC 的结构、流动性和确认逻辑解读当天行情。",
      style: "先讲 liquidity，再讲 structure shift，最后才讲 entry 和 invalidation。"
    },
    KC: {
      tag: "20 EMA 行情解读",
      assets: "BTC + Gold/SOL",
      indicators: "20 EMA / RSI / ATR",
      focus: "用 20 EMA Blueprint 解读当天行情，重点回答 entry、SL、TP。",
      style: "先判断价格在 20 EMA 上方还是下方，再决定是等回踩、等 reclaim，还是观望。"
    },
    Caven: {
      tag: "Scalp 行情解读",
      assets: "BTC + SOL",
      indicators: "Liquidity Sweep / VWAP / Volume",
      focus: "用短线流动性、VWAP 和成交量解读当天行情。",
      style: "先找前高前低和 session high/low，再看扫单后有没有回收 VWAP。"
    }
  };
  return configs[lib.name];
}

function getMarketUpdates(lib) {
  const cfg = getMarketUpdateConfig(lib);
  return [
    buildMarketUpdate(lib.name, cfg, "mon-market", "每日", "2026-06-08", "当日行情解读", "当天最新市场变化"),
    buildMarketUpdate(lib.name, cfg, "wed-market", "每日", "2026-06-08", "当日行情跟进", "当天最新市场变化"),
    buildMarketUpdate(lib.name, cfg, "fri-market", "每日", "2026-06-08", "当日行情复盘", "当天最新市场变化")
  ];
}

function getArchivedMarketUpdates(lib) {
  const cfg = getMarketUpdateConfig(lib);
  return [
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-07", "当日行情解读", "当天最新市场变化", JUNE_7_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-07", "当日行情跟进", "当天最新市场变化", JUNE_7_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-07", "当日行情复盘", "当天最新市场变化", JUNE_7_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-06", "当日行情解读", "当天最新市场变化", JUNE_6_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-06", "当日行情跟进", "当天最新市场变化", JUNE_6_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-06", "当日行情复盘", "当天最新市场变化", JUNE_6_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-05", "当日行情解读", "当天最新市场变化", JUNE_5_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-05", "当日行情跟进", "当天最新市场变化", JUNE_5_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-05", "当日行情复盘", "当天最新市场变化", JUNE_5_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-04", "当日行情解读", "当天最新市场变化", JUNE_4_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-04", "当日行情跟进", "当天最新市场变化", JUNE_4_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-04", "当日行情复盘", "当天最新市场变化", JUNE_4_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-03", "当日行情解读", "当天最新市场变化", JUNE_3_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-03", "当日行情跟进", "当天最新市场变化", JUNE_3_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-03", "当日行情复盘", "当天最新市场变化", JUNE_3_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-02", "当日行情解读", "当天最新市场变化", JUNE_2_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-02", "当日行情跟进", "当天最新市场变化", JUNE_2_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-02", "当日行情复盘", "当天最新市场变化", JUNE_2_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-06-01", "当日行情解读", "当天最新市场变化", JUNE_1_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-06-01", "当日行情跟进", "当天最新市场变化", JUNE_1_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-06-01", "当日行情复盘", "当天最新市场变化", JUNE_1_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "历史稿件", "2026-05-25", "当日行情解读", "当天最新市场变化", PREVIOUS_WEEK_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "历史稿件", "2026-05-27", "当日行情跟进", "当天最新市场变化", PREVIOUS_WEEK_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "历史稿件", "2026-05-29", "当日行情复盘", "当天最新市场变化", PREVIOUS_WEEK_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "mon-market", "周一", OLDER_MARKET_READOUT_DATES[0], "近两天行情解读", "周末到周一的市场变化", ARCHIVED_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "wed-market", "周三", OLDER_MARKET_READOUT_DATES[1], "近两天行情跟进", "周一到周三的市场变化", ARCHIVED_MARKET_READOUT_OVERRIDES, true),
    buildMarketUpdate(lib.name, cfg, "fri-market", "周五", OLDER_MARKET_READOUT_DATES[2], "近一周行情复盘", "本周整体市场变化", ARCHIVED_MARKET_READOUT_OVERRIDES, true)
  ];
}

function buildMarketUpdate(name, cfg, id, label, date, titleTail, windowText, overrides = MARKET_READOUT_OVERRIDES, archived = false) {
  const override = overrides[name]?.[id] || {};
  return {
    id: `${name.toLowerCase()}-${id}${archived ? `-${date}` : ""}`,
    kind: "market",
    label,
    date,
    title: override.title || `${cfg.tag}：${titleTail}`,
    indicators: cfg.indicators,
    assets: cfg.assets,
    duration: "5-7 分钟",
    summary: override.summary || `${name} 用自己的交易框架解读${windowText}，录制前点击刷新行情，让价格、涨跌幅和趋势判断进入口播稿。`,
    hook: override.hook || `今天这条不是固定教学课，而是 ${name} 的${windowText}。先刷新行情，再把当前 BTC、ETH、SOL 或 Gold 的走势放进框架里讲清楚。`,
    outline: override.outline || [
      `开场：说明这是一条${titleTail}，先看主流资产是否同步。`,
      `行情状态：读取最新价格、24H 涨跌幅、RSI、MACD 和 ATR，判断市场是延续、震荡还是转弱。`,
      `风格框架：${cfg.focus}`,
      `执行提醒：${cfg.style}`,
      "结尾：给群成员一个截图作业，要求标出 entry、SL、TP 和无效条件。"
    ],
    talk: override.talk || [
      `${name} 可以这样讲：今天不要只看价格涨跌，要把行情放进自己的框架里。价格只是结果，结构、动能和风险位才决定这条视频怎么讲。`,
      cfg.style,
      "这条行情解读的目的不是预测涨跌，而是告诉群成员：现在应该主动找机会，还是先等确认。"
    ],
    contextLines: override.contextLines || [],
    marketTemplate: override.marketTemplate || `刷新行情后，根据最新 RSI、MACD、ATR 和 24H 涨跌幅，把主题调整为趋势延续、反弹失败、震荡等待或波动压缩。`,
    assignment: override.assignment || `让成员提交一张最新图表，写出当前行情属于延续、震荡还是转弱，并标出 entry、SL、TP。`
  };
}

const PREVIOUS_WEEK_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 行情解读：周一先读周末区间流动性",
      summary: "William 用 ICT/SMC 处理周末到周一的行情切换：刷新实时数据后，先看周末区间哪侧流动性被扫，再等结构确认。",
      hook: "今天 William 这条周一行情，不预设方向。周末区间已经给出流动性位置，先刷新行情，看哪一边被拿掉，再判断 Monday move 有没有 structure shift。",
      outline: [
        "开场：说明周一先处理周末到主交易时段的转换，不用固定价位预判方向。",
        "流动性：标出周末形成的前高/前低，观察周一是否先扫 buy-side 或 sell-side liquidity。",
        "结构：扫单后只有出现 BOS 或 CHOCH，才进入 entry setup；没有转换就继续读行情。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，确认结构是否有同步动能。",
        "执行：等 FVG 或 order block 回踩，画出 invalidation，不追周一第一段扩张。"
      ],
      talk: [
        "William 可以这样讲：Monday 的第一件事不是猜方向，而是确认周末留在图上的 liquidity 被谁拿走。",
        "如果扫低以后重新收回结构，并且 BTC 与 ETH 动能同步修复，再讲 bullish CHOCH 后等待折价回踩。",
        "如果扫高以后马上失守结构，或者两张图不同步，就把它当作 liquidity grab，先保护风险而不是追 entry。"
      ],
      contextLines: [
        "The Monday context is the transition out of weekend trading into the first full session of the week. Refresh live data to judge whether the weekend range is being accepted or swept before stating a direction.",
        "For William, turn that live read into ICT and SMC logic: locate liquidity, wait for CHOCH or BOS, then plan the retracement and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的实时动能与扫低回收结构一致，主讲 bullish CHOCH 后的回踩确认；如果扫高失败或动能不同步，主讲 liquidity grab、无效位和等待。",
      assignment: "让成员提交 BTC 或 ETH 周一最新 4H 图，标出周末区间、被扫的 liquidity、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 行情解读：周三跟进扫单后的结构延续",
      summary: "William 用 ICT/SMC 跟进周一到周三的最新两日行情：先看早周扫单后有没有延续结构，再决定讲回踩确认还是反弹失败。",
      hook: "今天 William 这条周三行情跟进，不是重新猜方向，而是检查周一那次 liquidity move 之后，市场有没有把结构真正延续出来。",
      outline: [
        "开场：把周三定义成对近两天行情的 follow-up，不用固定价位，而是复盘周初扫单后的延续质量。",
        "流动性：先标出周一到周三被扫的前高、前低和 session edge，确认 buy-side 还是 sell-side liquidity 先被拿掉。",
        "结构：如果扫单后已经形成更清楚的 BOS 或 CHOCH，主讲回踩确认；如果只是反弹到 broken structure，主讲 failed recovery。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD、ATR，判断结构延续有没有动能同步，而不是只看单边价格。",
        "执行：只保留有 FVG、order block 和 invalidation 的 setup；没有二次确认，就把重点放在等待。"
      ],
      talk: [
        "William 可以这样讲：周三最重要的不是今天涨了还是跌了，而是周初那次 sweep 之后，市场有没有把新的结构站稳。",
        "如果 BTC 扫低后已经走出 higher low，同时 ETH 的动能也在修复，今天就讲 bullish CHOCH 之后等折价回踩，而不是追已经拉开的价格。",
        "如果价格只是反弹回到 broken structure 附近，MACD 和 RSI 也没有同步改善，那这更像 liquidity run 之后的弱修复，不是 clean continuation。"
      ],
      contextLines: [
        "The Wednesday context is a two-day follow-up on the move that started early this week. Refresh live data first, then judge whether the initial sweep created a stable structure shift or only a temporary reaction.",
        "For William, keep the readout inside ICT and SMC logic: locate the liquidity that was taken, identify whether BOS or CHOCH held, and explain where a pullback becomes valid or invalid."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep 后的结构延续和回踩确认；如果反弹没有站稳结构或动能分化，主讲 broken structure retest、降低预期和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 周三最新 4H 图，标出近两天的 liquidity sweep、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 行情解读：周五复盘本周 sweep 后的结构选择",
      summary: "William 用 ICT/SMC 复盘本周行情：不写死点位，刷新实时数据后判断周内流动性被扫后是否真的形成 BOS 或 CHOCH。",
      hook: "今天 William 这条周五复盘，不是总结谁猜对价格，而是复盘本周哪里扫了 liquidity，哪里真的给了 structure shift，哪里只是回到供应区或需求区测试。",
      outline: [
        "开场：把周五定位成本周结构复盘，先用实时数据确认 BTC/ETH 当前状态，不用固定价格讲方向。",
        "流动性：标出本周最清楚的 buy-side 和 sell-side liquidity，说明哪一侧被扫后市场有反应。",
        "结构：如果 sweep 后形成 BOS 或 CHOCH，主讲回踩确认；如果只是回到 broken structure，主讲反弹失败或继续等待。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，判断周五修复或回落是否有同步动能。",
        "执行：周末前不追最后一段扩张，只保留有 FVG、order block、SL 和第一目标的计划。"
      ],
      talk: [
        "William 可以这样讲：本周最重要的不是涨跌幅本身，而是 liquidity 被拿掉以后，市场有没有给我们可交易的结构。",
        "如果 BTC 扫低后重新形成 higher low，并且 ETH 的 RSI 与 MACD 同步修复，周五就讲 bullish CHOCH 之后等 discount 回踩。",
        "如果价格只是回到前面跌破的结构附近，动能没有同步改善，那就是 broken structure retest，不是追多信号。"
      ],
      contextLines: [
        "The Friday context is a full-week recap. Refresh live data first, then judge whether this week's move produced a real structure shift or only a reaction back into prior supply or demand.",
        "For William, keep the readout inside ICT and SMC: identify the liquidity taken this week, confirm whether BOS or CHOCH followed, and define where the trade idea becomes invalid."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 同步修复且 MACD 柱体改善，主讲 sweep low 后的 bullish CHOCH 和回踩确认；如果修复不同步、结构仍未 reclaim 或 ATR 收缩，主讲 supply retest、降低仓位和等待下周新结构。",
      assignment: "让成员提交 BTC 或 ETH 本周 4H 图，标出周内 liquidity sweep、BOS/CHOCH、周五收盘前的 entry zone、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 行情解读：周一先等 reclaim 或守线",
      summary: "KC 用 20 EMA Blueprint 解读周末到周一的走势：刷新后先定价格与均线的位置，再用 RSI 和 ATR 计划 entry 与 target。",
      hook: "KC 今天周一只问一个清楚的问题：周末 move 进入新一周以后，价格守住 20 EMA，还是需要先等 reclaim？",
      outline: [
        "开场：周一先处理最近两天 move，不因周末波动直接追单。",
        "位置：刷新行情后检查 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是正在 reclaim。",
        "确认：站上或守住 EMA 后，再用实时 RSI 和 MACD 判断动能质量。",
        "目标：用实时 ATR 给第一目标和止损留合理空间，不写固定目标价格。",
        "执行：只讲 EMA 附近的回踩或 reclaim 后第一次回踩，其他位置继续等待。"
      ],
      talk: [
        "KC 可以这样讲：a weekend move is not an entry by itself. On Monday, the Blueprint starts with one question: where is price relative to the 20 EMA?",
        "如果价格守住 EMA，再结合 RSI 质量和 ATR 规划目标；如果还在 EMA 下方，今天最好的 setup 可能就是等待 reclaim。",
        "Target 不能从情绪开始，必须从实时 ATR 和清晰的 stop loss 开始。"
      ],
      contextLines: [
        "The Monday context is a fresh read of the weekend-to-week-open transition. Refresh the chart before recording, then classify the move by its relationship to the 20 EMA rather than assuming continuation.",
        "For KC, the 20 EMA Blueprint keeps the message disciplined: location first, momentum confirmation second, ATR-based target and stop third."
      ],
      marketTemplate: "刷新后如果主图守住或重新站上 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方或 ATR 不支持目标，主讲等待 reclaim 或减少交易。",
      assignment: "让成员提交 BTC、Gold 或 SOL 周一最新图，标出 20 EMA、reclaim 或拒绝位置、entry zone、SL 以及按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 行情解读：周三跟进守线还是假 reclaim",
      summary: "KC 用 20 EMA Blueprint 跟进周一到周三的最新两日走势：先看价格是守住均线、重新 reclaim，还是只给了一个假反弹。",
      hook: "KC 今天周三只讲一个关键判断：最近两天这段 move，到底是守住 20 EMA 的趋势延续，还是只做了一个看起来很像机会的假 reclaim？",
      outline: [
        "开场：把周三当作近两天行情的 quality check，不追已经离开均线的位置。",
        "位置：刷新行情后先看 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚重新站回去。",
        "确认：如果价格在 EMA 附近，继续看 RSI 是否守住中线，以及 MACD 柱体有没有停止恶化。",
        "目标：用实时 ATR 重新估算第一目标，避免周三在波动收缩时还给过大的 TP。",
        "执行：只有 EMA 附近的第一次回踩或 reclaim 后第一次 pullback 才叫 clean setup，其余位置继续等。"
      ],
      talk: [
        "KC 可以这样讲：the midweek question is not whether the market bounced. The question is whether price actually respected or reclaimed the 20 EMA Blueprint.",
        "如果 BTC 或 SOL 已经重新站上 20 EMA，而且 RSI 回到中线附近，MACD 也不再恶化，今天就讲 reclaim 之后第一次回踩的 entry、SL 和 realistic target。",
        "如果价格只是短暂弹回 EMA 下面，或者 ATR 已经缩小，那就直接告诉群成员：this is a weak bounce, not a clean setup yet."
      ],
      contextLines: [
        "The Wednesday context is a follow-up on the first two trading days of the week. Refresh the page before recording, then classify the move by its relationship to the 20 EMA instead of assuming the bounce is real.",
        "For KC, the Blueprint stays strict: location around the 20 EMA first, RSI and MACD quality second, ATR-based target and stop loss third."
      ],
      marketTemplate: "刷新后如果主图守住或 reclaim 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ATR 收缩或动能没有恢复，主讲假 reclaim、缩短目标或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 周三最新图，标出 20 EMA、守线或假 reclaim 位置、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 行情解读：周五复盘 reclaim 还是普通反弹",
      summary: "KC 用 20 EMA Blueprint 复盘本周行情：刷新实时数据后，先看价格是否尊重或 reclaim 20 EMA，再用 RSI 和 ATR 判断目标是否现实。",
      hook: "KC 今天这条周五复盘要讲得很清楚：一周波动以后，不要先问能不能继续涨，先问价格有没有重新站回 20 EMA Blueprint。",
      outline: [
        "开场：把周五定位成本周复盘，不做固定点位预测，只判断 trend location。",
        "位置：刷新行情后看 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚 reclaim，低于 EMA 就不叫 clean continuation。",
        "确认：RSI 回到中线附近才说明 reclaim 有质量；MACD 继续变弱就按假反弹处理。",
        "目标：用实时 ATR 解释周末前 TP 要现实，不能用情绪化大目标。",
        "执行：只做靠近 EMA 的回踩或 reclaim 后第一次 pullback，错过就等下一个 setup。"
      ],
      talk: [
        "KC 可以这样讲：this week gave us movement, but movement is not a setup. The setup starts only when price respects the 20 EMA Blueprint.",
        "如果 BTC、Gold 或 SOL 已经 reclaim 20 EMA，今天讲第一次回踩、RSI 守中线、ATR 定目标；如果还在 EMA 下方，今天讲等待，不要把普通反弹当趋势恢复。",
        "周五最容易犯的错是用一周的情绪给一个过大的 target，所以一定要让 ATR 决定 TP 是否 realistic。"
      ],
      contextLines: [
        "The Friday context is a weekly recap after several sessions of rotation and volatility. Refresh live data before recording, then classify each chart by its relationship to the 20 EMA.",
        "For KC, the readout should stay inside the 20 EMA Blueprint: trend location first, RSI and MACD quality second, ATR-based target and stop loss third."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 继续走弱或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 本周图，标出 20 EMA、周五是否 reclaim、entry zone、SL、以及按实时 ATR 计算的第一目标。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 行情解读：周一等周末区间 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 处理周一短线：先刷新数据，再等周末区间或 session 边界被扫后的确认。",
      hook: "Caven 今天周一不要追开盘第一根情绪 K 线。先把周末 high/low 和 session level 画出来，等 sweep，再看 VWAP reaction。",
      outline: [
        "开场：把周一定义成周末区间向新 session 过渡的 scalp readout，不先猜方向。",
        "流动性：标出 SOL/BTC 的周末 high/low 与当前 session high/low，等待其中一侧被扫。",
        "VWAP：扫低后回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取实时 RSI 和 ATR，确认当前 range 是否足够支持快速目标。",
        "执行：只在边界反应入场，止损放在 sweep 外侧，区间中间不追。"
      ],
      talk: [
        "Caven 可以这样讲：Monday scalp 最容易亏在一开盘就追，正确顺序是先画周末边界，再等市场扫一边。",
        "如果 SOL 扫低、重新站上 VWAP，而且实时动能支持反应，才有 clean scalp long；扫高失败就是另一套计划。",
        "如果还夹在区间中间，或者 ATR 不给空间，今天就先等下一次 session boundary。"
      ],
      contextLines: [
        "The Monday context is the weekend range meeting a new active session. Refresh live data and let the sweep plus VWAP reaction define the short-term bias.",
        "For Caven, the actionable sequence is session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低并回收 VWAP、且实时 ATR 足够，主讲快速 long scalp；如果扫高失败或仍在 VWAP 下方，主讲 short scalp 或等待下一边界。",
      assignment: "让成员提交 SOL 或 BTC 周一 15M 图，标出周末 high/low、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 行情解读：周三跟进二次 sweep 和 VWAP 反应",
      summary: "Caven 用 liquidity、VWAP 和短线波动跟进周一到周三的最新两日行情：重点看周初边界被扫后，今天还有没有二次确认。",
      hook: "Caven 今天周三不要再追周初那一根情绪 K 线。我们只看最近两天扫过的边界，今天有没有二次 sweep、VWAP reclaim，或者直接变成 trap breakout。",
      outline: [
        "开场：把周三定义成近两天 move 的 scalp follow-up，不讲中间位置，只讲 session boundary。",
        "流动性：标出 SOL/BTC 最近两天最清楚的 session high/low，确认哪一侧已经被扫过，哪一侧今天还可能再测试。",
        "VWAP：第一次 sweep 后如果今天还能站回 VWAP，主讲 continuation scalp；如果重新跌回 VWAP 下方，主讲 failed reclaim。",
        "波动：刷新行情后读取 RSI 和 ATR，确认周三还有没有空间支持第一目标，还是只能做更快的反应单。",
        "执行：最多等两个确认，止损放在最新 sweep 外侧，区间中间和低波动时段都不追。"
      ],
      talk: [
        "Caven 可以这样讲：周三短线最重要的不是再追周初方向，而是看周初那次 sweep 之后，今天有没有二次确认让你重新参与。",
        "如果 SOL 扫低后重新站回 VWAP，而且 RSI 从低位继续修复，今天可以讲 continuation scalp；如果弹一下又掉回 VWAP 下方，那就是 weak reclaim。",
        "如果 ATR 已经缩小，或者价格卡在 session 中间，今天最专业的做法就是告诉成员先等下一次边界反应。"
      ],
      contextLines: [
        "The Wednesday context is a two-day short-term follow-up after the first active sessions of the week. Refresh live data and decide whether the early sweep is being accepted, rejected, or retested.",
        "For Caven, keep the message tight: recent session boundary, liquidity sweep, VWAP reclaim or failure, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在最近两天的边界 sweep 后重新站回 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP 或 ATR 收缩，主讲 failed reclaim、缩短目标或继续等待。",
      assignment: "让成员提交 SOL 或 BTC 周三 15M 图，标出最近两天 session high/low、一次二次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 行情解读：周五复盘 session sweep 和 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 复盘本周短线机会：刷新实时数据后，只交易 session 边界，不在区间中间追。",
      hook: "Caven 今天这条周五复盘很适合短线用户：这一周不是只看方向，而是看你有没有避开中间位置，只等 session high/low、VWAP 和 ATR 给确认。",
      outline: [
        "开场：说明周五是本周 scalp 复盘，重点是哪些 sweep 有确认，哪些只是情绪 K 线。",
        "流动性：标出 SOL/BTC 本周主要 session high/low，说明哪里扫低回收，哪里扫高失败。",
        "VWAP：扫低后重新站回 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新行情后看 RSI 和 ATR，判断周五是否还有足够 range，还是应该缩短目标。",
        "执行：周末前只做边界反应，最多等两个确认，失败立刻离场。"
      ],
      talk: [
        "Caven 可以这样讲：本周这种行情，最亏钱的位置通常不是方向看错，而是在区间中间追第一根情绪 K 线。",
        "如果 SOL 或 BTC 扫 session low 后重新站回 VWAP，并且 RSI 从低位修复，周五可以讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经收缩，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "The Friday context is a full-week scalp recap. Refresh live data first, then decide whether the current session still offers range or whether traders should wait for the next boundary.",
        "For Caven, translate the week into actionable short-term rules: session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待下一个边界。",
      assignment: "让成员提交 SOL 或 BTC 本周 15M 图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月8日先确认反弹是否被市场接受",
      summary: "William 用 ICT/SMC 解读 2026-06-08 当日市场：BTC、ETH、SOL 出现同步反弹，Gold 仍偏承压，今天不追涨，只看扫单后的接受、位移和结构转换是否完整。",
      hook: "William 今天不要把加密市场的快速反弹直接叫趋势恢复。刷新行情后，先标出前一日高低点、亚洲盘边界、反弹高点和最近一次清算低点，再看 liquidity 被扫后有没有真正 acceptance。",
      outline: [
        "开场：把 6月8日定义成反弹接受度检查，先确认风险资产同步修复，而不是直接追多。",
        "流动性：标出前一日高低点、当日 session high/low、反弹高点和最近清算低点，观察 buy-side 或 sell-side liquidity 哪一侧先被拿走。",
        "结构：扫低后要看到 displacement、CHOCH 和回踩接受；扫高后跌回 broken structure 就按反弹派发处理。",
        "动能：刷新后比较 BTC/ETH 的 RSI、MACD 和 ATR，并用 SOL 是否继续同步判断风险偏好广度。",
        "风险：Gold 近期仍承压，说明宏观定价未完全转暖；没有 FVG、order block 和 invalidation 就只做行情解读。"
      ],
      talk: [
        "William 可以这样讲：today the market is giving a rebound, but ICT does not trade the word rebound. We trade liquidity, acceptance, structure shift, and invalidation.",
        "如果 BTC 扫低收回并形成 bullish CHOCH，ETH 与 SOL 也同步修复，才讲 discount 回踩；如果只有 BTC 领先、其他币不确认，就把上冲当 weak retest。",
        "今天的 key levels 用图上的前一日高低点、当日 session 边界、反弹高点和清算低点，不在静态稿件里写死价格。"
      ],
      contextLines: [
        "The June 8 backdrop is a risk-on crypto rebound after the prior liquidation sequence. Bitcoin, Ether, and Solana are all confirmation charts, but the readout must test whether the rebound is being accepted or only squeezing shorts.",
        "Gold remains a macro caution chart after recent pressure. Use it as risk context, then let live crypto structure decide execution."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低、收回前一日区间并形成 CHOCH，主讲 FVG 或 order block 回踩；如果扫高失败、SOL 不同步、MACD 走弱或 ATR 不支持延伸，主讲 liquidity grab 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月8日最新 4H 图，标出前一日高低点、当日 session 边界、清算低点、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月8日区分结构修复和空头回补",
      summary: "William 用 ICT/SMC 跟进 2026-06-08 当日行情：刷新后判断 BTC/ETH 的同步反弹有没有站稳结构，还是只在前期跌破位附近完成空头回补。",
      hook: "William 今天这条跟进只回答一个问题：这波反弹有没有把 liquidity event 转成 tradable structure？没有 BOS、CHOCH 和 retest，就不能叫 clean setup。",
      outline: [
        "开场：说明 6月8日的重点是反弹质量，不用单根上涨 K 线代替结构判断。",
        "流动性：观察反弹高点上方 buy-side liquidity 与清算低点下方 sell-side liquidity，确认哪一侧被扫后更有反应。",
        "结构：站稳 broken structure 并完成回踩才算修复；供应区或前跌破位拒绝则按 short-covering retest 处理。",
        "动能：刷新后用 BTC、ETH、SOL 的 RSI、MACD、ATR 检查同步性和可交易空间。",
        "风险：Gold 的压力说明宏观确认不足，跨资产不同步时 William 只讲 readout，不放大仓位。"
      ],
      talk: [
        "William 可以这样讲：today we separate real structure repair from short covering.",
        "BTC 与 ETH 同步突破短线 swing high 并回踩守住，才讲 bullish BOS；如果 SOL 回落或 ETH 跟不上，就降低确定性。",
        "RSI 和 MACD 只做确认，ATR 只管理空间，entry 仍然来自 liquidity、structure 和 invalidation。"
      ],
      contextLines: [
        "The June 8 follow-up should test whether the crypto rebound can survive a retest rather than treating the bounce itself as confirmation.",
        "Use Bitcoin for primary structure, Ether and Solana for participation, and gold only as macro risk context."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 同步 reclaim 结构、RSI/MACD 改善且回踩守住，主讲 BOS 后确认；如果 SOL 分化、ATR 收缩或价格跌回 broken structure 下方，主讲二次派发和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月8日最新 4H 图，标出 sweep、displacement、BOS/CHOCH、retest、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月8日只保留完整反弹 sequence",
      summary: "William 用 2026-06-08 当日复盘筛选反弹结构：只有 liquidity、acceptance、displacement、structure shift、retest 和 invalidation 完整出现才转成计划。",
      hook: "William 今天不复盘谁追到反弹，只复盘市场有没有给完整 sequence。涨幅再快，缺少结构和无效位也不能变成 entry。",
      outline: [
        "开场：复盘 6月8日已发生的 sweep 与结构接受，不把当日反弹直接外推成趋势。",
        "流动性：回看前一日高低点、当日 session 边界、反弹高点和清算低点中最清楚的一次扫单。",
        "结构：把 acceptance、BOS/CHOCH、FVG 或 order block 回踩和 invalidation 画完整。",
        "动能：刷新后用 BTC/ETH 的 RSI、MACD、ATR，并参考 SOL 是否同步验证复盘结论。",
        "风险：Gold 仍是宏观压力提醒；没有完整 sequence 就明确记录 no trade。"
      ],
      talk: [
        "William 可以这样讲：the lesson is whether the rebound became structure, not whether price moved fast.",
        "如果 sweep、acceptance、CHOCH 和 retest 都出现，才是 ICT setup；如果只有快速反弹或单币领先，那只是 readout。",
        "BTC、ETH、SOL 没有同步时缩小仓位，ATR 收缩时缩小目标。"
      ],
      contextLines: [
        "Use this as the June 8 same-day recap of a risk-on crypto rebound after the prior liquidation sequence.",
        "Reward confirmed structure and cross-market participation, not speed, candle size, or bottom-picking."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已给出 sweep + acceptance + displacement + CHOCH + retest，主讲确认后的计划；如果只有反抽、SOL 不同步或动能衰减，主讲为什么没有 entry。",
      assignment: "让成员提交一张 6月8日复盘图，必须标出 sweep、acceptance、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月8日先看反弹是否站回 Blueprint",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-08 当日市场：BTC、ETH、SOL 同步反弹，但今天先看价格在 20 EMA 上方、下方还是刚完成 reclaim，再谈 entry、SL、TP。",
      hook: "KC 今天不要先问这波能涨多远。刷新行情以后先回答：is price below the 20 EMA, reclaiming it, or holding the first pullback?",
      outline: [
        "开场：把 6月8日定义成 rebound location check，不追已经离开均线太远的位置。",
        "位置：标出主图 20 EMA、前一日高低点、当日 session 边界和反弹高点。",
        "确认：只有价格位置与实时 RSI、MACD 同步改善，才把反弹定义成 clean reclaim。",
        "目标：用实时 ATR 约束 TP；ETH/SOL 若不确认，主动缩小仓位和目标。",
        "风险：Gold 仍偏承压，说明宏观确认不足，KC 继续用 Blueprint 而不是情绪决定交易。"
      ],
      talk: [
        "KC 可以这样讲：the bounce is not the Blueprint. Location, confirmation, stop, and target are the Blueprint.",
        "如果 BTC 或 SOL reclaim 20 EMA、RSI 守中线且 MACD 改善，今天讲第一次 pullback；如果仍在均线下方，就等。",
        "前一日高低点和反弹高点是最近 key levels，但具体报价必须由刷新后的页面数据和图表提供。"
      ],
      contextLines: [
        "The June 8 market is testing whether a broad crypto rebound can turn into a clean 20 EMA reclaim. Bitcoin may lead, but Ether and Solana need to confirm broader participation.",
        "Gold remains a macro caution chart. For KC, the live 20 EMA Blueprint remains the execution filter."
      ],
      marketTemplate: "刷新后如果主图 reclaim 或守住 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ETH/SOL 不同步或 ATR 不支持目标，主讲等待 reclaim 或缩短 TP。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月8日最新图，标出 20 EMA、前一日高低点、reclaim 或拒绝位置、entry、SL 和按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月8日过滤假 reclaim",
      summary: "KC 用 20 EMA Blueprint 跟进 2026-06-08 当日行情：第一次回踩能否守线、RSI/MACD 是否确认、ATR 是否支持目标，决定反弹是否可交易。",
      hook: "KC 今天的 quality check 很简单：did price reclaim the 20 EMA and hold it on the first pullback? 没有守住，就没有 continuation setup。",
      outline: [
        "开场：把当日跟进定义成 reclaim quality check，避免追反弹尾端。",
        "位置：检查主图是否仍靠近 20 EMA，以及第一次 pullback 是否守在线的正确一侧。",
        "确认：刷新后用 RSI 中线和 MACD 柱体判断动能是真修复还是短暂反抽。",
        "目标：用实时 ATR 制定第一目标；波动收缩或跨币分化时降低预期。",
        "风险：Gold 偏弱时，不把 crypto 反弹自动当作全市场风险偏好恢复。"
      ],
      talk: [
        "KC 可以这样讲：a valid reclaim must survive the first pullback.",
        "如果 BTC 在 EMA 上方但 ETH 或 SOL 没跟，可以有 readout，但不一定有 full-size trade。",
        "如果价格碰到 EMA 后马上被拒绝，this is resistance, not a late long entry."
      ],
      contextLines: [
        "The June 8 quality check is whether the crypto rebound can hold through a first pullback instead of becoming a fake reclaim.",
        "Use live crypto indicators for execution and gold only for macro context."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方完成第一次回踩、RSI 守中线且 MACD 改善，主讲 clean continuation；如果跌回 EMA 下方、ATR 收缩或跨资产分化，主讲 fake reclaim 和等待。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月8日最新图，标出 20 EMA、第一次回踩、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月8日用 ATR 管住反弹预期",
      summary: "KC 用 2026-06-08 当日复盘把 BTC、SOL 与 Gold 背景转成 Blueprint 作业：20 EMA 定位置，RSI/MACD 定质量，ATR 定现实目标。",
      hook: "KC 今天复盘不要比较谁抓到最大反弹。Show me the EMA location, confirmation, stop loss, and an ATR-based target。",
      outline: [
        "开场：复盘今天有没有尊重 20 EMA，而不是只看涨跌幅。",
        "位置：标出主图与 20 EMA、前一日高低点和第一次回踩的关系。",
        "确认：刷新后用 RSI、MACD 判断修复、拒绝还是低动能震荡。",
        "目标：用实时 ATR 检查 TP 是否现实，反弹已经扩张时不扩大预期。",
        "转化：要求成员提交 entry、SL、TP，并写明目标为何符合当前 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask for target, show me the EMA location and the ATR.",
        "如果 BTC 或 SOL reclaim 后守住第一次回踩，复盘 clean continuation；如果始终在 EMA 下方，复盘为什么没有 entry。",
        "Gold 仍偏弱、ETH/SOL 分化和 ATR 变化都提醒我们 discipline comes before prediction."
      ],
      contextLines: [
        "Use this as a June 8 same-day Blueprint recap during a broad but still confirmation-dependent crypto rebound.",
        "Every conclusion should map to 20 EMA location, momentum quality, ATR-based target, and a predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 走弱、ATR 收缩或 ETH/SOL 不确认，主讲短目标或观望。",
      assignment: "让成员提交一张 6月8日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月8日只做反弹边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-08 当日短线：BTC/SOL 在同步反弹中进入确认阶段，只交易前一日与 session 边界的扫单后反应。",
      hook: "Caven 今天不要追第一根快速反弹 K 线。先刷新行情，把 SOL/BTC 的前一日 high/low、反弹高点、session 边界和 VWAP 画出来。",
      outline: [
        "开场：说明 6月8日是 rebound scalp readout，重点不是方向口号，而是边界反应。",
        "流动性：标出 SOL/BTC 前一日高低点、当日 session high/low、反弹高点和最近清算低点。",
        "VWAP：扫低并回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取 RSI、MACD 和 ATR，并用 ETH 是否同步检查参与度。",
        "风险：Gold 偏承压不能给短线加密确认；crypto 仓位要小，止损放在 sweep 外侧。"
      ],
      talk: [
        "Caven 可以这样讲：rebound speed is not quality. We trade the boundary reaction, not the candle size.",
        "如果 SOL 扫 session low、收回边界并站上 VWAP，而且 BTC 同步，才有 quick long scalp；扫高后失去 VWAP 就讲 trap breakout。",
        "最近 key levels 都来自当前图表边界，静态稿件不写死报价。"
      ],
      contextLines: [
        "The June 8 scalp backdrop is a broad crypto rebound that still needs session-level confirmation. Bitcoin is testing stabilization while Ether and Solana show whether risk appetite is broad enough.",
        "Gold is a macro caution chart, not a live trigger for crypto scalp execution. Keep decisions inside current session levels, VWAP, and ATR."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低、收回 session 边界并站上 VWAP，且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍低于 VWAP 或卡在中间，主讲 short scalp 或等待。",
      assignment: "让成员提交 SOL 或 BTC 6月8日 15M 图，标出前一日 high/low、清算低点、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月8日看 VWAP 回收能否维持",
      summary: "Caven 用 liquidity、VWAP 和短线波动跟进 2026-06-08：只看扫高/扫低后的回收或拒绝，并用 ATR 判断反弹行情是否还有可交易空间。",
      hook: "Caven 今天跟进不要问能不能追。先问价格 sweep 了吗，回到 VWAP 了吗，ATR 还够吗？三个问题少一个就等。",
      outline: [
        "开场：把当日跟进定义成 session boundary check，不做方向预测。",
        "流动性：确认 SOL/BTC 哪一侧 session liquidity 已被扫，哪一侧仍是下一目标。",
        "VWAP：扫低后站回并守住 VWAP 才讲 continuation；扫高后跌回下方就讲 trap breakout。",
        "波动：刷新后用 RSI、MACD 和 ATR 检查动能、空间与跨币同步。",
        "执行：区间中间、低 ATR、VWAP 反复穿越都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is sweep plus VWAP reaction, not a green candle.",
        "如果 SOL 扫低后站回 VWAP，RSI 修复且 BTC 同步，可以讲 quick long scalp。",
        "如果价格回到 VWAP 又马上失守，shorten the target or skip the trade."
      ],
      contextLines: [
        "The June 8 follow-up should focus on whether the crypto rebound can hold VWAP after a liquidity sweep.",
        "Live ATR and cross-crypto participation decide whether the move has enough range for a scalp."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后守住 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和等待。",
      assignment: "让成员提交 SOL 或 BTC 6月8日 15M 图，标出 session high/low、一次 sweep、VWAP 回收或拒绝、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月8日只复盘边界与 VWAP 反应",
      summary: "Caven 用 2026-06-08 当日复盘把 session sweep、VWAP、RSI 和 ATR 转成短线作业：中间位置不点评，失败立即退出。",
      hook: "Caven 今天不复盘你追了哪根 K 线，只复盘有没有边界、有没有 sweep、有没有 VWAP reaction、有没有足够 ATR。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 前一日高低点、反弹高点、清算低点和被扫的 session 边界。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI、MACD 和 ATR 判断这笔 scalp 是否有足够空间。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：the clean trade is the reaction after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后站回 VWAP，并且 RSI 修复，复盘 clean long scalp；扫高后跌回 VWAP 下方就复盘 trap breakout。",
        "ATR 已经缩小时目标就要变小，反弹行情没有确认就不要留高杠杆仓位。"
      ],
      contextLines: [
        "Use this as the June 8 same-day scalp recap during a broad crypto rebound that still needs session confirmation.",
        "Every recap should map to session boundary, sweep, VWAP reaction, momentum, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待。",
      assignment: "让成员提交一张 6月8日 15M 复盘图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_7_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月7日先看周末反弹能否形成接受",
      summary: "William 用 ICT/SMC 解读 2026-06-07 当日市场：BTC 在清算低点附近反复争夺，ETH 与 SOL 仍偏弱，今天只看流动性被扫后能否形成接受、位移和结构转换。",
      hook: "William 今天不要把周末反弹直接叫反转。刷新行情后，先标出前一日高低点、清算低点、周末反弹高点和当前 session 边界，再看哪一侧 liquidity 被拿走。",
      outline: [
        "开场：把 6月7日定义成周末 stabilization check，不预设延续反弹或再次破位。",
        "流动性：标出前一日高低点、近期清算低点、周末反弹高点和亚洲盘边界，等待 sweep。",
        "结构：扫低后需要 displacement、CHOCH 和回踩接受；扫高后跌回 broken structure 就按弱反弹处理。",
        "动能：刷新后比较 BTC/ETH 的 RSI、MACD 和 ATR，并用 SOL 是否同步判断风险偏好广度。",
        "风险：Gold 周末休市，最新收盘只代表强就业、美元和收益率压力；薄流动性下没有 invalidation 就不进场。"
      ],
      talk: [
        "William 可以这样讲：a liquidation low can attract buyers, but ICT needs a sequence, not a guess.",
        "如果 BTC 扫低收回并形成 bullish CHOCH，ETH 也同步守住结构，才讲 discount 回踩；如果 SOL 和 ETH 继续落后，就把 BTC 上冲当 weak retest。",
        "今天的 key levels 用图上的前一日高低点、清算低点、反弹高点和 session 边界，不在静态稿件里写死价格。"
      ],
      contextLines: [
        "The June 7 backdrop is a fragile weekend stabilization attempt after a liquidation-heavy selloff. Bitcoin is testing whether reclaimed ground can hold, while Ether and Solana remain weaker confirmation charts.",
        "Gold is closed for the weekend. Its latest jobs-driven dollar and yield pressure is macro context only; live crypto structure decides execution."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低、收回前一日区间并形成 CHOCH，主讲 FVG 或 order block 回踩；如果反弹在 broken structure 被拒绝、SOL 不同步或 MACD 继续弱，主讲 liquidity grab 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月7日最新 4H 图，标出前一日高低点、清算低点、周末反弹高点、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月7日确认是结构修复还是二次派发",
      summary: "William 用 ICT/SMC 跟进 2026-06-07 当日行情：刷新后判断 BTC/ETH 的周末回升有没有站稳结构，还是只在薄流动性中回测供应区。",
      hook: "今天 William 这条跟进只回答一个问题：市场有没有把清算后的反弹转成可接受的新结构？没有 BOS、CHOCH 和 retest，就只有 market readout。",
      outline: [
        "开场：复查周末反弹质量，不用单根绿色 K 线代替结构。",
        "流动性：观察反弹高点上方 buy-side liquidity 与清算低点下方 sell-side liquidity 哪一边先被扫。",
        "结构：站稳 broken structure 并完成回踩才算修复；供应区拒绝则按二次派发处理。",
        "动能：用刷新后的 RSI、MACD、ATR 检查 BTC、ETH、SOL 是否同步以及是否仍有合理空间。",
        "风险：周日流动性偏薄，Gold 休市，仓位和杠杆都要低于正常主交易时段。"
      ],
      talk: [
        "William 可以这样讲：today we separate structure repair from short covering.",
        "BTC 与 ETH 同步突破短线 swing high 并回踩守住，才讲 bullish BOS；如果 SOL 继续弱或回踩失守，就降低确定性。",
        "RSI 和 MACD 只做确认，ATR 只管理空间，entry 仍然来自 liquidity、structure 和 invalidation。"
      ],
      contextLines: [
        "The June 7 follow-up should test whether the weekend rebound can survive a retest rather than treating the bounce itself as confirmation.",
        "Use Bitcoin for primary structure, Ether and Solana for participation, and closed-session gold only as macro risk context."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 同步 reclaim 结构、RSI/MACD 改善且回踩守住，主讲 BOS 后确认；如果 SOL 分化、ATR 收缩或价格跌回 broken structure 下方，主讲二次派发和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月7日最新 4H 图，标出 sweep、displacement、BOS/CHOCH、retest、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月7日只保留完整交易 sequence",
      summary: "William 用 2026-06-07 当日复盘筛选周末结构：只有 liquidity、acceptance、displacement、structure shift、retest 和 invalidation 完整出现才转成计划。",
      hook: "William 今天不复盘谁抄到底，只复盘市场有没有给完整 sequence。反弹幅度再大，缺少结构和无效位也不能变成 entry。",
      outline: [
        "开场：复盘 6月7日已发生的 sweep 与结构接受，不预测下周开盘。",
        "流动性：回看前一日高低点、清算低点、反弹高点和 session 边界中最清楚的一次扫单。",
        "结构：把 acceptance、BOS/CHOCH、FVG 或 order block 回踩和 invalidation 画完整。",
        "动能：刷新后用 BTC/ETH 的 RSI、MACD、ATR，并参考 SOL 是否同步验证复盘结论。",
        "风险：周末薄流动性和 Gold 休市都限制跨市场确认，没有完整 sequence 就明确记录 no trade。"
      ],
      talk: [
        "William 可以这样讲：the lesson is whether liquidity became structure, not whether price bounced.",
        "如果 sweep、acceptance、CHOCH 和 retest 都出现，才是 ICT setup；如果只有快速影线或单币反弹，那只是 readout。",
        "BTC、ETH、SOL 没有同步时缩小仓位，ATR 收缩时缩小目标。"
      ],
      contextLines: [
        "Use this as the June 7 same-day recap of a fragile weekend stabilization attempt after heavy liquidations.",
        "Reward confirmed structure and cross-market participation, not speed, candle size, or bottom-picking."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已给出 sweep + acceptance + displacement + CHOCH + retest，主讲确认后的计划；如果只有反抽、SOL 不同步或动能衰减，主讲为什么没有 entry。",
      assignment: "让成员提交一张 6月7日复盘图，必须标出 sweep、acceptance、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月7日先判断周末反弹的位置",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-07 当日市场：BTC 尝试稳定但 ETH/SOL 仍偏弱，今天先看价格在 20 EMA 上方、下方还是刚完成 reclaim。",
      hook: "KC 今天不要先问反弹 target。刷新行情以后先回答：is price below the 20 EMA, reclaiming it, or holding the first pullback?",
      outline: [
        "开场：把 6月7日定义成 weekend location check，不追清算后的快速反弹。",
        "位置：标出主图 20 EMA、前一日高低点、清算低点和周末反弹高点。",
        "确认：只有价格位置与实时 RSI、MACD 同步改善，才把反弹定义成 clean reclaim。",
        "目标：用实时 ATR 约束 TP；ETH/SOL 若不确认，主动缩小仓位和目标。",
        "风险：Gold 周末休市，最新收盘只作宏观背景，不能当实时 entry 信号。"
      ],
      talk: [
        "KC 可以这样讲：the bounce is not the Blueprint. Location, confirmation, stop, and target are the Blueprint.",
        "如果 BTC 或 SOL reclaim 20 EMA、RSI 守中线且 MACD 改善，今天讲第一次 pullback；如果仍在均线下方，就等。",
        "前一日高低点和反弹高点是最近 key levels，但具体报价必须由刷新后的页面数据和图表提供。"
      ],
      contextLines: [
        "The June 7 market is testing a weekend stabilization after forced selling. Bitcoin may lead, but Ether and Solana still need to confirm broader participation.",
        "Gold is closed after a macro-sensitive session. For KC, the live 20 EMA Blueprint remains the execution filter."
      ],
      marketTemplate: "刷新后如果主图 reclaim 或守住 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ETH/SOL 不同步或 ATR 不支持目标，主讲等待 reclaim 或缩短 TP。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月7日最新图，标出 20 EMA、前一日高低点、reclaim 或拒绝位置、entry、SL 和按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月7日过滤薄流动性假 reclaim",
      summary: "KC 用 20 EMA Blueprint 跟进 2026-06-07 当日行情：第一次回踩能否守线、RSI/MACD 是否确认、ATR 是否支持目标，决定反弹是否可交易。",
      hook: "KC 今天的 quality check 很简单：did price reclaim the 20 EMA and hold it on the first pullback? 没有守住，就没有 continuation setup。",
      outline: [
        "开场：把周日跟进定义成 reclaim quality check，避免追薄流动性假突破。",
        "位置：检查主图是否仍靠近 20 EMA，以及第一次 pullback 是否守在线的正确一侧。",
        "确认：刷新后用 RSI 中线和 MACD 柱体判断动能是真修复还是短暂反抽。",
        "目标：用实时 ATR 制定第一目标；波动收缩或跨币分化时降低预期。",
        "风险：Gold 休市且下个交易时段可能重新定价，旧报价只作背景。"
      ],
      talk: [
        "KC 可以这样讲：a valid reclaim must survive the first pullback.",
        "如果 BTC 在 EMA 上方但 ETH 或 SOL 没跟，可以有 readout，但不一定有 full-size trade。",
        "如果价格碰到 EMA 后马上被拒绝，this is resistance, not a late long entry."
      ],
      contextLines: [
        "The June 7 quality check is whether post-liquidation stabilization can hold through a first pullback in thinner weekend liquidity.",
        "Use live crypto indicators for execution and closed-session gold only for macro context."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方完成第一次回踩、RSI 守中线且 MACD 改善，主讲 clean continuation；如果跌回 EMA 下方、ATR 收缩或跨资产分化，主讲 fake reclaim 和等待。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月7日最新图，标出 20 EMA、第一次回踩、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月7日用 ATR 管住反弹预期",
      summary: "KC 用 2026-06-07 当日复盘把 BTC、SOL 与 Gold 背景转成 Blueprint 作业：20 EMA 定位置，RSI/MACD 定质量，ATR 定现实目标。",
      hook: "KC 今天复盘不要比较谁抓到最大反弹。Show me the EMA location, confirmation, stop loss, and an ATR-based target。",
      outline: [
        "开场：复盘今天有没有尊重 20 EMA，而不是只看涨跌幅。",
        "位置：标出主图与 20 EMA、前一日高低点和第一次回踩的关系。",
        "确认：刷新后用 RSI、MACD 判断修复、拒绝还是低动能震荡。",
        "目标：用实时 ATR 检查 TP 是否现实，周末流动性变薄时不扩大预期。",
        "转化：要求成员提交 entry、SL、TP，并写明目标为何符合当前 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask for target, show me the EMA location and the ATR.",
        "如果 BTC 或 SOL reclaim 后守住第一次回踩，复盘 clean continuation；如果始终在 EMA 下方，复盘为什么没有 entry。",
        "Gold 休市、ETH/SOL 分化和周末流动性都提醒我们 discipline comes before prediction."
      ],
      contextLines: [
        "Use this as a June 7 same-day Blueprint recap during a fragile crypto stabilization attempt.",
        "Every conclusion should map to 20 EMA location, momentum quality, ATR-based target, and a predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 走弱、ATR 收缩或 ETH/SOL 不确认，主讲短目标或观望。",
      assignment: "让成员提交一张 6月7日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月7日只做周末边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-07 当日短线：BTC/SOL 在清算后反弹测试中进入薄流动性，只交易前一日与 session 边界的确认反应。",
      hook: "Caven 今天不要追周日第一根快速 K 线。先刷新行情，把 SOL/BTC 的前一日 high/low、清算低点、反弹高点、session 边界和 VWAP 画出来。",
      outline: [
        "开场：说明 6月7日是 weekend liquidity readout，影线和假突破风险较高。",
        "流动性：标出 SOL/BTC 前一日高低点、清算低点、周末反弹高点和当前 session high/low。",
        "VWAP：扫低并回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取 RSI、MACD 和 ATR，并用 ETH 是否同步检查参与度。",
        "风险：Gold 周末休市，不能提供实时确认；crypto 仓位要小，止损放在 sweep 外侧。"
      ],
      talk: [
        "Caven 可以这样讲：weekend speed is not quality. We trade the boundary reaction, not the candle size.",
        "如果 SOL 扫 session low、收回边界并站上 VWAP，而且 BTC 同步，才有 quick long scalp；扫高后失去 VWAP 就讲 trap breakout。",
        "最近 key levels 都来自当前图表边界，静态稿件不写死报价。"
      ],
      contextLines: [
        "The June 7 scalp backdrop combines post-liquidation volatility with thinner weekend liquidity. Bitcoin is testing stabilization while Ether and Solana show whether risk appetite is broad enough.",
        "Gold is closed and cannot confirm the live crypto tape. Keep execution inside current session levels, VWAP, and ATR."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低、收回 session 边界并站上 VWAP，且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍低于 VWAP 或卡在中间，主讲 short scalp 或等待。",
      assignment: "让成员提交 SOL 或 BTC 6月7日 15M 图，标出前一日 high/low、清算低点、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月7日看 VWAP 回收能否维持",
      summary: "Caven 用 liquidity、VWAP 和短线波动跟进 2026-06-07：只看扫高/扫低后的回收或拒绝，并用 ATR 判断周末行情是否还有可交易空间。",
      hook: "Caven 今天跟进不要问能不能追。先问价格 sweep 了吗，回到 VWAP 了吗，ATR 还够吗？三个问题少一个就等。",
      outline: [
        "开场：把周日跟进定义成 session boundary check，不做方向预测。",
        "流动性：确认 SOL/BTC 哪一侧 session liquidity 已被扫，哪一侧仍是下一目标。",
        "VWAP：扫低后站回并守住 VWAP 才讲 continuation；扫高后跌回下方就讲 trap breakout。",
        "波动：刷新后用 RSI、MACD 和 ATR 检查动能、空间与跨币同步。",
        "执行：区间中间、低 ATR、VWAP 反复穿越都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is sweep plus VWAP reaction, not a green candle.",
        "如果 SOL 扫低后站回 VWAP，RSI 修复且 BTC 同步，可以讲 quick long scalp。",
        "如果价格回到 VWAP 又马上失守，shorten the target or skip the trade."
      ],
      contextLines: [
        "The June 7 follow-up should focus on whether the weekend bounce can hold VWAP after a liquidity sweep.",
        "Live ATR and cross-crypto participation decide whether the move has enough range for a scalp."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后守住 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和等待。",
      assignment: "让成员提交 SOL 或 BTC 6月7日 15M 图，标出 session high/low、一次 sweep、VWAP 回收或拒绝、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月7日只复盘边界与 VWAP 反应",
      summary: "Caven 用 2026-06-07 当日复盘把 session sweep、VWAP、RSI 和 ATR 转成短线作业：中间位置不点评，失败立即退出。",
      hook: "Caven 今天不复盘你追了哪根 K 线，只复盘有没有边界、有没有 sweep、有没有 VWAP reaction、有没有足够 ATR。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 前一日高低点、清算低点、反弹高点和被扫的 session 边界。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI、MACD 和 ATR 判断这笔 scalp 是否有足够空间。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：the clean trade is the reaction after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后站回 VWAP，并且 RSI 修复，复盘 clean long scalp；扫高后跌回 VWAP 下方就复盘 trap breakout。",
        "ATR 已经缩小时目标就要变小，周末没有确认就不要留高杠杆仓位。"
      ],
      contextLines: [
        "Use this as the June 7 same-day scalp recap during a fragile weekend stabilization attempt.",
        "Every recap should map to session boundary, sweep, VWAP reaction, momentum, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待。",
      assignment: "让成员提交一张 6月7日 15M 复盘图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_6_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月6日先看流动性清洗后的结构接受",
      summary: "William 用 ICT/SMC 解读 2026-06-06 当日行情：BTC 在宏观冲击和杠杆清洗后尝试稳定，ETH 与 SOL 仍是风险偏好确认图，今天先看前一日低点上方能否形成接受。",
      hook: "今天 William 这条当日行情解读，不追周末第一段反弹，也不把前一日急跌直接外推。刷新行情后，先看 BTC 和 ETH 在前一日低点、反弹高点和 broken structure 附近是接受还是拒绝。",
      outline: [
        "开场：说明 6月6日是宏观冲击与清算后的 structure check，方向必须由当天图表确认。",
        "流动性：标出前一日高低点、急跌后的反弹高点、亚洲盘高低点和周末短线区间，确认哪一侧 liquidity 先被拿走。",
        "结构：扫低后若有 displacement、CHOCH 和回踩接受，主讲 bullish repair；反弹若只触及 broken support 或供应区，主讲 short-covering retest。",
        "动能：刷新后对比 BTC/ETH 的 RSI、MACD 和 ATR，并用 SOL 的高 beta 反应检查风险偏好是否同步。",
        "风险：Gold 上一交易日受强就业、美元和收益率压力走弱，说明宏观定价仍不稳定；没有 FVG、order block 和 invalidation 就不进场。"
      ],
      talk: [
        "William 可以这样讲：liquidity flush 已经发生，但清算结束不等于趋势反转。我们需要看到低位接受、displacement 和 structure shift。",
        "如果 BTC 扫前一日低点后收回，ETH 同步形成 higher low，才讲 CHOCH 后等 discount 回踩；如果 ETH 和 SOL 继续落后，BTC 的上冲先当 weak retest。",
        "今天的 key levels 不用写死价格，只画前一日高低点、当日 session 边界、broken structure 和 sweep 后的无效位。"
      ],
      contextLines: [
        "The June 6 backdrop is a stabilization test after a macro-driven selloff and leveraged crypto liquidations. Bitcoin is trying to hold after the flush, while Ethereum and Solana remain important confirmation charts.",
        "Gold closed the latest session under pressure as stronger U.S. jobs data lifted the dollar and yields. Treat that as macro risk context, then let live crypto structure decide the trade."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低、收回前一日区间并形成 CHOCH，主讲 discount 回踩、FVG 或 order block；如果反弹在 broken structure 被拒绝、SOL 不同步或 MACD 继续弱，主讲 liquidity grab 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月6日最新 4H 图，标出前一日高低点、当日 session 边界、被扫的 liquidity、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月6日确认反弹是修复还是空头回补",
      summary: "William 用 ICT/SMC 做 2026-06-06 当日跟进：刷新后判断 BTC/ETH 的反弹有没有 displacement、结构突破和回踩接受，还是只在周末薄流动性里完成空头回补。",
      hook: "今天 William 这条跟进只回答一个问题：反弹有没有改变结构？绿色 K 线不是答案，sweep、displacement、CHOCH 和 retest 才是答案。",
      outline: [
        "开场：把 6月6日定义成 rebound quality check，不用反弹幅度代替结构判断。",
        "流动性：检查前一日低点是否已被扫、反弹高点上方是否聚集 buy-side liquidity，以及周末 session 边界是否出现假突破。",
        "结构：有 displacement 并站稳 broken structure 才讲修复；只有低成交反抽或供应区拒绝就讲 short covering。",
        "动能：刷新后比较 BTC、ETH、SOL 的 RSI/MACD 修复是否同步，并用 ATR 判断回踩空间是否合理。",
        "风险：Gold 最新收盘受美元与收益率上行压制，宏观波动仍可能在下个交易时段重新定价，周末仓位要轻。"
      ],
      talk: [
        "William 可以这样讲：today we separate a real structure repair from a relief bounce. Reclaiming a candle is not enough; price must reclaim structure.",
        "如果 BTC 与 ETH 同步突破短线 swing high，再回踩守住，今天可以讲 bullish BOS；如果 SOL 仍弱或回踩跌回结构下方，就降低确定性。",
        "周末流动性较薄，影线可能更大，所以 invalidation 必须放在结构外侧，不能因为波动快就提高杠杆。"
      ],
      contextLines: [
        "The June 6 follow-up should distinguish genuine post-liquidation repair from a thin-liquidity relief bounce. Live structure and cross-asset confirmation decide which description fits.",
        "Use Bitcoin for the primary structure, Ethereum and Solana for participation, and gold's latest macro-sensitive close as a reminder that risk conditions can change quickly."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 同步 reclaim 结构、RSI/MACD 改善且回踩守住，主讲 BOS 后确认；如果 SOL 分化、ATR 收缩或价格跌回 broken structure 下方，主讲空头回补和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月6日最新 4H 图，标出 sweep、displacement、BOS/CHOCH、retest、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月6日只复盘清洗后的完整 sequence",
      summary: "William 用 2026-06-06 当日复盘把宏观冲击后的 BTC/ETH 结构转成群内作业：流动性、接受度、结构转换、回踩和无效位缺一不可。",
      hook: "William 今天这条复盘不讨论谁猜到底部，只复盘市场有没有给出完整 sequence：liquidity taken、acceptance、displacement、structure shift、retest、invalidation。",
      outline: [
        "开场：复盘 6月6日已发生的结构，区分真实修复、区间接受和失败反弹。",
        "流动性：回看前一日高低点、当日 session 边界和反弹高点，标出最清楚的一次 sweep。",
        "结构：把 acceptance、BOS/CHOCH、FVG 或 order block 回踩和 invalidation 画完整。",
        "动能：刷新后用 BTC/ETH 的 RSI、MACD、ATR，并参考 SOL 是否同步，确认复盘结论。",
        "风险：把 Gold 最新宏观压力作为风险背景；周末薄流动性下没有确认就不留高杠杆仓位。"
      ],
      talk: [
        "William 可以这样讲：the lesson today is not that price bounced. The lesson is whether the market converted a liquidity event into a tradable structure.",
        "如果 sweep、acceptance、CHOCH 和 retest 都出现，才是 ICT setup；如果只有快速反弹和大影线，那只是 readout。",
        "BTC、ETH、SOL 没有同步时降低仓位，宏观资产也在重定价时更要先保护 capital。"
      ],
      contextLines: [
        "Use this as the June 6 same-day recap after a liquidation-heavy crypto move and a strong-jobs macro shock that pressured gold.",
        "The recap should reward confirmed structure and cross-market participation, not the size or speed of a rebound."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已经给出 sweep + acceptance + displacement + CHOCH + retest，主讲确认后的计划；如果只有单边反抽、SOL 不同步或动能衰减，主讲为什么没有 entry。",
      assignment: "让成员提交一张 6月6日复盘图，必须标出 sweep、acceptance、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月6日先看急跌后能否站回均线",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-06 当日行情：BTC 在清算后尝试稳定，ETH/SOL 仍偏高 beta，Gold 最新收盘受强就业、美元和收益率压制，今天先看价格与 20 EMA 的真实关系。",
      hook: "KC 今天这条当日行情只问一个问题：after the flush, is price still below the 20 EMA, reclaiming it, or holding above it? 刷新行情以后再讲 entry、SL 和 TP。",
      outline: [
        "开场：说明 6月6日不是追 relief bounce，而是用 20 EMA 给 BTC、Gold 或 SOL 重新定位。",
        "位置：刷新后检查主图在 20 EMA 上方、下方，还是刚完成 reclaim，并标出前一日高低点作为最近 key levels。",
        "确认：只有均线位置与 RSI、MACD 同步改善，才把反弹定义成 clean reclaim。",
        "目标：用实时 ATR 约束第一目标；Gold 已进入周末收盘状态，使用最新收盘数据但不假设周末仍在交易。",
        "执行：只讲 EMA 附近第一次回踩、失败拒绝或等待，远离均线不追。"
      ],
      talk: [
        "KC 可以这样讲：the market moved fast, but the Blueprint has not changed. Location first, confirmation second, target third.",
        "如果 BTC 或 SOL reclaim 20 EMA、RSI 回到中线且 MACD 改善，今天讲第一次 pullback；如果 ETH 仍弱，就缩小 target 和 size。",
        "Gold 上一交易日因美元和收益率走强承压，但新闻不是 entry。等市场重开后仍要先看 20 EMA，再用 ATR 定目标。"
      ],
      contextLines: [
        "The June 6 market is testing whether crypto can stabilize after forced selling. Bitcoin may lead the bounce, but Ethereum and Solana need to confirm participation.",
        "Gold's latest session was pressured by stronger U.S. jobs data, a firmer dollar, and higher yields. For KC, macro context never replaces the 20 EMA Blueprint."
      ],
      marketTemplate: "刷新后如果主图 reclaim 或守住 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ETH/SOL 不同步或 ATR 不支持目标，主讲等待 reclaim 或缩短 TP。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月6日最新图，标出 20 EMA、前一日高低点、reclaim 或拒绝位置、entry、SL 和按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月6日过滤周末假 reclaim",
      summary: "KC 用 20 EMA Blueprint 做 2026-06-06 当日跟进：刷新后判断 BTC、Gold 或 SOL 是有效 reclaim、EMA 拒绝，还是周末薄流动性造成的假突破。",
      hook: "KC 今天的跟进不是问反弹了多少，而是问 did price reclaim the 20 EMA and hold the first pullback? 没有守住，就没有 Blueprint setup。",
      outline: [
        "开场：把当天跟进定义成 reclaim quality check，避免追周末快速波动。",
        "位置：标出主图 20 EMA、前一日高低点和第一次 pullback，确认价格是否仍在可执行区域。",
        "确认：实时 RSI 是否守中线、MACD 柱体是否改善，决定是真 reclaim 还是假突破。",
        "目标：实时 ATR 决定 TP；若波动收缩或 ETH/SOL 不同步，主动降低目标。",
        "风险：Gold 最新收盘仍反映强就业后的美元与收益率压力，下个交易时段可能跳空，周末不把旧报价当新信号。"
      ],
      talk: [
        "KC 可以这样讲：a reclaim is only valid when price can hold the line on the first pullback.",
        "如果 BTC 在 20 EMA 上方但 ETH 或 SOL 没跟，今天可以有 readout，但不一定有 full-size trade。",
        "如果价格碰到 EMA 后马上被拒绝，告诉成员 this is resistance, not a late long entry."
      ],
      contextLines: [
        "The June 6 quality check is about whether post-selloff crypto stabilization can hold through a first pullback in thinner weekend liquidity.",
        "Use live crypto indicators for execution and gold's latest closed-session response only as macro context."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方完成第一次回踩、RSI 守中线且 MACD 改善，主讲 clean continuation；如果跌回 EMA 下方、ATR 收缩或跨资产分化，主讲 fake reclaim 和等待。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月6日最新图，标出 20 EMA、第一次回踩、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月6日让位置与 ATR 管住反弹预期",
      summary: "KC 用 2026-06-06 当日复盘把 BTC、SOL 与 Gold 的宏观波动转成 Blueprint 作业：20 EMA 定位置，RSI/MACD 定质量，ATR 定现实目标。",
      hook: "KC 今天这条复盘要讲清楚：a rebound is not a setup. The setup is EMA location, confirmation, stop loss, and an ATR-based target。",
      outline: [
        "开场：复盘今天有没有尊重 20 EMA，而不是比较谁抓到最大反弹。",
        "位置：标出主图与 20 EMA、前一日高低点和第一次回踩的关系。",
        "确认：刷新后用 RSI、MACD 判断修复、拒绝还是低动能震荡。",
        "目标：用实时 ATR 检查 TP 是否现实，周末流动性变薄时不扩大预期。",
        "转化：要求成员提交 entry、SL、TP，并写明为何这个目标符合当前 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask for target, show me the EMA location and the ATR.",
        "如果 BTC 或 SOL reclaim 后守住第一次回踩，复盘 clean continuation；如果始终在 EMA 下方，复盘为什么没有 entry。",
        "Gold 的宏观波动、ETH/SOL 的分化和周末流动性都提醒我们：discipline comes before prediction."
      ],
      contextLines: [
        "Use this as a June 6 same-day Blueprint recap after a volatile crypto flush and a macro session that pushed gold lower.",
        "Every conclusion should map to 20 EMA location, momentum quality, ATR-based target, and a predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 走弱、ATR 收缩或 ETH/SOL 不确认，主讲短目标或观望。",
      assignment: "让成员提交一张 6月6日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月6日只做周末边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-06 当日短线：BTC/SOL 在清算后反弹测试中进入周末薄流动性，今天只交易前一日与 session 边界的确认反应。",
      hook: "Caven 今天这条当日行情不要追周末第一根快速 K 线。先刷新行情，把 SOL/BTC 的前一日 high/low、反弹高点、亚洲盘边界和 VWAP 画出来，再等 sweep。",
      outline: [
        "开场：说明 6月6日是周末 liquidity readout，薄流动性可能放大影线和假突破。",
        "流动性：标出 SOL/BTC 前一日 high/low、清算后低点、反弹高点和当前 session high/low。",
        "VWAP：扫低并回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取 RSI、MACD 和 ATR，并用 ETH 是否同步判断加密市场参与度。",
        "风险：Gold 已按最新交易日收盘，周末不提供实时确认；crypto 仓位要小，止损放在 sweep 外侧。"
      ],
      talk: [
        "Caven 可以这样讲：weekend speed is not the same as weekend quality. We trade the boundary reaction, not the candle size.",
        "如果 SOL 扫 session low、收回边界并站上 VWAP，而且 BTC 同步，才有 quick long scalp；如果扫高后失去 VWAP，就讲 trap breakout。",
        "ETH 和 SOL 都不确认时，不要因为 BTC 一根反弹 K 线就追。薄流动性里 fast invalidation 更重要。"
      ],
      contextLines: [
        "The June 6 scalp backdrop combines post-liquidation volatility with thinner weekend liquidity. Bitcoin is testing stabilization, while Ethereum and Solana show whether risk appetite is broad enough.",
        "Gold's latest session closed under macro pressure and is not a live weekend confirmation chart. Keep the scalp decision inside current crypto session levels and VWAP."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低、收回 session 边界并站上 VWAP，且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、ETH 不同步或价格卡在区间中间，主讲 short scalp 或等待。",
      assignment: "让成员提交 SOL 或 BTC 6月6日 15M 图，标出前一日 high/low、反弹边界、session high/low、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月6日用 VWAP 过滤薄流动性假突破",
      summary: "Caven 用 liquidity、VWAP 和短线波动做 2026-06-06 当日跟进：重点判断 SOL/BTC 的边界 sweep 是真实回收、VWAP 拒绝，还是周末流动性不足造成的 trap。",
      hook: "Caven 今天的跟进不要问还能不能追，先问 three things：which boundary was swept, did price reclaim VWAP, and does ATR still pay the target?",
      outline: [
        "开场：把当天跟进定义成 weekend fake-breakout filter，不交易区间中间。",
        "流动性：检查前一日边界、反弹高点和当前 session high/low 哪一边已经被扫。",
        "VWAP：扫低后站回 VWAP 才讲 continuation；扫高后跌回 VWAP 下方才讲 rejection scalp。",
        "波动：刷新后用 RSI、MACD、ATR，并比较 BTC、ETH、SOL 是否同步。",
        "执行：低 ATR、VWAP 来回穿或没有边界反应时直接跳过，止损不放在区间中间。"
      ],
      talk: [
        "Caven 可以这样讲：the first green candle is not confirmation. Sweep plus VWAP reaction is confirmation.",
        "如果 SOL 扫低回收 VWAP，但 BTC 与 ETH 没跟，目标要更快；如果三者同步且 ATR 有空间，setup 才更干净。",
        "Gold 周末没有新的 session 反应，所以不要拿旧金价替代 crypto 的实时确认。"
      ],
      contextLines: [
        "The June 6 follow-up should filter sharp weekend wicks through current session boundaries, VWAP, and live volatility.",
        "Cross-check Bitcoin, Ethereum, and Solana participation. Use gold only as closed-session macro context, not as a live trigger."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在边界 sweep 后重新站回 VWAP、RSI/MACD 修复且 ATR 支持空间，主讲 continuation scalp；如果跨资产分化、ATR 收缩或 VWAP 反复穿越，主讲等待。",
      assignment: "让成员提交 SOL 或 BTC 6月6日 15M 图，标出 session high/low、反弹边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月6日只复盘边界、VWAP 与快速无效",
      summary: "Caven 用 2026-06-06 当日复盘把周末波动转成短线作业：只复盘 session boundary、liquidity sweep、VWAP reaction、ATR 空间和快速止损。",
      hook: "Caven 今天这条复盘不复盘谁追到最快的 K 线，只复盘有没有边界、有没有 sweep、有没有 VWAP reaction、失败后有没有立刻走。",
      outline: [
        "开场：复盘 6月6日最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 前一日高低点、反弹边界和当日 session high/low。",
        "VWAP：确认 sweep 后是回收、拒绝还是一直在 VWAP 附近震荡。",
        "波动：刷新后用 RSI、MACD、ATR 和 ETH 同步性判断这笔 scalp 是否值得参与。",
        "转化：要求成员提交 15M 图，止损放在 sweep 外侧，Gold 只作最新收盘的宏观背景。"
      ],
      talk: [
        "Caven 可以这样讲：the clean trade came after liquidity was taken and VWAP confirmed, not in the middle of the range.",
        "如果 BTC 与 SOL 同步完成 sweep 和 VWAP reclaim，复盘 clean scalp；如果只有一张图反应，就复盘为什么要缩短目标。",
        "周末波动快但深度薄，最重要的不是抓远，而是失败立刻离场。"
      ],
      contextLines: [
        "Use this as the June 6 same-day scalp recap after a liquidation-heavy move entered thinner weekend liquidity.",
        "Reward boundary discipline, VWAP confirmation, cross-crypto participation, realistic ATR targets, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 支持空间、RSI/MACD 修复且 VWAP 回收，主讲有效 sweep；如果 ATR 收缩、ETH 不同步、价格低于 VWAP 或卡在中间，主讲等待。",
      assignment: "让成员提交一张 6月6日 15M 复盘图，标出 session high/low、反弹边界、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_5_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月5日先看急跌后是否形成接受",
      summary: "William 用 ICT/SMC 解读 2026-06-05 当日行情：加密市场刚经历连续 ETF 流出、杠杆清算和主流币破位压力，今天先看 BTC/ETH 是否在前一日低位区间形成接受，再谈 BOS 或 CHOCH。",
      hook: "今天 William 这条当日行情解读，先不要喊反转，也不要追恐慌延续。刷新行情后，看 BTC 和 ETH 在前一日清算区间、当日 session 边界和 broken structure 附近到底是接受，还是继续被拒绝。",
      outline: [
        "开场：说明 6月5日的重点是急跌后的 acceptance check，不是用昨天的情绪做今天的方向。",
        "流动性：标出前一日高低点、清算留下的 sell-side 区域、亚洲盘高低点和短线 buy-side liquidity，确认哪一侧先被扫。",
        "结构：如果扫低后能收回 session 结构并形成 CHOCH 或 BOS，主讲 discount 回踩；如果反弹只测试 broken structure，主讲供应区二次派发。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，判断修复是否双主流同步，还是只有单一品种反抽。",
        "风险：SOL 的高 beta 反应只当风险偏好温度计，Gold 和 AI 资金轮动当宏观背景；没有 FVG、order block 和 invalidation，就只做 readout。"
      ],
      talk: [
        "William 可以这样讲：今天我们先读市场有没有接受急跌后的低位结构。价格反弹不是答案，structure accepted 才是答案。",
        "如果 BTC 和 ETH 刷新后同步从 sell-side sweep 里收回，并且给出 CHOCH，今天才讲 discount 回踩和 FVG；如果 ETH 继续弱，BTC 的反弹就只能当 weak retest。",
        "ICT/SMC 在这种行情里最有价值的地方，是让大家知道哪里不能追。没有结构、没有无效位、没有回踩，就不要把清算后的第一段反抽当 entry。"
      ],
      contextLines: [
        "The June 5 crypto backdrop is a post-liquidation acceptance test after heavy ETF outflows, forced long unwinds, and a sharp break in Bitcoin, Ethereum, and Solana sentiment.",
        "For William, translate the current tape into ICT and SMC language: sell-side liquidity taken or not, acceptance versus rejection, structure shift, retracement zone, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低并形成 CHOCH，主讲 discount 回踩、FVG 或 order block 确认；如果扫高失败、ETH 不同步或 MACD 柱体继续走弱，主讲 liquidity grab、broken structure retest 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月5日最新 4H 图，标出前一日高低点、当日 session 边界、被扫的 liquidity、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月5日确认低位接受还是二次拒绝",
      summary: "William 用 ICT/SMC 做 2026-06-05 当日跟进：刷新后判断 BTC/ETH 是清算后低位接受、区间修复，还是反弹到 broken structure 后继续被派发。",
      hook: "今天 William 这条当日行情跟进，只回答一个问题：急跌后的低位有没有被市场接受？刷新行情后，再看 sweep、acceptance、CHOCH 和 retest 是否完整。",
      outline: [
        "开场：把 6月5日定义成 post-liquidation acceptance follow-up，先确认市场是否能守住前一日低位区间。",
        "流动性：检查 BTC/ETH 是否先扫前一日低点、亚洲盘低点或上方买方流动性，重点看扫后收盘和结构位置。",
        "结构：扫低后如果形成 higher low 和 BOS，主讲回踩确认；如果反弹只停在 broken structure 或供应区，主讲二次拒绝。",
        "动能：刷新后用 RSI、MACD、ATR 判断这次修复是否有真实动能和足够波动空间。",
        "风险：如果 Gold 和 AI 相关风险偏好继续分流资金，William 降低确定性，不把单一反弹当成市场全面恢复。"
      ],
      talk: [
        "William 可以这样讲：今天是确认低位质量的一天。清算已经发生，下一步要看市场能不能把那段 sell-side liquidity 转成新的结构。",
        "如果 BTC 先扫低再收回，ETH 也同步形成 higher low，今天可以讲 bullish CHOCH 后等 FVG 或 order block。",
        "如果价格只是反弹到昨天跌破的位置，RSI 和 MACD 没有同步修复，那就是 broken structure retest，不能追。"
      ],
      contextLines: [
        "The June 5 follow-up should treat the latest liquidation pressure and ETF outflows as context, not as a fixed bearish call. Live data decides whether today becomes recovery, range acceptance, or another failed retest.",
        "For William, the actionable question is whether today's chart has enough structure to separate real acceptance from a weak bounce."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep 后的结构延续和回踩确认；如果反弹没有站稳结构、SOL 分化或 ATR 收缩，主讲弱反弹、降低仓位和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月5日最新 4H 图，标出被扫的 liquidity、是否出现 BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月5日只复盘急跌后的 sequence",
      summary: "William 用 2026-06-05 当日复盘框架把 BTC/ETH 的实时结构转成群内作业：流动性、低位接受、结构转换、无效位和风险控制。",
      hook: "William 今天这条当日复盘，不复盘谁猜到底部，只复盘市场有没有给完整 sequence：sweep、acceptance、structure shift、retest、invalidation。",
      outline: [
        "开场：说明当天复盘只看 6月5日已经发生的结构，不用固定价格做预测。",
        "流动性：回看今天最清楚的扫高或扫低，标出前一日高低点、急跌留下的低位区间和 session 高低点。",
        "结构：把扫单后的 acceptance、BOS/CHOCH、回踩区和 invalidation 画出来；没有结构就明确说无交易计划。",
        "动能：刷新行情后用 BTC/ETH 的 RSI、MACD、ATR 判断复盘结论是趋势修复、弱反弹还是低波动等待。",
        "转化：引导成员把同一套模板发到 VIP 群，不带 SL 的图不点评。"
      ],
      talk: [
        "William 可以这样讲：今天我们复盘的不是跌了多少，而是急跌以后市场有没有接受低位结构。",
        "如果 sweep、acceptance、CHOCH、回踩和无效位都出现，才是可以拿来教学的 ICT setup；如果只有一根快速反弹 K 线，那是情绪，不是计划。",
        "今天主流币仍需要防守，所以没有同步动能、没有清晰 invalidation，就不要用高杠杆。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 5. The broader tape is cautious after forced selling and ETF outflows, so the recap should reward confirmation and acceptance rather than prediction.",
        "For William, every recap point should map back to liquidity, acceptance, BOS or CHOCH, retest area, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已经给出完整 sweep + acceptance + CHOCH + retest，主讲确认后的计划；如果只有单边波动或动能不同步，主讲为什么这是 readout，不是 entry。",
      assignment: "让成员提交一张 6月5日复盘图，必须标出 sweep、acceptance、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月5日先看破位后能否 reclaim",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-05 当日行情：crypto 经历 ETF 流出和杠杆清算后偏防守，Gold 仍受美元、收益率和避险需求拉扯，今天先看价格能否重新站回 20 EMA。",
      hook: "KC 今天这条当日行情解读只问一个问题：after the selloff, is price below the 20 EMA, reclaiming it, or rejecting it? 先刷新行情，再讲 entry、SL、TP。",
      outline: [
        "开场：说明 6月5日不是追急跌后的第一段反抽，而是用 20 EMA 重新定位今天的趋势。",
        "位置：刷新后检查 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚 reclaim。",
        "确认：站上或守住 EMA 后，再用实时 RSI 和 MACD 判断动能质量。",
        "目标：Gold 的宏观波动和 crypto 的清算后波动都要求用实时 ATR 约束 TP，不给情绪化目标。",
        "执行：只讲 EMA 附近的第一次回踩或 reclaim 后第一次 pullback，离 EMA 太远就等。"
      ],
      talk: [
        "KC 可以这样讲：a daily readout starts with location, not hope. If price is still below the 20 EMA, we wait for reclaim first.",
        "如果 BTC 或 SOL 已经 reclaim 20 EMA，而且 RSI 回到中线附近，今天讲第一次回踩、SL 和 realistic target。",
        "如果 Gold 因避险或利率预期波动但没有守住 20 EMA，就不要把宏观故事直接当 entry。Blueprint first, story second."
      ],
      contextLines: [
        "The June 5 market is still sorting out whether crypto can stabilize after forced selling and ETF outflows, while gold remains sensitive to the dollar, yields, Fed-rate expectations, and safe-haven demand.",
        "For KC, that means trend location comes first: 20 EMA relationship, RSI and MACD quality, then ATR-based target."
      ],
      marketTemplate: "刷新后如果主图守住或重新站上 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、Gold 受美元收益率压制或 ATR 不支持目标，主讲等待 reclaim。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月5日最新图，标出 20 EMA、reclaim 或拒绝位置、entry zone、SL 以及按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月5日用均线过滤弱反弹",
      summary: "KC 用 20 EMA Blueprint 做 2026-06-05 当日跟进：刷新后判断 BTC、Gold 或 SOL 是有效 reclaim、假 reclaim，还是只适合观望。",
      hook: "KC 今天的跟进不要讲 prediction，讲 quality check。A bounce is not a setup until it respects the 20 EMA and momentum confirms.",
      outline: [
        "开场：把今天的跟进定义成 reclaim quality check，不追已经离开均线的位置。",
        "位置：刷新后看 BTC、Gold 或 SOL 与 20 EMA 的距离，以及是否刚好在第一次回踩区。",
        "确认：RSI 是否守住中线，MACD 柱体是否停止恶化，决定这是 clean setup 还是 fake reclaim。",
        "目标：用实时 ATR 重新估算第一目标，避免清算后波动忽大忽小时仍给情绪化 TP。",
        "风险：若价格在 EMA 下方反弹失败，今天重点就是等待，不是强行找多单。"
      ],
      talk: [
        "KC 可以这样讲：the Blueprint keeps us honest. If price cannot hold the 20 EMA, we do not call it continuation.",
        "如果 BTC 或 SOL 在 EMA 上方回踩、RSI 守中线、MACD 改善，今天就讲 clean pullback。",
        "如果只是一根反弹 K 线碰到 EMA 又被拒绝，告诉成员 this is resistance, not entry."
      ],
      contextLines: [
        "The June 5 follow-up should acknowledge the current defensive crypto backdrop without turning it into a fixed bearish script.",
        "For KC, the live 20 EMA read decides whether today's move is continuation, reclaim, failed reclaim, or no trade."
      ],
      marketTemplate: "刷新后如果主图守住或 reclaim 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ATR 收缩或动能没有恢复，主讲假 reclaim、短目标或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月5日最新图，标出 20 EMA、守线或假 reclaim 位置、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月5日让 ATR 约束急跌后目标",
      summary: "KC 用 2026-06-05 当日复盘把 20 EMA、RSI/MACD 和 ATR 转成可执行作业：没有均线位置和现实目标，就没有 Blueprint setup。",
      hook: "KC 今天这条复盘转化要讲得很直接：movement after liquidation is not a setup. The setup is 20 EMA location, confirmation, stop loss, and an ATR-based target.",
      outline: [
        "开场：复盘今天不是看最大涨跌，而是看有没有尊重 20 EMA Blueprint。",
        "位置：标出今天价格相对 20 EMA 的位置，确认是守线、reclaim、拒绝还是远离均线。",
        "确认：用刷新后的 RSI、MACD 判断这笔想法有没有动能支持。",
        "目标：用实时 ATR 检查 TP 是否现实，尤其在 Gold 和主流币都高波动时不要给情绪化目标。",
        "转化：要求群成员提交图时必须写 entry、SL、TP 和为什么目标没有超过合理 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask me target, show me the ATR. If the market range is small, your target cannot be huge.",
        "如果今天的图在 20 EMA 上方完成回踩，复盘时就讲 clean continuation；如果一直在 EMA 下方，复盘重点就是为什么没有 entry。",
        "这个市场背景下，discipline 比方向更重要。BTC、SOL、Gold 都要先尊重 Blueprint，再谈交易。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 5. Crypto is defensive and gold is macro-sensitive, so every target needs a volatility check.",
        "For KC, every recap should end with the same Blueprint: 20 EMA location, RSI/MACD confirmation, ATR-based target, predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 继续走弱或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交一张 6月5日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月5日只等清算后边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-05 当日短线：BTC/SOL 仍处在急跌后高波动环境，今天只交易 session 边界和 VWAP 反应。",
      hook: "Caven 今天这条当日行情解读不要追中间位置。先刷新行情，把 SOL/BTC 的前一日 high/low、清算后边界、当前 session high/low 和 VWAP 画出来，再等 sweep。",
      outline: [
        "开场：说明 6月5日短线只做边界，不追急跌后的第二根情绪 K 线。",
        "流动性：标出 SOL/BTC 的前一日 high/low、清算后短线边界、亚洲盘高低点和当前 session 边界，等其中一侧被扫。",
        "VWAP：扫低后回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取实时 RSI 和 ATR，确认当前 range 是否足够支付快速目标。",
        "执行：止损放在 sweep 外侧，最多等两个确认；没有边界反应就不做。"
      ],
      talk: [
        "Caven 可以这样讲：today we do not trade the middle. The middle is where late traders get chopped.",
        "SOL 和 BTC 今天都要先看 session 边界，不能因为价格动得快就追。Scalp 的优势来自位置，不来自手速。",
        "如果 SOL 扫低、重新站上 VWAP，而且实时 ATR 给空间，才有 clean long scalp；如果扫高失败，就讲 trap breakout 和快速离场。"
      ],
      contextLines: [
        "The June 5 scalp context is defensive but active: Bitcoin and Solana are still reacting to liquidation-driven volatility, which makes session boundaries and VWAP reaction more important than prediction.",
        "For Caven, the usable sequence is session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低并回收 VWAP、且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍在 VWAP 下方或卡在区间中间，主讲 short scalp 或等待下一边界。",
      assignment: "让成员提交 SOL 或 BTC 6月5日 15M 图，标出前一日 high/low、清算后边界、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月5日 VWAP 反应决定能否参与",
      summary: "Caven 用 liquidity、VWAP 和短线波动做 2026-06-05 当日跟进：只看扫高/扫低后的回收或拒绝，不追区间中间。",
      hook: "Caven 今天这条跟进很适合短线用户：不要问现在能不能追，先问价格有没有 sweep，回到 VWAP 没有，ATR 够不够。",
      outline: [
        "开场：把今天的跟进定义成 session boundary check，而不是方向预测。",
        "流动性：标出 SOL/BTC 当日最清楚的 session high/low 和急跌后留下的短线边界，确认哪一边已经被扫，哪一边还没有反应。",
        "VWAP：扫低后站回 VWAP 才讲 continuation scalp；扫高后跌回 VWAP 下方就讲 trap breakout。",
        "波动：刷新行情后读取 RSI 和 ATR，确认还有没有空间支持第一目标。",
        "执行：区间中间、低 ATR、VWAP 附近来回穿都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is not a green candle. The first confirmation is sweep plus VWAP reaction.",
        "如果 SOL 扫低后重新站回 VWAP，而且 RSI 从低位修复，今天可以讲 quick long scalp。",
        "如果弹一下又掉回 VWAP 下方，那就是 weak reclaim。短线不要把 weak reclaim 变成长期扛单。"
      ],
      contextLines: [
        "The June 5 follow-up should keep traders focused on current session levels because crypto momentum is defensive and selective.",
        "For Caven, use live VWAP and ATR to decide whether today's move has enough range for a scalp or should be skipped."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后重新站回 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和继续等待。",
      assignment: "让成员提交 SOL 或 BTC 6月5日 15M 图，标出 session high/low、清算后边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月5日只复盘边界与 VWAP",
      summary: "Caven 用 2026-06-05 当日复盘把 session sweep、VWAP 和 ATR 转成短线作业：中间位置不点评，失败立刻走。",
      hook: "Caven 今天这条复盘转化要讲清楚：我们不复盘你追了哪根 K 线，我们复盘有没有边界、有没有 sweep、有没有 VWAP reaction。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 当日 session high/low、清算后短线边界和被扫的那一边。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI 和 ATR 判断这笔 scalp 是否有足够空间，还是只能当作观察。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：today the clean trade is not the fastest candle. The clean trade is the candle after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后重新站回 VWAP，并且 RSI 修复，复盘时讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经缩小，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "Use this as a same-day scalp recap for June 5. Because the broader crypto tape is cautious, the recap should reward clean boundary reactions and punish middle-of-range chasing.",
        "For Caven, every recap should map to session boundary, sweep, VWAP reaction, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待下一个边界。",
      assignment: "让成员提交一张 6月5日 15M 复盘图，标出 session high/low、清算后边界、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_4_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月4日先看清算低点后的接受度",
      summary: "William 用 ICT/SMC 解读 2026-06-04 当日行情：加密市场仍在消化前一日清算和资金流压力，先看 BTC/ETH 是否接受清算低点上方结构，再谈 BOS 或 CHOCH。",
      hook: "今天 William 这条当日行情解读，不要从价格数字开始。先刷新行情，看 BTC 和 ETH 是在清算低点上方接受，还是反弹到 broken structure 后继续被拒绝。",
      outline: [
        "开场：说明 6月4日的核心是清算后的 acceptance，不是用昨天的急跌情绪继续追空或抢多。",
        "流动性：标出前一日高低点、清算低点、亚洲盘高低点和上方短线 buy-side liquidity，观察哪一侧先被扫。",
        "结构：如果扫低后能站回短线 swing 并形成 CHOCH 或 BOS，主讲 discount 回踩；如果反弹停在 broken structure，主讲派发延续。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，确认修复是双主流同步，还是只有单一品种短线反抽。",
        "风险：SOL 的快反只能当风险偏好参考，Gold 的避险波动当宏观背景；没有 FVG、order block 和 invalidation，就只做 readout。"
      ],
      talk: [
        "William 可以这样讲：今天先不要问能不能 V 反，先问市场有没有接受昨天被清算后留下的低位结构。",
        "BTC 和 ETH 如果只是回到 broken structure 附近，没有 BOS 或 CHOCH，就不是 clean long setup。ICT 里最重要的是 sequence，不是一根反弹 K 线。",
        "如果刷新后 BTC/ETH 同步修复，今天讲 sweep low 后的 bullish CHOCH 和 discount 回踩；如果 ETH 跟不上，或者 MACD 柱体继续恶化，就把它当作 weak retest。"
      ],
      contextLines: [
        "The June 4 crypto backdrop is still a post-liquidation read. Bitcoin and Ethereum need live confirmation that the prior sell-side move is being accepted or reclaimed before the script can lean bullish.",
        "For William, convert the live tape into ICT and SMC language: liquidity taken, structure accepted or rejected, retracement zone, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低并形成 CHOCH，主讲 discount 回踩、FVG 或 order block 确认；如果扫高失败、ETH 不同步或 MACD 柱体继续走弱，主讲 liquidity grab、broken structure retest 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月4日最新 4H 图，标出前一日高低点、清算低点、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月4日确认修复还是二次派发",
      summary: "William 用 ICT/SMC 做 2026-06-04 当日跟进：刷新后判断 BTC/ETH 是清算后修复、区间接受，还是反弹到供应区后继续派发。",
      hook: "今天 William 这条当日行情跟进，要把昨天的清算当背景，不当结论。先刷新行情，再判断今天是 acceptance day，还是第二次 distribution。",
      outline: [
        "开场：把 6月4日定义成 post-liquidation confirmation day，先确认市场是否接受前一日低位区间。",
        "流动性：检查 BTC/ETH 是否扫过前一日低点、亚洲盘低点或上方买方流动性，重点看扫后收盘和结构位置。",
        "结构：扫低后如果形成 higher low 和 BOS，主讲回踩确认；如果反弹只碰到供应区或 broken structure，主讲弱修复失败。",
        "动能：刷新后用 RSI、MACD、ATR 判断这次修复是否有真实动能和足够波动空间。",
        "风险：Gold 的宏观波动和 SOL 的高 beta 反应只做辅助，不把单一资产的强弱当成主流币全面恢复。"
      ],
      talk: [
        "William 可以这样讲：今天是确认日。清算已经发生，下一步要看市场能不能把那段流动性转成新的结构。",
        "如果 BTC 先扫低再收回，ETH 也同步形成 higher low，今天可以讲 bullish CHOCH 后等 FVG 或 order block。",
        "如果价格只是回到前面跌破的位置，RSI 和 MACD 没有配合，那就是 broken structure retest，不能追。"
      ],
      contextLines: [
        "The June 4 follow-up should treat the latest liquidation pressure as context, not as a fixed bearish call. Live data decides whether today becomes recovery, range acceptance, or another failed retest.",
        "For William, the actionable question is whether today's chart has enough structure to separate real recovery from a weak bounce."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep 后的结构延续和回踩确认；如果反弹没有站稳结构、SOL 分化或 ATR 收缩，主讲弱反弹、降低仓位和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月4日最新 4H 图，标出被扫的 liquidity、是否出现 BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月4日只复盘 acceptance sequence",
      summary: "William 用 2026-06-04 当日复盘框架把 BTC/ETH 的实时结构转成群内作业：流动性、接受度、结构、无效位和风险控制。",
      hook: "William 今天这条当日复盘，不复盘谁猜对底部，只复盘市场有没有给完整 sequence：sweep、acceptance、structure shift、retest、invalidation。",
      outline: [
        "开场：说明当天复盘只看 6月4日已经发生的结构，不用固定价格做预测。",
        "流动性：回看今天最清楚的扫高或扫低，标出前一日高低点、清算低点和 session 高低点。",
        "结构：把扫单后的 acceptance、BOS/CHOCH、回踩区和 invalidation 画出来；没有结构就明确说无交易计划。",
        "动能：刷新行情后用 BTC/ETH 的 RSI、MACD、ATR 判断复盘结论是趋势修复、弱反弹还是低波动等待。",
        "转化：引导成员把同一套模板发到 VIP 群，不带 SL 的图不点评。"
      ],
      talk: [
        "William 可以这样讲：今天我们复盘的不是涨跌幅，而是市场有没有接受清算后的结构。",
        "如果 sweep、acceptance、CHOCH、回踩和无效位都出现，才是可以拿来教学的 ICT setup；如果只有单边大 K 线，那就是情绪，不是计划。",
        "今天主流币仍需要防守，所以没有同步动能、没有清晰 invalidation，就不要用高杠杆。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 4. The broader tape is cautious after forced selling, so the recap should reward confirmation and acceptance rather than prediction.",
        "For William, every recap point should map back to liquidity, acceptance, BOS or CHOCH, retest area, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已经给出完整 sweep + acceptance + CHOCH + retest，主讲确认后的计划；如果只有单边波动或动能不同步，主讲为什么这是 readout，不是 entry。",
      assignment: "让成员提交一张 6月4日复盘图，必须标出 sweep、acceptance、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月4日先看 reclaim 是否有效",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-04 当日行情：crypto 仍在修复与防守之间切换，Gold 受美元、收益率和避险消息影响，今天先看价格是否站在 20 EMA 有效一侧。",
      hook: "KC 今天这条当日行情解读只问一个问题：is price holding the 20 EMA, rejecting it, or trying to reclaim it? 先刷新行情，再讲 entry、SL、TP。",
      outline: [
        "开场：说明 6月4日不是追昨天清算后的第一段反弹，而是用 20 EMA 重新定位今天的趋势。",
        "位置：刷新后检查 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚 reclaim。",
        "确认：站上或守住 EMA 后，再用实时 RSI 和 MACD 判断动能质量。",
        "目标：Gold 的宏观波动和 crypto 的清算后波动都要求用实时 ATR 约束 TP，不给情绪化目标。",
        "执行：只讲 EMA 附近的第一次回踩或 reclaim 后第一次 pullback，离 EMA 太远就等。"
      ],
      talk: [
        "KC 可以这样讲：a daily readout starts with location, not emotion. If price is far from the 20 EMA, we do not chase.",
        "如果 BTC 或 SOL 已经 reclaim 20 EMA，而且 RSI 回到中线附近，今天讲第一次回踩、SL 和 realistic target。",
        "如果 Gold 因宏观消息波动但没有守住 20 EMA，就不要把避险故事直接当 entry。Blueprint first, story second."
      ],
      contextLines: [
        "The June 4 market is still sorting out whether crypto can stabilize after forced selling, while gold remains sensitive to the dollar, yields, U.S. data, and geopolitical headlines.",
        "For KC, that means trend location comes first: 20 EMA relationship, RSI and MACD quality, then ATR-based target."
      ],
      marketTemplate: "刷新后如果主图守住或重新站上 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、Gold 受美元收益率压制或 ATR 不支持目标，主讲等待 reclaim。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月4日最新图，标出 20 EMA、reclaim 或拒绝位置、entry zone、SL 以及按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月4日用均线判断反弹质量",
      summary: "KC 用 20 EMA Blueprint 做 2026-06-04 当日跟进：刷新后判断 BTC、Gold 或 SOL 是趋势延续、假 reclaim，还是只适合观望。",
      hook: "KC 今天的跟进不要讲预测，讲 quality check。A bounce is not a setup until it respects the 20 EMA and momentum confirms.",
      outline: [
        "开场：把今天的跟进定义成 reclaim quality check，不追已经离开均线的位置。",
        "位置：刷新后看 BTC、Gold 或 SOL 与 20 EMA 的距离，以及是否刚好在第一次回踩区。",
        "确认：RSI 是否守住中线，MACD 柱体是否停止恶化，决定这是 clean setup 还是 fake reclaim。",
        "目标：用实时 ATR 重新估算第一目标，避免清算后波动忽大忽小时仍给情绪化 TP。",
        "风险：若价格在 EMA 下方反弹失败，今天重点就是等待，不是强行找多单。"
      ],
      talk: [
        "KC 可以这样讲：the Blueprint keeps us honest. If price cannot hold the 20 EMA, we do not call it continuation.",
        "如果 BTC 或 SOL 在 EMA 上方回踩、RSI 守中线、MACD 改善，今天就讲 clean pullback。",
        "如果只是一根反弹 K 线碰到 EMA 又被拒绝，告诉成员 this is resistance, not entry."
      ],
      contextLines: [
        "The June 4 follow-up should acknowledge the current defensive crypto backdrop without turning it into a fixed bearish script.",
        "For KC, the live 20 EMA read decides whether today's move is continuation, reclaim, failed reclaim, or no trade."
      ],
      marketTemplate: "刷新后如果主图守住或 reclaim 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ATR 收缩或动能没有恢复，主讲假 reclaim、短目标或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月4日最新图，标出 20 EMA、守线或假 reclaim 位置、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月4日让 ATR 过滤情绪目标",
      summary: "KC 用 2026-06-04 当日复盘把 20 EMA、RSI/MACD 和 ATR 转成可执行作业：没有均线位置和现实目标，就没有 Blueprint setup。",
      hook: "KC 今天这条复盘转化要讲得很直接：movement is not a setup. The setup is 20 EMA location, confirmation, stop loss, and an ATR-based target.",
      outline: [
        "开场：复盘今天不是看最大涨跌，而是看有没有尊重 20 EMA Blueprint。",
        "位置：标出今天价格相对 20 EMA 的位置，确认是守线、reclaim、拒绝还是远离均线。",
        "确认：用刷新后的 RSI、MACD 判断这笔想法有没有动能支持。",
        "目标：用实时 ATR 检查 TP 是否现实，尤其在 Gold 和主流币都高波动时不要给情绪化目标。",
        "转化：要求群成员提交图时必须写 entry、SL、TP 和为什么目标没有超过合理 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask me target, show me the ATR. If the market range is small, your target cannot be huge.",
        "如果今天的图在 20 EMA 上方完成回踩，复盘时就讲 clean continuation；如果一直在 EMA 下方，复盘重点就是为什么没有 entry。",
        "这个市场背景下，discipline 比方向更重要。BTC、SOL、Gold 都要先尊重 Blueprint，再谈交易。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 4. Crypto is defensive and gold is macro-sensitive, so every target needs a volatility check.",
        "For KC, every recap should end with the same Blueprint: 20 EMA location, RSI/MACD confirmation, ATR-based target, predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 继续走弱或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交一张 6月4日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月4日只等清算边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-04 当日短线：BTC/SOL 仍有清算后波动，今天只交易 session 边界和 VWAP 反应。",
      hook: "Caven 今天这条当日行情解读不要追中间位置。先刷新行情，把 SOL/BTC 的前一日 high/low、清算低点、当前 session high/low 和 VWAP 画出来，再等 sweep。",
      outline: [
        "开场：说明 6月4日短线只做边界，不追清算后的第二根情绪 K 线。",
        "流动性：标出 SOL/BTC 的前一日 high/low、清算低点、亚洲盘高低点和当前 session 边界，等其中一侧被扫。",
        "VWAP：扫低后回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取实时 RSI 和 ATR，确认当前 range 是否足够支付快速目标。",
        "执行：止损放在 sweep 外侧，最多等两个确认；没有边界反应就不做。"
      ],
      talk: [
        "Caven 可以这样讲：today we do not trade the middle. The middle is where late traders get chopped.",
        "SOL 和 BTC 今天都要先看 session 边界，不能因为价格动得快就追。Scalp 的优势来自位置，不来自手速。",
        "如果 SOL 扫低、重新站上 VWAP，而且实时 ATR 给空间，才有 clean long scalp；如果扫高失败，就讲 trap breakout 和快速离场。"
      ],
      contextLines: [
        "The June 4 scalp context is defensive but active: Bitcoin and Solana are still reacting to liquidation-driven volatility, which makes session boundaries and VWAP reaction more important than prediction.",
        "For Caven, the usable sequence is session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低并回收 VWAP、且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍在 VWAP 下方或卡在区间中间，主讲 short scalp 或等待下一边界。",
      assignment: "让成员提交 SOL 或 BTC 6月4日 15M 图，标出前一日 high/low、清算低点、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月4日 VWAP 回收才有参与",
      summary: "Caven 用 liquidity、VWAP 和短线波动做 2026-06-04 当日跟进：只看扫高/扫低后的回收或拒绝，不追区间中间。",
      hook: "Caven 今天这条跟进很适合短线用户：不要问现在能不能追，先问价格有没有 sweep，回到 VWAP 没有，ATR 够不够。",
      outline: [
        "开场：把今天的跟进定义成 session boundary check，而不是方向预测。",
        "流动性：标出 SOL/BTC 当日最清楚的 session high/low 和清算后留下的短线边界，确认哪一边已经被扫，哪一边还没有反应。",
        "VWAP：扫低后站回 VWAP 才讲 continuation scalp；扫高后跌回 VWAP 下方就讲 trap breakout。",
        "波动：刷新行情后读取 RSI 和 ATR，确认还有没有空间支持第一目标。",
        "执行：区间中间、低 ATR、VWAP 附近来回穿都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is not a green candle. The first confirmation is sweep plus VWAP reaction.",
        "如果 SOL 扫低后重新站回 VWAP，而且 RSI 从低位修复，今天可以讲 quick long scalp。",
        "如果弹一下又掉回 VWAP 下方，那就是 weak reclaim。短线不要把 weak reclaim 变成长期扛单。"
      ],
      contextLines: [
        "The June 4 follow-up should keep traders focused on current session levels because crypto momentum is defensive and selective.",
        "For Caven, use live VWAP and ATR to decide whether today's move has enough range for a scalp or should be skipped."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后重新站回 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和继续等待。",
      assignment: "让成员提交 SOL 或 BTC 6月4日 15M 图，标出 session high/low、清算后边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月4日只复盘边界反应",
      summary: "Caven 用 2026-06-04 当日复盘把 session sweep、VWAP 和 ATR 转成短线作业：中间位置不点评，失败立刻走。",
      hook: "Caven 今天这条复盘转化要讲清楚：我们不复盘你追了哪根 K 线，我们复盘有没有边界、有没有 sweep、有没有 VWAP reaction。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 当日 session high/low、清算后短线边界和被扫的那一边。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI 和 ATR 判断这笔 scalp 是否有足够空间，还是只能当作观察。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：today the clean trade is not the fastest candle. The clean trade is the candle after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后重新站回 VWAP，并且 RSI 修复，复盘时讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经缩小，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "Use this as a same-day scalp recap for June 4. Because the broader crypto tape is cautious, the recap should reward clean boundary reactions and punish middle-of-range chasing.",
        "For Caven, every recap should map to session boundary, sweep, VWAP reaction, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待下一个边界。",
      assignment: "让成员提交一张 6月4日 15M 复盘图，标出 session high/low、清算后边界、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_3_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月3日先处理清算后的结构",
      summary: "William 用 ICT/SMC 解读 2026-06-03 当日行情：加密市场经历急跌和多头清算后，先看 BTC/ETH 是否扫低回收，再谈 BOS 或 CHOCH。",
      hook: "今天 William 这条当日行情解读，不要从抄底情绪开始。先刷新行情，看 BTC 和 ETH 在清算后的低位区间，是扫低回收，还是继续被 broken structure 压住。",
      outline: [
        "开场：说明 6月3日的核心是清算后的结构确认，不是追第一根反弹 K 线。",
        "流动性：标出前一日低点、当日亚洲盘高低点和清算后形成的短线 swing，判断 sell-side liquidity 是否已经被拿走。",
        "结构：扫低后只有重新站回短线结构并形成 CHOCH 或 BOS，才讲 discount 回踩；扫高失败则按 liquidity grab 处理。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，判断修复是同步改善，还是只有单一品种反抽。",
        "风险：ETF 资金流和杠杆清算让市场仍偏防守，没有 FVG、order block 和 invalidation，就只做 readout。"
      ],
      talk: [
        "William 可以这样讲：今天的市场先不要问能不能反弹，先问 liquidity 被谁拿走，拿走以后有没有真的改变结构。",
        "BTC 的关键不是一个固定价位，而是前一日低点和今天 session 的接受度。扫低后不能收回结构，就不是 bullish setup。",
        "如果 BTC 和 ETH 刷新后同步修复，今天讲 bullish CHOCH 后的 discount 回踩；如果 ETH 仍弱，或者 MACD 没有配合，就把反弹当成低质量修复。"
      ],
      contextLines: [
        "The June 3 crypto tape starts from a defensive liquidation backdrop: Bitcoin broke lower, Ethereum remains under round-number pressure, and Solana is still trading like a fast reaction asset rather than a clean trend leader.",
        "For William, translate that into ICT and SMC language. Today is about whether sell-side liquidity has been swept and reclaimed, or whether every bounce is only a retest of broken structure."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低并形成 CHOCH，主讲 discount 回踩、FVG 或 order block 确认；如果扫高失败、ETH 不同步或 MACD 柱体继续走弱，主讲 liquidity grab、broken structure retest 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月3日最新 4H 图，标出前一日低点、被扫的 liquidity、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月3日确认弱修复还是继续派发",
      summary: "William 用 ICT/SMC 做 2026-06-03 当日跟进：刷新后判断 BTC/ETH 是清算后扫低修复、区间震荡，还是反弹到供应区失败。",
      hook: "今天 William 这条当日行情跟进，要把大家从情绪里拉回来：跌了不等于可以抄，弹了也不等于反转。ICT 先看 liquidity，entry 最后讲。",
      outline: [
        "开场：把 6月3日定义成清算后的 confirmation day，先确认今天市场是延续派发还是扫低后的修复。",
        "流动性：检查 BTC/ETH 是否扫过前一日低点、亚洲盘低点或上方买方流动性，重点看扫后收盘位置。",
        "结构：扫低后如果能形成 higher low 和 BOS，主讲回踩确认；如果反弹停在 broken structure，主讲供应区测试失败。",
        "动能：刷新后用 RSI、MACD、ATR 判断这次修复是否有足够动能和波动空间。",
        "风险：主流币与 SOL 不同步时，William 降低确定性，不把单一品种的强反当成市场全面恢复。"
      ],
      talk: [
        "William 可以这样讲：今天最重要的是确认质量。扫单以后没有结构，最多是 readout，不是 setup。",
        "如果 BTC 先扫低再收回，ETH 也同步从 round-number area 附近修复，今天可以讲 bullish CHOCH 后等 FVG 或 order block。",
        "如果价格只是回到前面跌破的位置，RSI 和 MACD 没有配合，那就是 broken structure retest，不能追。"
      ],
      contextLines: [
        "The June 3 follow-up should treat the latest crypto weakness and liquidation pressure as the backdrop, not as a fixed bearish call. Live data decides whether today becomes a recovery readout or another failed retest.",
        "For William, the actionable question is whether today's live chart has enough structure to separate a real recovery from a weak bounce."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep 后的结构延续和回踩确认；如果反弹没有站稳结构、SOL 分化或 ATR 收缩，主讲弱反弹、降低仓位和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月3日最新 4H 图，标出被扫的 liquidity、是否出现 BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月3日只复盘结构确认",
      summary: "William 用 2026-06-03 当日复盘框架把 BTC/ETH 的实时结构转成群内作业：流动性、结构、无效位和风险控制。",
      hook: "William 今天这条当日复盘，不总结谁猜对方向，只复盘市场有没有给清楚的 ICT sequence：sweep、structure shift、retest、invalidation。",
      outline: [
        "开场：说明当天复盘只看 6月3日已经发生的结构，不用固定价格做预测。",
        "流动性：回看今天最清楚的扫高或扫低，标出前一日区间和 session 高低点。",
        "结构：把扫单后的 BOS/CHOCH、回踩区和 invalidation 画出来；没有结构就明确说无交易计划。",
        "动能：刷新行情后用 BTC/ETH 的 RSI、MACD、ATR 判断复盘结论是趋势延续、弱反弹还是低波动等待。",
        "转化：引导成员把同一套模板发到 VIP 群，不带 SL 的图不点评。"
      ],
      talk: [
        "William 可以这样讲：今天我们复盘的不是涨跌，而是有没有出现完整 sequence。",
        "如果扫低、CHOCH、回踩和无效位都出现，才是可以拿来教学的 ICT setup；如果只是一根大 K 线，那就是情绪，不是计划。",
        "今天主流币仍需要防守，所以没有同步动能、没有清晰 invalidation，就不要用高杠杆。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 3. The broader tape is cautious after forced selling, so the recap should reward confirmation instead of prediction.",
        "For William, every recap point should map back to liquidity, BOS or CHOCH, retest area, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已经给出完整 sweep + CHOCH + retest，主讲确认后的计划；如果只有单边波动或动能不同步，主讲为什么这是 readout，不是 entry。",
      assignment: "让成员提交一张 6月3日复盘图，必须标出 sweep、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月3日先看能否 reclaim",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-03 当日行情：crypto 偏防守、Gold 高位震荡，今天先看价格是否站在 20 EMA 有效一侧。",
      hook: "KC 今天这条当日行情解读只问一个问题：price is above the 20 EMA, below the 20 EMA, or trying to reclaim it? 先刷新行情，再讲 entry、SL、TP。",
      outline: [
        "开场：说明 6月3日不是追清算后的第一段反弹，而是用 20 EMA 重新定今天的位置。",
        "位置：刷新后检查 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚 reclaim。",
        "确认：站上或守住 EMA 后，再用实时 RSI 和 MACD 判断动能质量。",
        "目标：Gold 受美元、收益率和地缘消息牵制，crypto 偏防守，所以 TP 必须由实时 ATR 决定。",
        "执行：只讲 EMA 附近的第一次回踩或 reclaim 后第一次 pullback，离 EMA 太远就等。"
      ],
      talk: [
        "KC 可以这样讲：a daily readout starts with location, not emotion. If price is far from the 20 EMA, we do not chase.",
        "如果 BTC 或 SOL 已经 reclaim 20 EMA，而且 RSI 回到中线附近，今天讲第一次回踩、SL 和 realistic target。",
        "如果 Gold 还在高位震荡但守不住 EMA，就不要把避险故事直接当 entry。Blueprint first, story second."
      ],
      contextLines: [
        "The June 3 market starts with crypto under pressure after heavy long liquidations, while gold is steady but still tied to Middle East headlines, U.S. data, yields, and the dollar.",
        "For KC, that means trend location comes first: 20 EMA relationship, RSI and MACD quality, then ATR-based target."
      ],
      marketTemplate: "刷新后如果主图守住或重新站上 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、Gold 受美元收益率压制或 ATR 不支持目标，主讲等待 reclaim。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月3日最新图，标出 20 EMA、reclaim 或拒绝位置、entry zone、SL 以及按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月3日反弹质量由均线决定",
      summary: "KC 用 20 EMA Blueprint 做 2026-06-03 当日跟进：刷新后判断 BTC、Gold 或 SOL 是趋势延续、假 reclaim，还是只适合观望。",
      hook: "KC 今天的跟进不要讲预测，讲 quality check。A bounce is not a setup until it respects the 20 EMA and momentum confirms.",
      outline: [
        "开场：把今天的跟进定义成 reclaim quality check，不追已经拉开的价格。",
        "位置：刷新后看 BTC、Gold 或 SOL 与 20 EMA 的距离，以及是否刚好在第一次回踩区。",
        "确认：RSI 是否守住中线，MACD 柱体是否停止恶化，决定这是 clean setup 还是 fake reclaim。",
        "目标：用实时 ATR 重新估算第一目标，避免清算后波动忽大忽小时仍给情绪化 TP。",
        "风险：若价格在 EMA 下方反弹失败，今天重点就是等待，不是强行找多单。"
      ],
      talk: [
        "KC 可以这样讲：the Blueprint keeps us honest. If price cannot hold the 20 EMA, we do not call it continuation.",
        "如果 BTC 或 SOL 在 EMA 上方回踩、RSI 守中线、MACD 改善，今天就讲 clean pullback。",
        "如果只是一根反弹 K 线碰到 EMA 又被拒绝，告诉成员 this is resistance, not entry."
      ],
      contextLines: [
        "The June 3 follow-up should acknowledge the current defensive crypto backdrop without turning it into a fixed bearish script.",
        "For KC, the live 20 EMA read decides whether today's move is continuation, reclaim, failed reclaim, or no trade."
      ],
      marketTemplate: "刷新后如果主图守住或 reclaim 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ATR 收缩或动能没有恢复，主讲假 reclaim、短目标或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月3日最新图，标出 20 EMA、守线或假 reclaim 位置、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月3日让 ATR 约束目标",
      summary: "KC 用 2026-06-03 当日复盘把 20 EMA、RSI/MACD 和 ATR 转成可执行作业：没有均线位置和现实目标，就没有 Blueprint setup。",
      hook: "KC 今天这条复盘转化要讲得很直接：movement is not a setup. The setup is 20 EMA location, confirmation, stop loss, and an ATR-based target.",
      outline: [
        "开场：复盘今天不是看最大涨跌，而是看有没有尊重 20 EMA Blueprint。",
        "位置：标出今天价格相对 20 EMA 的位置，确认是守线、reclaim、拒绝还是远离均线。",
        "确认：用刷新后的 RSI、MACD 判断这笔想法有没有动能支持。",
        "目标：用实时 ATR 检查 TP 是否现实，尤其在 Gold 和主流币都高波动时不要给情绪化目标。",
        "转化：要求群成员提交图时必须写 entry、SL、TP 和为什么目标没有超过合理 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask me target, show me the ATR. If the market range is small, your target cannot be huge.",
        "如果今天的图在 20 EMA 上方完成回踩，复盘时就讲 clean continuation；如果一直在 EMA 下方，复盘重点就是为什么没有 entry。",
        "这个市场背景下，discipline 比方向更重要。BTC、SOL、Gold 都要先尊重 Blueprint，再谈交易。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 3. Crypto is defensive and gold is macro-sensitive, so every target needs a volatility check.",
        "For KC, every recap should end with the same Blueprint: 20 EMA location, RSI/MACD confirmation, ATR-based target, predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 继续走弱或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交一张 6月3日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月3日只等边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-03 当日短线：BTC/SOL 偏防守但波动仍在，今天只交易 session 边界反应。",
      hook: "Caven 今天这条当日行情解读不要追中间位置。先刷新行情，把 SOL/BTC 的前一日 high/low、当前 session high/low 和 VWAP 画出来，再等 sweep。",
      outline: [
        "开场：说明 6月3日短线只做边界，不追清算后的第一根情绪 K 线。",
        "流动性：标出 SOL/BTC 的前一日 high/low、亚洲盘高低点和当前 session 边界，等其中一侧被扫。",
        "VWAP：扫低后回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取实时 RSI 和 ATR，确认当前 range 是否足够支付快速目标。",
        "执行：止损放在 sweep 外侧，最多等两个确认；没有边界反应就不做。"
      ],
      talk: [
        "Caven 可以这样讲：today we do not trade the middle. The middle is where late traders get chopped.",
        "SOL 和 BTC 今天都要先看 session 边界，不能因为价格动得快就追。Scalp 的优势来自位置，不来自手速。",
        "如果 SOL 扫低、重新站上 VWAP，而且实时 ATR 给空间，才有 clean long scalp；如果扫高失败，就讲 trap breakout 和快速离场。"
      ],
      contextLines: [
        "The June 3 scalp context is defensive but active: Bitcoin and Solana are coming from a liquidation-driven move, which makes session boundaries and VWAP reaction more important than prediction.",
        "For Caven, the usable sequence is session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低并回收 VWAP、且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍在 VWAP 下方或卡在区间中间，主讲 short scalp 或等待下一边界。",
      assignment: "让成员提交 SOL 或 BTC 6月3日 15M 图，标出前一日 high/low、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月3日 VWAP 回收才有短线参与",
      summary: "Caven 用 liquidity、VWAP 和短线波动做 2026-06-03 当日跟进：只看扫高/扫低后的回收或拒绝，不追区间中间。",
      hook: "Caven 今天这条跟进很适合短线用户：不要问现在能不能追，先问价格有没有 sweep，回到 VWAP 没有，ATR 够不够。",
      outline: [
        "开场：把今天的跟进定义成 session boundary check，而不是方向预测。",
        "流动性：标出 SOL/BTC 当日最清楚的 session high/low，确认哪一边已经被扫，哪一边还没有反应。",
        "VWAP：扫低后站回 VWAP 才讲 continuation scalp；扫高后跌回 VWAP 下方就讲 trap breakout。",
        "波动：刷新行情后读取 RSI 和 ATR，确认还有没有空间支持第一目标。",
        "执行：区间中间、低 ATR、VWAP 附近来回穿都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is not a green candle. The first confirmation is sweep plus VWAP reaction.",
        "如果 SOL 扫低后重新站回 VWAP，而且 RSI 从低位修复，今天可以讲 quick long scalp。",
        "如果弹一下又掉回 VWAP 下方，那就是 weak reclaim。短线不要把 weak reclaim 变成长期扛单。"
      ],
      contextLines: [
        "The June 3 follow-up should keep traders focused on current session levels because crypto momentum is defensive and selective.",
        "For Caven, use live VWAP and ATR to decide whether today's move has enough range for a scalp or should be skipped."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后重新站回 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和继续等待。",
      assignment: "让成员提交 SOL 或 BTC 6月3日 15M 图，标出 session high/low、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月3日只复盘边界，不复盘冲动",
      summary: "Caven 用 2026-06-03 当日复盘把 session sweep、VWAP 和 ATR 转成短线作业：中间位置不点评，失败立刻走。",
      hook: "Caven 今天这条复盘转化要讲清楚：我们不复盘你追了哪根 K 线，我们复盘有没有边界、有没有 sweep、有没有 VWAP reaction。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 当日 session high/low 和被扫的那一边。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI 和 ATR 判断这笔 scalp 是否有足够空间，还是只能当作观察。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：today the clean trade is not the fastest candle. The clean trade is the candle after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后重新站回 VWAP，并且 RSI 修复，复盘时讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经缩小，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "Use this as a same-day scalp recap for June 3. Because the broader crypto tape is cautious, the recap should reward clean boundary reactions and punish middle-of-range chasing.",
        "For Caven, every recap should map to session boundary, sweep, VWAP reaction, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待下一个边界。",
      assignment: "让成员提交一张 6月3日 15M 复盘图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_2_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月2日先看防守区扫单",
      summary: "William 用 ICT/SMC 解读 2026-06-02 当日行情：主流币延续防守状态，先看 BTC/ETH 是否扫低回收，再谈结构确认。",
      hook: "今天 William 这条当日行情解读，不要从价格数字开始，也不要因为单根反弹 K 线就追。先刷新行情，看 BTC 和 ETH 是扫低后回收，还是继续压在 broken structure 下方。",
      outline: [
        "开场：说明 6月2日的重点是当日市场状态，主流币仍偏防守，先判断 liquidity sweep 以后有没有结构转换。",
        "流动性：标出前一日高低点、亚洲盘高低点和最近反复测试的短线 swing，观察 sell-side 或 buy-side liquidity 是否先被拿掉。",
        "结构：扫低后只有重新站回短线结构并形成 CHOCH，才讲回踩确认；扫高失败则按 liquidity grab 处理。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，判断修复是同步改善，还是只有单一品种在短反。",
        "风险：ETH 接近心理关口、SOL 波动仍快，William 只讲有 FVG、order block 和 invalidation 的 setup，不追中间位置。"
      ],
      talk: [
        "William 可以这样讲：今天的市场不是给你猜底的，是给你检查结构的。先问哪里被扫，再问扫完以后有没有 CHOCH 或 BOS。",
        "BTC 当前的关键不是一个固定价格，而是前一日区间和今天 session 的接受度。扫低后不能收回结构，就不是 bullish setup。",
        "如果 BTC 和 ETH 刷新后同步修复，今天讲 bullish CHOCH 后的 discount 回踩；如果 ETH 仍弱，或者 MACD 没有配合，就把反弹当作低质量修复。"
      ],
      contextLines: [
        "The June 2 crypto tape is still defensive: Bitcoin is trading lower over the latest 24-hour window, Ethereum is hovering around the psychological two-thousand area, and Solana is soft but still active enough for short-term reaction trades.",
        "For William, convert that into ICT language. Today is about whether sell-side liquidity gets swept and reclaimed, or whether every bounce remains a retest of broken structure."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 扫低并形成 CHOCH，主讲 discount 回踩、FVG 或 order block 确认；如果扫高失败、ETH 不同步或 MACD 柱体继续走弱，主讲 liquidity grab、broken structure retest 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月2日最新 4H 图，标出前一日区间、被扫的 liquidity、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：6月2日确认弱修复还是延续派发",
      summary: "William 用 ICT/SMC 做 2026-06-02 当日跟进：刷新后判断 BTC/ETH 是扫低修复、区间震荡，还是反弹到供应区失败。",
      hook: "今天 William 这条当日行情跟进，要把大家从情绪里拉回来：跌了不等于可以抄，弹了也不等于反转。ICT 先看 liquidity，entry 最后讲。",
      outline: [
        "开场：把 6月2日定义成弱势后的 confirmation day，先确认今天市场是延续派发还是扫低后的修复。",
        "流动性：检查 BTC/ETH 是否扫过前一日低点、亚洲盘低点或上方买方流动性，重点看扫后收盘位置。",
        "结构：扫低后如果能形成 higher low 和 BOS，主讲回踩确认；如果反弹停在 broken structure，主讲供应区测试失败。",
        "动能：刷新后用 RSI、MACD、ATR 判断这次修复是否有足够动能和波动空间。",
        "风险：主流币与 SOL 不同步时，William 降低确定性，不把单一品种的强反当成市场全面恢复。"
      ],
      talk: [
        "William 可以这样讲：今天最重要的是确认质量。扫单以后没有结构，最多是 readout，不是 setup。",
        "如果 BTC 先扫低再收回，ETH 也同步从心理关口附近修复，今天可以讲 bullish CHOCH 后等 FVG 或 order block。",
        "如果价格只是回到前面跌破的位置，RSI 和 MACD 没有配合，那就是 broken structure retest，不能追。"
      ],
      contextLines: [
        "The June 2 follow-up should treat the latest crypto weakness as the backdrop, not as a fixed bearish call. Live data decides whether today becomes a recovery readout or another failed retest.",
        "For William, the actionable question is whether today's live chart has enough structure to separate a real recovery from a weak bounce."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep 后的结构延续和回踩确认；如果反弹没有站稳结构、SOL 分化或 ATR 收缩，主讲弱反弹、降低仓位和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 6月2日最新 4H 图，标出被扫的 liquidity、是否出现 BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：6月2日只复盘结构确认",
      summary: "William 用 2026-06-02 当日复盘框架把 BTC/ETH 的实时结构转成群内作业：流动性、结构、无效位和风险控制。",
      hook: "William 今天这条当日复盘，不总结谁猜对方向，只复盘市场有没有给清楚的 ICT sequence：sweep、structure shift、retest、invalidation。",
      outline: [
        "开场：说明当天复盘只看 6月2日已经发生的结构，不用固定价格做预测。",
        "流动性：回看今天最清楚的扫高或扫低，标出前一日区间和 session 高低点。",
        "结构：把扫单后的 BOS/CHOCH、回踩区和 invalidation 画出来；没有结构就明确说无交易计划。",
        "动能：刷新行情后用 BTC/ETH 的 RSI、MACD、ATR 判断复盘结论是趋势延续、弱反弹还是低波动等待。",
        "转化：引导成员把同一套模板发到 VIP 群，不带 SL 的图不点评。"
      ],
      talk: [
        "William 可以这样讲：今天我们复盘的不是涨跌，而是有没有出现完整 sequence。",
        "如果扫低、CHOCH、回踩和无效位都出现，才是可以拿来教学的 ICT setup；如果只是一根大 K 线，那就是情绪，不是计划。",
        "今天主流币仍需要防守，所以没有同步动能、没有清晰 invalidation，就不要用高杠杆。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 2. The broader tape is cautious, so the recap should reward confirmation instead of prediction.",
        "For William, every recap point should map back to liquidity, BOS or CHOCH, retest area, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已经给出完整 sweep + CHOCH + retest，主讲确认后的计划；如果只有单边波动或动能不同步，主讲为什么这是 readout，不是 entry。",
      assignment: "让成员提交一张 6月2日复盘图，必须标出 sweep、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月2日先看能否 reclaim",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-02 当日行情：BTC、ETH、SOL 偏防守，Gold 仍高波动，今天先看价格是否站在 20 EMA 有效一侧。",
      hook: "KC 今天这条当日行情解读只问一个问题：price is above the 20 EMA, below the 20 EMA, or trying to reclaim it? 先刷新行情，再讲 entry、SL、TP。",
      outline: [
        "开场：说明 6月2日不是追昨天波动，而是用 20 EMA 重新定今天的位置。",
        "位置：刷新后检查 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚 reclaim。",
        "确认：站上或守住 EMA 后，再用实时 RSI 和 MACD 判断动能质量。",
        "目标：Gold 仍受美元和收益率牵制，crypto 偏防守，所以 TP 必须由实时 ATR 决定。",
        "执行：只讲 EMA 附近的第一次回踩或 reclaim 后第一次 pullback，离 EMA 太远就等。"
      ],
      talk: [
        "KC 可以这样讲：a daily readout starts with location, not emotion. If price is far from the 20 EMA, we do not chase.",
        "如果 BTC 或 SOL 已经 reclaim 20 EMA，而且 RSI 回到中线附近，今天讲第一次回踩、SL 和 realistic target。",
        "如果 Gold 还在高位震荡但守不住 EMA，就不要把避险故事直接当 entry。Blueprint first, story second."
      ],
      contextLines: [
        "The June 2 market starts with crypto under pressure and gold still elevated but volatile. Exact prices should come from the refreshed page, but the teaching bias is defensive until the 20 EMA is reclaimed.",
        "For KC, that means trend location comes first: 20 EMA relationship, RSI and MACD quality, then ATR-based target."
      ],
      marketTemplate: "刷新后如果主图守住或重新站上 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、Gold 受美元收益率压制或 ATR 不支持目标，主讲等待 reclaim。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月2日最新图，标出 20 EMA、reclaim 或拒绝位置、entry zone、SL 以及按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：6月2日反弹质量由均线决定",
      summary: "KC 用 20 EMA Blueprint 做 2026-06-02 当日跟进：刷新后判断 BTC、Gold 或 SOL 是趋势延续、假 reclaim，还是只适合观望。",
      hook: "KC 今天的跟进不要讲预测，讲 quality check。A bounce is not a setup until it respects the 20 EMA and momentum confirms.",
      outline: [
        "开场：把今天的跟进定义成 reclaim quality check，不追已经拉开的价格。",
        "位置：刷新后看 BTC、Gold 或 SOL 与 20 EMA 的距离，以及是否刚好在第一次回踩区。",
        "确认：RSI 是否守住中线，MACD 柱体是否停止恶化，决定这是 clean setup 还是 fake reclaim。",
        "目标：用实时 ATR 重新估算第一目标，避免低波动时仍给过大的 TP。",
        "风险：若价格在 EMA 下方反弹失败，今天重点就是等待，不是强行找多单。"
      ],
      talk: [
        "KC 可以这样讲：the Blueprint keeps us honest. If price cannot hold the 20 EMA, we do not call it continuation.",
        "如果 BTC 或 SOL 在 EMA 上方回踩、RSI 守中线、MACD 改善，今天就讲 clean pullback。",
        "如果只是一根反弹 K 线碰到 EMA 又被拒绝，告诉成员 this is resistance, not entry."
      ],
      contextLines: [
        "The June 2 follow-up should acknowledge the current defensive crypto backdrop without turning it into a fixed bearish script.",
        "For KC, the live 20 EMA read decides whether today's move is continuation, reclaim, failed reclaim, or no trade."
      ],
      marketTemplate: "刷新后如果主图守住或 reclaim 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ATR 收缩或动能没有恢复，主讲假 reclaim、短目标或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月2日最新图，标出 20 EMA、守线或假 reclaim 位置、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：6月2日让 ATR 约束目标",
      summary: "KC 用 2026-06-02 当日复盘把 20 EMA、RSI/MACD 和 ATR 转成可执行作业：没有均线位置和现实目标，就没有 Blueprint setup。",
      hook: "KC 今天这条复盘转化要讲得很直接：movement is not a setup. The setup is 20 EMA location, confirmation, stop loss, and an ATR-based target.",
      outline: [
        "开场：复盘今天不是看最大涨跌，而是看有没有尊重 20 EMA Blueprint。",
        "位置：标出今天价格相对 20 EMA 的位置，确认是守线、reclaim、拒绝还是远离均线。",
        "确认：用刷新后的 RSI、MACD 判断这笔想法有没有动能支持。",
        "目标：用实时 ATR 检查 TP 是否现实，尤其在 Gold 和主流币都高波动时不要给情绪化目标。",
        "转化：要求群成员提交图时必须写 entry、SL、TP 和为什么目标没有超过合理 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask me target, show me the ATR. If the market range is small, your target cannot be huge.",
        "如果今天的图在 20 EMA 上方完成回踩，复盘时就讲 clean continuation；如果一直在 EMA 下方，复盘重点就是为什么没有 entry。",
        "这个市场背景下，discipline 比方向更重要。BTC、SOL、Gold 都要先尊重 Blueprint，再谈交易。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 2. Crypto is defensive and gold is still macro-sensitive, so every target needs a volatility check.",
        "For KC, every recap should end with the same Blueprint: 20 EMA location, RSI/MACD confirmation, ATR-based target, predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 继续走弱或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交一张 6月2日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月2日只等边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-02 当日短线：BTC/SOL 偏防守但波动仍在，今天只交易 session 边界反应。",
      hook: "Caven 今天这条当日行情解读不要追中间位置。先刷新行情，把 SOL/BTC 的前一日 high/low、当前 session high/low 和 VWAP 画出来，再等 sweep。",
      outline: [
        "开场：说明 6月2日短线只做边界，不追第一根情绪 K 线。",
        "流动性：标出 SOL/BTC 的前一日 high/low、亚洲盘高低点和当前 session 边界，等其中一侧被扫。",
        "VWAP：扫低后回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取实时 RSI 和 ATR，确认当前 range 是否足够支付快速目标。",
        "执行：止损放在 sweep 外侧，最多等两个确认；没有边界反应就不做。"
      ],
      talk: [
        "Caven 可以这样讲：today we do not trade the middle. The middle is where late traders get chopped.",
        "SOL 和 BTC 今天都要先看 session 边界，不能因为价格动得快就追。Scalp 的优势来自位置，不来自手速。",
        "如果 SOL 扫低、重新站上 VWAP，而且实时 ATR 给空间，才有 clean long scalp；如果扫高失败，就讲 trap breakout 和快速离场。"
      ],
      contextLines: [
        "The June 2 scalp context is defensive but active: Bitcoin and Solana are lower over the latest live window, which makes session boundaries and VWAP reaction more important than prediction.",
        "For Caven, the usable sequence is session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低并回收 VWAP、且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍在 VWAP 下方或卡在区间中间，主讲 short scalp 或等待下一边界。",
      assignment: "让成员提交 SOL 或 BTC 6月2日 15M 图，标出前一日 high/low、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：6月2日 VWAP 回收才有短线参与",
      summary: "Caven 用 liquidity、VWAP 和短线波动做 2026-06-02 当日跟进：只看扫高/扫低后的回收或拒绝，不追区间中间。",
      hook: "Caven 今天这条跟进很适合短线用户：不要问现在能不能追，先问价格有没有 sweep，回到 VWAP 没有，ATR 够不够。",
      outline: [
        "开场：把今天的跟进定义成 session boundary check，而不是方向预测。",
        "流动性：标出 SOL/BTC 当日最清楚的 session high/low，确认哪一边已经被扫，哪一边还没有反应。",
        "VWAP：扫低后站回 VWAP 才讲 continuation scalp；扫高后跌回 VWAP 下方就讲 trap breakout。",
        "波动：刷新行情后读取 RSI 和 ATR，确认还有没有空间支持第一目标。",
        "执行：区间中间、低 ATR、VWAP 附近来回穿都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is not a green candle. The first confirmation is sweep plus VWAP reaction.",
        "如果 SOL 扫低后重新站回 VWAP，而且 RSI 从低位修复，今天可以讲 quick long scalp。",
        "如果弹一下又掉回 VWAP 下方，那就是 weak reclaim。短线不要把 weak reclaim 变成长期扛单。"
      ],
      contextLines: [
        "The June 2 follow-up should keep traders focused on current session levels because crypto momentum is defensive and selective.",
        "For Caven, use live VWAP and ATR to decide whether today's move has enough range for a scalp or should be skipped."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后重新站回 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和继续等待。",
      assignment: "让成员提交 SOL 或 BTC 6月2日 15M 图，标出 session high/low、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：6月2日只复盘边界，不复盘冲动",
      summary: "Caven 用 2026-06-02 当日复盘把 session sweep、VWAP 和 ATR 转成短线作业：中间位置不点评，失败立刻走。",
      hook: "Caven 今天这条复盘转化要讲清楚：我们不复盘你追了哪根 K 线，我们复盘有没有边界、有没有 sweep、有没有 VWAP reaction。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 当日 session high/low 和被扫的那一边。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI 和 ATR 判断这笔 scalp 是否有足够空间，还是只能当作观察。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：today the clean trade is not the fastest candle. The clean trade is the candle after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后重新站回 VWAP，并且 RSI 修复，复盘时讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经缩小，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "Use this as a same-day scalp recap for June 2. Because the broader crypto tape is cautious, the recap should reward clean boundary reactions and punish middle-of-range chasing.",
        "For Caven, every recap should map to session boundary, sweep, VWAP reaction, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待下一个边界。",
      assignment: "让成员提交一张 6月2日 15M 复盘图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const JUNE_1_MARKET_READOUT_OVERRIDES = {
  William: {
    "mon-market": {
      title: "ICT 当日行情解读：6月1日先读流动性与结构",
      summary: "William 用 ICT/SMC 解读 2026-06-01 当日行情：晚五月 ETF 需求降温后，先看 BTC/ETH 是否从周末区间扫单并重新给出结构确认。",
      hook: "今天 William 这条当日行情解读，不讲固定点位，也不拿上周结论硬套今天。先刷新行情，看 BTC 和 ETH 当前在周末区间、前一日高低点和关键结构附近怎么反应。",
      outline: [
        "开场：说明 6月1日是新一周第一条当日 readout，重点是晚五月资金流出后，今天有没有重新形成可交易结构。",
        "流动性：标出周末 high/low、前一日 high/low，以及最近被反复测试的前高前低，观察哪一侧 liquidity 先被扫。",
        "结构：扫单后只有出现 BOS 或 CHOCH，才进入 entry setup；如果仍在 broken structure 下方，就只是反弹或整理。",
        "动能：刷新行情后读取 BTC/ETH 的 RSI、MACD 和 ATR，确认修复是否同步，还是只有单一品种在反弹。",
        "执行：只讲 FVG、order block 或 discount/premium 回踩，不追今天第一段扩张。"
      ],
      talk: [
        "William 可以这样讲：今天不是问 BTC 现在多少钱，而是问市场拿掉了哪边 liquidity，拿完以后有没有真正改变结构。",
        "晚五月 BTC、ETH、SOL 都没有跟上美股强势，ETF 需求也转弱，所以今天任何反弹都要先过结构确认这一关。",
        "如果刷新后 BTC 和 ETH 同步修复，主讲 sweep low 后的 bullish CHOCH；如果只有 BTC 动，ETH 不配合，就把它当作低质量反弹，继续等确认。"
      ],
      contextLines: [
        "The June 1 context starts from a defensive late-May crypto tape: major coins lagged the stock rally, and ETF demand cooled into the new week.",
        "For William, translate that into ICT language: identify the weekend range, watch which side of liquidity is taken, and only trust the readout after BOS or CHOCH confirms."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 在周末区间扫低并形成 CHOCH，主讲 discount 回踩确认；如果扫高失败、ETH 不同步或 MACD 继续走弱，主讲 liquidity grab、broken structure retest 和等待。",
      assignment: "让成员提交 BTC 或 ETH 6月1日最新 4H 图，标出周末区间、被扫的 liquidity、BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "wed-market": {
      title: "ICT 当日行情跟进：确认修复还是弱反弹",
      summary: "William 用 ICT/SMC 做 6月1日当日跟进：不写死价格，刷新后判断 BTC/ETH 是否从晚五月弱势里形成结构修复。",
      hook: "今天这条当日行情跟进，William 要先把大家从情绪里拉回来：反弹不等于反转，跌不动也不等于可以买。结构先确认，entry 最后讲。",
      outline: [
        "开场：把 6月1日定义成风险偏好修复测试，不是单纯看 24H 涨跌幅。",
        "流动性：检查 BTC/ETH 是否扫过前一日低点、周末低点或上方买方流动性，并观察扫后是否快速回收。",
        "结构：如果扫低后能走出 higher low 和 BOS，主讲回踩确认；如果反弹停在 broken structure，主讲供应区测试失败。",
        "动能：刷新后用 RSI、MACD、ATR 判断这次修复是否有足够动能和波动空间。",
        "风险：ETF 需求转弱的背景下，不把单根强 K 当成趋势恢复，必须有无效位。"
      ],
      talk: [
        "William 可以这样讲：今天的重点是确认质量。扫单以后没有结构，最多是 readout，不是 setup。",
        "如果 BTC 先扫低再收回，ETH 也同步从弱势里修复，今天可以讲 bullish CHOCH 后等 FVG 或 order block。",
        "如果价格只是回到前面跌破的位置，RSI 和 MACD 没有配合，那就是 broken structure retest，不能追。"
      ],
      contextLines: [
        "The daily follow-up should treat late-May ETF outflows and major-coin underperformance as the backdrop, not as a fixed bearish call.",
        "For William, the actionable question is whether today's live chart has enough structure to separate a real recovery from a weak bounce."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep 后的结构延续和回踩确认；如果反弹没有站稳结构或 ATR 收缩，主讲弱反弹、降低仓位和继续等待。",
      assignment: "让成员提交 BTC 或 ETH 当日最新 4H 图，标出被扫的 liquidity、是否出现 BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 当日复盘转化：只复盘确认，不复盘猜测",
      summary: "William 用 6月1日当日复盘框架把 BTC/ETH 的实时结构转成群内作业：流动性、结构、无效位和风险控制。",
      hook: "William 今天这条当日复盘，不总结谁猜对方向，只复盘市场有没有给清楚的 ICT sequence：sweep、structure shift、retest、invalidation。",
      outline: [
        "开场：说明当天复盘只看已经发生的结构，不用固定价格做预测。",
        "流动性：回看今天最清楚的扫高或扫低，标出周末区间和前一日高低点。",
        "结构：把扫单后的 BOS/CHOCH、回踩区和 invalidation 画出来；没有结构就明确说无交易计划。",
        "动能：刷新行情后用 BTC/ETH 的 RSI、MACD、ATR 判断复盘结论是趋势延续、弱反弹还是低波动等待。",
        "转化：引导成员把同一套模板发到 VIP 群，不带 SL 的图不点评。"
      ],
      talk: [
        "William 可以这样讲：今天我们复盘的不是涨跌，而是有没有出现完整 sequence。",
        "如果扫低、CHOCH、回踩和无效位都出现，才是可以拿来教学的 ICT setup；如果只是一根大 K 线，那就是情绪，不是计划。",
        "晚五月资金面偏谨慎，所以今天要特别提醒成员：没有同步动能，没有清晰 invalidation，就不要用高杠杆。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 1. The market comes into the day with softer ETF demand and cautious crypto momentum, so the recap should reward confirmation instead of prediction.",
        "For William, every recap point should map back to liquidity, BOS or CHOCH, retest area, and invalidation."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 已经给出完整 sweep + CHOCH + retest，主讲确认后的计划；如果只有单边波动或动能不同步，主讲为什么这是 readout，不是 entry。",
      assignment: "让成员提交一张 6月1日复盘图，必须标出 sweep、BOS/CHOCH、回踩区、SL 和第一目标。"
    }
  },
  KC: {
    "mon-market": {
      title: "20 EMA 当日行情解读：6月1日先看守线还是 reclaim",
      summary: "KC 用 20 EMA Blueprint 解读 2026-06-01 当日行情：晚五月 BTC/ETH/SOL 跟随不足，今天先看价格是否站在 20 EMA 有效一侧。",
      hook: "KC 今天这条当日行情解读只问一个问题：price is above the 20 EMA, below the 20 EMA, or trying to reclaim it? 先刷新行情，再讲 entry、SL、TP。",
      outline: [
        "开场：说明 6月1日不是追上周波动，而是用 20 EMA 重新定今天的位置。",
        "位置：刷新后检查 BTC、Gold 或 SOL 在 20 EMA 上方、下方，还是刚刚 reclaim。",
        "确认：站上或守住 EMA 后，再用实时 RSI 和 MACD 判断动能质量。",
        "目标：Gold 受美元和收益率牵制，crypto 受 ETF 需求影响，所以 TP 必须由实时 ATR 决定。",
        "执行：只讲 EMA 附近的第一次回踩或 reclaim 后第一次 pullback，离 EMA 太远就等。"
      ],
      talk: [
        "KC 可以这样讲：a daily readout starts with location, not emotion. If price is far from the 20 EMA, we do not chase.",
        "如果 BTC 或 SOL 已经 reclaim 20 EMA，而且 RSI 回到中线附近，今天讲第一次回踩、SL 和 realistic target。",
        "如果 Gold 在强美元和高收益率背景下还守不住 EMA，就不要把避险故事直接当 entry。Blueprint first, story second."
      ],
      contextLines: [
        "The June 1 market opens after major crypto assets lagged the stock rally and ETF demand cooled, while gold remains sensitive to dollar and yield pressure.",
        "For KC, that means trend location comes first: 20 EMA relationship, RSI and MACD quality, then ATR-based target."
      ],
      marketTemplate: "刷新后如果主图守住或重新站上 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、Gold 受美元收益率压制或 ATR 不支持目标，主讲等待 reclaim。",
      assignment: "让成员提交 BTC、Gold 或 SOL 6月1日最新图，标出 20 EMA、reclaim 或拒绝位置、entry zone、SL 以及按实时 ATR 制定的目标。"
    },
    "wed-market": {
      title: "20 EMA 当日行情跟进：反弹质量由均线决定",
      summary: "KC 用 20 EMA Blueprint 做 6月1日当日跟进：刷新后判断 BTC、Gold 或 SOL 是趋势延续、假 reclaim，还是只适合观望。",
      hook: "KC 今天的跟进不要讲预测，讲 quality check。A bounce is not a setup until it respects the 20 EMA and momentum confirms.",
      outline: [
        "开场：把今天的跟进定义成 reclaim quality check，不追已经拉开的价格。",
        "位置：刷新后看 BTC、Gold 或 SOL 与 20 EMA 的距离，以及是否刚好在第一次回踩区。",
        "确认：RSI 是否守住中线，MACD 柱体是否停止恶化，决定这是 clean setup 还是 fake reclaim。",
        "目标：用实时 ATR 重新估算第一目标，避免低波动时仍给过大的 TP。",
        "风险：若价格在 EMA 下方反弹失败，今天重点就是等待，不是强行找多单。"
      ],
      talk: [
        "KC 可以这样讲：the Blueprint keeps us honest. If price cannot hold the 20 EMA, we do not call it continuation.",
        "如果 BTC 或 SOL 在 EMA 上方回踩、RSI 守中线、MACD 改善，今天就讲 clean pullback。",
        "如果只是一根反弹 K 线碰到 EMA 又被拒绝，告诉成员 this is resistance, not entry."
      ],
      contextLines: [
        "The daily follow-up should acknowledge the cautious late-May crypto backdrop without turning it into a fixed bearish script.",
        "For KC, the live 20 EMA read decides whether today's move is continuation, reclaim, failed reclaim, or no trade."
      ],
      marketTemplate: "刷新后如果主图守住或 reclaim 20 EMA 且 RSI/MACD 配合，主讲第一次回踩；如果仍在 EMA 下方、ATR 收缩或动能没有恢复，主讲假 reclaim、短目标或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 当日最新图，标出 20 EMA、守线或假 reclaim 位置、entry zone、SL 和按实时 ATR 计算的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 当日复盘转化：让 ATR 约束目标",
      summary: "KC 用 6月1日当日复盘把 20 EMA、RSI/MACD 和 ATR 转成可执行作业：没有均线位置和现实目标，就没有 Blueprint setup。",
      hook: "KC 今天这条复盘转化要讲得很直接：movement is not a setup. The setup is 20 EMA location, confirmation, stop loss, and an ATR-based target.",
      outline: [
        "开场：复盘今天不是看最大涨跌，而是看有没有尊重 20 EMA Blueprint。",
        "位置：标出今天价格相对 20 EMA 的位置，确认是守线、reclaim、拒绝还是远离均线。",
        "确认：用刷新后的 RSI、MACD 判断这笔想法有没有动能支持。",
        "目标：用实时 ATR 检查 TP 是否现实，尤其在 Gold 和主流币都受宏观情绪影响时不要给情绪化目标。",
        "转化：要求群成员提交图时必须写 entry、SL、TP 和为什么目标没有超过合理 ATR。"
      ],
      talk: [
        "KC 可以这样讲：before you ask me target, show me the ATR. If the market range is small, your target cannot be huge.",
        "如果今天的图在 20 EMA 上方完成回踩，复盘时就讲 clean continuation；如果一直在 EMA 下方，复盘重点就是为什么没有 entry。",
        "这个市场背景下，discipline 比方向更重要。BTC、SOL、Gold 都要先尊重 Blueprint，再谈交易。"
      ],
      contextLines: [
        "Use this as a same-day recap for June 1. Crypto is coming from a cautious late-May tape, and gold remains tied to yield and dollar pressure, so targets need a volatility check.",
        "For KC, every recap should end with the same Blueprint: 20 EMA location, RSI/MACD confirmation, ATR-based target, predefined stop."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA、MACD 继续走弱或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交一张 6月1日复盘图，标出 20 EMA、entry zone、SL、第一目标和目标对应的实时 ATR 依据。"
    }
  },
  Caven: {
    "mon-market": {
      title: "Scalp 当日行情解读：6月1日只等边界 sweep 与 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 解读 2026-06-01 当日短线：晚五月主流币偏弱，今天只交易 session 边界反应。",
      hook: "Caven 今天这条当日行情解读不要追中间位置。先刷新行情，把 SOL/BTC 的周末 high/low、当前 session high/low 和 VWAP 画出来，再等 sweep。",
      outline: [
        "开场：说明 6月1日短线只做边界，不追第一根情绪 K 线。",
        "流动性：标出 SOL/BTC 的周末 high/low、亚洲盘高低点和当前 session 边界，等其中一侧被扫。",
        "VWAP：扫低后回收 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新后读取实时 RSI 和 ATR，确认当前 range 是否足够支付快速目标。",
        "执行：止损放在 sweep 外侧，最多等两个确认；没有边界反应就不做。"
      ],
      talk: [
        "Caven 可以这样讲：today we do not trade the middle. The middle is where late traders get chopped.",
        "晚五月 SOL 和 BTC 都没有强势脱离防守区，所以今天 short-term plan 必须从 liquidity sweep 开始，而不是从情绪开始。",
        "如果 SOL 扫低、重新站上 VWAP，而且实时 ATR 给空间，才有 clean long scalp；如果扫高失败，就讲 trap breakout 和快速离场。"
      ],
      contextLines: [
        "The June 1 scalp context is cautious after BTC, ETH and SOL lagged into the end of May. The readout should wait for live session boundaries instead of assuming a trend.",
        "For Caven, the usable sequence is session boundary, liquidity sweep, VWAP reclaim or rejection, ATR check, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 扫低并回收 VWAP、且实时 ATR 足够，主讲快速 long scalp；如果扫高失败、仍在 VWAP 下方或卡在区间中间，主讲 short scalp 或等待下一边界。",
      assignment: "让成员提交 SOL 或 BTC 6月1日 15M 图，标出周末 high/low、session 边界、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "wed-market": {
      title: "Scalp 当日行情跟进：VWAP 回收才有短线参与",
      summary: "Caven 用 liquidity、VWAP 和短线波动做 6月1日当日跟进：只看扫高/扫低后的回收或拒绝，不追区间中间。",
      hook: "Caven 今天这条跟进很适合短线用户：不要问现在能不能追，先问价格有没有 sweep，回到 VWAP 没有，ATR 够不够。",
      outline: [
        "开场：把今天的跟进定义成 session boundary check，而不是方向预测。",
        "流动性：标出 SOL/BTC 当日最清楚的 session high/low，确认哪一边已经被扫，哪一边还没有反应。",
        "VWAP：扫低后站回 VWAP 才讲 continuation scalp；扫高后跌回 VWAP 下方就讲 trap breakout。",
        "波动：刷新行情后读取 RSI 和 ATR，确认还有没有空间支持第一目标。",
        "执行：区间中间、低 ATR、VWAP 附近来回穿都不是 clean scalp。"
      ],
      talk: [
        "Caven 可以这样讲：the first confirmation is not a green candle. The first confirmation is sweep plus VWAP reaction.",
        "如果 SOL 扫低后重新站回 VWAP，而且 RSI 从低位修复，今天可以讲 quick long scalp。",
        "如果弹一下又掉回 VWAP 下方，那就是 weak reclaim。短线不要把 weak reclaim 变成长期扛单。"
      ],
      contextLines: [
        "The daily follow-up should keep traders focused on current session levels because late-May crypto momentum was defensive and selective.",
        "For Caven, use live VWAP and ATR to decide whether today's move has enough range for a scalp or should be skipped."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 在当日边界 sweep 后重新站回 VWAP、且 ATR 仍支持空间，主讲 continuation scalp；如果价格低于 VWAP、ATR 收缩或 RSI 没修复，主讲 failed reclaim 和继续等待。",
      assignment: "让成员提交 SOL 或 BTC 当日 15M 图，标出 session high/low、一次 sweep、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 当日复盘转化：只复盘边界，不复盘冲动",
      summary: "Caven 用 6月1日当日复盘把 session sweep、VWAP 和 ATR 转成短线作业：中间位置不点评，失败立刻走。",
      hook: "Caven 今天这条复盘转化要讲清楚：我们不复盘你追了哪根 K 线，我们复盘有没有边界、有没有 sweep、有没有 VWAP reaction。",
      outline: [
        "开场：复盘今天最清楚的一次扫高或扫低，不用固定价格总结。",
        "流动性：标出 SOL/BTC 当日 session high/low 和被扫的那一边。",
        "VWAP：确认扫后是回收 VWAP、拒绝 VWAP，还是一直在中间震荡。",
        "波动：刷新后用 RSI 和 ATR 判断这笔 scalp 是否有足够空间，还是只能当作观察。",
        "转化：要求成员提交 15M 图，止损必须放在 sweep 外侧，不能写模糊的手动止损。"
      ],
      talk: [
        "Caven 可以这样讲：today the clean trade is not the fastest candle. The clean trade is the candle after liquidity is taken and VWAP confirms.",
        "如果 SOL 或 BTC 扫 session low 后重新站回 VWAP，并且 RSI 修复，复盘时讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经缩小，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "Use this as a same-day scalp recap for June 1. Because the broader crypto tape is cautious, the recap should reward clean boundary reactions and punish middle-of-range chasing.",
        "For Caven, every recap should map to session boundary, sweep, VWAP reaction, ATR space, and fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然支持空间且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩、价格低于 VWAP 或卡在 session 中间，主讲缩短目标、扫高失败或等待下一个边界。",
      assignment: "让成员提交一张 6月1日 15M 复盘图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

const ARCHIVED_MARKET_READOUT_OVERRIDES = {
  William: {
    "wed-market": {
      title: "ICT 行情解读：周中回落后的结构确认",
      summary: "William 用 ICT/SMC 跟进周一到周三的风险回落：先看流动性是否被扫，再看 BTC/ETH 能否重新形成结构确认。",
      hook: "今天 William 这条周三行情跟进，不是猜底，也不是追反弹。周初风险资产回落后，我们只做一件事：看扫单以后有没有真正的 structure shift。",
      outline: [
        "开场：说明周一到周三市场从风险偏好降温进入确认阶段，不要把第一根反弹 K 线当作反转。",
        "流动性：标出 BTC 最近被扫的前低/前高，判断这次是有效 sweep 后回收，还是跌破后继续派发。",
        "结构：等待 BOS 或 CHOCH；没有结构转换时，只能说 market readout，不能说 entry setup。",
        "动能：刷新行情后读取 RSI、MACD、ATR，用实时数据判断 ETH 是否同步修复，还是继续拖累主流情绪。",
        "执行：给出多空两套 invalidation，不在中间位置追单，等价格回到 FVG、order block 或清晰折价区。"
      ],
      talk: [
        "William 可以这样讲：周初这波不是单纯看跌幅，重点是 liquidity 有没有被拿掉，以及拿掉以后市场有没有重新给结构。",
        "如果 BTC 扫低以后能够重新站回短线结构，再配合 ETH 动能修复，才有资格讨论 bullish CHOCH 后的回踩。",
        "如果反弹只是回到 broken structure 附近就被打下来，那就是 classic sell-side continuation，不要因为一根绿 K 就急着抄底。"
      ],
      contextLines: [
        "The latest context is a midweek follow-up after a risk-off pullback: Bitcoin gave back recent upside, altcoins weakened, and traders are watching whether the market can reclaim structure instead of simply bouncing.",
        "For William, the readout should treat this as a liquidity and structure test. A bounce only matters if it creates CHOCH or BOS; otherwise it is just price returning into a supply area."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 的 RSI 与 MACD 同步修复，主讲 sweep low 后的 bullish CHOCH；如果 BTC 反弹失败或 ETH 继续弱，主讲 broken structure retest 和等待下一个 discount zone。",
      assignment: "让成员提交 BTC 或 ETH 最新 4H 图，标出周初被扫的流动性、是否出现 BOS/CHOCH、entry zone、SL 和第一目标。"
    },
    "fri-market": {
      title: "ICT 行情解读：周五复盘扫单后的结构选择",
      summary: "William 用 ICT/SMC 复盘本周从急跌、清算到周五修复的节奏：只看流动性被扫后有没有重新给出结构。",
      hook: "今天 William 这条周五复盘，不是总结谁猜对方向，而是复盘本周哪里扫了 liquidity，哪里给了 structure shift，哪里只是反弹到供应区。",
      outline: [
        "开场：把本周定义为先急跌清杠杆、再进入修复和确认的行情，不用固定价格复盘。",
        "流动性：标出周内被扫的 sell-side 和 buy-side liquidity，说明哪一边被拿掉以后市场有反应。",
        "结构：如果 BTC/ETH 已经重回短线结构，讲 bullish CHOCH 后等待回踩；如果只是反抽，讲 broken structure retest。",
        "动能：刷新行情后用 RSI、MACD、ATR 判断周五修复是有动能，还是低波动反弹。",
        "执行：周末前不追最后一根 K 线，只保留有 FVG、order block、SL 和第一目标的计划。"
      ],
      talk: [
        "William 可以这样讲：本周最重要的不是哪一天跌了多少，而是 liquidity 被拿掉以后，市场有没有给我们可交易的结构。",
        "如果 BTC 扫低后重新形成 higher low，并且 ETH 同步修复，周五可以讲 bullish CHOCH 之后等 discount 回踩。",
        "如果价格只是回到前面跌破的结构下方，RSI 和 MACD 没有同步改善，那就是 supply retest，不是追多信号。"
      ],
      contextLines: [
        "The latest context is a Friday recap after a sharp liquidation-driven drop earlier in the week followed by an attempted stabilization. The readout should judge whether the recovery created structure or only retested broken supply.",
        "For William, keep the lesson on liquidity and market structure: identify where sell-side liquidity was swept, whether a CHOCH or BOS followed, and where the trade idea becomes invalid."
      ],
      marketTemplate: "刷新后如果 BTC/ETH 同步修复且 MACD 柱体改善，主讲 sweep low 后的 bullish CHOCH 和回踩确认；如果修复不同步或 ATR 收缩，主讲 supply retest、降低仓位和等待下周新结构。",
      assignment: "让成员提交 BTC 或 ETH 本周 4H 图，标出周内 liquidity sweep、BOS/CHOCH、周五收盘前的 entry zone、SL 和第一目标。"
    }
  },
  KC: {
    "wed-market": {
      title: "20 EMA 行情解读：周中反弹是不是 reclaim",
      summary: "KC 用 20 EMA Blueprint 跟进近两天回落后的反弹质量：价格位置、EMA reclaim、RSI/MACD 确认和现实目标。",
      hook: "KC 今天不要讲预测，讲流程。周初市场回落以后，所有人都想知道能不能接回去，答案只看一件事：有没有 reclaim 20 EMA。",
      outline: [
        "开场：把周三定位成近两天 move 的 follow-up，不追低也不盲目抄底。",
        "位置：刷新行情后确认 BTC、Gold 或 SOL 在 20 EMA 上方还是下方。",
        "确认：如果价格重新站上 20 EMA，检查 RSI 是否回到中线附近，MACD 柱体是否停止恶化。",
        "目标：用实时 ATR 决定 TP 是否合理，不用固定价格喊单。",
        "执行：entry 必须靠近 EMA 或 reclaim 后第一次回踩，SL 放在回踩低点外侧。"
      ],
      talk: [
        "KC 可以这样讲：after a selloff, the question is not 'is it cheap?' The question is 'did price reclaim the 20 EMA and did momentum come back?'",
        "如果 BTC 或 SOL 还在 20 EMA 下方，今天的重点不是做多，而是等 reclaim。没有 reclaim，就没有 Blueprint entry。",
        "Gold 这两天受美元和美债收益率压制，所以如果用 Gold 做例子，要提醒大家：价格没有站回 EMA 前，反弹只当反弹，不当趋势恢复。"
      ],
      contextLines: [
        "The latest context is a two-day follow-up after broad crypto weakness and a stronger dollar-yield backdrop for gold. The readout should focus on reclaim quality, not bottom-picking.",
        "For KC, the script should keep every decision inside the 20 EMA Blueprint: trend location first, confirmation second, ATR-based target third."
      ],
      marketTemplate: "刷新后如果主图重新站上 20 EMA 且 RSI/MACD 修复，主讲 reclaim 后第一次回踩；如果仍低于 EMA，主讲等待反弹到 EMA 附近失败或继续观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 最新图，标出 20 EMA、是否 reclaim、entry zone、SL、以及按 ATR 推导的第一目标。"
    },
    "fri-market": {
      title: "20 EMA 行情解读：周五复盘 reclaim 还是反弹",
      summary: "KC 用 20 EMA Blueprint 复盘本周急跌后的周五位置：先看是否站回 EMA，再用 RSI 和 ATR 决定目标是否现实。",
      hook: "KC 今天这条周五复盘要讲得很清楚：一周波动以后，不要问会不会继续涨，先问价格有没有重新站回 20 EMA。",
      outline: [
        "开场：把周五定位成本周复盘，不做固定点位预测，只判断 trend location。",
        "位置：刷新行情后看 BTC、Gold 或 SOL 在 20 EMA 上方还是下方，低于 EMA 就不叫 clean continuation。",
        "确认：RSI 回到中线附近才说明 reclaim 有质量；MACD 继续变弱就按假反弹处理。",
        "目标：用实时 ATR 解释周末前 TP 要现实，不能用情绪化大目标。",
        "执行：只做靠近 EMA 的回踩或 reclaim 后第一次回踩，错过就等下一个 setup。"
      ],
      talk: [
        "KC 可以这样讲：this week gave us volatility, but volatility is not a setup. The setup starts only when price respects the 20 EMA Blueprint.",
        "如果 BTC 或 SOL 已经 reclaim 20 EMA，今天讲第一次回踩、RSI 守中线、ATR 定目标；如果还在 EMA 下方，今天讲等待，不要把反弹当趋势。",
        "Gold 这周受美元和收益率背景影响，周五用它做例子时，重点是价格位置和 ATR，不要给固定 target。"
      ],
      contextLines: [
        "The latest context is a Friday recap after a volatile week where crypto tried to stabilize after a sharp drawdown, while gold remained sensitive to dollar and yield pressure.",
        "For KC, the readout should stay inside the 20 EMA Blueprint: reclaim first, RSI quality second, ATR-based target third. No fixed price targets should be scripted."
      ],
      marketTemplate: "刷新后如果主图在 20 EMA 上方且 RSI 守中线，主讲 reclaim 后第一次回踩；如果价格低于 EMA 或 ATR 收缩，主讲反弹到 EMA 失败、短目标或观望。",
      assignment: "让成员提交 BTC、Gold 或 SOL 本周图，标出 20 EMA、周五是否 reclaim、entry zone、SL、以及按实时 ATR 计算的第一目标。"
    }
  },
  Caven: {
    "wed-market": {
      title: "Scalp 行情解读：周中扫单后的 VWAP 反应",
      summary: "Caven 用 liquidity、VWAP 和成交量跟进近两天波动：不接飞刀，只等扫高/扫低后的回收或拒绝。",
      hook: "Caven 今天这条很适合短线：周初大波动以后，不要抢第一下。先看谁被扫，再看价格有没有回到 VWAP。",
      outline: [
        "开场：说明周三是近两天 move 的 scalp follow-up，先等市场把追单的人清掉。",
        "流动性：标出 SOL/BTC 近两天的 session high/low，等其中一边被扫。",
        "VWAP：扫低后只有重新站回 VWAP 才考虑 long scalp；扫高后跌回 VWAP 下方才考虑 short scalp。",
        "动能：刷新行情后看 RSI 和 ATR，判断这次波动是否足够支付 scalp 目标。",
        "执行：最多等两个确认，不在区间中间开仓，失败就走。"
      ],
      talk: [
        "Caven 可以这样讲：周初这种 move 后，最容易出现的就是假突破和 revenge trade。我们不抢方向，只看 sweep plus VWAP reaction。",
        "如果 SOL 扫前低后很快回到 VWAP 上方，再配合 RSI 从低位拐头，才是可以讲的 long scalp。",
        "如果价格只是弹一下但站不回 VWAP，那就是 weak bounce。短线不要把 weak bounce 变成长期扛单。"
      ],
      contextLines: [
        "The latest context is a volatile midweek market after a broad liquidation-style pullback. For short-term traders, the priority is avoiding the first emotional candle.",
        "For Caven, the readout should be built around session highs and lows, then VWAP reaction. If price is between levels, the script should tell viewers to wait."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 RSI 修复且 ATR 足够，主讲扫低回收 VWAP；如果 RSI 弱或价格在 VWAP 下方，主讲扫高失败、反弹做空或等待下一个 session 边界。",
      assignment: "让成员提交 SOL 或 BTC 15M 图，标出近两天 session high/low、扫单 K 线、VWAP、entry、SL 和第一止盈。"
    },
    "fri-market": {
      title: "Scalp 行情解读：周五复盘 session sweep 和 VWAP",
      summary: "Caven 用 liquidity、VWAP 和 ATR 复盘本周高波动后的短线机会：只交易 session 边界，不在中间追。",
      hook: "Caven 今天这条周五复盘很适合短线用户：这一周不是缺波动，而是太容易追错位置。我们只看 session high/low、VWAP 和 ATR。",
      outline: [
        "开场：说明周五是本周 scalp 复盘，重点是哪些 sweep 有确认，哪些只是情绪 K 线。",
        "流动性：标出 SOL/BTC 本周主要 session high/low，说明哪里扫低回收，哪里扫高失败。",
        "VWAP：扫低后重新站回 VWAP 才讲 long scalp；扫高后跌回 VWAP 下方才讲 short scalp。",
        "波动：刷新行情后看 RSI 和 ATR，判断周五是否还有足够 range，还是应该缩短目标。",
        "执行：周末前只做边界反应，最多等两个确认，失败立刻离场。"
      ],
      talk: [
        "Caven 可以这样讲：本周这种行情，最亏钱的位置不是方向错，而是在区间中间追第一根情绪 K 线。",
        "如果 SOL 扫 session low 后重新站回 VWAP，并且 RSI 从低位修复，周五可以讲 clean long scalp；如果扫高后跌回 VWAP 下方，就讲 trap breakout。",
        "如果 ATR 已经收缩，目标就要变小。Scalp 不是证明自己看得远，而是在有波动的地方拿快速反应。"
      ],
      contextLines: [
        "The latest context is a Friday scalp recap after a volatile week. Short-term traders should focus on session boundaries and VWAP reaction instead of chasing the middle of the range.",
        "For Caven, the script should translate the week into actionable scalp rules: sweep, reclaim or rejection, VWAP, ATR, then fast invalidation."
      ],
      marketTemplate: "刷新后如果 SOL/BTC 的 ATR 仍然扩大且 RSI 修复，主讲扫低回收 VWAP；如果 ATR 收缩或价格低于 VWAP，主讲缩短目标、扫高失败或等待下一个 session 边界。",
      assignment: "让成员提交 SOL 或 BTC 本周 15M 图，标出 session high/low、一次有效 sweep、VWAP、entry、SL 和第一止盈。"
    }
  }
};

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
  if (script.kind === "market") return getMarketReadoutScript(kolName, script, primary, secondary, market, secondMarket);
  if (kolName === "William") return getWilliamScript(script, primary, secondary, market, secondMarket);
  if (kolName === "KC") return getKcScript(script, primary, secondary, market, secondMarket);
  return getCavenScript(script, primary, secondary, market, secondMarket);
}

function getMarketReadoutScript(kolName, script, primary, secondary, market, secondMarket) {
  const styleMap = {
    William: "For William, read the move through ICT and SMC: liquidity first, structure second, confirmation third, and risk management before entry.",
    KC: "For KC, keep it clean with the 20 EMA Blueprint: trend location, pullback area, RSI or ATR confirmation, then entry, stop loss, and target.",
    Caven: "For Caven, keep it short-term and visual: liquidity sweep, VWAP reaction, volume confirmation, and a fast invalidation level."
  };
  return [
    `Today is a market readout, not a fixed lesson. Before recording, refresh the market data on the page so the price, 24-hour move, RSI, MACD, and ATR are current.`,
    marketLine(primary, secondary, market, secondMarket),
    ...(script.contextLines || []),
    styleMap[kolName],
    `If ${primary.replace("USDT", "")} is strong but the comparison chart is weak, reduce confidence. If both charts are moving in the same direction, the readout becomes cleaner.`,
    `The key is to separate market condition from trade execution. A bullish readout does not mean chase. A bearish readout does not mean panic. We still need a clear level, a clear invalidation point, and a realistic target.`,
    `Use the latest RSI and MACD to explain whether momentum is improving or fading. Use ATR to explain whether the market has enough range for the target.`,
    `For the chart, mark three things: the current structure, the entry area, and the invalidation level. If one of these is missing, this is only market commentary, not a trade plan.`,
    `Close the video with this: refresh the data, read the structure, wait for confirmation, and do not use leverage before the stop loss is defined.`,
    `Homework: send one fresh chart from today. Mark whether the current market is continuation, range, or weakness, then write the entry, stop loss, and first target.`
  ];
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
