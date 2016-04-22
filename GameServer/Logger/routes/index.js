/**
 * Created with JetBrains WebStorm.
 * User: andy.chen
 * Date: 14-5-20
 * Time: 下午3:43
 * To change this template use File | Settings | File Templates.
 */
exports.index = function(req, res){
    if(!req.session.user)
        res.redirect('/login');
    else
        res.render('index', {title:'DT后台管理系统',layout:null});
};

exports.left = function(req, res){
    var menus = {
        "BI" : [
            {
                title : '数据分析',
                url : '/LoggerBI'
            }
//            ,
//            {
//                title : '碎片',
//                url : '/Item/Fragment'
//            },
//            {
//                title : '卷轴',
//                url : '/Item/Scroll'
//            },
//            {
//                title : '灵魂石',
//                url : '/Item/SoulStone'
//            },
//            {
//                title : '消耗品',
//                url : '/Item/Consumables'
//            },
//            {
//                title : '装备',
//                url : '/Item/Equipment'
//            }

//            {
//                title : '英雄',
//                url : '/apple'
//            },
//            {
//                title : '怪物',
//                url : '/item_store'
//            }
//            {
//                title : '公告',
//                url : '/notice'
//            },
//            {
//                title : '消息',
//                url : '/message'
//            }
        ],
        "manage_Tools" : [
            {
                title : '资源管理',
                url : '/resource'
            }
            //,
            //{
            //    title : '帐号',
            //    url : '/account'
            //},
//            {
//                title : '角色',
//                url : '/role'
//            },
//            {
//                title : '支付查询',
//                url : '/pay'
//            },
//            {
//                title : '密码修改',
//                url : '/modify'
//            },
//            {
//                title : '兑换码管理',
//                url : '/redeemCode'
//            },
//            {
//                title : '兑换码查询',
//                url : '/redeemCodeSearch'
//            },
//            {
//                title : '权限管理',
//                url : '/authority'
//            },
//            {
//                title : '账号管理',
//                url : '/admin'
//            }
        ],
        "config" : [
            {
                title : '配置表生成',
                url : '/config/config_take_effect'
            },
            {
                title : '配置表导出',
                url : '/config/config_export'
            },
            {
                title : '配置表更新',
                url : '/shut'
            }
//           , {
//                title : '道具商城',
//                url : '/config/item_store'
//            },
//            {
//                title : '生效配置',
//                url : '/config/configuration'
//            },
//            {
//                title : '礼包',
//                url : '/config/packages'
//            }
        ],
        "game" :
            [
//                {
//                    title : '游戏管理',
//                    url : '/shut'
//                }
            ],
        "qa_tool" :
            [
//                {
//                    title : '自定义牌面',
//                    url : '/config/packages'
//                },
//                {
//                    title : '算番工具',
//                    url : '/qa_tool/calculator_fan'
//                }
            ]
    };

    res.render('left',{title:'navigation',menus:menus,user:req.session.user});
};