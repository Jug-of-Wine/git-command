git init//初始化本地库
/*项目级别/仓库级别：仅在当前本地库范围内有效*/
git config user.name xxx//设置用户名
git config user.email xxx@xxx//设置邮箱
/*系统用户级别：登录当前操作系统的用户范围*/
git config --global user.name xxx//设置用户名
git config --global user.email xxx@xxx//设置邮箱
git add xxx//把工作区文件添加到暂存区
git commit -m 'xxxx'//把暂存区文件提交到本地库
git status//查看状态
git rm --cached xxx//删除暂存区文件
git log//查看完整日志
git log --pretty=oneline//每条日志只显示一行
git log --oneline//简洁查看日志
git reflog//显示到某个版本需要的步数
cat xxx//查看文件内容
vim xxx//编辑文件
git reset --hard 索引值//根据索引值来到指定版本
git reset --hard HEAD^ //回退到某个版本（一个^表示回退一个版本，两个^^表示回退2个，以此类推）
git reset --hard HEAD~n//回退某个版本（n表示回退到第几个版本）
git diff 文件名//将工作区中的文件和暂存区进行比较
git diff 本地库中的历史版本 文件名//将工作区中的文件和本地库历史记录比较
git branch -v//查看所有分支
git branch xxx//创建分支
git checkout xxx//切换分支
/*合并分支*/
第一步：git checkout 分支名 //切换到已经修改的分支
第二部：git merge 需要合并的分支名 
git remote -v //查看地址别名
git remote add 名称 远程库地址 //创建远程库地址别名
git push 远程地址别名 当前分支名 //提交远程仓库
git clone 远程库地址 //克隆远程库（完整的把远程库下载到本地、创建远程地址别名、初始化本地库）
git fetch 远程地址别名 远程分支名//是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中
git merge 远程地址别名/远程分支名//合并到本地文件
git pull 远程地址别名 远程分支名//拉取远程文件直接合并本地文件
