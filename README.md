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
- `public/CNAME`：自定义域名配置，当前写的是 `ly-origin.com`。

在 GitHub 仓库里进入 `Settings -> Pages`，把 `Source` 设置为 `GitHub Actions`。首次部署完成后，在 Pages 的自定义域名里填写完整域名，并确保 DNS 指向 GitHub Pages。

如果你的真实域名不是 `ly-origin.com`，请修改 `public/CNAME` 里的内容。
