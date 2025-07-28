# Bio Disks - DNA存储技术信息平台

这是一个专注于DNA存储技术信息跟踪的Hugo静态网站，采用现代化的前端设计，体现科技感和DNA生命科学主题。

## 技术特点

- **现代化设计**：使用Bootstrap 5构建响应式界面
- **科技感配色**：采用深色主题配合蓝色科技色调
- **DNA主题**：融入DNA双螺旋等生命科学元素
- **中文内容**：完全中文化的技术信息平台
- **信息跟踪**：专注于DNA存储技术发展动态

## 快速开始

### 环境要求

- Hugo Extended版本（推荐0.120.0+）
- Node.js（用于资源处理）

### 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd bio-disks.com
```

2. 启动开发服务器
```bash
hugo server -D
```

3. 访问网站
打开浏览器访问 `http://localhost:1313`

### 构建部署

```bash
# 构建静态文件
hugo

# 构建文件将生成在 public/ 目录
```

## 项目结构

```
bio-disks.com/
├── assets/           # 静态资源
│   ├── css/         # 样式文件
│   └── js/          # JavaScript文件
├── content/         # 内容文件
│   ├── _index.md    # 首页内容
│   ├── technology/  # 技术页面
│   ├── applications/# 应用页面
│   ├── news/        # 新闻页面
│   └── about/       # 关于页面
├── layouts/         # 模板文件
│   ├── _default/    # 默认模板
│   └── partials/    # 部分模板
├── static/          # 静态文件
├── hugo.toml        # Hugo配置
└── README.md        # 项目说明
```

## 内容管理

### 添加新闻文章

在 `content/news/` 目录下创建新的Markdown文件：

```markdown
---
title: "文章标题"
date: 2024-01-01
description: "文章描述"
tags: ["DNA存储", "技术突破"]
---

文章内容...
```

### 更新技术信息

- 技术原理：编辑 `content/technology/_index.md`
- 应用场景：编辑 `content/applications/_index.md`
- 关于信息：编辑 `content/about/_index.md`

### 自定义样式

修改 `assets/css/style.css` 文件来自定义样式：

- 主色调：`--primary-color`
- 背景色：`--dark-bg`
- 卡片样式：`.card` 类

## 部署

### 静态托管

网站可以部署到任何静态托管服务：

- **GitHub Pages**：推送到GitHub仓库并启用Pages
- **Netlify**：连接GitHub仓库自动部署
- **Vercel**：支持Hugo的Vercel平台
- **传统服务器**：上传 `public/` 目录到Web服务器

### 域名配置

网站配置为 `https://bio-disks.com/`，部署时需要：

1. 配置域名解析
2. 设置SSL证书
3. 更新 `hugo.toml` 中的 `baseURL`

## 技术栈

- **静态生成器**：Hugo
- **CSS框架**：Bootstrap 5
- **图标库**：Font Awesome 6
- **字体**：Inter + JetBrains Mono
- **构建工具**：Hugo内置资源处理

## 特色功能

- **响应式设计**：适配各种设备屏幕
- **动画效果**：DNA双螺旋动画和页面过渡
- **深色主题**：护眼的深色配色方案
- **科技感UI**：现代化的用户界面设计
- **内容组织**：清晰的信息架构

## 维护更新

### 定期任务

- 更新技术发展动态
- 添加新的应用案例
- 跟踪行业新闻
- 优化网站性能

### 内容策略

- 保持信息的准确性和时效性
- 提供易于理解的技术解释
- 平衡技术深度和可读性
- 建立权威的信息来源

## 许可证

本项目采用MIT许可证，详见LICENSE文件。

---

*Bio Disks - 探索DNA存储技术的未来* 