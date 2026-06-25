# 深圳领弈禾元科技有限公司官网

面向深圳领弈禾元科技有限公司 / ly origin 的前端官网项目，主营方向为 AI 软件开发、工作流搭建、数据与知识工程、运维与持续优化。

站点内置中英文 i18n 文案切换，页面锚点统一使用英文 id：`services`、`process`、`solutions`、`about`。

## 本地运行

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

构建产物会输出到 `dist/`。

## GitHub Pages

这个项目可以部署到 GitHub Pages。仓库内已经包含：

- `.github/workflows/deploy.yml`：推送到 `main` 分支后自动构建并发布 Pages。

在 GitHub 仓库里进入 `Settings -> Pages`，把 `Source` 设置为 `GitHub Actions`。部署完成后，默认访问地址是：

```text
https://lukegao55.github.io/ly-origin/
```

如果要绑定自定义域名，请添加 `public/CNAME` 并写入完整域名，同时把 `vite.config.js` 里的 `base` 改回 `/`。
