# Embedded Learning Roadmap

一份可视化、可交互、可记录进度的嵌入式系统学习路线网站。

## 功能

- 9 个阶段的嵌入式学习路线
- 基础 / MCU / 系统 / 进阶分类筛选
- 阶段任务勾选与总体进度展示
- 浏览器本地保存学习进度
- 5 个作品集项目建议
- 5 条进阶方向
- 深色 / 浅色主题
- 响应式布局，支持手机访问
- 无构建步骤，可直接部署到 GitHub Pages

## 本地预览

项目是纯静态页面，可以直接打开 `index.html`，也可以启动本地服务器：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 发布到 GitHub Pages

### 方式一：使用仓库根目录

1. 新建一个 GitHub 仓库。
2. 将本项目全部文件上传到仓库。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **GitHub Actions**。
5. 推送代码后，仓库内置工作流会自动部署。

### 方式二：命令行上传

```bash
git init
git add .
git commit -m "feat: add embedded learning roadmap"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

部署完成后，页面地址通常为：

```text
https://<你的用户名>.github.io/<仓库名>/
```

## 自定义内容

路线、项目和方向数据全部位于 `app.js`：

- `phases`：学习阶段
- `projects`：作品集项目
- `directions`：进阶方向
- `checklist`：最终能力清单

修改数组内容即可更新页面，不需要改 HTML 结构。

## 项目结构

```text
embedded-learning-roadmap/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── assets/
│   └── favicon.svg
├── index.html
├── styles.css
├── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- GitHub Pages

## License

MIT
