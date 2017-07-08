## 如何学习
- git这个东西很抽象，如果直接看书或者视频，很有可能会一头蒙蔽
- git和游戏中的很多概念很像，学的时候把各个概念和游戏中的东西类比
- 多画图理解，并且用命令进行验证

## 理解知识点
- git --> 玩游戏的时候，把当前进度存档，下次可以直接切到当前这个进度玩 
- `git config --global user.name "zhengwei"` `git config --global user.email "zhengwei1949@qq.com"` --> 玩游戏的时候要登录用户名和邮箱
- `git init` --> 游戏初始化进度
- `git add .` --> 买东西的时候，先把东西放到购物车
- `git commit -m "注释信息"` --> 把购物车中的东西买下来(这块可以想像着，用一个照相机拍下当前的快照，也就是玩游戏的时候的存档，到时候想回头当前这个进度玩也是可以的)
- 工作区、暂存区、仓库 --> 画图理解一下
- `git status` --> 打开命令行，我们眼前是一处黑，我们如何知道当前的进度? --> 通过git status查看当前自己所处的进度
- `.gitignore` --> 忽略文件
- `git log`,`git log --oneline`,`git reflog` --> 任何对git的操作，都是可以查询得到的
- `git reset --hard Head~1` --> 回退版本,上一次上一次的撤销回退
- 版本号 --> 每次commit都会产生一个版本号
- `git reset --hrad 版本号` --> 根据版本号进行撤销回退
- 分支 --> 类似游戏副本
- `git branch 新的分支名` | `git checkout 分支名` | `git checkout -d 分支名` | `git branch` | `git merge 分支名`
- 冲突的原因：二个分支在合并的时候，同一个文件的同一行出现不一样的代码
- 画图理解本地和服务器是如何交互的(`git push`,`git pull`)
- ssh:配置公钥、私钥
- 做一个文明的git使用者:先pull,再push
