# KOL 每周技术脚本库

## 本地预览

```bash
npm run preview
```

打开 `http://localhost:4173/`。

## Netlify 关联 GitHub

在 Netlify 里连接这个 GitHub 仓库后，构建设置使用：

```text
Build command: 留空
Publish directory: .
```

之后每次 push 到 GitHub，Netlify 会自动更新线上站点。

## 自动化建议

页面里的行情价格、RSI、MACD、ATR 是用户打开页面或点击“刷新行情”时实时读取的，不需要每天重新部署。

如果只是改页面文案、脚本主题、KOL 资料，这些属于静态文件改动，需要 push 到 GitHub，再由 Netlify 自动部署。
