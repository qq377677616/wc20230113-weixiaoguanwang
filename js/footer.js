function iniFooter(imgbaseurl = './', path = './') {
    $('body').append(`
  <div id="footer">
    <div class="footer-bd">
      <img class="footer-logo" src="${imgbaseurl}images/smiletooth.png" alt="">
      <div class="footer-focus">
        <div class="footer-title">关注我们</div>
        <img src="${imgbaseurl}images/footer_img.png" alt="">
        <div class="footer-phone">400-000-0000</div>
      </div>
      <div class="footer-column">
        <ul>
          <li class="footer-title"><a href="${path}index.html">首页</a></li>
          <li><a href="${path}index.html#a1">VTO特点</a></li>
          <li><a href="${path}index.html#a2">DM特点</a></li>
          <li><a href="${path}index.html#a3">服务流程</a></li>
          <li><a href="${path}index.html#a4">适应症矫正</a></li>
          <li><a href="${path}index.html#a5">塑颜矫正</a></li>
        </ul>
        <ul>
          <li class="footer-title"><a href="${path}pages/about.html">关于微笑再现</a></li>
          <li><a href="${path}pages/about.html#a6">品牌介绍</a></li>
          <li><a href="${path}pages/about.html#a7">品牌动态</a></li>
        </ul>
        <ul>
          <li class="footer-title"><a href="${path}pages/correct.html">可视化矫正</a></li>
          <li><a href="${path}pages/correct.html#a8">Smile Track简介</a></li>
          <li><a href="${path}pages/correct.html#a9">VTO特点</a></li>
          <li><a href="${path}pages/correct.html#a10">预测报告</a></li>
          <li><a href="${path}pages/correct.html#a11">临床试用统计</a></li>
          <li><a href="${path}pages/correct.html#a12">DM矫正监控</a></li>
          <li><a href="${path}pages/correct.html#a13">DM特点</a></li>
        </ul>
        <ul>
          <li class="footer-title"><a href="${path}pages/wisdom.html">智慧化牙套</a></li>
          <li><a href="${path}pages/wisdom.html#a14">材料性能</a></li>
          <li><a href="${path}pages/wisdom.html#a15">智慧生产</a></li>
        </ul>
        <ul>
          <li class="footer-title"><a href="${path}pages/correctdemo.html">矫正案例</a></li>
          <li><a href="${path}pages/correctdemo.html#a16">不同脸型</a></li>
          <li><a href="${path}pages/correctdemo.html#a17">不同适应症</a></li>
        </ul>
      </div>
    </div>
  </div>
  `);
}