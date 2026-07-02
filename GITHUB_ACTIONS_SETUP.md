# GitHub Actions 部署指南

## 已配置项

✅ 已创建 `.github/workflows/deploy.yml` 工作流文件，包含：

- 自动构建和部署流程
- 监听 `main` 或 `master` 分支的 push 事件
- 使用 pnpm 和 Node.js 22
- 自动部署到 GitHub Pages

## 需要的配置步骤

### 1. 检查项目名称

如果你的仓库**不是** `user.github.io` 形式的用户主页仓库，需要在 `vite.config.ts` 中配置 base URL：

```typescript
// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/your-repo-name/', // 替换为你的仓库名称
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

比如，如果仓库名是 `ns`，则应该是 `base: '/ns/'`

### 2. GitHub 仓库设置

在 GitHub 仓库设置中配置 GitHub Pages：

1. 进入 Settings → Pages
2. 在 "Build and deployment" 中选择 "GitHub Actions" 作为 Source
3. 确保工作流有权限发布到 Pages（已在 workflows 中配置）

### 3. 推送到仓库

```bash
git add .github/
git commit -m "Add GitHub Actions deployment workflow"
git push origin main  # 或 master
```

## 工作流说明

- **触发条件**：当代码 push 到 main/master 分支时自动运行
- **构建步骤**：
  - 检出代码
  - 安装 pnpm 和 Node.js 22
  - 安装项目依赖
  - 类型检查
  - 构建项目 (生成 dist 文件夹)
  - 上传到 GitHub Pages
- **部署URL**：`https://your-username.github.io/your-repo-name/`

## 故障排除

如果工作流失败，请检查：

1. ✅ Node.js 版本要求 (^22.18.0 || >=24.12.0)
2. ✅ pnpm-lock.yaml 文件未被更改
3. ✅ GitHub Pages 已在仓库设置中启用
4. ✅ base URL 配置正确（针对非主页仓库）
