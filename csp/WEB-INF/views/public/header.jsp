<header>
    <div class="search">
        <form name='search_form' novalidate ng-submit='searchForm()'>
        <input type="text" placeholder="请输入需要查询的合同号或机构名称" ng-model='keyword' required>
        <button type="submit" ng-disabled='search_form.$invalid'></button>
        </form>
    </div>
    <div class="other">
        <div class="tips">
            <img src="<%=request.getContextPath() %>/images/icon/icon_new.png" alt="">
            <img src="<%=request.getContextPath() %>/images/icon/icon_dbsx.png" alt="">
        </div>
        <div class="user">
            <img src="<%=request.getContextPath() %>/images/small/small.png" alt="">
            <h3>Union Studio</h3>
        </div>
    </div>
</header><!-- /header -->

