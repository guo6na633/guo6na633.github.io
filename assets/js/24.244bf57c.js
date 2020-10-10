(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{374:function(t,e,v){"use strict";v.r(e);var _=v(25),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),v("h2",{attrs:{id:"git常用指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[t._v("#")]),t._v(" git常用指令")]),t._v(" "),v("p",[t._v("1、创建git库")]),t._v(" "),v("p",[t._v("git init  #在当前目录中生成一个.git 目录（含有.git目录的目录即是git仓库）")]),t._v(" "),v("p",[t._v("2、注册git用户")]),t._v(" "),v("p",[t._v("用于在团队合作开发中，表明代码作者。")]),t._v(" "),v("p",[t._v("git config --global user.name XXX  #用户名")]),t._v(" "),v("p",[t._v("git config --global user.email XXX   #用户邮箱")]),t._v(" "),v("p",[t._v("git config --list  #查看用户信息")]),t._v(" "),v("p",[t._v("注：加--global，全局设置。")]),t._v(" "),v("p",[t._v("3、向git库添加修改")]),t._v(" "),v("p",[t._v("git add [path］ #会把对应目录或文件，添加到stage状态\n　　git add .  #会把当前所有的untrack files和changed but not updated添加到stage状态")]),t._v(" "),v("p",[t._v("实际上是为修改内容添加index索引。")]),t._v(" "),v("p",[t._v("4、向版本库提交修改")]),t._v(" "),v("p",[t._v("git commit –m “XXXX”     #提交修改,添加注释")]),t._v(" "),v("p",[t._v("注：git 提示： 未有add红色字体，未有commit绿色字体，已提交则worktree是干净的")]),t._v(" "),v("p",[t._v("5、查看当前代码库的状态")]),t._v(" "),v("p",[t._v("git status")]),t._v(" "),v("p",[t._v("6、查看版本信息")]),t._v(" "),v("p",[t._v("---\x3e实际是查看修改提交信息")]),t._v(" "),v("p",[t._v("git log")]),t._v(" "),v("p",[t._v("git log --graph  #以图形化（节点）展示当前git库的提交信息。")]),t._v(" "),v("p",[t._v("7、查看指定版本信息")]),t._v(" "),v("p",[t._v("git show sdjf974654dd….  #(show后面为每次提交系统自动生成的一串哈希值)")]),t._v(" "),v("p",[t._v("git show sdji97 #一般只使用版本号的前几个字符即可")]),t._v(" "),v("p",[t._v("8、撤销修改")]),t._v(" "),v("p",[t._v("git reset\n（1）撤销整体修改\ngit reset --hard  #回到原来编辑的地方,改动会丢失。（同样适用于团队对于其他人\n的修改恢复）")]),t._v(" "),v("p",[t._v("git reset --hard sdv143kvf…... #可回到指定的版本#(hard后面为每次提交系统自\n动生成的一串哈希值)\ngit reset [path] 会改变path指定的文件或目录的stage状态，到非stage状态。\ngit reset 会将所有stage的文件状态，都改变成非stage状态。")]),t._v(" "),v("p",[t._v("（2）撤销某次修改\n回退1个change的写法就是git reset HEAD^，\n2个为HEAD^^，\n3个为HEAD~3，以此类推。")]),t._v(" "),v("p",[t._v("9、向远端库推送修改（提交修改）")]),t._v(" "),v("p",[t._v("git push origin 分支名")]),t._v(" "),v("p",[t._v("10、暂存修改")]),t._v(" "),v("p",[t._v("git stash可以把当前的改动（stage和unstage，但不包括untrack的文件）暂存。")]),t._v(" "),v("p",[t._v("然后通过git stash list查看。")]),t._v(" "),v("p",[t._v("并通过git stash apply重新取出来。但apply之前要保证worktree是干净的。")]),t._v(" "),v("h2",{attrs:{id:"git-分支管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理"}},[t._v("#")]),t._v(" Git 分支管理")]),t._v(" "),v("p",[t._v("1、建立分支\n　　git branch AAA   #建立分支AAA")]),t._v(" "),v("p",[t._v("2、分支切换\n　　git checkout AAA   #从当前分支切换到AAA分支 (若AAA分支不存在，则自动新建)")]),t._v(" "),v("p",[t._v("3、将分支与主枝master合并\n　　git checkout master   #（首先切换回主枝）\n　　git merge AAA    #（将分支AAA与主枝合并）")]),t._v(" "),v("p",[t._v('注：git merge：默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。\n　　使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰（保持提交曲线为直线），建议采用这种方法。')]),t._v(" "),v("p",[t._v("4、当前分支查看\n　　git branch    #默认有master（也称为主枝）\n　　git branch -r  #查看远端库分支\n　　git branch –a  #查看当前所有分支（包括本地分支和远端库分支）")]),t._v(" "),v("p",[t._v("5、删除分支\n　　git branch –d  AAA   #删除分支AAA")]),t._v(" "),v("p",[t._v("6、切下远端库A分支到本地库A分支")]),t._v(" "),v("p",[t._v("git checkout -b  A origin/A  （若本地A分支不存在，则自动新建）")]),t._v(" "),v("p",[t._v("注：上面只是一些基本的操作命令，更多的命令可通过帮助文档查询。\n帮助文档的使用：\nman git-<需查询的指令>      #（git后面有“-”）\n如commit的查询为  man git-commit")]),t._v(" "),v("h2",{attrs:{id:"git分支管理规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git分支管理规范"}},[t._v("#")]),t._v(" git分支管理规范")]),t._v(" "),v("p",[t._v("基础分支：")]),t._v(" "),v("ul",[v("li",[t._v("master （主分支）")]),t._v(" "),v("li",[t._v("release （测试环境的稳定分支，Jenkins配置指向dat/uat）")]),t._v(" "),v("li",[t._v("develop （开发环境的稳定分支，Jenkins配置指向dev环境）")]),t._v(" "),v("li",[t._v("feature_*（功能开发分支，多个，例如feature_claim或feature_20191219）")]),t._v(" "),v("li",[t._v("hotfix （生产bug修复分支）")])]),t._v(" "),v("p",[t._v("操作流程：")]),t._v(" "),v("ol",[v("li",[t._v("项目迭代开始时由指定负责人从develop拉取新的feature分支")]),t._v(" "),v("li",[t._v("测试完成后将feature合并到develop")]),t._v(" "),v("li",[t._v("feature分支开发人员应该定期（每天）拉取最新的develop到自己feature开发分支中")]),t._v(" "),v("li",[t._v("develop分支测试没问题了，由指定负责人把develop分支合并到release")]),t._v(" "),v("li",[t._v("发布时release分支合并到master分支，此时如果存在bug，需在原来的feature分支中进行修改测试通过后再合并到develop分支中，再由develop合并到release分支进行再次发布")]),t._v(" "),v("li",[t._v("如果遇到生产BUG，需要从master拉取hotfix进行修正，测试通过后合并到master、release、develop中")]),t._v(" "),v("li",[t._v("已开发但这次版本上线的代码，如需测试可以借用dat或uat环境，修改这两个环境jenkins打包指向，指向自己的feature分支")]),t._v(" "),v("li",[t._v("特殊情况：需要频繁提交发布代码进行测试的功能，在jenkins指向的分支下，拉取最新代码，修改后不提交代码直接本地命令打包手动扔到服务器")])]),t._v(" "),v("p",[t._v("注意点：")]),t._v(" "),v("ol",[v("li",[t._v("项目只有master、release、develop三个固定分支，feature_*或hotfix为临时分支，临时分支用完需删除")]),t._v(" "),v("li",[t._v("feature命名参考：feature/项目功能名称或版本上线日期")]),t._v(" "),v("li",[t._v("master权限只限于项目负责人")]),t._v(" "),v("li",[t._v("release分支只限于指定负责人有push权限，其他开发者有合并权限")]),t._v(" "),v("li",[t._v("不可在develop进行代码修改，所有修改都需要通过feature或hotfix完成")]),t._v(" "),v("li",[t._v("feature从develop拉取")]),t._v(" "),v("li",[t._v("feature测试完成没有问题才能合并到develop")]),t._v(" "),v("li",[t._v("master上生产后，打tag(日期+版本号)")])]),t._v(" "),v("p",[t._v("提交前缀：")]),t._v(" "),v("p",[t._v("[NEW] 新增\n[IMP] 改善、优化\n[FIX] 修复测试问题\n[MERGE] 修复测试问题")])])}),[],!1,null,null,null);e.default=a.exports}}]);