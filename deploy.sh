#!/usr/bin/env bash

# 當任何一行命令失敗時立即停止執行腳本
set -e

# ================= 配置設定 =================
# 請確認這裡已經換成你修改後的 HTTPS 或 SSH 網址
REMOTE_REPO="https://github.com/Tori-Lin/builder-example_2.git"
TARGET_BRANCH="gh-pages"
DIST_FOLDER="dist"  # Vue 3 / Vite 預設打包目錄
# ============================================

echo "🚀 開始執行部署流程..."

# 1. 執行打包編譯
echo "📦 正在編譯專案..."
npm run build

# 2. 確保打包資料夾存在
if [ ! -d "$DIST_FOLDER" ]; then
  echo "❌ 錯誤：找不到打包目錄 $DIST_FOLDER，請確認編譯是否成功。"
  exit 1
fi

# 3. 進入打包後的資料夾
cd "$DIST_FOLDER"

# 💡【核心修正】清除過去殘留的臨時 .git 紀錄，確保每一次都是全新乾淨的 commit
if [ -d ".git" ]; then
  echo "🧹 偵測到舊的臨時 Git 紀錄，正在清除..."
  rm -rf .git
fi

# 4. 初始化全新的臨時 Git 儲存庫
echo "🌱 初始化全新臨時 Git 並準備推送至 $TARGET_BRANCH 分支..."
git init
git add -A
git commit -m "deploy: 🚀 自動部署網站於 $(date +'%Y-%m-%d %H:%M:%S')"

# 5. 強制覆蓋推送到遠端儲存庫的 gh-pages 分支
echo "📤 正在強制推送至 GitHub..."
git push -f "$REMOTE_REPO" master:"$TARGET_BRANCH"

echo "🎉 部署成功！檔案已成功推送到 $TARGET_BRANCH 分支。"