# Embedded Learning Roadmap

一份可视化、可交互、可记录进度的嵌入式系统学习路线网站。

## 功能

- 9 个阶段的嵌入式学习路线
- 基础 / MCU / 系统 / 进阶分类筛选
- 阶段任务勾选与总体进度展示
- 每个阶段可制定个人学习计划：目标、日期、每周投入、执行安排和学习笔记
- 每个阶段可新增、编辑和删除自己的学习任务
- 内置推荐书目、视频课程、博主与技术社区
- 可添加自己发现的文章、课程、书目、博主和社区链接
- 浏览器本地保存学习进度与个人内容
- 支持 JSON 导出、导入和跨设备备份
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

- `phases`：学习阶段、默认任务和阶段项目
- `projects`：作品集项目
- `directions`：进阶方向
- `checklist`：最终能力清单
- `resources.js`：默认推荐书目、视频、课程、博主和社区

修改数组内容即可更新默认页面，不需要改 HTML 结构。普通使用者也可以直接在网页中添加个人计划、任务和资源，无需修改代码。

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
├── resources.js
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


## 学习资源

每个学习阶段均内置可折叠的资源面板，包含：

- 推荐书目与阅读重点
- 官方课程、公开视频与中文教程
- 值得长期关注的博主、社区和官方文档
- Linux、物联网、汽车电子、机器人与低功耗方向资源

资源数据集中在 `resources.js`，可直接添加、删除或修改默认链接。

## 个人计划与数据保存

在任意阶段卡片中可以：

1. 点击 **制定计划**，填写阶段目标、起止日期、每周学习时间、执行计划和笔记。
2. 点击 **添加任务**，建立自己的阶段任务，并将其纳入总体进度。
3. 展开 **推荐学习资源**，点击 **添加学习内容或博主**，保存文章、书籍、课程、UP 主、博客或技术社区。
4. 对自己添加的任务和资源进行编辑或删除。

个人内容默认使用浏览器 `LocalStorage` 保存，不会自动上传到服务器。点击页面顶部的 **我的数据**，可以导出 JSON 备份、导入备份或清除个人内容。

> 更换浏览器、电脑或清理站点数据前，请先导出备份。
