#!/bin/bash

# Bio Disks 网站部署脚本

echo "🚀 开始构建 Bio Disks 网站..."

# 清理之前的构建
echo "🧹 清理之前的构建文件..."
rm -rf public/

# 构建网站
echo "🔨 构建网站..."
hugo

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ 网站构建成功！"
    echo "📁 构建文件位于 public/ 目录"
    echo ""
    echo "📊 构建统计："
    echo "   - 页面数量: $(find public -name "*.html" | wc -l)"
    echo "   - CSS文件: $(find public -name "*.css" | wc -l)"
    echo "   - JS文件: $(find public -name "*.js" | wc -l)"
    echo ""
    echo "🌐 本地预览："
    echo "   运行 'hugo server' 启动本地服务器"
    echo ""
    echo "📤 部署选项："
    echo "   1. 上传 public/ 目录到您的Web服务器"
    echo "   2. 推送到GitHub Pages"
    echo "   3. 部署到Netlify/Vercel等平台"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi 