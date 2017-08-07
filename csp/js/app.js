var cmsApp = angular.module('cmsApp', [
        'ui.router',
        'ng-pagination',
        'widget.scrollbar',
        'jqwidgets',
        'cmsCtrls',
        'cmsServices'
    ]);
    cmsApp.config(function($stateProvider,$urlRouterProvider,$locationProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            //共用
            .state('app',{
                url: '/',
                views: {
                    'header': {
                        /*templateUrl: 'http://localhost:8080/csp-web-manager/public/header', */
                        templateUrl: 'templates/public/header.html',
                        controller: 'headerCtrl'
                    },
                    'nav': {
                        /*templateUrl: 'http://localhost:8080/csp-web-manager/public/nav',*/
                         templateUrl: 'templates/public/nav.html',
                         controller: 'navCtrl'
                    },
                    'content': {
                        /*templateUrl: 'http://localhost:8080/csp-web-manager/public/content'*/
                         templateUrl: 'templates/public/content.html',
                    }
                }
            })


            //首页
            .state('app.index', {
                url: '/',
                views: {
                    'content@': {
                        /*templateUrl: 'http://localhost:8080/csp-web-manager/public/index',*/
                        templateUrl: 'templates/public/index.html',
                        controller: 'indexCtrl'
                    }
                }
            })
            .state('app.index', {
                url: 'index',
                views: {
                    'content@': {
                        /*templateUrl: 'http://localhost:8080/csp-web-manager/public/index',*/
                        templateUrl: 'templates/public/index.html',
                        controller: 'indexCtrl'
                    }
                }
            })
            //机构
            .state('app.institution', {
                url: 'institution',
                views: {
                    'content@': {
                        templateUrl: 'templates/institution/institution.html',
                        controller: 'institutionCtrl'
                    }
                }
            })
            //商户
            .state('app.customer', {
                url: 'customer',
                views: {
                    'content@': {
                        templateUrl: 'templates/customer/customer.html',
                        controller: 'customerCtrl'
                    }
                }
            })
            .state('app.customer.tjsh', {//添加商户
                url: '/tjsh',
                views: {
                    'content@': {
                        templateUrl: 'templates/customer/customer-tjsh.html',
                        controller: 'tjshCtrl'
                    }
                }
            })

            //统计
            .state('app.statistics', {
                url: 'statistics',
                views: {
                    'content@': {
                        templateUrl: 'templates/statistics/statistics.html',
                        controller: 'statisticsCtrl'
                    }
                }
            })
            //订单
            .state('app.order', {
                url: 'order',
                views: {
                    'content@': {
                        templateUrl: 'templates/order/order.html',
                        controller: 'orderCtrl'
                    }
                }
            })
            //结算
            .state('app.settlement', {
                url: 'settlement',
                views: {
                    'content@': {
                        templateUrl: 'templates/settlement/settlement.html',
                        controller: 'settlementCtrl'
                    }
                }
            })
            //审批
            .state('app.examine', {
                url: 'examine',
                views: {
                    'content@': {
                        templateUrl: 'templates/examine/examine.html',
                        controller: 'examineCtrl'
                    }
                }
            })
            //中银
            .state('app.BOC', {
                url: 'BOC',
                views: {
                    'content@': {
                        templateUrl: 'templates/BOC/BOC.html',
                        controller: 'BOCCtrl'
                    }
                }
            })
            //拓展
            .state('app.expand', {
                url: 'expand',
                views: {
                    'content@': {
                        templateUrl: 'templates/expand/expand.html',
                        controller: 'expandCtrl'
                    }
                }
            })



            //系统
            .state('app.system', {
                url: 'system',
                views: {
                    'content@': {
                       /* templateUrl: 'http://localhost:8080/csp-web-manager/systemPage/system',*/
                        templateUrl: 'templates/system/system.html',
                        controller: 'systemCtrl'
                    }
                }
            })
            .state('app.system.qx', {//权限
                url: '/qx',
                views: {
                    'content@': {
                        templateUrl: 'http://localhost:8080/csp-web-manager/systemPage/system-qx',
                        controller: 'qxCtrl'
                    }
                }
            })
            .state('app.system.dysz', {//地域设置
                url: '/dysz',
                views: {
                    'content@': {
                        templateUrl: 'http://localhost:8080/csp-web-manager/systemPage/system-dysz',
                        controller: 'dyszCtrl'
                    }
                }
            })
            .state('app.system.qxyh', {//用户设置
                url: '/qxyh',
                views: {
                    'content@': {
                        /*templateUrl: 'http://localhost:8080/csp-web-manager/systemPage/system-qxyh',*/templateUrl: 'templates/system/system-qxyh.html',
                        controller: 'qxyhCtrl'
                    }
                }
            })
            .state('app.system.tjqx', {//添加权限
            	url: '/tjqx',
            	views: {
            		'content@': {
            			templateUrl: 'http://localhost:8080/csp-web-manager/systemPage/system-tjqx',
            			controller: 'tjqxCtrl'
            		}
            	}
            })
            .state('app.system.fwsz', {//服务设置
                url: '/fwsz',
                views: {
                    'content@': {
                        templateUrl: 'http://localhost:8080/csp-web-manager/systemPage/system-fwsz',
                        controller: 'fwszCtrl'
                    }
                }
            })
    });