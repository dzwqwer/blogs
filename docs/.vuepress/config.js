module.exports = {
  title: '我的主页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'Just playing around', // meta 中的描述文字，用于SEO
  base: '/blogs/',
  head: [
    ['link', 
        { rel: 'icon', href: '/assets/dog.jpg' }
        //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],  
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // 显示最后更新时间
    logo: '/assets/user.jpg',  //网页顶端导航栏左上角的图标  前边需要带 /  否则会在不同页面引入图片的路径不对 第一个'/'会遍历public文件夹的文件
    sidebarDepth: 2, // 提取 markdown 标题的深度 2 表示提取到 h3

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '分类',  //默认显示        
        ariaLabel: '分类',   //用于识别的label
        items: [
          { text: '文章', link: '/pages/folder1/test1.md' },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: '琐碎', link: '/pages/folder2/test4.md' },
        ]
      },
      { text: '功能演示', link: '/pages/folder1/test3.md' },

      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/dzwqwer' },
    ],


    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/folder1/': [
        {
          title: '测试菜单1',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级 最多2
          children: [
            ['test1.md', '子菜单3'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ['test3.md', '子菜单2']
          ]
        },
        {
          title: '测试菜单2',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['test2.md', '子菜单1' ]
          ]
        }
      ],
      '/pages/folder2/': [
        'test4', // 根据 markdown 标题展开
      ],
      '/pages/folder3/': [
        'test5',
        'test6'
      ],
    },
  }
};