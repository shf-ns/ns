# GitHub Actions 部署指南

## 概述

该项目已配置GitHub Actions工作流，用于自动构建和部署到GitHub Pages。

## 部署流程

### 1. 自动部署触发条件

当你推送代码到 `main` 或 `master` 分支时，GitHub Actions会自动：

- ✅ 安装依赖 (pnpm)
- ✅ 进行类型检查 (TypeScript)
- ✅ 构建项目 (Vite)
- ✅ 部署到 GitHub Pages (gh-pages分支)

### 2. 启用GitHub Pages

**步骤：**

1. 进入GitHub仓库设置 → **Settings**
2. 左侧菜单找到 **Pages** (在Code and automation下)
3. 在 **Build and deployment** 部分：
   - Source: 选择 **Deploy from a branch**
   - Branch: 选择 **gh-pages** 和 **/root**
4. 点击 **Save**

### 3. 查看部署状态

- 进入仓库主页 → **Actions** 标签
- 查看最近的工作流运行
- 点击具体的运行实例查看详细日志

### 4. 访问已部署的网站

部署完成后，你的网站将在以下地址可访问：

```
https://你的用户名.github.io/ns/
```

> 注意：URL中的 `/ns/` 路径来自 `vite.config.ts` 中的 `base: '/ns/'` 配置

## 工作流配置文件

工作流文件位置：`.github/workflows/deploy.yml`

主要配置：

- **触发条件**：main或master分支的push和pull_request事件
- **运行环境**：ubuntu-latest
- **Node版本**：22 (与package.json中的engines配置对应)
- **包管理器**：pnpm (版本9)
- **部署分支**：gh-pages

## 故障排除

### 部署失败

检查以下内容：

1. **npm依赖问题**

   ```bash
   # 本地验证构建
   pnpm install --frozen-lockfile
   pnpm type-check
   pnpm build
   ```

2. **权限问题**
   - 确保GITHUB_TOKEN有正确的权限
   - 在Settings → Actions → General中，确保workflow有write权限

3. **查看详细错误**
   - 进入 Actions 标签，点击失败的工作流
   - 展开各个步骤查看详细错误日志

### 如何禁用自动部署

如果需要暂时停止自动部署，可以：

- 删除或禁用 `.github/workflows/deploy.yml` 文件
- 或使用 `[skip ci]` 在commit message中跳过工作流

## 环境变量

如果需要在部署时使用环境变量：

1. 进入仓库 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret** 添加密钥
3. 在 `.github/workflows/deploy.yml` 中引用：
   ```yaml
   env:
     MY_VAR: ${{ secrets.MY_SECRET }}
   ```

## 其他部署选项

### Vercel 部署

如需部署到Vercel：

1. 连接GitHub账户到Vercel
2. 导入该仓库
3. 在 **Settings** 中设置 **Root Directory** 为项目根目录
4. Vercel会自动检测Vite项目并部署

### Netlify 部署

如需部署到Netlify：

1. 连接GitHub账户到Netlify
2. 导入该仓库
3. 设置Build command: `pnpm build`
4. 设置Publish directory: `dist`

## 参考资源

- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vite.dev/guide/static-deploy.html)
