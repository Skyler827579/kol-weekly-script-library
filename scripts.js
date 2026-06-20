const LIBRARIES = {
  william: {
    name: "William",
    style: "ICT / SMC",
    symbols: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "XAUUSD"],
    primary: "BTCUSDT",
    comparison: "ETHUSDT",
    third: "XAUUSD",
    fallback: {
      BTCUSDT: { price: 63358, change: 0.77, rsi: 40.9, macd: -122.24, signal: -79, atr: 757.31 },
      ETHUSDT: { price: 3510, change: 0.34, rsi: 42.2, macd: -18.7, signal: -11.4, atr: 82.4 },
      SOLUSDT: { price: 142, change: -0.18, rsi: 44.3, macd: -0.6, signal: -0.2, atr: 4.8 },
      XAUUSD: { price: 3340, change: 0.42, rsi: 52, macd: 5.5, signal: 4.2, atr: 32 }
    },
    dailyFrame: "先看 BTC 有没有扫掉关键流动性，再看 ETH 是否同步。没有结构转换时，只做行情解读，不给追单理由。",
    weeklyAngles: {
      mon: "周一重点看周末区间的高低点有没有被扫，判断本周第一波方向是真突破还是 liquidity grab。",
      wed: "周三重点看前半周的结构是否延续，尤其关注 BTC 修复时 ETH 是否跟上。",
      fri: "周五重点复盘本周流动性、结构转换和无效位，给下周准备清楚的观察区。"
    },
    chartRules: [
      "当前结构：标出最近一个高点、低点，以及价格现在是在区间上半部还是下半部。",
      "入场区域：只有扫流动性后重新回到结构内，或者突破后回踩不破，才允许写入场。",
      "失效位：多单失效放在扫低回收失败的位置下方，空单失效放在扫高失败位置上方。"
    ]
  },
  kc: {
    name: "KC",
    style: "20 EMA Blueprint",
    symbols: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "XAUUSD"],
    primary: "BTCUSDT",
    comparison: "ETHUSDT",
    third: "XAUUSD",
    fallback: {
      BTCUSDT: { price: 63358, change: 0.77, rsi: 40.9, macd: -122.24, signal: -79, atr: 757.31 },
      ETHUSDT: { price: 3510, change: 0.34, rsi: 42.2, macd: -18.7, signal: -11.4, atr: 82.4 },
      SOLUSDT: { price: 142, change: -0.18, rsi: 44.3, macd: -0.6, signal: -0.2, atr: 4.8 },
      XAUUSD: { price: 3340, change: 0.42, rsi: 52, macd: 5.5, signal: 4.2, atr: 32 }
    },
    dailyFrame: "先把 BTC 放进 20 EMA 逻辑：价格在均线上方才讨论回踩做多，价格在均线下方就等重新站回，不靠一根反弹 K 线追。",
    weeklyAngles: {
      mon: "周一重点确认本周开盘后价格是否 reclaim 20 EMA，避免在反弹第一根 K 线里追高。",
      wed: "周三重点看回踩质量：RSI 能不能守住中线，MACD 负值有没有收窄。",
      fri: "周五重点复盘本周 target 是否合理，用 ATR 解释为什么目标要贴近真实波动。"
    },
    chartRules: [
      "当前结构：先标价格在 20 EMA 上方还是下方，再看最近高低点。",
      "入场区域：多单只等回踩均线附近后重新转强，空单只等反弹到均线附近失败。",
      "失效位：多单放在回踩低点下方，空单放在反弹高点上方。"
    ]
  },
  caven: {
    name: "Caven",
    style: "Liquidity Scalp",
    symbols: ["BTCUSDT", "SOLUSDT", "ETHUSDT", "XAUUSD"],
    primary: "SOLUSDT",
    comparison: "BTCUSDT",
    third: "ETHUSDT",
    fallback: {
      BTCUSDT: { price: 63358, change: 0.77, rsi: 40.9, macd: -122.24, signal: -79, atr: 757.31 },
      ETHUSDT: { price: 3510, change: 0.34, rsi: 42.2, macd: -18.7, signal: -11.4, atr: 82.4 },
      SOLUSDT: { price: 142, change: -0.18, rsi: 44.3, macd: -0.6, signal: -0.2, atr: 4.8 },
      XAUUSD: { price: 3340, change: 0.42, rsi: 52, macd: 5.5, signal: 4.2, atr: 32 }
    },
    dailyFrame: "先看 SOL 或 BTC 的 session high/low，价格在中间不追；只有扫边界、回收 VWAP、再给小止损时才有 scalp 价值。",
    weeklyAngles: {
      mon: "周一重点看周末到新一周开盘的 session 边界，避免在区间中间乱开。",
      wed: "周三重点看扫单后有没有成交量和 RSI 配合，过滤假反应。",
      fri: "周五重点复盘本周哪些 sweep 有延续，哪些只是情绪 K 线。"
    },
    chartRules: [
      "当前结构：标出最近 session high、session low 和 VWAP。",
      "入场区域：只等扫高失败或扫低回收，不在区间中间追。",
      "失效位：scalp 失效要贴近扫单 K 线外侧，失败就走，不把短线做成长线。"
    ]
  }
};

let state = { market: {}, lib: null, script: null, updatedAt: null, marketFresh: false };

document.addEventListener("DOMContentLoaded", () => {
  const key = document.body.dataset.kol;
  if (!key || !LIBRARIES[key]) return;
  state.lib = LIBRARIES[key];
  state.market = { ...state.lib.fallback };
  state.script = getCurrentScript();
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
  state.script = getCurrentScript(state.script?.id);
  renderDirectory();
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
  const daily = getDailyScript();
  const weekly = getWeeklyScripts();
  const selectedId = state.script?.id || daily.id;
  document.querySelector("#script-list").innerHTML = `
    <div class="script-group-title daily-title">
      <span>日稿</span>
      <p>每天自动更新，只讲今天最重要的价格、动能、波动空间和失效位，控制在 30 秒到 1 分钟，适合短视频或直播开场直接念。</p>
    </div>
    ${renderScriptCard(daily, "每日更新", selectedId)}
    <div class="script-group-title weekly-title">
      <span>周稿</span>
      <p>每周一、三、五生成三篇长稿，每篇按 5 到 10 分钟口播组织，用近期行情做更细的结构、动能、ATR 目标和风控讲解。</p>
    </div>
    ${weekly.map(script => renderScriptCard(script, script.label, selectedId)).join("")}
  `;
  document.querySelectorAll("[data-open]").forEach(card => {
    card.addEventListener("click", () => openScript(card.dataset.open));
  });
  renderMarket(false);
}

function renderScriptCard(script, label, selectedId) {
  return `
    <article class="script-card ${script.id === selectedId ? "current" : ""}" data-open="${script.id}">
      <div class="script-meta">
        <span>${label}</span>
        <span>${script.date}</span>
        <span>${script.duration}</span>
        <span>${state.lib.style}</span>
      </div>
      <h3>${script.title}</h3>
      <p>${script.summary}</p>
    </article>
  `;
}

function renderMarket(loading) {
  const html = state.lib.symbols.map(symbol => {
    const m = state.market[symbol] || state.lib.fallback[symbol];
    return `
      <div class="market-card">
        <b>${displaySymbol(symbol)}</b>
        <strong>$${formatPrice(m.price)}</strong>
        <span class="${m.change >= 0 ? "up" : "down"}">${m.change >= 0 ? "+" : ""}${m.change.toFixed(2)}% 24H</span>
        <span>${loading ? "正在读取实时行情..." : `RSI ${m.rsi.toFixed(1)} · MACD柱 ${(m.macd - m.signal).toFixed(2)} · ATR ${formatPrice(m.atr)}`}</span>
      </div>
    `;
  }).join("");
  const updatedText = loading
    ? "正在读取实时行情，完成后会同步改写日稿和周稿。"
    : state.updatedAt
      ? `${state.marketFresh ? "实时行情已更新" : "行情接口暂不可用，当前显示备用行情"} · ${formatUpdatedAt(state.updatedAt)} · 点“刷新行情”会重新读取价格、RSI、MACD、ATR。`
      : "打开页面会自动读取实时行情；点“刷新行情”会重新生成口播稿里的数据和点位。";
  document.querySelector("#market-strip").innerHTML = `${html}<p class="market-status">${updatedText}</p>`;
}

function openScript(id) {
  state.script = getCurrentScript(id);
  document.querySelector("#directory").hidden = true;
  document.querySelector("#detail").hidden = false;
  renderDetail(state.script);
  history.replaceState(null, "", `#${id}`);
}

function renderDetail(script) {
  const primary = market(state.lib.primary);
  const comparison = market(state.lib.comparison);
  const third = market(state.lib.third);
  const plans = buildLevels(primary);
  const lines = script.kind === "daily"
    ? getDailyOralScript(state.lib, primary, comparison, third, plans)
    : getWeeklyOralScript(state.lib, script.slot, primary, comparison, third, plans);

  document.querySelector("#script-detail").innerHTML = `
    <section class="script-hero">
      <p class="eyebrow">${script.kind === "daily" ? "日稿 · 30秒-1分钟" : `${script.label} · 5-10分钟`}</p>
      <h2>${script.title}</h2>
      <p>${script.summary}</p>
      <div class="script-meta">
        <span>${script.date}</span>
        <span>${script.duration}</span>
        <span>${displaySymbol(state.lib.primary)} / ${displaySymbol(state.lib.comparison)}</span>
        <span>${state.lib.style}</span>
      </div>
    </section>

    <section class="script-block readout-box">
      <h3>口播稿成品</h3>
      <p class="market-status detail-status">${state.updatedAt ? `行情读取时间：${formatUpdatedAt(state.updatedAt)}。刷新后，下方价格、指标、入场区、止损和目标会一起更新。` : "页面打开后会读取最新行情，并把数据写进口播稿。"} </p>
      <div class="teleprompter">${lines.map(line => `<p>${line}</p>`).join("")}</div>
    </section>

    <section class="script-block">
      <h3>图上必须标出的三件事</h3>
      <ol>${state.lib.chartRules.map(rule => `<li>${rule}</li>`).join("")}</ol>
    </section>
  `;
}

function getCurrentScript(id) {
  const all = [getDailyScript(), ...getWeeklyScripts()];
  return all.find(script => script.id === id) || all[0];
}

function getDailyScript() {
  const today = formatShanghaiDate(new Date());
  return {
    id: "daily",
    kind: "daily",
    date: today,
    title: "今日短口播：价格、动能、区间和失效位",
    duration: "30秒-1分钟",
    summary: "直接给今天能不能追、等哪里、错在哪里走。重点只保留价格、RSI、MACD、ATR 和第一目标。"
  };
}

function getWeeklyScripts() {
  const week = currentWeekDates();
  return [
    {
      id: "weekly-mon",
      kind: "weekly",
      slot: "mon",
      label: "周一更新",
      date: week.mon,
      title: "周一长稿：新一周先定结构，不急着追方向",
      duration: "5-10分钟",
      summary: "从周末区间、开盘后的流动性和宏观风险情绪切入，讲清楚本周第一套交易计划。"
    },
    {
      id: "weekly-wed",
      kind: "weekly",
      slot: "wed",
      label: "周三更新",
      date: week.wed,
      title: "周三长稿：动能跟进，判断修复还是反弹失败",
      duration: "5-10分钟",
      summary: "用 BTC 与对比图共振、RSI/MACD 修复质量、ATR 目标空间，判断中段行情是否值得继续参与。"
    },
    {
      id: "weekly-fri",
      kind: "weekly",
      slot: "fri",
      label: "周五更新",
      date: week.fri,
      title: "周五长稿：复盘本周节奏，准备下周关键位",
      duration: "5-10分钟",
      summary: "复盘本周的扫单、结构转换、失效位和目标命中情况，把下一周要等的位置提前画出来。"
    }
  ];
}

function getDailyOralScript(lib, primary, comparison, third, plans) {
  const sync = sameDirection(primary, comparison);
  const bias = marketBias(primary, comparison);
  const primaryName = displaySymbol(lib.primary);
  const comparisonName = displaySymbol(lib.comparison);
  const thirdName = displaySymbol(lib.third);
  return [
    `今天先看 ${primaryName}。现在价格在 ${money(primary.price)} 附近，24 小时${primary.change >= 0 ? "上涨" : "下跌"} ${Math.abs(primary.change).toFixed(2)}%。这个涨跌幅不算大，所以今天重点不是追方向，而是看它能不能把结构走出来。`,
    `4 小时 RSI 是 ${primary.rsi.toFixed(1)}，${rsiRead(primary.rsi)}。MACD 柱体是 ${hist(primary)}，${macdRead(primary)}。ATR 大约 ${money(primary.atr)}，也就是说当前一轮比较现实的波动范围，上方先看 ${money(plans.upperOne)}，下方先看 ${money(plans.lowerOne)}。目标如果超过这个范围，就需要更强的成交量和突破确认。`,
    `${comparisonName} 现在 RSI 是 ${comparison.rsi.toFixed(1)}，${sync ? `${primaryName} 和 ${comparisonName} 方向比较同步，今天的判断会更干净。` : `${primaryName} 和 ${comparisonName} 没有完全同步，所以信心要打折扣。`} ${thirdName} 作为跨资产背景看，当前 24 小时${third.change >= 0 ? "上涨" : "下跌"} ${Math.abs(third.change).toFixed(2)}%，只能说明风险情绪有没有配合，不能替代加密自己的结构。`,
    `我的结论是：${bias}。如果要做多，不要在现价硬追，等价格回踩 ${money(plans.longEntryLow)} 到 ${money(plans.longEntryHigh)} 还能守住，再看第一目标 ${money(plans.longTarget)}。如果跌破 ${money(plans.longStop)}，多头思路失效。反过来，如果价格冲到 ${money(plans.shortEntryLow)} 到 ${money(plans.shortEntryHigh)} 后站不稳，空头才有观察价值，第一目标看 ${money(plans.shortTarget)}，失效位放在 ${money(plans.shortStop)} 上方。止损没有定义前，不要上杠杆。`
  ];
}

function getWeeklyOralScript(lib, slot, primary, comparison, third, plans) {
  const primaryName = displaySymbol(lib.primary);
  const comparisonName = displaySymbol(lib.comparison);
  const thirdName = displaySymbol(lib.third);
  const angle = lib.weeklyAngles[slot];
  const bias = marketBias(primary, comparison);
  const sync = sameDirection(primary, comparison);
  const slotName = slot === "mon" ? "周一" : slot === "wed" ? "周三" : "周五";
  return [
    `${slotName}这篇我们把近期行情讲细一点。先给结论：${primaryName} 现在不是简单的看涨或者看跌，而是处在一个需要确认的阶段。价格在 ${money(primary.price)} 附近，24 小时${primary.change >= 0 ? "上涨" : "下跌"} ${Math.abs(primary.change).toFixed(2)}%。这种幅度说明市场有反应，但还没有到可以无脑追单的程度。今天要分清两件事：市场状态是一回事，交易执行是另一回事。看多不等于追涨，看空也不等于恐慌，最后都要落到入场区、失效位和目标位。`,
    `先看动能。${primaryName} 的 4 小时 RSI 是 ${primary.rsi.toFixed(1)}，${rsiRead(primary.rsi)}。如果 RSI 还在 50 下方，说明多头还没有完全拿回主动；如果它能继续往 50 到 55 走，才代表修复质量提高。MACD 柱体现在是 ${hist(primary)}，${macdRead(primary)}。这里要讲得具体一点：MACD 还在负值时，价格反弹只能叫修复，不能直接叫反转；只有负值持续收窄，或者重新回到零轴上方，我们才说动能真正改善。`,
    `再看波动空间。ATR 现在大约是 ${money(primary.atr)}，这不是买卖信号，而是目标的现实边界。以现价 ${money(primary.price)} 来算，1 个 ATR 的上沿大概在 ${money(plans.upperOne)}，下沿大概在 ${money(plans.lowerOne)}。所以如果今天的第一目标只是 ${money(plans.longTarget)} 或 ${money(plans.shortTarget)}，这是和当前波动匹配的；但如果一开口就看很远的位置，比如超过 ${money(plans.upperExtended)} 或跌到 ${money(plans.lowerExtended)}，那就需要结构突破、成交量和对比图共振一起支持，否则就是目标喊太远。`,
    `对比图也要看。${comparisonName} 当前 RSI 是 ${comparison.rsi.toFixed(1)}，${sync ? `和 ${primaryName} 基本在同一方向，所以这次行情读数相对更清楚。` : `和 ${primaryName} 没有形成强共振，所以今天即使主图反弹，也要降低信心。`} 很多时候 BTC 自己拉一下，但 ETH 或 SOL 不跟，说明资金不是全面进场，而是局部修复。局部修复可以做短线，但不能当成大趋势已经回来。`,
    `${thirdName} 作为跨资产背景也看一眼。现在它 24 小时${third.change >= 0 ? "上涨" : "下跌"} ${Math.abs(third.change).toFixed(2)}%，RSI 是 ${third.rsi.toFixed(1)}。如果黄金或者宏观避险资产在反弹，说明市场还在消化利率和风险情绪；如果黄金压力重、加密也弱，那就更不能激进。这里的重点是：黄金只能给我们情绪背景，真正决定加密能不能做的，还是 ${primaryName} 自己有没有扫流动性、结构转换、回踩确认和清楚的无效位。`,
    `${angle} 放到今天的图上，第一件事是标结构。把最近的高点和低点画出来，看价格是在区间上半部还是下半部。如果价格先扫上方流动性，然后又快速跌回区间，那不是健康突破，而是扫高失败；如果价格先扫下方流动性，再重新站回区间，并且 RSI 不再继续走弱，那才有短线修复的基础。`,
    `执行计划我会这样讲：多头不要在 ${money(primary.price)} 附近直接追，等回踩到 ${money(plans.longEntryLow)} 到 ${money(plans.longEntryHigh)}，如果这个区域能守住，并且 ${comparisonName} 没有同步破位，才考虑第一目标 ${money(plans.longTarget)}。多头失效位放在 ${money(plans.longStop)} 下方，跌破这里说明回踩不是确认，而是反弹失败。`,
    `空头计划也要提前写清楚。如果价格反弹到 ${money(plans.shortEntryLow)} 到 ${money(plans.shortEntryHigh)}，但 RSI 仍然上不去、MACD 负值继续扩大，说明上方卖压还在，第一目标可以先看 ${money(plans.shortTarget)}。空头失效位放在 ${money(plans.shortStop)} 上方，一旦站上这里，就说明空头判断错了，不要补仓硬扛。`,
    `所以今天完整结论是：${bias}。我们不是来猜一根 K 线，而是等市场给证据。刷新数据，读结构，等确认。图上必须有三样东西：当前结构、入场区域、失效位。少一个，就只是市场评论，不是交易计划。止损没有定义前，不要使用杠杆；目标没有 ATR 支撑时，不要把短线行情讲成大趋势。`
  ];
}

function market(symbol) {
  return state.market[symbol] || state.lib.fallback[symbol];
}

function buildLevels(m) {
  const price = m.price;
  const atr = m.atr;
  return {
    upperOne: price + atr,
    lowerOne: price - atr,
    upperExtended: price + atr * 1.8,
    lowerExtended: price - atr * 1.8,
    longEntryLow: price - atr * 0.35,
    longEntryHigh: price - atr * 0.12,
    longStop: price - atr * 0.8,
    longTarget: price + atr * 0.85,
    shortEntryLow: price + atr * 0.12,
    shortEntryHigh: price + atr * 0.35,
    shortStop: price + atr * 0.8,
    shortTarget: price - atr * 0.85
  };
}

function marketBias(primary, comparison) {
  const h = Number(hist(primary));
  if (primary.rsi >= 55 && h > 0 && comparison.rsi >= 50) return "偏多，但只做突破后的回踩确认";
  if (primary.rsi <= 45 && h < 0 && comparison.rsi < 50) return "偏弱修复，先等结构站稳，不追反弹";
  if (primary.rsi > 50 && h < 0) return "价格在修复，但动能还没有完全确认";
  if (primary.rsi < 50 && h > 0) return "下跌动能在减弱，但还需要重新站上关键结构";
  return "震荡观察，等待扫单、结构转换和回踩确认";
}

function sameDirection(a, b) {
  return (a.rsi >= 50 && b.rsi >= 50) || (a.rsi < 50 && b.rsi < 50);
}

function rsiRead(rsi) {
  if (rsi >= 65) return "属于偏强区域，说明买盘主动性比较高，但也要防止追在短线过热位置";
  if (rsi >= 55) return "已经回到 50 上方，说明多头动能开始占优";
  if (rsi >= 45) return "接近中性区，说明市场还在修复和拉扯";
  if (rsi >= 35) return "还在 50 下方，说明反弹质量偏谨慎，多头没有完全拿回主动";
  return "已经偏弱，说明卖压还没有完全释放";
}

function macdRead(m) {
  const h = Number(hist(m));
  if (h > 80) return "多头动能比较明显，但追多前仍然要等回踩";
  if (h > 0) return "动能已经回到多头一侧，反弹质量比单纯拉价格更好";
  if (h > -80) return "空头动能还在，但力度不是极端，重点看后面能不能继续收窄";
  return "空头动能仍然明显，任何反弹都要先当作修复来看";
}

function hist(m) {
  return (m.macd - m.signal).toFixed(2);
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

function currentWeekDates() {
  const now = new Date();
  const date = new Date(formatShanghaiDate(now) + "T00:00:00+08:00");
  const day = date.getDay() || 7;
  const monday = new Date(date);
  monday.setDate(date.getDate() - day + 1);
  return {
    mon: addDays(monday, 0),
    wed: addDays(monday, 2),
    fri: addDays(monday, 4)
  };
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return formatShanghaiDate(copy);
}

function formatUpdatedAt(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function formatPrice(value) {
  if (value >= 1000) return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (value >= 10) return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return value.toLocaleString(undefined, { maximumFractionDigits: 4 });
}

function money(value) {
  return `$${formatPrice(value)}`;
}

function displaySymbol(symbol) {
  if (symbol === "XAUUSD") return "Gold";
  return symbol.replace("USDT", "");
}
