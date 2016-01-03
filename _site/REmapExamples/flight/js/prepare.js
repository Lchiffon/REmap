{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(6:45-7:00)',
    },
  		toolbox: {
				show : true,
				orient : 'vertical',
				x: 'right',
				y: 'center',
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			dataRange: {
				min : 0,
				max : 130,
				y: '60%',
				calculable : true,
				color: ['#ff3333', 'orange', 'yellow','lime','aqua']
			},
			series : [
				{
					type:'map',
					data:[],
					geoCoord: {
						'上海': [121.4648,31.2891],
						'哈尔滨': [126.24614,45.62994],
            '池州': [117.69540,30.74264],
            '青岛': [120.39253,36.27293],
            '三亚': [109.41488,18.31346],
            '成都': [103.96513,30.58476],
            '厦门': [118.14021,24.53950],
            '丹东': [124.29286,40.03977],
            '福州': [119.68129,25.93479],
            '西宁': [101.82189,36.60911],
            '武汉': [114.21442,30.77288],
            '郑州': [113.85268,34.53080],
            '北京': [116.62119,40.06107],
            '贵阳': [106.80687,26.54701],
            '晋江': [118.59862,24.80680],
            '西安': [108.76665,34.44570],
            '乌鲁木齐': [ 87.48488,43.90951],
            '沈阳': [123.49997,41.64532],
            '大连': [121.55046,38.96884],
            '昆明': [102.94329,25.10781],
            '长春': [125.70685,43.99970],
            '广州': [113.30939,23.39237],
            '洛阳': [112.39881,34.74147],
            '珠海': [113.38155,22.01545],
            '重庆': [106.64542,29.72356],
            '深圳': [113.82013,22.63057],
            '石家庄': [114.70461,38.28267],
            '呼和浩特': [111.82930,40.86053],
            '乌海': [106.81487,39.79920],
            '怀化': [109.71211,27.44760],
            '南宁': [108.17832,22.61504],
            '烟台': [121.00273,37.66239],
            '张家口': [114.94266,40.74564],
            '万州': [108.43867,30.80413],
            '通辽': [122.21695,43.56515],
            '海拉尔': [119.83300,49.21835],
            '长沙': [113.22692,28.19253],
            '太原': [112.64184,37.75982],
            '丽江': [100.25517,26.67491],
            '安顺': [105.88314,26.25980],
            '延安': [109.56322,36.64548],
            '拉萨': [ 90.87458,29.36577],
            '敦煌': [ 94.81119,40.17253],
            '锦州': [121.07776,41.10316],
            '延吉': [129.45464,42.89542],
            '东营': [118.79577,37.51182],
            '喀什': [ 76.02071,39.54239],
            '济南': [117.21703,36.85605],
            '威海': [122.24825,37.19525],
            '兰州': [103.62276,36.51227],
            '长治': [113.13437,36.25182],
            '惠州': [114.59614,23.05667],
            '唐山': [118.00622,39.73029],
            '温州': [120.85812,27.91852],
            '天津': [117.36545,39.13589],
            '揭阳': [116.51929,23.55471],
            '南昌': [115.92152,28.86337],
            '宜宾': [104.56219,28.80141],
            '银川': [106.39673,38.32991],
            '泸州': [105.38861,28.84757],
            '襄阳': [112.30157,32.15550],
            '阜阳': [115.75068,32.88286],
            '连云港': [118.88847,34.57022],
            '绵阳': [104.75652,31.43181],
            '桂林': [110.05819,25.22134],
            '黎平': [109.16512,26.32264],
            '西双版纳': [100.77432,21.97724],
            '包头': [110.01111,40.57196],
            '固原': [106.23227,36.08267],
            '柳州': [109.40991,24.20909],
            '景德镇': [117.19011,29.33837],
            '阿克苏': [ 80.30172,41.26685],
            '临沂': [118.41961,35.05447],
            '衡阳': [112.62600,26.72667],
            '南充': [106.17246,30.79415],
            '井冈山': [114.75419,26.85667],
            '海口': [110.46611,19.94555],
            '西昌': [102.19629,27.98489],
            '牡丹江': [129.59610,44.54333],
            '遵义': [107.26045,27.80591],
            '朝阳': [120.44887,41.55275],
            '赤峰': [118.84460,42.16209],
            '湛江': [110.37277,21.21818],
            '舟山': [122.36821,29.93808],
            '腾冲': [ 98.48937,24.94261],
            '普洱': [100.96959,22.79938],
            '芒市': [ 98.53638,24.40850],
            '安庆': [117.05893,30.58870],
            '庆阳': [107.61727,35.80749],
            '嘉峪关': [ 98.34881,39.86858],
            '宜昌': [111.49233,30.55295],
            '佳木斯': [130.46996,46.85328],
            '鞍山': [122.86880,41.10865],
            '九寨沟': [103.93199,33.27998],
            '盐城': [120.21518,33.43609],
            '乌兰浩特': [122.01406,46.20094],
            '梅县': [116.11579,24.26900],
            '大理': [100.33044,25.65352],
            '恩施': [109.49278,30.32563],
            '张家界': [110.45777,29.10983],
            '长白山': [127.62084,42.07246],
            '宜春': [114.32256,27.80245],
            '黄山': [118.26409,29.73332],
            '常德': [111.64993,28.92691],
            '北海': [109.29874,21.54692],
            '运城': [111.04972,35.11917],
            '大同': [113.49390,40.06406],
            '迪庆': [ 99.68955,27.79912],
            '邯郸': [114.44171,36.53001],
            '汉中': [107.20697,33.13039],
            '满洲里': [117.34643,49.57892],
            '榆林': [109.60899,38.36768],
            '鄂尔多斯': [109.87304,39.50761],
            '金浦': [118.53340,24.93830],
            '赣州': [114.78979,25.85131],
            '大庆': [125.14580,46.75507],
            '武夷山': [118.01153,27.71060],
            '南阳': [112.62640,32.98707],
            '淮安': [119.14146,33.79383],
            '南京': [118.87769,31.73891],
            '合肥': [116.97594,31.99287]
					},
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [
        [{name:'上海'},{name:'哈尔滨',value:'ZH1971,6:55'},
[{name:'上海'},{name:'哈尔滨',value:'CA1971,6:55'},
[{name:'上海'},{name:'池州',value:'HO1269,6:45'},
[{name:'上海'},{name:'池州',value:'MU4033,6:45'},
[{name:'上海'},{name:'青岛',value:'ZH5077,6:45'},
[{name:'上海'},{name:'青岛',value:'HO1195,6:45'},
[{name:'上海'},{name:'青岛',value:'MU3933,6:45'},
[{name:'上海'},{name:'三亚',value:'MU9537,6:45'},
[{name:'上海'},{name:'三亚',value:'FM9537,6:45'},
[{name:'上海'},{name:'成都',value:'HO1269,6:45'},
[{name:'上海'},{name:'成都',value:'MU4033,6:45'},
[{name:'上海'},{name:'青岛',value:'FM9231,6:50'},
[{name:'上海'},{name:'青岛',value:'MU9231,6:50'},
[{name:'上海'},{name:'厦门',value:'9C8815,6:50'},
[{name:'上海'},{name:'丹东',value:'FM9231,6:50'},
[{name:'上海'},{name:'丹东',value:'MU9231,6:50'},
[{name:'上海'},{name:'厦门',value:'FM9263,6:55'},
[{name:'上海'},{name:'厦门',value:'MU9263,6:55'},
[{name:'上海'},{name:'福州',value:'MU5507,6:55'},
[{name:'上海'},{name:'三亚',value:'9C8779,6:55'}
]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'哈尔滨',value:29},
{name:'哈尔滨',value:29},
{name:'池州',value: 2},
{name:'池州',value: 2},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'成都',value:57},
{name:'成都',value:57},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'厦门',value:71},
{name:'丹东',value: 2},
{name:'丹东',value: 2},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'福州',value:35},
{name:'三亚',value:29}]
      }
    }
  ]
},
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(7:00-7:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'西宁',value:'HO1075,7:00'},
[{name:'上海'},{name:'武汉',value:'CZ6172,7:05'},
[{name:'上海'},{name:'武汉',value:'MF1910,7:05'},
[{name:'上海'},{name:'武汉',value:'MU3594,7:05'},
[{name:'上海'},{name:'哈尔滨',value:'9C8859,7:05'},
[{name:'上海'},{name:'郑州',value:'HO1069,7:10'},
[{name:'上海'},{name:'北京',value:'KN5988,7:10'},
[{name:'上海'},{name:'北京',value:'MU3812,7:10'},
[{name:'上海'},{name:'贵阳',value:'CZ6578,7:05'},
[{name:'上海'},{name:'贵阳',value:'MU3694,7:05'},
[{name:'上海'},{name:'贵阳',value:'MF1546,7:05'},
[{name:'上海'},{name:'北京',value:'MU5137,7:00'},
[{name:'上海'},{name:'北京',value:'CZ9306,7:00'},
[{name:'上海'},{name:'青岛',value:'9C8821,7:05'},
[{name:'上海'},{name:'晋江',value:'9C8871,7:10'},
[{name:'上海'},{name:'西安',value:'9C8845,7:10'},
[{name:'上海'},{name:'乌鲁木齐',value:'9C8845,7:10'},
[{name:'上海'},{name:'贵阳',value:'CA3225,7:10'},
[{name:'上海'},{name:'贵阳',value:'HO1207,7:10'},
[{name:'上海'},{name:'贵阳',value:'MU3997,7:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'西宁',value: 7},
{name:'武汉',value:29},
{name:'武汉',value:29},
{name:'武汉',value:29},
{name:'哈尔滨',value:29},
{name:'郑州',value:32},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'贵阳',value:26},
{name:'贵阳',value:26},
{name:'贵阳',value:26},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'青岛',value:53},
{name:'晋江',value:15},
{name:'西安',value:46},
{name:'乌鲁木齐',value:30},
{name:'贵阳',value:26},
{name:'贵阳',value:26},
{name:'贵阳',value:26}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(7:15-7:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'9C8839,7:15'},
[{name:'上海'},{name:'大连',value:'HO1163,7:20'},
[{name:'上海'},{name:'西安',value:'CZ3335,7:25'},
[{name:'上海'},{name:'大连',value:'9C8843,7:25'},
[{name:'上海'},{name:'昆明',value:'MF4651,7:25'},
[{name:'上海'},{name:'昆明',value:'CZ3677,7:25'},
[{name:'上海'},{name:'西宁',value:'CZ8357,7:25'},
[{name:'上海'},{name:'郑州',value:'MU4603,7:15'},
[{name:'上海'},{name:'郑州',value:'CZ8335,7:15'},
[{name:'上海'},{name:'郑州',value:'MF5085,7:15'},
[{name:'上海'},{name:'长春',value:'MU3650,7:25'},
[{name:'上海'},{name:'长春',value:'CZ6374,7:25'},
[{name:'上海'},{name:'长春',value:'MF4082,7:25'},
[{name:'上海'},{name:'广州',value:'9C8835,7:15'},
[{name:'上海'},{name:'洛阳',value:'MU5389,7:15'},
[{name:'上海'},{name:'洛阳',value:'CZ9464,7:15'},
[{name:'上海'},{name:'珠海',value:'9C8819,7:15'},
[{name:'上海'},{name:'重庆',value:'9C8897,7:20'},
[{name:'上海'},{name:'深圳',value:'9C8917,7:20'},
[{name:'上海'},{name:'石家庄',value:'9C8903,7:25'},
[{name:'上海'},{name:'呼和浩特',value:'CZ9493,7:25'},
[{name:'上海'},{name:'呼和浩特',value:'MU5459,7:25'},
[{name:'上海'},{name:'乌海',value:'CZ9493,7:25'},
[{name:'上海'},{name:'乌海',value:'MU5459,7:25'},
[{name:'上海'},{name:'怀化',value:'9C8827,7:25'},
[{name:'上海'},{name:'昆明',value:'9C8827,7:25'},
[{name:'上海'},{name:'南宁',value:'ZH5031,7:20'},
[{name:'上海'},{name:'南宁',value:'MU3955,7:20'},
[{name:'上海'},{name:'南宁',value:'HO1171,7:20'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value: 32},
{name:'大连',value: 37},
{name:'西安',value: 46},
{name:'大连',value: 37},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'西宁',value:  7},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'广州',value: 87},
{name:'洛阳',value:  4},
{name:'洛阳',value:  4},
{name:'珠海',value: 18},
{name:'重庆',value: 49},
{name:'深圳',value:122},
{name:'石家庄',value:  8},
{name:'呼和浩特',value: 10},
{name:'呼和浩特',value: 10},
{name:'乌海',value:  2},
{name:'乌海',value:  2},
{name:'怀化',value:  1},
{name:'昆明',value: 45},
{name:'南宁',value: 22},
{name:'南宁',value: 22},
{name:'南宁',value: 22}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(7:30-7:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'烟台',value:'9C8609,7:30'},
[{name:'上海'},{name:'张家口',value:'MU2175,7:30'},
[{name:'上海'},{name:'厦门',value:'HO1105,7:35'},
[{name:'上海'},{name:'深圳',value:'ZH1893,7:35'},
[{name:'上海'},{name:'深圳',value:'SC1893,7:35'},
[{name:'上海'},{name:'深圳',value:'CA1893,7:35'},
[{name:'上海'},{name:'万州',value:'FM9461,7:35'},
[{name:'上海'},{name:'呼和浩特',value:'HO1239,7:40'},
[{name:'上海'},{name:'南宁',value:'9C8911,7:40'},
[{name:'上海'},{name:'通辽',value:'HO1237,7:35'},
[{name:'上海'},{name:'海拉尔',value:'HO1237,7:35'},
[{name:'上海'},{name:'厦门',value:'NS8518,7:30'},
[{name:'上海'},{name:'厦门',value:'CZ5418,7:30'},
[{name:'上海'},{name:'厦门',value:'MU8515,7:30'},
[{name:'上海'},{name:'厦门',value:'MF8518,7:30'},
[{name:'上海'},{name:'武汉',value:'CZ9192,7:30'},
[{name:'上海'},{name:'武汉',value:'MU2502,7:30'},
[{name:'上海'},{name:'长沙',value:'MU3971,7:30'},
[{name:'上海'},{name:'长沙',value:'CA3213,7:30'},
[{name:'上海'},{name:'长沙',value:'ZH5001,7:30'},
[{name:'上海'},{name:'长沙',value:'HO1123,7:30'},
[{name:'上海'},{name:'广州',value:'MU5301,7:30'},
[{name:'上海'},{name:'广州',value:'CZ9408,7:30'},
[{name:'上海'},{name:'太原',value:'HO1131,7:35'},
[{name:'上海'},{name:'太原',value:'CA3205,7:35'},
[{name:'上海'},{name:'太原',value:'MU3929,7:35'},
[{name:'上海'},{name:'丽江',value:'HO1795,7:35'},
[{name:'上海'},{name:'丽江',value:'MU5819,7:35'},
[{name:'上海'},{name:'丽江',value:'CZ9683,7:35'},
[{name:'上海'},{name:'深圳',value:'HO1111,7:40'},
[{name:'上海'},{name:'深圳',value:'CA3207,7:40'},
[{name:'上海'},{name:'深圳',value:'MU3959,7:40'},
[{name:'上海'},{name:'深圳',value:'ZH5035,7:40'},
[{name:'上海'},{name:'昆明',value:'MU5838,7:40'},
[{name:'上海'},{name:'安顺',value:'MU5838,7:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'烟台',value: 19},
{name:'张家口',value:  1},
{name:'厦门',value: 71},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'万州',value:  1},
{name:'呼和浩特',value: 10},
{name:'南宁',value: 22},
{name:'通辽',value:  1},
{name:'海拉尔',value:  4},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'武汉',value: 29},
{name:'武汉',value: 29},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'太原',value: 20},
{name:'太原',value: 20},
{name:'太原',value: 20},
{name:'丽江',value:  9},
{name:'丽江',value:  9},
{name:'丽江',value:  9},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'昆明',value: 45},
{name:'安顺',value:  1}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(7:45-8:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'西安',value:'MU2215,7:45'},
[{name:'上海'},{name:'西安',value:'MU2345,7:45'},
[{name:'上海'},{name:'西安',value:'JL5691,7:45'},
[{name:'上海'},{name:'西安',value:'CZ9110,7:45'},
[{name:'上海'},{name:'西安',value:'MU2335,7:45'},
[{name:'上海'},{name:'西安',value:'JR2335,7:45'},
[{name:'上海'},{name:'成都',value:'TV6505,7:45'},
[{name:'上海'},{name:'成都',value:'SC1947,7:45'},
[{name:'上海'},{name:'成都',value:'CA1947,7:45'},
[{name:'上海'},{name:'成都',value:'ZH1947,7:45'},
[{name:'上海'},{name:'延安',value:'MU2345,7:45'},
[{name:'上海'},{name:'拉萨',value:'MU2335,7:45'},
[{name:'上海'},{name:'拉萨',value:'CZ9110,7:45'},
[{name:'上海'},{name:'拉萨',value:'JR2335,7:45'},
[{name:'上海'},{name:'敦煌',value:'MU2215,7:45'},
[{name:'上海'},{name:'大连',value:'CZ6529,7:50'},
[{name:'上海'},{name:'大连',value:'MF4969,7:50'},
[{name:'上海'},{name:'武汉',value:'CZ9193,7:50'},
[{name:'上海'},{name:'锦州',value:'FM9189,7:50'},
[{name:'上海'},{name:'延吉',value:'MF4969,7:50'},
[{name:'上海'},{name:'延吉',value:'CZ6529,7:50'},
[{name:'上海'},{name:'延吉',value:'MU4815,7:50'},
[{name:'上海'},{name:'东营',value:'HO1173,7:55'},
[{name:'上海'},{name:'厦门',value:'9C8833,7:55'},
[{name:'上海'},{name:'沈阳',value:'MF4182,7:55'},
[{name:'上海'},{name:'沈阳',value:'CZ6510,7:55'},
[{name:'上海'},{name:'沈阳',value:'MU3668,7:55'},
[{name:'上海'},{name:'长沙',value:'MU5323,7:45'},
[{name:'上海'},{name:'珠海',value:'HO1765,7:45'},
[{name:'上海'},{name:'珠海',value:'MU5201,7:45'},
[{name:'上海'},{name:'珠海',value:'CZ9348,7:45'},
[{name:'上海'},{name:'乌鲁木齐',value:'HO1785,7:45'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU5633,7:45'},
[{name:'上海'},{name:'喀什',value:'MU5633,7:45'},
[{name:'上海'},{name:'济南',value:'MU5571,7:50'},
[{name:'上海'},{name:'济南',value:'CZ9837,7:50'},
[{name:'上海'},{name:'威海',value:'MU2285,7:50'},
[{name:'上海'},{name:'威海',value:'CZ9074,7:50'},
[{name:'上海'},{name:'贵阳',value:'MU9463,7:50'},
[{name:'上海'},{name:'贵阳',value:'FM9463,7:50'},
[{name:'上海'},{name:'深圳',value:'MU3312,7:55'},
[{name:'上海'},{name:'深圳',value:'CZ3590,7:55'},
[{name:'上海'},{name:'深圳',value:'MF1474,7:55'},
[{name:'上海'},{name:'兰州',value:'9C8847,7:55'},
[{name:'上海'},{name:'北京',value:'ZH1858,7:55'},
[{name:'上海'},{name:'北京',value:'CA1858,7:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'延安',value:  1},
{name:'拉萨',value:  5},
{name:'拉萨',value:  5},
{name:'拉萨',value:  5},
{name:'敦煌',value:  1},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'武汉',value: 29},
{name:'锦州',value:  1},
{name:'延吉',value:  4},
{name:'延吉',value:  4},
{name:'延吉',value:  4},
{name:'东营',value:  1},
{name:'厦门',value: 71},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'长沙',value: 37},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'喀什',value:  3},
{name:'济南',value:  4},
{name:'济南',value:  4},
{name:'威海',value:  7},
{name:'威海',value:  7},
{name:'贵阳',value: 26},
{name:'贵阳',value: 26},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'兰州',value: 13},
{name:'北京',value: 98},
{name:'北京',value: 98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(8:00-8:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'昆明',value:'MU598,8:00'},
[{name:'上海'},{name:'长春',value:'HO1185,8:10'},
[{name:'上海'},{name:'长春',value:'MU3909,8:10'},
[{name:'上海'},{name:'哈尔滨',value:'FM9171,8:10'},
[{name:'上海'},{name:'长治',value:'HO1139,8:00'},
[{name:'上海'},{name:'惠州',value:'HO1011,8:05'},
[{name:'上海'},{name:'唐山',value:'FM9123,8:10'},
[{name:'上海'},{name:'深圳',value:'FM9331,8:00'},
[{name:'上海'},{name:'深圳',value:'MU9331,8:00'},
[{name:'上海'},{name:'成都',value:'CZ9473,8:00'},
[{name:'上海'},{name:'成都',value:'MU5401,8:00'},
[{name:'上海'},{name:'温州',value:'MU9515,8:05'},
[{name:'上海'},{name:'温州',value:'FM9515,8:05'},
[{name:'上海'},{name:'天津',value:'MU5825,8:05'},
[{name:'上海'},{name:'天津',value:'CZ9687,8:05'},
[{name:'上海'},{name:'揭阳',value:'9C8957,8:05'},
[{name:'上海'},{name:'南昌',value:'MU9245,8:10'},
[{name:'上海'},{name:'南昌',value:'FM9245,8:10'},
[{name:'上海'},{name:'烟台',value:'FM9073,8:10'},
[{name:'上海'},{name:'烟台',value:'MU9073,8:10'},
[{name:'上海'},{name:'西安',value:'MU4009,8:05'},
[{name:'上海'},{name:'西安',value:'CA3229,8:05'},
[{name:'上海'},{name:'西安',value:'ZH5051,8:05'},
[{name:'上海'},{name:'西安',value:'HO1217,8:05'},
[{name:'上海'},{name:'北京',value:'CZ9270,8:00'},
[{name:'上海'},{name:'北京',value:'MU5101,8:00'},
[{name:'上海'},{name:'郑州',value:'CZ9469,8:10'},
[{name:'上海'},{name:'郑州',value:'MU5395,8:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'昆明',value: 45},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'哈尔滨',value: 29},
{name:'长治',value:  1},
{name:'惠州',value:  1},
{name:'唐山',value:  1},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'温州',value: 10},
{name:'温州',value: 10},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'揭阳',value: 13},
{name:'南昌',value: 12},
{name:'南昌',value: 12},
{name:'烟台',value: 19},
{name:'烟台',value: 19},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'郑州',value: 32},
{name:'郑州',value: 32}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(8:15-8:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'武汉',value:'HO1073,8:15'},
[{name:'上海'},{name:'沈阳',value:'HO1181,8:15'},
[{name:'上海'},{name:'宜宾',value:'CZ9390,8:15'},
[{name:'上海'},{name:'丽江',value:'HO1073,8:15'},
[{name:'上海'},{name:'丽江',value:'CA3249,8:15'},
[{name:'上海'},{name:'银川',value:'CA1258,8:20'},
[{name:'上海'},{name:'泸州',value:'CZ9487,8:25'},
[{name:'上海'},{name:'襄阳',value:'HO1061,8:20'},
[{name:'上海'},{name:'厦门',value:'MU5569,8:15'},
[{name:'上海'},{name:'太原',value:'MU9163,8:15'},
[{name:'上海'},{name:'太原',value:'FM9163,8:15'},
[{name:'上海'},{name:'重庆',value:'MU9421,8:15'},
[{name:'上海'},{name:'重庆',value:'FM9421,8:15'},
[{name:'上海'},{name:'阜阳',value:'MU9279,8:20'},
[{name:'上海'},{name:'阜阳',value:'FM9279,8:20'},
[{name:'上海'},{name:'连云港',value:'MU9415,8:25'},
[{name:'上海'},{name:'连云港',value:'FM9415,8:25'},
[{name:'上海'},{name:'青岛',value:'MU9217,8:25'},
[{name:'上海'},{name:'青岛',value:'FM9217,8:25'},
[{name:'上海'},{name:'兰州',value:'FM9213,8:25'},
[{name:'上海'},{name:'兰州',value:'MU9213,8:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'武汉',value:29},
{name:'沈阳',value:32},
{name:'宜宾',value: 1},
{name:'丽江',value: 9},
{name:'丽江',value: 9},
{name:'银川',value: 9},
{name:'泸州',value: 1},
{name:'襄阳',value: 1},
{name:'厦门',value:71},
{name:'太原',value:20},
{name:'太原',value:20},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'阜阳',value: 2},
{name:'阜阳',value: 2},
{name:'连云港',value: 4},
{name:'连云港',value: 4},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'兰州',value:13},
{name:'兰州',value:13}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(8:30-8:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'西安',value:'CA1216,8:30'},
[{name:'上海'},{name:'呼和浩特',value:'CA1554,8:30'},
[{name:'上海'},{name:'呼和浩特',value:'G54174,8:30'},
[{name:'上海'},{name:'哈尔滨',value:'HO1179,8:30'},
[{name:'上海'},{name:'绵阳',value:'FM9411,8:30'},
[{name:'上海'},{name:'福州',value:'CA1979,8:35'},
[{name:'上海'},{name:'桂林',value:'FM9379,8:35'},
[{name:'上海'},{name:'哈尔滨',value:'9C8965,8:40'},
[{name:'上海'},{name:'黎平',value:'CZ9601,8:40'},
[{name:'上海'},{name:'深圳',value:'MU3337,8:35'},
[{name:'上海'},{name:'深圳',value:'CZ3645,8:35'},
[{name:'上海'},{name:'深圳',value:'MF4645,8:35'},
[{name:'上海'},{name:'重庆',value:'HO1245,8:40'},
[{name:'上海'},{name:'重庆',value:'CA3223,8:40'},
[{name:'上海'},{name:'广州',value:'MU9301,8:30'},
[{name:'上海'},{name:'广州',value:'FM9301,8:30'},
[{name:'上海'},{name:'北京',value:'MU5151,8:30'},
[{name:'上海'},{name:'北京',value:'CZ9310,8:30'},
[{name:'上海'},{name:'北京',value:'HU7604,8:30'},
[{name:'上海'},{name:'昆明',value:'CA3227,8:35'},
[{name:'上海'},{name:'昆明',value:'MU9453,8:35'},
[{name:'上海'},{name:'昆明',value:'MU4001,8:35'},
[{name:'上海'},{name:'昆明',value:'ZH5027,8:35'},
[{name:'上海'},{name:'昆明',value:'HO1121,8:35'},
[{name:'上海'},{name:'昆明',value:'FM9453,8:35'},
[{name:'上海'},{name:'西双版纳',value:'FM9453,8:35'},
[{name:'上海'},{name:'西双版纳',value:'MU9453,8:35'},
[{name:'上海'},{name:'成都',value:'CA3221,8:40'},
[{name:'上海'},{name:'成都',value:'MU3995,8:40'},
[{name:'上海'},{name:'成都',value:'HO1119,8:40'},
[{name:'上海'},{name:'成都',value:'ZH5007,8:40'},
[{name:'上海'},{name:'南宁',value:'MU9339,8:40'},
[{name:'上海'},{name:'南宁',value:'FM9339,8:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'西安',value: 46},
{name:'呼和浩特',value: 10},
{name:'呼和浩特',value: 10},
{name:'哈尔滨',value: 29},
{name:'绵阳',value:  3},
{name:'福州',value: 35},
{name:'桂林',value: 16},
{name:'哈尔滨',value: 29},
{name:'黎平',value:  1},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'西双版纳',value:  2},
{name:'西双版纳',value:  2},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'南宁',value: 22},
{name:'南宁',value: 22}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(8:45-9:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'CZ9564,8:45'},
[{name:'上海'},{name:'包头',value:'FM9437,8:55'},
[{name:'上海'},{name:'西安',value:'HO1009,8:50'},
[{name:'上海'},{name:'固原',value:'HO1009,8:50'},
[{name:'上海'},{name:'广州',value:'CZ3596,8:45'},
[{name:'上海'},{name:'广州',value:'MU3317,8:45'},
[{name:'上海'},{name:'广州',value:'MF1480,8:45'},
[{name:'上海'},{name:'柳州',value:'CZ9350,8:45'},
[{name:'上海'},{name:'柳州',value:'MU5203,8:45'},
[{name:'上海'},{name:'长沙',value:'MU9395,8:50'},
[{name:'上海'},{name:'长沙',value:'FM9395,8:50'},
[{name:'上海'},{name:'景德镇',value:'ZH9722,8:55'},
[{name:'上海'},{name:'景德镇',value:'KY9722,8:55'},
[{name:'上海'},{name:'景德镇',value:'CA3339,8:55'},
[{name:'上海'},{name:'景德镇',value:'HO1957,8:55'},
[{name:'上海'},{name:'北京',value:'CA1590,8:55'},
[{name:'上海'},{name:'北京',value:'ZH1590,8:55'},
[{name:'上海'},{name:'深圳',value:'CA3339,8:55'},
[{name:'上海'},{name:'深圳',value:'ZH9722,8:55'},
[{name:'上海'},{name:'深圳',value:'KY9722,8:55'},
[{name:'上海'},{name:'深圳',value:'HO1957,8:55'},
[{name:'上海'},{name:'乌鲁木齐',value:'CZ6998,8:55'},
[{name:'上海'},{name:'乌鲁木齐',value:'MF4618,8:55'},
[{name:'上海'},{name:'喀什',value:'CZ6998,8:55'},
[{name:'上海'},{name:'喀什',value:'MF4618,8:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value: 37},
{name:'包头',value:  4},
{name:'西安',value: 46},
{name:'固原',value:  1},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'柳州',value:  4},
{name:'柳州',value:  4},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'景德镇',value:  4},
{name:'景德镇',value:  4},
{name:'景德镇',value:  4},
{name:'景德镇',value:  4},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'喀什',value:  3},
{name:'喀什',value:  3}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(9:00-9:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'长沙',value:'FM9543,9:00'},
[{name:'上海'},{name:'昆明',value:'MU2583,9:00'},
[{name:'上海'},{name:'南宁',value:'FM9385,9:00'},
[{name:'上海'},{name:'昆明',value:'FM9543,9:00'},
[{name:'上海'},{name:'广州',value:'FM9303,9:10'},
[{name:'上海'},{name:'乌鲁木齐',value:'HU7353,9:05'},
[{name:'上海'},{name:'揭阳',value:'MU9289,9:00'},
[{name:'上海'},{name:'揭阳',value:'FM9289,9:00'},
[{name:'上海'},{name:'深圳',value:'MU5333,9:00'},
[{name:'上海'},{name:'深圳',value:'CZ9432,9:00'},
[{name:'上海'},{name:'青岛',value:'CZ9513,9:05'},
[{name:'上海'},{name:'青岛',value:'MU5509,9:05'},
[{name:'上海'},{name:'哈尔滨',value:'MU5509,9:05'},
[{name:'上海'},{name:'哈尔滨',value:'CZ9513,9:05'},
[{name:'上海'},{name:'乌鲁木齐',value:'HU7353,9:05'},
[{name:'上海'},{name:'阿克苏',value:'HU7353,9:05'},
[{name:'上海'},{name:'临沂',value:'FM9239,9:10'},
[{name:'上海'},{name:'临沂',value:'MU9239,9:10'},
[{name:'上海'},{name:'天津',value:'FM9131,9:10'},
[{name:'上海'},{name:'天津',value:'MU9131,9:10'},
[{name:'上海'},{name:'北京',value:'MU5103,9:00'},
[{name:'上海'},{name:'北京',value:'CZ9272,9:00'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'长沙',value: 37},
{name:'昆明',value: 45},
{name:'南宁',value: 22},
{name:'昆明',value: 45},
{name:'广州',value: 87},
{name:'乌鲁木齐',value: 30},
{name:'揭阳',value: 13},
{name:'揭阳',value: 13},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'乌鲁木齐',value: 30},
{name:'阿克苏',value:  1},
{name:'临沂',value:  4},
{name:'临沂',value:  4},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'北京',value: 98},
{name:'北京',value: 98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(9:15-9:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'衡阳',value:'FM9117,9:15'},
[{name:'上海'},{name:'深圳',value:'JL5697,9:15'},
[{name:'上海'},{name:'深圳',value:'MU5335,9:15'},
[{name:'上海'},{name:'深圳',value:'CZ9434,9:15'},
[{name:'上海'},{name:'南充',value:'CZ9817,9:15'},
[{name:'上海'},{name:'大连',value:'9C8857,9:25'},
[{name:'上海'},{name:'北京',value:'CZ9298,9:20'},
[{name:'上海'},{name:'乌鲁木齐',value:'FM9469,9:25'},
[{name:'上海'},{name:'深圳',value:'MU3302,9:15'},
[{name:'上海'},{name:'深圳',value:'MF1460,9:15'},
[{name:'上海'},{name:'深圳',value:'CZ3576,9:15'},
[{name:'上海'},{name:'厦门',value:'CZ9590,9:20'},
[{name:'上海'},{name:'厦门',value:'HO1739,9:20'},
[{name:'上海'},{name:'厦门',value:'MU5663,9:20'},
[{name:'上海'},{name:'厦门',value:'MF3123,9:20'},
[{name:'上海'},{name:'井冈山',value:'MU9269,9:20'},
[{name:'上海'},{name:'井冈山',value:'FM9269,9:20'},
[{name:'上海'},{name:'昆明',value:'MU9451,9:20'},
[{name:'上海'},{name:'昆明',value:'FM9451,9:20'},
[{name:'上海'},{name:'海口',value:'MU9269,9:20'},
[{name:'上海'},{name:'海口',value:'FM9269,9:20'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'衡阳',value:  1},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'南充',value:  1},
{name:'大连',value: 37},
{name:'北京',value: 98},
{name:'乌鲁木齐',value: 30},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'井冈山',value:  2},
{name:'井冈山',value:  2},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'海口',value: 16},
{name:'海口',value: 16}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(9:30-9:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'温州',value:'CA1966,9:35'},
[{name:'上海'},{name:'温州',value:'ZH1966,9:35'},
[{name:'上海'},{name:'广州',value:'MU5303,9:30'},
[{name:'上海'},{name:'广州',value:'CZ9410,9:30'},
[{name:'上海'},{name:'西安',value:'FM9201,9:30'},
[{name:'上海'},{name:'西安',value:'MU9201,9:30'},
[{name:'上海'},{name:'呼和浩特',value:'MU9127,9:40'},
[{name:'上海'},{name:'呼和浩特',value:'FM9127,9:40'},
[{name:'上海'},{name:'海拉尔',value:'MU9127,9:40'},
[{name:'上海'},{name:'海拉尔',value:'FM9127,9:40'},
[{name:'上海'},{name:'北京',value:'MU5153,9:30'},
[{name:'上海'},{name:'北京',value:'CZ9312,9:30'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'温州',value:10},
{name:'温州',value:10},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'西安',value:46},
{name:'西安',value:46},
{name:'呼和浩特',value:10},
{name:'呼和浩特',value:10},
{name:'海拉尔',value: 4},
{name:'海拉尔',value: 4},
{name:'北京',value:98},
{name:'北京',value:98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(9:45-10:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'成都',value:'CA4592,9:45'},
[{name:'上海'},{name:'西昌',value:'CA4592,9:45'},
[{name:'上海'},{name:'长沙',value:'FM9397,9:50'},
[{name:'上海'},{name:'沈阳',value:'FM9367,9:50'},
[{name:'上海'},{name:'成都',value:'3U8648,9:55'},
[{name:'上海'},{name:'武汉',value:'FM9345,9:45'},
[{name:'上海'},{name:'武汉',value:'MU9345,9:45'},
[{name:'上海'},{name:'广州',value:'MU3286,9:45'},
[{name:'上海'},{name:'广州',value:'CZ3548,9:45'},
[{name:'上海'},{name:'广州',value:'MF1428,9:45'},
[{name:'上海'},{name:'重庆',value:'CZ9827,9:45'},
[{name:'上海'},{name:'重庆',value:'MU5423,9:45'},
[{name:'上海'},{name:'贵阳',value:'9C8885,9:50'},
[{name:'上海'},{name:'三亚',value:'MU3985,9:50'},
[{name:'上海'},{name:'三亚',value:'HO1177,9:50'},
[{name:'上海'},{name:'福州',value:'NS8574,9:55'},
[{name:'上海'},{name:'福州',value:'MF8574,9:55'},
[{name:'上海'},{name:'福州',value:'MU8532,9:55'},
[{name:'上海'},{name:'福州',value:'CZ5466,9:55'},
[{name:'上海'},{name:'厦门',value:'NS8502,9:50'},
[{name:'上海'},{name:'厦门',value:'CZ5404,9:50'},
[{name:'上海'},{name:'厦门',value:'MU8511,9:50'},
[{name:'上海'},{name:'厦门',value:'MF8502,9:50'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'成都',value:57},
{name:'西昌',value: 1},
{name:'长沙',value:37},
{name:'沈阳',value:32},
{name:'成都',value:57},
{name:'武汉',value:29},
{name:'武汉',value:29},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'贵阳',value:26},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'厦门',value:71}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(10:00-10:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'CA8954,10:10'},
[{name:'上海'},{name:'大连',value:'G54136,10:10'},
[{name:'上海'},{name:'成都',value:'CZ9476,10:00'},
[{name:'上海'},{name:'成都',value:'MU5405,10:00'},
[{name:'上海'},{name:'深圳',value:'MU5337,10:05'},
[{name:'上海'},{name:'深圳',value:'CZ9436,10:05'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU4015,10:05'},
[{name:'上海'},{name:'乌鲁木齐',value:'HO1255,10:05'},
[{name:'上海'},{name:'青岛',value:'SC4662,10:10'},
[{name:'上海'},{name:'青岛',value:'CA4662,10:10'},
[{name:'上海'},{name:'北京',value:'CZ9274,10:00'},
[{name:'上海'},{name:'北京',value:'MU5105,10:00'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'北京',value: 98},
{name:'北京',value: 98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(10:15-10:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'长春',value:'FM9353,10:25'},
[{name:'上海'},{name:'厦门',value:'MU5665,10:25'},
[{name:'上海'},{name:'厦门',value:'CZ9592,10:25'},
[{name:'上海'},{name:'厦门',value:'MF3125,10:25'},
[{name:'上海'},{name:'烟台',value:'CA4862,10:20'},
[{name:'上海'},{name:'烟台',value:'SC4862,10:20'},
[{name:'上海'},{name:'深圳',value:'NS8371,10:20'},
[{name:'上海'},{name:'深圳',value:'CZ5283,10:20'},
[{name:'上海'},{name:'深圳',value:'MU8572,10:20'},
[{name:'上海'},{name:'深圳',value:'MF8371,10:20'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'长春',value: 29},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'烟台',value: 19},
{name:'烟台',value: 19},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(10:30-10:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'FM9191,10:30'},
[{name:'上海'},{name:'牡丹江',value:'CZ9515,10:30'},
[{name:'上海'},{name:'郑州',value:'FM9389,10:40'},
[{name:'上海'},{name:'太原',value:'CZ9143,10:40'},
[{name:'上海'},{name:'南昌',value:'MU5465,10:30'},
[{name:'上海'},{name:'广州',value:'MU9305,10:30'},
[{name:'上海'},{name:'广州',value:'FM9305,10:30'},
[{name:'上海'},{name:'重庆',value:'SC4950,10:35'},
[{name:'上海'},{name:'重庆',value:'CA4950,10:35'},
[{name:'上海'},{name:'重庆',value:'G56004,10:35'},
[{name:'上海'},{name:'天津',value:'MU9067,10:40'},
[{name:'上海'},{name:'天津',value:'FM9067,10:40'},
[{name:'上海'},{name:'遵义',value:'9C8823,10:40'},
[{name:'上海'},{name:'昆明',value:'9C8823,10:40'},
[{name:'上海'},{name:'揭阳',value:'MU3454,10:40'},
[{name:'上海'},{name:'揭阳',value:'CZ3852,10:40'},
[{name:'上海'},{name:'揭阳',value:'MF1710,10:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value:37},
{name:'牡丹江',value: 4},
{name:'郑州',value:32},
{name:'太原',value:20},
{name:'南昌',value:12},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'天津',value:29},
{name:'天津',value:29},
{name:'遵义',value: 1},
{name:'昆明',value:45},
{name:'揭阳',value:13},
{name:'揭阳',value:13},
{name:'揭阳',value:13}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(10:45-11:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'CZ6522,10:45'},
[{name:'上海'},{name:'大连',value:'MU3674,10:45'},
[{name:'上海'},{name:'大连',value:'MF4190,10:45'},
[{name:'上海'},{name:'海口',value:'FM9529,10:50'},
[{name:'上海'},{name:'沈阳',value:'FM9187,10:50'},
[{name:'上海'},{name:'哈尔滨',value:'FM9173,10:55'},
[{name:'上海'},{name:'武汉',value:'MU2506,10:50'},
[{name:'上海'},{name:'长沙',value:'MF1818,10:50'},
[{name:'上海'},{name:'长沙',value:'MU3527,10:50'},
[{name:'上海'},{name:'长沙',value:'CZ3966,10:50'},
[{name:'上海'},{name:'北京',value:'ZH1832,10:55'},
[{name:'上海'},{name:'北京',value:'CA1832,10:55'},
[{name:'上海'},{name:'广州',value:'HU7122,10:55'},
[{name:'上海'},{name:'贵阳',value:'HO1209,10:55'},
[{name:'上海'},{name:'贵阳',value:'MU3999,10:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value:37},
{name:'大连',value:37},
{name:'大连',value:37},
{name:'海口',value:16},
{name:'沈阳',value:32},
{name:'哈尔滨',value:29},
{name:'武汉',value:29},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'广州',value:87},
{name:'贵阳',value:26},
{name:'贵阳',value:26}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(11:00-11:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'长春',value:'HO1302,11:10'},
[{name:'上海'},{name:'大连',value:'CZ9576,11:05'},
[{name:'上海'},{name:'重庆',value:'3U8972,11:05'},
[{name:'上海'},{name:'朝阳',value:'CZ9576,11:05'},
[{name:'上海'},{name:'重庆',value:'CZ9483,11:10'},
[{name:'上海'},{name:'长春',value:'CZ9599,11:10'},
[{name:'上海'},{name:'赤峰',value:'CZ9007,11:10'},
[{name:'上海'},{name:'绵阳',value:'9C8989,11:00'},
[{name:'上海'},{name:'北京',value:'MU5107,11:00'},
[{name:'上海'},{name:'北京',value:'CZ9276,11:00'},
[{name:'上海'},{name:'天津',value:'CA1534,11:00'},
[{name:'上海'},{name:'天津',value:'ZH1534,11:00'},
[{name:'上海'},{name:'天津',value:'GS6662,11:05'},
[{name:'上海'},{name:'郑州',value:'MF1476,11:05'},
[{name:'上海'},{name:'郑州',value:'CZ3592,11:05'},
[{name:'上海'},{name:'郑州',value:'MU4655,11:05'},
[{name:'上海'},{name:'石家庄',value:'NS3220,11:10'},
[{name:'上海'},{name:'石家庄',value:'MF7048,11:10'},
[{name:'上海'},{name:'深圳',value:'MU5339,11:00'},
[{name:'上海'},{name:'深圳',value:'CZ9437,11:00'},
[{name:'上海'},{name:'青岛',value:'SC4668,11:05'},
[{name:'上海'},{name:'青岛',value:'CA4668,11:05'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'长春',value: 29},
{name:'大连',value: 37},
{name:'重庆',value: 49},
{name:'朝阳',value:  1},
{name:'重庆',value: 49},
{name:'长春',value: 29},
{name:'赤峰',value:  1},
{name:'绵阳',value:  3},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'石家庄',value:  8},
{name:'石家庄',value:  8},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'青岛',value: 53},
{name:'青岛',value: 53}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(11:15-11:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'MF4176,11:15'},
[{name:'上海'},{name:'沈阳',value:'MU3662,11:15'},
[{name:'上海'},{name:'沈阳',value:'CZ6504,11:15'},
[{name:'上海'},{name:'银川',value:'CZ9394,11:15'},
[{name:'上海'},{name:'西安',value:'MU4408,11:20'},
[{name:'上海'},{name:'西安',value:'CZ6616,11:20'},
[{name:'上海'},{name:'西安',value:'MF4994,11:20'},
[{name:'上海'},{name:'福州',value:'FU6520,11:25'},
[{name:'上海'},{name:'湛江',value:'FM9359,11:25'},
[{name:'上海'},{name:'兰州',value:'CZ9120,11:25'},
[{name:'上海'},{name:'青岛',value:'HO1727,11:15'},
[{name:'上海'},{name:'青岛',value:'MU5513,11:15'},
[{name:'上海'},{name:'青岛',value:'CZ9516,11:15'},
[{name:'上海'},{name:'深圳',value:'9C8881,11:25'},
[{name:'上海'},{name:'厦门',value:'CZ5414,11:20'},
[{name:'上海'},{name:'厦门',value:'MF8512,11:20'},
[{name:'上海'},{name:'厦门',value:'MU8514,11:20'},
[{name:'上海'},{name:'厦门',value:'NS8512,11:20'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'银川',value:  9},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'福州',value: 35},
{name:'湛江',value:  4},
{name:'兰州',value: 13},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'深圳',value:122},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(11:30-11:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'哈尔滨',value:'MU3630,11:30'},
[{name:'上海'},{name:'哈尔滨',value:'MF1980,11:30'},
[{name:'上海'},{name:'哈尔滨',value:'CZ6258,11:30'},
[{name:'上海'},{name:'舟山',value:'CZ9352,11:35'},
[{name:'上海'},{name:'长春',value:'MU3686,11:35'},
[{name:'上海'},{name:'长春',value:'CZ6544,11:35'},
[{name:'上海'},{name:'长春',value:'MF4210,11:35'},
[{name:'上海'},{name:'晋江',value:'CZ5472,11:35'},
[{name:'上海'},{name:'晋江',value:'MU9088,11:35'},
[{name:'上海'},{name:'晋江',value:'MF8582,11:35'},
[{name:'上海'},{name:'晋江',value:'NS8582,11:35'},
[{name:'上海'},{name:'广州',value:'CZ9412,11:30'},
[{name:'上海'},{name:'广州',value:'MU5305,11:30'},
[{name:'上海'},{name:'北京',value:'HU7606,11:30'},
[{name:'上海'},{name:'昆明',value:'CZ9680,11:35'},
[{name:'上海'},{name:'昆明',value:'MU5814,11:35'},
[{name:'上海'},{name:'腾冲',value:'MU5814,11:35'},
[{name:'上海'},{name:'腾冲',value:'CZ9680,11:35'},
[{name:'上海'},{name:'重庆',value:'CA4544,11:40'},
[{name:'上海'},{name:'重庆',value:'SC4544,11:40'},
[{name:'上海'},{name:'重庆',value:'ZH4544,11:40'},
[{name:'上海'},{name:'重庆',value:'HO1907,11:40'},
[{name:'上海'},{name:'重庆',value:'G54068,11:40'},
[{name:'上海'},{name:'重庆',value:'TV6602,11:40'},
[{name:'上海'},{name:'贵阳',value:'MU3344,11:40'},
[{name:'上海'},{name:'贵阳',value:'CZ3652,11:40'},
[{name:'上海'},{name:'贵阳',value:'MF1530,11:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'哈尔滨',value:29},
{name:'哈尔滨',value:29},
{name:'哈尔滨',value:29},
{name:'舟山',value: 1},
{name:'长春',value:29},
{name:'长春',value:29},
{name:'长春',value:29},
{name:'晋江',value:15},
{name:'晋江',value:15},
{name:'晋江',value:15},
{name:'晋江',value:15},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'北京',value:98},
{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'腾冲',value: 2},
{name:'腾冲',value: 2},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'贵阳',value:26},
{name:'贵阳',value:26},
{name:'贵阳',value:26}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(11:45-12:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'重庆',value:'CZ8108,11:45'},
[{name:'上海'},{name:'成都',value:'3U8962,11:45'},
[{name:'上海'},{name:'厦门',value:'9C8837,11:45'},
[{name:'上海'},{name:'广州',value:'MU3264,11:45'},
[{name:'上海'},{name:'广州',value:'CZ3524,11:45'},
[{name:'上海'},{name:'广州',value:'MF1404,11:45'},
[{name:'上海'},{name:'北京',value:'MF1764,11:50'},
[{name:'上海'},{name:'北京',value:'CZ3908,11:50'},
[{name:'上海'},{name:'北京',value:'MU3492,11:50'},
[{name:'上海'},{name:'昆明',value:'MU5897,11:50'},
[{name:'上海'},{name:'昆明',value:'MU5971,11:50'},
[{name:'上海'},{name:'昆明',value:'MU5802,11:50'},
[{name:'上海'},{name:'普洱',value:'MU5897,11:50'},
[{name:'上海'},{name:'芒市',value:'MU5971,11:50'},
[{name:'上海'},{name:'安庆',value:'MU2219,11:55'},
[{name:'上海'},{name:'长沙',value:'MU9391,11:55'},
[{name:'上海'},{name:'长沙',value:'FM9391,11:55'},
[{name:'上海'},{name:'北京',value:'HO1902,11:55'},
[{name:'上海'},{name:'北京',value:'ZH1502,11:55'},
[{name:'上海'},{name:'北京',value:'CA1502,11:55'},
[{name:'上海'},{name:'烟台',value:'FM9225,11:50'},
[{name:'上海'},{name:'烟台',value:'MU9225,11:50'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'重庆',value:49},
{name:'成都',value:57},
{name:'厦门',value:71},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'普洱',value: 1},
{name:'芒市',value: 1},
{name:'安庆',value: 1},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'烟台',value:19},
{name:'烟台',value:19}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(12:00-12:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'成都',value:'CZ9477,12:00'},
[{name:'上海'},{name:'庆阳',value:'9C8781,12:00'},
[{name:'上海'},{name:'青岛',value:'CA4602,12:05'},
[{name:'上海'},{name:'青岛',value:'SC4602,12:05'},
[{name:'上海'},{name:'兰州',value:'9C9000,12:05'},
[{name:'上海'},{name:'珠海',value:'MF1620,12:10'},
[{name:'上海'},{name:'珠海',value:'MU3404,12:10'},
[{name:'上海'},{name:'珠海',value:'CZ3752,12:10'},
[{name:'上海'},{name:'海口',value:'CZ3516,12:10'},
[{name:'上海'},{name:'海口',value:'MF1396,12:10'},
[{name:'上海'},{name:'海口',value:'MU3256,12:10'},
[{name:'上海'},{name:'北京',value:'MU5109,12:00'},
[{name:'上海'},{name:'北京',value:'CZ9278,12:00'},
[{name:'上海'},{name:'昆明',value:'MU4005,12:00'},
[{name:'上海'},{name:'昆明',value:'HO1099,12:00'},
[{name:'上海'},{name:'昆明',value:'ZH5029,12:00'},
[{name:'上海'},{name:'深圳',value:'CZ9439,12:05'},
[{name:'上海'},{name:'深圳',value:'MU5341,12:05'},
[{name:'上海'},{name:'天津',value:'MU5143,12:10'},
[{name:'上海'},{name:'西安',value:'MU2154,12:10'},
[{name:'上海'},{name:'西安',value:'CZ9042,12:10'},
[{name:'上海'},{name:'嘉峪关',value:'CZ9042,12:10'},
[{name:'上海'},{name:'嘉峪关',value:'MU2154,12:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'成都',value: 57},
{name:'庆阳',value:  1},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'兰州',value: 13},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'海口',value: 16},
{name:'海口',value: 16},
{name:'海口',value: 16},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'天津',value: 29},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'嘉峪关',value:  2},
{name:'嘉峪关',value:  2}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(12:15-12:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'威海',value:'GS6470,12:15'},
[{name:'上海'},{name:'珠海',value:'FM9057,12:15'},
[{name:'上海'},{name:'大连',value:'GS6470,12:15'},
[{name:'上海'},{name:'三亚',value:'CZ6754,12:20'},
[{name:'上海'},{name:'三亚',value:'MF4390,12:20'},
[{name:'上海'},{name:'三亚',value:'MU4460,12:20'},
[{name:'上海'},{name:'牡丹江',value:'MU4663,12:25'},
[{name:'上海'},{name:'牡丹江',value:'MF1497,12:25'},
[{name:'上海'},{name:'牡丹江',value:'CZ3613,12:25'},
[{name:'上海'},{name:'广州',value:'ZH1837,12:15'},
[{name:'上海'},{name:'广州',value:'SC1837,12:15'},
[{name:'上海'},{name:'广州',value:'CA1837,12:15'},
[{name:'上海'},{name:'厦门',value:'MF8524,12:25'},
[{name:'上海'},{name:'厦门',value:'NS8524,12:25'},
[{name:'上海'},{name:'厦门',value:'CZ5422,12:25'},
[{name:'上海'},{name:'厦门',value:'MU8517,12:25'},
[{name:'上海'},{name:'石家庄',value:'NS3236,12:25'},
[{name:'上海'},{name:'深圳',value:'MF1432,12:25'},
[{name:'上海'},{name:'深圳',value:'MU3290,12:25'},
[{name:'上海'},{name:'深圳',value:'CZ3554,12:25'},
[{name:'上海'},{name:'北京',value:'HU7608,12:20'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'威海',value:  7},
{name:'珠海',value: 18},
{name:'大连',value: 37},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'牡丹江',value:  4},
{name:'牡丹江',value:  4},
{name:'牡丹江',value:  4},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'石家庄',value:  8},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'北京',value: 98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(12:30-12:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'重庆',value:'CA158,12:30'},
[{name:'上海'},{name:'重庆',value:'G54002,12:30'},
[{name:'上海'},{name:'晋江',value:'PN6308,12:40'},
[{name:'上海'},{name:'青岛',value:'FM9169,12:30'},
[{name:'上海'},{name:'青岛',value:'MU9169,12:30'},
[{name:'上海'},{name:'宜昌',value:'MU2676,12:30'},
[{name:'上海'},{name:'佳木斯',value:'MU9169,12:30'},
[{name:'上海'},{name:'佳木斯',value:'FM9169,12:30'},
[{name:'上海'},{name:'广州',value:'CZ9414,12:35'},
[{name:'上海'},{name:'广州',value:'MU5307,12:35'},
[{name:'上海'},{name:'三亚',value:'MU3987,12:35'},
[{name:'上海'},{name:'三亚',value:'HO1129,12:35'},
[{name:'上海'},{name:'福州',value:'MF8552,12:40'},
[{name:'上海'},{name:'福州',value:'NS8552,12:40'},
[{name:'上海'},{name:'福州',value:'CZ5446,12:40'},
[{name:'上海'},{name:'福州',value:'MU8530,12:40'},
[{name:'上海'},{name:'郑州',value:'MU9325,12:40'},
[{name:'上海'},{name:'郑州',value:'FM9325,12:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'晋江',value:15},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'宜昌',value: 2},
{name:'佳木斯',value: 2},
{name:'佳木斯',value: 2},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'郑州',value:32},
{name:'郑州',value:32}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(12:45-13:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'广州',value:'CZ380,12:45'},
[{name:'上海'},{name:'沈阳',value:'9C8849,12:50'},
[{name:'上海'},{name:'大连',value:'HO1165,12:55'},
[{name:'上海'},{name:'长沙',value:'CA3217,12:45'},
[{name:'上海'},{name:'长沙',value:'ZH5005,12:45'},
[{name:'上海'},{name:'长沙',value:'MU4035,12:45'},
[{name:'上海'},{name:'长沙',value:'HO1071,12:45'},
[{name:'上海'},{name:'丽江',value:'ZH5005,12:45'},
[{name:'上海'},{name:'丽江',value:'MU4035,12:45'},
[{name:'上海'},{name:'丽江',value:'HO1071,12:45'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU9219,12:45'},
[{name:'上海'},{name:'乌鲁木齐',value:'FM9219,12:45'},
[{name:'上海'},{name:'广州',value:'9C8855,12:50'},
[{name:'上海'},{name:'重庆',value:'MU5427,12:50'},
[{name:'上海'},{name:'重庆',value:'HO1791,12:50'},
[{name:'上海'},{name:'重庆',value:'CZ9828,12:50'},
[{name:'上海'},{name:'北京',value:'CA1520,12:55'},
[{name:'上海'},{name:'北京',value:'ZH1520,12:55'},
[{name:'上海'},{name:'西宁',value:'MU2362,12:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'广州',value:87},
{name:'沈阳',value:32},
{name:'大连',value:37},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'丽江',value: 9},
{name:'丽江',value: 9},
{name:'丽江',value: 9},
{name:'乌鲁木齐',value:30},
{name:'乌鲁木齐',value:30},
{name:'广州',value:87},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'西宁',value: 7}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(13:00-13:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'临沂',value:'MU5551,13:10'},
[{name:'上海'},{name:'鞍山',value:'FM9197,13:00'},
[{name:'上海'},{name:'九寨沟',value:'CZ9809,13:05'},
[{name:'上海'},{name:'大连',value:'MF4200,13:10'},
[{name:'上海'},{name:'大连',value:'MU3680,13:10'},
[{name:'上海'},{name:'大连',value:'CZ6534,13:10'},
[{name:'上海'},{name:'揭阳',value:'MU5327,13:00'},
[{name:'上海'},{name:'揭阳',value:'CZ9430,13:00'},
[{name:'上海'},{name:'北京',value:'MU5111,13:00'},
[{name:'上海'},{name:'北京',value:'CZ9280,13:00'},
[{name:'上海'},{name:'乌鲁木齐',value:'HO1257,13:00'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU4017,13:00'},
[{name:'上海'},{name:'盐城',value:'MU2254,13:10'},
[{name:'上海'},{name:'天津',value:'MU9585,13:10'},
[{name:'上海'},{name:'天津',value:'MU5189,13:10'},
[{name:'上海'},{name:'西安',value:'MU2254,13:10'},
[{name:'上海'},{name:'乌兰浩特',value:'MU9585,13:10'},
[{name:'上海'},{name:'深圳',value:'MU5343,13:05'},
[{name:'上海'},{name:'深圳',value:'CZ9441,13:05'},
[{name:'上海'},{name:'武汉',value:'MU2508,13:10'},
[{name:'上海'},{name:'武汉',value:'HO1755,13:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'临沂',value:  4},
{name:'鞍山',value:  1},
{name:'九寨沟',value:  1},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'揭阳',value: 13},
{name:'揭阳',value: 13},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'盐城',value:  1},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'西安',value: 46},
{name:'乌兰浩特',value:  1},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'武汉',value: 29},
{name:'武汉',value: 29}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(13:15-13:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'梅县',value:'GS6472,13:15'},
[{name:'上海'},{name:'沈阳',value:'CZ6506,13:15'},
[{name:'上海'},{name:'沈阳',value:'MF4178,13:15'},
[{name:'上海'},{name:'沈阳',value:'MU3664,13:15'},
[{name:'上海'},{name:'海口',value:'GS6472,13:15'},
[{name:'上海'},{name:'深圳',value:'CZ6752,13:25'},
[{name:'上海'},{name:'深圳',value:'MU4458,13:25'},
[{name:'上海'},{name:'深圳',value:'MF4388,13:25'},
[{name:'上海'},{name:'武汉',value:'MU2469,13:15'},
[{name:'上海'},{name:'青岛',value:'CA8744,13:15'},
[{name:'上海'},{name:'武汉',value:'CZ9823,13:15'},
[{name:'上海'},{name:'青岛',value:'SC8744,13:15'},
[{name:'上海'},{name:'大理',value:'MU9750,13:15'},
[{name:'上海'},{name:'恩施',value:'CZ9823,13:15'},
[{name:'上海'},{name:'恩施',value:'MU2469,13:15'},
[{name:'上海'},{name:'西安',value:'9C8947,13:20'},
[{name:'上海'},{name:'深圳',value:'9C8775,13:20'},
[{name:'上海'},{name:'南宁',value:'MU9337,13:25'},
[{name:'上海'},{name:'南宁',value:'FM9337,13:25'},
[{name:'上海'},{name:'乌鲁木齐',value:'9C8865,13:25'},
[{name:'上海'},{name:'太原',value:'HO1723,13:25'},
[{name:'上海'},{name:'太原',value:'MU2403,13:25'},
[{name:'上海'},{name:'太原',value:'CZ9145,13:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'梅县',value:  1},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'海口',value: 16},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'武汉',value: 29},
{name:'青岛',value: 53},
{name:'武汉',value: 29},
{name:'青岛',value: 53},
{name:'大理',value:  1},
{name:'恩施',value:  2},
{name:'恩施',value:  2},
{name:'西安',value: 46},
{name:'深圳',value:122},
{name:'南宁',value: 22},
{name:'南宁',value: 22},
{name:'乌鲁木齐',value: 30},
{name:'太原',value: 20},
{name:'太原',value: 20},
{name:'太原',value: 20}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(13:30-13:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'HO1183,13:30'},
[{name:'上海'},{name:'哈尔滨',value:'HO1169,13:30'},
[{name:'上海'},{name:'成都',value:'CZ3359,13:35'},
[{name:'上海'},{name:'成都',value:'MF4871,13:35'},
[{name:'上海'},{name:'延吉',value:'CZ9582,13:40'},
[{name:'上海'},{name:'昆明',value:'9C8927,13:40'},
[{name:'上海'},{name:'厦门',value:'MU5565,13:30'},
[{name:'上海'},{name:'北京',value:'MU9103,13:30'},
[{name:'上海'},{name:'北京',value:'FM9103,13:30'},
[{name:'上海'},{name:'广州',value:'CZ9416,13:30'},
[{name:'上海'},{name:'广州',value:'MU5309,13:30'},
[{name:'上海'},{name:'厦门',value:'MU8520,13:35'},
[{name:'上海'},{name:'厦门',value:'MF8568,13:35'},
[{name:'上海'},{name:'厦门',value:'NS8568,13:35'},
[{name:'上海'},{name:'厦门',value:'CZ5460,13:35'},
[{name:'上海'},{name:'南宁',value:'CZ3262,13:40'},
[{name:'上海'},{name:'南宁',value:'MU3103,13:40'},
[{name:'上海'},{name:'南宁',value:'MF1154,13:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value:32},
{name:'哈尔滨',value:29},
{name:'成都',value:57},
{name:'成都',value:57},
{name:'延吉',value: 4},
{name:'昆明',value:45},
{name:'厦门',value:71},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'南宁',value:22},
{name:'南宁',value:22},
{name:'南宁',value:22}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(13:45-14:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'青岛',value:'HO1081,13:45'},
[{name:'上海'},{name:'张家界',value:'HO1017,13:45'},
[{name:'上海'},{name:'长白山',value:'HO1081,13:45'},
[{name:'上海'},{name:'昆明',value:'HO1017,13:45'},
[{name:'上海'},{name:'西安',value:'HO1219,13:50'},
[{name:'上海'},{name:'重庆',value:'9C8867,13:50'},
[{name:'上海'},{name:'西宁',value:'HO1219,13:50'},
[{name:'上海'},{name:'哈尔滨',value:'MU3614,13:55'},
[{name:'上海'},{name:'哈尔滨',value:'MF4922,13:55'},
[{name:'上海'},{name:'哈尔滨',value:'CZ6210,13:55'},
[{name:'上海'},{name:'广州',value:'MF1412,13:45'},
[{name:'上海'},{name:'广州',value:'MU3272,13:45'},
[{name:'上海'},{name:'广州',value:'CZ3532,13:45'},
[{name:'上海'},{name:'北京',value:'ZH1532,13:55'},
[{name:'上海'},{name:'北京',value:'CA1532,13:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'青岛',value:53},
{name:'张家界',value: 7},
{name:'长白山',value: 5},
{name:'昆明',value:45},
{name:'西安',value:46},
{name:'重庆',value:49},
{name:'西宁',value: 7},
{name:'哈尔滨',value:29},
{name:'哈尔滨',value:29},
{name:'哈尔滨',value:29},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'北京',value:98},
{name:'北京',value:98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(14:00-14:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'CZ9554,14:00'},
[{name:'上海'},{name:'海拉尔',value:'HO1037,14:00'},
[{name:'上海'},{name:'哈尔滨',value:'3U8306,14:05'},
[{name:'上海'},{name:'湛江',value:'9C8895,14:10'},
[{name:'上海'},{name:'温州',value:'CA3219,14:00'},
[{name:'上海'},{name:'温州',value:'HO1101,14:00'},
[{name:'上海'},{name:'温州',value:'MU3939,14:00'},
[{name:'上海'},{name:'长沙',value:'ZH5003,14:00'},
[{name:'上海'},{name:'长沙',value:'HO1125,14:00'},
[{name:'上海'},{name:'长沙',value:'MU3973,14:00'},
[{name:'上海'},{name:'长沙',value:'CA3215,14:00'},
[{name:'上海'},{name:'北京',value:'MU5113,14:00'},
[{name:'上海'},{name:'北京',value:'CZ9282,14:00'},
[{name:'上海'},{name:'宜春',value:'8L9888,14:05'},
[{name:'上海'},{name:'福州',value:'CZ5436,14:05'},
[{name:'上海'},{name:'福州',value:'MU8528,14:05'},
[{name:'上海'},{name:'福州',value:'MF8542,14:05'},
[{name:'上海'},{name:'福州',value:'NS8542,14:05'},
[{name:'上海'},{name:'长沙',value:'MU5271,14:05'},
[{name:'上海'},{name:'长沙',value:'HO1757,14:05'},
[{name:'上海'},{name:'长沙',value:'CZ9779,14:05'},
[{name:'上海'},{name:'深圳',value:'MU5345,14:05'},
[{name:'上海'},{name:'深圳',value:'CZ9443,14:05'},
[{name:'上海'},{name:'昆明',value:'8L9888,14:05'},
[{name:'上海'},{name:'青岛',value:'CZ9518,14:10'},
[{name:'上海'},{name:'青岛',value:'HO1729,14:10'},
[{name:'上海'},{name:'青岛',value:'MU5515,14:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value: 32},
{name:'海拉尔',value:  4},
{name:'哈尔滨',value: 29},
{name:'湛江',value:  4},
{name:'温州',value: 10},
{name:'温州',value: 10},
{name:'温州',value: 10},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'宜春',value:  1},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'昆明',value: 45},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'青岛',value: 53}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(14:15-14:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'武汉',value:'CZ9196,14:15'},
[{name:'上海'},{name:'桂林',value:'FM9377,14:20'},
[{name:'上海'},{name:'哈尔滨',value:'HO1012,14:20'},
[{name:'上海'},{name:'长春',value:'CZ9570,14:25'},
[{name:'上海'},{name:'深圳',value:'CZ3832,14:25'},
[{name:'上海'},{name:'深圳',value:'MU3448,14:25'},
[{name:'上海'},{name:'深圳',value:'MF1692,14:25'},
[{name:'上海'},{name:'成都',value:'SK8673,14:25'},
[{name:'上海'},{name:'成都',value:'CA4504,14:25'},
[{name:'上海'},{name:'成都',value:'TV6508,14:25'},
[{name:'上海'},{name:'成都',value:'ZH4504,14:25'},
[{name:'上海'},{name:'厦门',value:'9C8807,14:15'},
[{name:'上海'},{name:'乌鲁木齐',value:'MF4616,14:15'},
[{name:'上海'},{name:'乌鲁木齐',value:'CZ6996,14:15'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU4602,14:15'},
[{name:'上海'},{name:'黄山',value:'FM9267,14:20'},
[{name:'上海'},{name:'黄山',value:'MU9267,14:20'},
[{name:'上海'},{name:'常德',value:'9C8829,14:20'},
[{name:'上海'},{name:'重庆',value:'MU9267,14:20'},
[{name:'上海'},{name:'重庆',value:'FM9267,14:20'},
[{name:'上海'},{name:'昆明',value:'9C8829,14:20'},
[{name:'上海'},{name:'天津',value:'MU9129,14:25'},
[{name:'上海'},{name:'天津',value:'FM9129,14:25'},
[{name:'上海'},{name:'深圳',value:'MU3963,14:25'},
[{name:'上海'},{name:'深圳',value:'HO1201,14:25'},
[{name:'上海'},{name:'深圳',value:'ZH5039,14:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'武汉',value: 29},
{name:'桂林',value: 16},
{name:'哈尔滨',value: 29},
{name:'长春',value: 29},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'厦门',value: 71},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'黄山',value:  2},
{name:'黄山',value:  2},
{name:'常德',value:  1},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'昆明',value: 45},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(14:30-14:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'9C8933,14:40'},
[{name:'上海'},{name:'郑州',value:'MU9329,14:30'},
[{name:'上海'},{name:'郑州',value:'FM9329,14:30'},
[{name:'上海'},{name:'北京',value:'MU5155,14:30'},
[{name:'上海'},{name:'北京',value:'CZ9314,14:30'},
[{name:'上海'},{name:'青岛',value:'SC4664,14:35'},
[{name:'上海'},{name:'青岛',value:'CA4664,14:35'},
[{name:'上海'},{name:'广州',value:'MU5311,14:40'},
[{name:'上海'},{name:'广州',value:'HO1761,14:40'},
[{name:'上海'},{name:'广州',value:'CZ9418,14:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value:32},
{name:'郑州',value:32},
{name:'郑州',value:32},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(14:45-15:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'北海',value:'9C8967,14:50'},
[{name:'上海'},{name:'大连',value:'9C8591,14:55'},
[{name:'上海'},{name:'长春',value:'CZ8359,14:55'},
[{name:'上海'},{name:'长白山',value:'CZ8359,14:55'},
[{name:'上海'},{name:'烟台',value:'MU5545,14:45'},
[{name:'上海'},{name:'烟台',value:'CZ9791,14:45'},
[{name:'上海'},{name:'广州',value:'CZ3538,14:45'},
[{name:'上海'},{name:'广州',value:'MF1418,14:45'},
[{name:'上海'},{name:'广州',value:'MU3278,14:45'},
[{name:'上海'},{name:'成都',value:'CA3982,14:50'},
[{name:'上海'},{name:'成都',value:'TV9882,14:50'},
[{name:'上海'},{name:'拉萨',value:'CA3982,14:50'},
[{name:'上海'},{name:'拉萨',value:'TV9882,14:50'},
[{name:'上海'},{name:'烟台',value:'SC4864,14:55'},
[{name:'上海'},{name:'烟台',value:'CA4864,14:55'},
[{name:'上海'},{name:'北京',value:'ZH1558,14:55'},
[{name:'上海'},{name:'北京',value:'CA1558,14:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'北海',value: 6},
{name:'大连',value:37},
{name:'长春',value:29},
{name:'长白山',value: 5},
{name:'烟台',value:19},
{name:'烟台',value:19},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'成都',value:57},
{name:'成都',value:57},
{name:'拉萨',value: 5},
{name:'拉萨',value: 5},
{name:'烟台',value:19},
{name:'烟台',value:19},
{name:'北京',value:98},
{name:'北京',value:98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(15:00-15:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'北海',value:'HO1186,15:00'},
[{name:'上海'},{name:'北海',value:'HO1175,15:00'},
[{name:'上海'},{name:'青岛',value:'HO1115,15:05'},
[{name:'上海'},{name:'大连',value:'CZ6524,15:10'},
[{name:'上海'},{name:'大连',value:'MF4192,15:10'},
[{name:'上海'},{name:'大连',value:'MU3676,15:10'},
[{name:'上海'},{name:'成都',value:'3U8964,15:10'},
[{name:'上海'},{name:'北京',value:'MU5115,15:00'},
[{name:'上海'},{name:'北京',value:'NS8177,15:00'},
[{name:'上海'},{name:'北京',value:'MU8570,15:00'},
[{name:'上海'},{name:'北京',value:'CZ5137,15:00'},
[{name:'上海'},{name:'北京',value:'MF8177,15:00'},
[{name:'上海'},{name:'北京',value:'CZ9284,15:00'},
[{name:'上海'},{name:'西安',value:'ZH5049,15:00'},
[{name:'上海'},{name:'西安',value:'MU4011,15:00'},
[{name:'上海'},{name:'西安',value:'HO1215,15:00'},
[{name:'上海'},{name:'三亚',value:'MU9517,15:00'},
[{name:'上海'},{name:'三亚',value:'FM9517,15:00'},
[{name:'上海'},{name:'厦门',value:'CZ5420,15:05'},
[{name:'上海'},{name:'厦门',value:'MU8516,15:05'},
[{name:'上海'},{name:'厦门',value:'MF8522,15:05'},
[{name:'上海'},{name:'厦门',value:'NS8522,15:05'},
[{name:'上海'},{name:'深圳',value:'CA3343,15:05'},
[{name:'上海'},{name:'深圳',value:'HO1970,15:05'},
[{name:'上海'},{name:'深圳',value:'ZH9814,15:05'},
[{name:'上海'},{name:'深圳',value:'KY9814,15:05'},
[{name:'上海'},{name:'重庆',value:'MU5429,15:05'},
[{name:'上海'},{name:'重庆',value:'CZ9830,15:05'},
[{name:'上海'},{name:'成都',value:'FM9403,15:05'},
[{name:'上海'},{name:'成都',value:'MU9403,15:05'},
[{name:'上海'},{name:'西安',value:'JR2160,15:10'},
[{name:'上海'},{name:'西安',value:'MU2160,15:10'},
[{name:'上海'},{name:'绵阳',value:'9C8901,15:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'北海',value:  6},
{name:'北海',value:  6},
{name:'青岛',value: 53},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'成都',value: 57},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'绵阳',value:  3}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(15:15-15:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'宜昌',value:'FM9365,15:20'},
[{name:'上海'},{name:'哈尔滨',value:'9C8869,15:20'},
[{name:'上海'},{name:'兰州',value:'CZ9770,15:25'},
[{name:'上海'},{name:'厦门',value:'FM9373,15:15'},
[{name:'上海'},{name:'厦门',value:'MU9373,15:15'},
[{name:'上海'},{name:'晋江',value:'9C8817,15:15'},
[{name:'上海'},{name:'长沙',value:'MU3529,15:20'},
[{name:'上海'},{name:'长沙',value:'CZ3968,15:20'},
[{name:'上海'},{name:'长沙',value:'MF1820,15:20'},
[{name:'上海'},{name:'深圳',value:'MU5347,15:20'},
[{name:'上海'},{name:'深圳',value:'CZ9445,15:20'},
[{name:'上海'},{name:'深圳',value:'HO1751,15:20'},
[{name:'上海'},{name:'贵阳',value:'FM9457,15:20'},
[{name:'上海'},{name:'贵阳',value:'MU9457,15:20'},
[{name:'上海'},{name:'郑州',value:'MU5385,15:25'},
[{name:'上海'},{name:'郑州',value:'CZ9463,15:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'宜昌',value:  2},
{name:'哈尔滨',value: 29},
{name:'兰州',value: 13},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'晋江',value: 15},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'贵阳',value: 26},
{name:'贵阳',value: 26},
{name:'郑州',value: 32},
{name:'郑州',value: 32}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(15:30-15:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'FM9183,15:30'},
[{name:'上海'},{name:'兰州',value:'HU7736,15:30'},
[{name:'上海'},{name:'昆明',value:'MF4809,15:35'},
[{name:'上海'},{name:'昆明',value:'CZ6799,15:35'},
[{name:'上海'},{name:'运城',value:'FM9145,15:40'},
[{name:'上海'},{name:'包头',value:'HO1057,15:40'},
[{name:'上海'},{name:'郑州',value:'MU3315,15:35'},
[{name:'上海'},{name:'郑州',value:'MF1478,15:35'},
[{name:'上海'},{name:'郑州',value:'CZ3594,15:35'},
[{name:'上海'},{name:'长沙',value:'FM9361,15:40'},
[{name:'上海'},{name:'长沙',value:'MU9361,15:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value:32},
{name:'兰州',value:13},
{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'运城',value: 1},
{name:'包头',value: 4},
{name:'郑州',value:32},
{name:'郑州',value:32},
{name:'郑州',value:32},
{name:'长沙',value:37},
{name:'长沙',value:37}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(15:45-16:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'呼和浩特',value:'GS7790,15:45'},
[{name:'上海'},{name:'呼和浩特',value:'HU7790,15:45'},
[{name:'上海'},{name:'三亚',value:'MU9519,15:45'},
[{name:'上海'},{name:'三亚',value:'FM9519,15:45'},
[{name:'上海'},{name:'乌鲁木齐',value:'HU7790,15:45'},
[{name:'上海'},{name:'乌鲁木齐',value:'GS7790,15:45'},
[{name:'上海'},{name:'长春',value:'9C8935,15:50'},
[{name:'上海'},{name:'桂林',value:'FM9369,15:55'},
[{name:'上海'},{name:'大同',value:'CZ9378,15:55'},
[{name:'上海'},{name:'丽江',value:'MU5867,15:50'},
[{name:'上海'},{name:'广州',value:'FM9307,15:55'},
[{name:'上海'},{name:'广州',value:'MU9307,15:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'呼和浩特',value:10},
{name:'呼和浩特',value:10},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'乌鲁木齐',value:30},
{name:'乌鲁木齐',value:30},
{name:'长春',value:29},
{name:'桂林',value:16},
{name:'大同',value: 1},
{name:'丽江',value: 9},
{name:'广州',value:87},
{name:'广州',value:87}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(16:00-16:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'哈尔滨',value:'HO1167,16:00'},
[{name:'上海'},{name:'哈尔滨',value:'MU3901,16:00'},
[{name:'上海'},{name:'哈尔滨',value:'ZH5021,16:00'},
[{name:'上海'},{name:'贵阳',value:'HO1143,16:00'},
[{name:'上海'},{name:'海口',value:'CZ9783,16:05'},
[{name:'上海'},{name:'海口',value:'MU5371,16:05'},
[{name:'上海'},{name:'银川',value:'MU9409,16:05'},
[{name:'上海'},{name:'银川',value:'FM9409,16:05'},
[{name:'上海'},{name:'石家庄',value:'KN2366,16:10'},
[{name:'上海'},{name:'石家庄',value:'MU9012,16:10'},
[{name:'上海'},{name:'长春',value:'MU9179,16:10'},
[{name:'上海'},{name:'长春',value:'FM9179,16:10'},
[{name:'上海'},{name:'深圳',value:'CZ9449,16:10'},
[{name:'上海'},{name:'深圳',value:'MU5351,16:10'},
[{name:'上海'},{name:'天津',value:'MU9063,16:00'},
[{name:'上海'},{name:'天津',value:'FM9063,16:00'},
[{name:'上海'},{name:'北京',value:'CZ9286,16:00'},
[{name:'上海'},{name:'北京',value:'MU5117,16:00'},
[{name:'上海'},{name:'成都',value:'MU5409,16:00'},
[{name:'上海'},{name:'成都',value:'HO1771,16:00'},
[{name:'上海'},{name:'南昌',value:'MU5559,16:05'},
[{name:'上海'},{name:'南昌',value:'CZ9540,16:05'},
[{name:'上海'},{name:'深圳',value:'MU5349,16:05'},
[{name:'上海'},{name:'深圳',value:'CZ9447,16:05'},
[{name:'上海'},{name:'贵阳',value:'MU3348,16:05'},
[{name:'上海'},{name:'贵阳',value:'MF1536,16:05'},
[{name:'上海'},{name:'贵阳',value:'CZ3658,16:05'},
[{name:'上海'},{name:'郑州',value:'FM9375,16:10'},
[{name:'上海'},{name:'郑州',value:'MU9375,16:10'},
[{name:'上海'},{name:'昆明',value:'MU5812,16:10'},
[{name:'上海'},{name:'昆明',value:'CZ9678,16:10'},
[{name:'上海'},{name:'迪庆',value:'MU5812,16:10'},
[{name:'上海'},{name:'迪庆',value:'CZ9678,16:10'},
[{name:'上海'},{name:'乌鲁木齐',value:'CZ6982,16:10'},
[{name:'上海'},{name:'乌鲁木齐',value:'MF4828,16:10'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU4596,16:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'贵阳',value: 26},
{name:'海口',value: 16},
{name:'海口',value: 16},
{name:'银川',value:  9},
{name:'银川',value:  9},
{name:'石家庄',value:  8},
{name:'石家庄',value:  8},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'南昌',value: 12},
{name:'南昌',value: 12},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'贵阳',value: 26},
{name:'贵阳',value: 26},
{name:'贵阳',value: 26},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'迪庆',value:  2},
{name:'迪庆',value:  2},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(16:15-16:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'北京',value:'CA1884,16:15'},
[{name:'上海'},{name:'北京',value:'ZH1884,16:15'},
[{name:'上海'},{name:'柳州',value:'CZ9354,16:15'},
[{name:'上海'},{name:'柳州',value:'MU5207,16:15'},
[{name:'上海'},{name:'三亚',value:'HO1769,16:15'},
[{name:'上海'},{name:'三亚',value:'MU5325,16:15'},
[{name:'上海'},{name:'三亚',value:'CZ9428,16:15'},
[{name:'上海'},{name:'长沙',value:'MU5363,16:20'},
[{name:'上海'},{name:'长沙',value:'CZ9459,16:20'},
[{name:'上海'},{name:'广州',value:'CZ9420,16:20'},
[{name:'上海'},{name:'广州',value:'MU5313,16:20'},
[{name:'上海'},{name:'广州',value:'QF4027,16:20'},
[{name:'上海'},{name:'兰州',value:'ZH1939,16:20'},
[{name:'上海'},{name:'兰州',value:'CA1939,16:20'},
[{name:'上海'},{name:'福州',value:'MF3117,16:25'},
[{name:'上海'},{name:'福州',value:'MU5631,16:25'},
[{name:'上海'},{name:'揭阳',value:'MU9299,16:25'},
[{name:'上海'},{name:'厦门',value:'FM9527,16:25'},
[{name:'上海'},{name:'揭阳',value:'FM9299,16:25'},
[{name:'上海'},{name:'厦门',value:'MU9527,16:25'},
[{name:'上海'},{name:'沈阳',value:'CZ6240,16:25'},
[{name:'上海'},{name:'沈阳',value:'MF4706,16:25'},
[{name:'上海'},{name:'沈阳',value:'MU3624,16:25'},
[{name:'上海'},{name:'西安',value:'MU9207,16:15'},
[{name:'上海'},{name:'西安',value:'FM9207,16:15'},
[{name:'上海'},{name:'南宁',value:'CZ9471,16:15'},
[{name:'上海'},{name:'南宁',value:'MU5397,16:15'},
[{name:'上海'},{name:'南宁',value:'HO1743,16:15'},
[{name:'上海'},{name:'青岛',value:'CA4670,16:20'},
[{name:'上海'},{name:'青岛',value:'SC4670,16:20'},
[{name:'上海'},{name:'沈阳',value:'FM9185,16:20'},
[{name:'上海'},{name:'沈阳',value:'MU9185,16:20'},
[{name:'上海'},{name:'深圳',value:'CZ3562,16:20'},
[{name:'上海'},{name:'深圳',value:'MU3296,16:20'},
[{name:'上海'},{name:'深圳',value:'MF1438,16:20'},
[{name:'上海'},{name:'深圳',value:'CZ5233,16:25'},
[{name:'上海'},{name:'深圳',value:'MF8317,16:25'},
[{name:'上海'},{name:'深圳',value:'NS8317,16:25'},
[{name:'上海'},{name:'深圳',value:'MU8573,16:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'柳州',value:  4},
{name:'柳州',value:  4},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'长沙',value: 37},
{name:'长沙',value: 37},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'兰州',value: 13},
{name:'兰州',value: 13},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'揭阳',value: 13},
{name:'厦门',value: 71},
{name:'揭阳',value: 13},
{name:'厦门',value: 71},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'南宁',value: 22},
{name:'南宁',value: 22},
{name:'南宁',value: 22},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(16:30-16:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'HO1715,16:30'},
[{name:'上海'},{name:'大连',value:'CZ9566,16:30'},
[{name:'上海'},{name:'大连',value:'MU5625,16:30'},
[{name:'上海'},{name:'长春',value:'CA1975,16:30'},
[{name:'上海'},{name:'海口',value:'MU9531,16:30'},
[{name:'上海'},{name:'海口',value:'FM9531,16:30'},
[{name:'上海'},{name:'武汉',value:'MU3304,16:35'},
[{name:'上海'},{name:'武汉',value:'CZ3580,16:35'},
[{name:'上海'},{name:'武汉',value:'MF1464,16:35'},
[{name:'上海'},{name:'湛江',value:'FM9387,16:35'},
[{name:'上海'},{name:'湛江',value:'MU9387,16:35'},
[{name:'上海'},{name:'厦门',value:'9C8893,16:40'},
[{name:'上海'},{name:'天津',value:'9C8813,16:40'},
[{name:'上海'},{name:'成都',value:'CA1949,16:40'},
[{name:'上海'},{name:'成都',value:'HO1909,16:40'},
[{name:'上海'},{name:'成都',value:'SC1949,16:40'},
[{name:'上海'},{name:'成都',value:'ZH1949,16:40'},
[{name:'上海'},{name:'成都',value:'TV6511,16:40'},
[{name:'上海'},{name:'广州',value:'FM9309,16:30'},
[{name:'上海'},{name:'广州',value:'MU9309,16:30'},
[{name:'上海'},{name:'青岛',value:'MU5517,16:40'},
[{name:'上海'},{name:'青岛',value:'CZ9520,16:40'},
[{name:'上海'},{name:'青岛',value:'HO1731,16:40'},
[{name:'上海'},{name:'深圳',value:'HO1974,16:40'},
[{name:'上海'},{name:'深圳',value:'CA3502,16:40'},
[{name:'上海'},{name:'深圳',value:'KY9920,16:40'},
[{name:'上海'},{name:'深圳',value:'ZH9920,16:40'},
[{name:'上海'},{name:'贵阳',value:'9C8587,16:40'},
[{name:'上海'},{name:'哈尔滨',value:'MU5517,16:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'长春',value: 29},
{name:'海口',value: 16},
{name:'海口',value: 16},
{name:'武汉',value: 29},
{name:'武汉',value: 29},
{name:'武汉',value: 29},
{name:'湛江',value:  4},
{name:'湛江',value:  4},
{name:'厦门',value: 71},
{name:'天津',value: 29},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'贵阳',value: 26},
{name:'哈尔滨',value: 29}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(16:45-17:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'昆明',value:'CA1937,16:45'},
[{name:'上海'},{name:'昆明',value:'KY1937,16:45'},
[{name:'上海'},{name:'昆明',value:'ZH1937,16:45'},
[{name:'上海'},{name:'昆明',value:'SC1937,16:45'},
[{name:'上海'},{name:'广州',value:'ZH1865,16:55'},
[{name:'上海'},{name:'广州',value:'CA1865,16:55'},
[{name:'上海'},{name:'广州',value:'CZ3526,16:45'},
[{name:'上海'},{name:'广州',value:'MU3266,16:45'},
[{name:'上海'},{name:'广州',value:'CZ3526,16:45'},
[{name:'上海'},{name:'广州',value:'MF1406,16:45'},
[{name:'上海'},{name:'南宁',value:'ZH5033,16:45'},
[{name:'上海'},{name:'南宁',value:'HO1273,16:45'},
[{name:'上海'},{name:'南宁',value:'MU3953,16:45'},
[{name:'上海'},{name:'三亚',value:'ZH5073,16:50'},
[{name:'上海'},{name:'三亚',value:'MU3989,16:50'},
[{name:'上海'},{name:'三亚',value:'CA3235,16:50'},
[{name:'上海'},{name:'三亚',value:'HO1127,16:50'},
[{name:'上海'},{name:'成都',value:'CA3940,16:50'},
[{name:'上海'},{name:'成都',value:'TV9866,16:50'},
[{name:'上海'},{name:'北京',value:'ZH1518,16:55'},
[{name:'上海'},{name:'北京',value:'CA1518,16:55'},
[{name:'上海'},{name:'北京',value:'HO1904,16:55'},
[{name:'上海'},{name:'成都',value:'9C8887,16:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'昆明',value:45},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'南宁',value:22},
{name:'南宁',value:22},
{name:'南宁',value:22},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'成都',value:57},
{name:'成都',value:57},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'成都',value:57}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(17:00-17:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'邯郸',value:'MU5657,17:00'},
[{name:'上海'},{name:'邯郸',value:'CZ9586,17:00'},
[{name:'上海'},{name:'西安',value:'CZ9045,17:00'},
[{name:'上海'},{name:'西安',value:'MU2162,17:00'},
[{name:'上海'},{name:'西安',value:'JR2162,17:00'},
[{name:'上海'},{name:'西安',value:'HO1781,17:00'},
[{name:'上海'},{name:'长春',value:'FM9815,17:00'},
[{name:'上海'},{name:'成都',value:'CA4514,17:00'},
[{name:'上海'},{name:'成都',value:'ZH4514,17:00'},
[{name:'上海'},{name:'长春',value:'MF1896,17:05'},
[{name:'上海'},{name:'长春',value:'MU4708,17:05'},
[{name:'上海'},{name:'长春',value:'CZ6156,17:05'},
[{name:'上海'},{name:'北海',value:'HO1745,17:05'},
[{name:'上海'},{name:'北海',value:'MU5265,17:05'},
[{name:'上海'},{name:'北海',value:'CZ9388,17:05'},
[{name:'上海'},{name:'三亚',value:'MU3450,17:05'},
[{name:'上海'},{name:'三亚',value:'CZ3836,17:05'},
[{name:'上海'},{name:'三亚',value:'MF1696,17:05'},
[{name:'上海'},{name:'长白山',value:'MF1896,17:05'},
[{name:'上海'},{name:'长白山',value:'CZ6156,17:05'},
[{name:'上海'},{name:'长白山',value:'MU4708,17:05'},
[{name:'上海'},{name:'兰州',value:'CA3239,17:10'},
[{name:'上海'},{name:'兰州',value:'MU3975,17:10'},
[{name:'上海'},{name:'兰州',value:'ZH5059,17:10'},
[{name:'上海'},{name:'兰州',value:'HO1027,17:10'},
[{name:'上海'},{name:'温州',value:'MU788,17:10'},
[{name:'上海'},{name:'烟台',value:'MU5543,17:00'},
[{name:'上海'},{name:'烟台',value:'CZ9537,17:00'},
[{name:'上海'},{name:'北京',value:'MU5119,17:00'},
[{name:'上海'},{name:'北京',value:'CZ9288,17:00'},
[{name:'上海'},{name:'深圳',value:'MU5353,17:05'},
[{name:'上海'},{name:'太原',value:'MU2405,17:05'},
[{name:'上海'},{name:'太原',value:'CZ9147,17:05'},
[{name:'上海'},{name:'深圳',value:'CZ9451,17:05'},
[{name:'上海'},{name:'重庆',value:'MU9423,17:05'},
[{name:'上海'},{name:'重庆',value:'FM9423,17:05'},
[{name:'上海'},{name:'呼和浩特',value:'MU5689,17:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'邯郸',value:  2},
{name:'邯郸',value:  2},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'长春',value: 29},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'北海',value:  6},
{name:'北海',value:  6},
{name:'北海',value:  6},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'三亚',value: 29},
{name:'长白山',value:  5},
{name:'长白山',value:  5},
{name:'长白山',value:  5},
{name:'兰州',value: 13},
{name:'兰州',value: 13},
{name:'兰州',value: 13},
{name:'兰州',value: 13},
{name:'温州',value: 10},
{name:'烟台',value: 19},
{name:'烟台',value: 19},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'深圳',value:122},
{name:'太原',value: 20},
{name:'太原',value: 20},
{name:'深圳',value:122},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'呼和浩特',value: 10}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(17:15-17:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'长春',value:'9C8505,17:15'},
[{name:'上海'},{name:'重庆',value:'9C8995,17:15'},
[{name:'上海'},{name:'包头',value:'FM9135,17:15'},
[{name:'上海'},{name:'包头',value:'MU9135,17:15'},
[{name:'上海'},{name:'桂林',value:'SC1969,17:20'},
[{name:'上海'},{name:'桂林',value:'ZH1969,17:20'},
[{name:'上海'},{name:'桂林',value:'CA1969,17:20'},
[{name:'上海'},{name:'汉中',value:'HO1021,17:20'},
[{name:'上海'},{name:'深圳',value:'MF1434,17:25'},
[{name:'上海'},{name:'深圳',value:'CZ3558,17:25'},
[{name:'上海'},{name:'深圳',value:'MU3292,17:25'},
[{name:'上海'},{name:'西安',value:'MF4653,17:25'},
[{name:'上海'},{name:'西安',value:'CZ3679,17:25'},
[{name:'上海'},{name:'西安',value:'MU3351,17:25'},
[{name:'上海'},{name:'厦门',value:'NS8510,17:15'},
[{name:'上海'},{name:'福州',value:'MU8533,17:15'},
[{name:'上海'},{name:'福州',value:'NS8586,17:15'},
[{name:'上海'},{name:'福州',value:'MF8586,17:15'},
[{name:'上海'},{name:'厦门',value:'CZ5412,17:15'},
[{name:'上海'},{name:'厦门',value:'MU8513,17:15'},
[{name:'上海'},{name:'福州',value:'CZ5474,17:15'},
[{name:'上海'},{name:'厦门',value:'MF8510,17:15'},
[{name:'上海'},{name:'重庆',value:'MU4021,17:25'},
[{name:'上海'},{name:'重庆',value:'HO1247,17:25'},
[{name:'上海'},{name:'乌鲁木齐',value:'MU4594,17:25'},
[{name:'上海'},{name:'乌鲁木齐',value:'CZ6974,17:25'},
[{name:'上海'},{name:'乌鲁木齐',value:'MF4596,17:25'},
[{name:'上海'},{name:'太原',value:'HO1133,17:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'长春',value: 29},
{name:'重庆',value: 49},
{name:'包头',value:  4},
{name:'包头',value:  4},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'汉中',value:  1},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'厦门',value: 71},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'福州',value: 35},
{name:'厦门',value: 71},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'太原',value: 20}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(17:30-17:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'晋江',value:'ZH9908,17:30'},
[{name:'上海'},{name:'晋江',value:'HO1980,17:30'},
[{name:'上海'},{name:'晋江',value:'CA3822,17:30'},
[{name:'上海'},{name:'晋江',value:'KY9908,17:30'},
[{name:'上海'},{name:'深圳',value:'HO1980,17:30'},
[{name:'上海'},{name:'深圳',value:'KY9908,17:30'},
[{name:'上海'},{name:'深圳',value:'CA3822,17:30'},
[{name:'上海'},{name:'深圳',value:'ZH9908,17:30'},
[{name:'上海'},{name:'武汉',value:'MU9371,17:35'},
[{name:'上海'},{name:'武汉',value:'FM9371,17:35'},
[{name:'上海'},{name:'张家界',value:'MU9343,17:35'},
[{name:'上海'},{name:'张家界',value:'FM9343,17:35'},
[{name:'上海'},{name:'重庆',value:'CA1981,17:35'},
[{name:'上海'},{name:'成都',value:'MU5038,17:40'},
[{name:'上海'},{name:'成都',value:'JL5683,17:40'},
[{name:'上海'},{name:'北京',value:'CZ9316,17:30'},
[{name:'上海'},{name:'广州',value:'FM9311,17:30'},
[{name:'上海'},{name:'北京',value:'MU5157,17:30'},
[{name:'上海'},{name:'广州',value:'MU9311,17:30'},
[{name:'上海'},{name:'深圳',value:'9C8949,17:30'},
[{name:'上海'},{name:'烟台',value:'SC4850,17:35'},
[{name:'上海'},{name:'烟台',value:'CA4850,17:35'},
[{name:'上海'},{name:'重庆',value:'FM9425,17:40'},
[{name:'上海'},{name:'重庆',value:'MU9425,17:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'晋江',value: 15},
{name:'晋江',value: 15},
{name:'晋江',value: 15},
{name:'晋江',value: 15},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'武汉',value: 29},
{name:'武汉',value: 29},
{name:'张家界',value:  7},
{name:'张家界',value:  7},
{name:'重庆',value: 49},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'北京',value: 98},
{name:'广州',value: 87},
{name:'北京',value: 98},
{name:'广州',value: 87},
{name:'深圳',value:122},
{name:'烟台',value: 19},
{name:'烟台',value: 19},
{name:'重庆',value: 49},
{name:'重庆',value: 49}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(17:45-18:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'重庆',value:'3U8974,17:55'},
[{name:'上海'},{name:'满洲里',value:'9C8625,17:55'},
[{name:'上海'},{name:'广州',value:'9C8931,17:45'},
[{name:'上海'},{name:'珠海',value:'HO1767,17:45'},
[{name:'上海'},{name:'珠海',value:'MU5219,17:45'},
[{name:'上海'},{name:'珠海',value:'CZ9362,17:45'},
[{name:'上海'},{name:'厦门',value:'FM9261,17:50'},
[{name:'上海'},{name:'厦门',value:'MU9261,17:50'},
[{name:'上海'},{name:'威海',value:'CZ9546,17:50'},
[{name:'上海'},{name:'威海',value:'MU5581,17:50'},
[{name:'上海'},{name:'郑州',value:'FM9323,17:50'},
[{name:'上海'},{name:'郑州',value:'MU9323,17:50'},
[{name:'上海'},{name:'青岛',value:'CA4666,17:55'},
[{name:'上海'},{name:'青岛',value:'SC4666,17:55'},
[{name:'上海'},{name:'北京',value:'ZH1522,17:55'},
[{name:'上海'},{name:'北京',value:'CA1522,17:55'},
[{name:'上海'},{name:'太原',value:'MU3931,17:55'},
[{name:'上海'},{name:'太原',value:'HO1133,17:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'重庆',value:49},
{name:'满洲里',value: 1},
{name:'广州',value:87},
{name:'珠海',value:18},
{name:'珠海',value:18},
{name:'珠海',value:18},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'威海',value: 7},
{name:'威海',value: 7},
{name:'郑州',value:32},
{name:'郑州',value:32},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'太原',value:20},
{name:'太原',value:20}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(18:00-18:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'南昌',value:'CZ9497,18:00'},
[{name:'上海'},{name:'长春',value:'CZ6542,18:00'},
[{name:'上海'},{name:'长春',value:'MF4208,18:00'},
[{name:'上海'},{name:'长春',value:'MU3684,18:00'},
[{name:'上海'},{name:'广州',value:'MU3056,18:05'},
[{name:'上海'},{name:'广州',value:'CZ3175,18:05'},
[{name:'上海'},{name:'广州',value:'MF4837,18:05'},
[{name:'上海'},{name:'银川',value:'CA1977,18:05'},
[{name:'上海'},{name:'银川',value:'ZH1977,18:05'},
[{name:'上海'},{name:'乌鲁木齐',value:'MF5082,18:05'},
[{name:'上海'},{name:'乌鲁木齐',value:'CZ6976,18:05'},
[{name:'上海'},{name:'南昌',value:'KY9292,18:10'},
[{name:'上海'},{name:'南昌',value:'CA3492,18:10'},
[{name:'上海'},{name:'南昌',value:'HO1975,18:10'},
[{name:'上海'},{name:'南昌',value:'ZH9292,18:10'},
[{name:'上海'},{name:'沈阳',value:'HO1711,18:10'},
[{name:'上海'},{name:'沈阳',value:'MU5603,18:10'},
[{name:'上海'},{name:'沈阳',value:'CZ9551,18:10'},
[{name:'上海'},{name:'深圳',value:'HO1975,18:10'},
[{name:'上海'},{name:'深圳',value:'KY9292,18:10'},
[{name:'上海'},{name:'深圳',value:'CA3492,18:10'},
[{name:'上海'},{name:'深圳',value:'ZH9292,18:10'},
[{name:'上海'},{name:'北京',value:'CZ9290,18:00'},
[{name:'上海'},{name:'北京',value:'MU5121,18:00'},
[{name:'上海'},{name:'深圳',value:'MU5355,18:00'},
[{name:'上海'},{name:'深圳',value:'CZ9453,18:00'},
[{name:'上海'},{name:'连云港',value:'MU9417,18:05'},
[{name:'上海'},{name:'连云港',value:'FM9417,18:05'},
[{name:'上海'},{name:'天津',value:'HO1137,18:05'},
[{name:'上海'},{name:'天津',value:'MU3927,18:05'},
[{name:'上海'},{name:'天津',value:'CA3203,18:05'},
[{name:'上海'},{name:'天津',value:'CA1524,18:05'},
[{name:'上海'},{name:'天津',value:'ZH1524,18:05'},
[{name:'上海'},{name:'成都',value:'ZH4516,18:05'},
[{name:'上海'},{name:'成都',value:'CA4516,18:05'},
[{name:'上海'},{name:'成都',value:'TV6502,18:05'},
[{name:'上海'},{name:'珠海',value:'ZH5067,18:10'},
[{name:'上海'},{name:'珠海',value:'HO1157,18:10'},
[{name:'上海'},{name:'珠海',value:'CA3211,18:10'},
[{name:'上海'},{name:'珠海',value:'MU3981,18:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'南昌',value: 12},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'长春',value: 29},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'银川',value:  9},
{name:'银川',value:  9},
{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'南昌',value: 12},
{name:'南昌',value: 12},
{name:'南昌',value: 12},
{name:'南昌',value: 12},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'连云港',value:  4},
{name:'连云港',value:  4},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'天津',value: 29},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'珠海',value: 18}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(18:15-18:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'HO1161,18:15'},
[{name:'上海'},{name:'西安',value:'MU2245,18:15'},
[{name:'上海'},{name:'西安',value:'MU2166,18:15'},
[{name:'上海'},{name:'西安',value:'CZ9046,18:15'},
[{name:'上海'},{name:'西安',value:'JL5689,18:15'},
[{name:'上海'},{name:'榆林',value:'MU2166,18:15'},
[{name:'上海'},{name:'鄂尔多斯',value:'MU2245,18:15'},
[{name:'上海'},{name:'武汉',value:'MU2020,18:20'},
[{name:'上海'},{name:'沈阳',value:'CZ6502,18:20'},
[{name:'上海'},{name:'沈阳',value:'MF4174,18:20'},
[{name:'上海'},{name:'沈阳',value:'MU3660,18:20'},
[{name:'上海'},{name:'天津',value:'ZH1961,18:25'},
[{name:'上海'},{name:'天津',value:'CA1961,18:25'},
[{name:'上海'},{name:'金浦',value:'FM8757,18:15'},
[{name:'上海'},{name:'金浦',value:'MU8316,18:15'},
[{name:'上海'},{name:'天津',value:'MU9065,18:20'},
[{name:'上海'},{name:'天津',value:'FM9065,18:20'},
[{name:'上海'},{name:'厦门',value:'MU5561,18:25'},
[{name:'上海'},{name:'成都',value:'MU5411,18:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value:37},
{name:'西安',value:46},
{name:'西安',value:46},
{name:'西安',value:46},
{name:'西安',value:46},
{name:'榆林',value: 1},
{name:'鄂尔多斯',value: 1},
{name:'武汉',value:29},
{name:'沈阳',value:32},
{name:'沈阳',value:32},
{name:'沈阳',value:32},
{name:'天津',value:29},
{name:'天津',value:29},
{name:'金浦',value: 2},
{name:'金浦',value: 2},
{name:'天津',value:29},
{name:'天津',value:29},
{name:'厦门',value:71},
{name:'成都',value:57}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(18:30-18:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'CZ6536,18:40'},
[{name:'上海'},{name:'大连',value:'MU3682,18:40'},
[{name:'上海'},{name:'大连',value:'MF4202,18:40'},
[{name:'上海'},{name:'张家界',value:'CZ9825,18:40'},
[{name:'上海'},{name:'张家界',value:'MU5375,18:40'},
[{name:'上海'},{name:'赣州',value:'CZ9269,18:30'},
[{name:'上海'},{name:'赣州',value:'MU2994,18:30'},
[{name:'上海'},{name:'北京',value:'MU3724,18:30'},
[{name:'上海'},{name:'北京',value:'KN5956,18:30'},
[{name:'上海'},{name:'广州',value:'MU5321,18:30'},
[{name:'上海'},{name:'威海',value:'CA4889,18:35'},
[{name:'上海'},{name:'威海',value:'SC4889,18:35'},
[{name:'上海'},{name:'福州',value:'MF8548,18:40'},
[{name:'上海'},{name:'福州',value:'CZ5442,18:40'},
[{name:'上海'},{name:'福州',value:'NS8548,18:40'},
[{name:'上海'},{name:'福州',value:'MU8529,18:40'},
[{name:'上海'},{name:'太原',value:'HU7376,18:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value:37},
{name:'大连',value:37},
{name:'大连',value:37},
{name:'张家界',value: 7},
{name:'张家界',value: 7},
{name:'赣州',value: 2},
{name:'赣州',value: 2},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'广州',value:87},
{name:'威海',value: 7},
{name:'威海',value: 7},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'太原',value:20}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(18:45-19:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'晋江',value:'MU9085,18:45'},
[{name:'上海'},{name:'晋江',value:'NS8514,18:45'},
[{name:'上海'},{name:'晋江',value:'CZ5416,18:45'},
[{name:'上海'},{name:'晋江',value:'MF8514,18:45'},
[{name:'上海'},{name:'三亚',value:'9C8801,18:55'},
[{name:'上海'},{name:'广州',value:'MU3298,18:45'},
[{name:'上海'},{name:'广州',value:'MF1456,18:45'},
[{name:'上海'},{name:'广州',value:'CZ3572,18:45'},
[{name:'上海'},{name:'郑州',value:'MU5391,18:50'},
[{name:'上海'},{name:'郑州',value:'CZ9466,18:50'},
[{name:'上海'},{name:'福州',value:'FM9521,18:55'},
[{name:'上海'},{name:'北京',value:'CA1516,18:55'},
[{name:'上海'},{name:'北京',value:'ZH1516,18:55'},
[{name:'上海'},{name:'昆明',value:'CZ9676,18:55'},
[{name:'上海'},{name:'昆明',value:'MU5810,18:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'晋江',value:15},
{name:'晋江',value:15},
{name:'晋江',value:15},
{name:'晋江',value:15},
{name:'三亚',value:29},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'郑州',value:32},
{name:'郑州',value:32},
{name:'福州',value:35},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'昆明',value:45},
{name:'昆明',value:45}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(19:00-19:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'西宁',value:'MU2309,19:00'},
[{name:'上海'},{name:'西宁',value:'HO1787,19:00'},
[{name:'上海'},{name:'西宁',value:'CZ9096,19:00'},
[{name:'上海'},{name:'桂林',value:'CA3231,19:05'},
[{name:'上海'},{name:'桂林',value:'MU3951,19:05'},
[{name:'上海'},{name:'桂林',value:'ZH5071,19:05'},
[{name:'上海'},{name:'桂林',value:'HO1147,19:05'},
[{name:'上海'},{name:'哈尔滨',value:'CZ9560,19:05'},
[{name:'上海'},{name:'哈尔滨',value:'HO1705,19:05'},
[{name:'上海'},{name:'哈尔滨',value:'MU5615,19:05'},
[{name:'上海'},{name:'哈尔滨',value:'MU3628,19:05'},
[{name:'上海'},{name:'哈尔滨',value:'CZ6252,19:05'},
[{name:'上海'},{name:'哈尔滨',value:'MF1974,19:05'},
[{name:'上海'},{name:'青岛',value:'CZ6226,19:10'},
[{name:'上海'},{name:'青岛',value:'MU4716,19:10'},
[{name:'上海'},{name:'青岛',value:'MF1956,19:10'},
[{name:'上海'},{name:'大连',value:'MU5673,19:10'},
[{name:'上海'},{name:'大连',value:'CZ9595,19:10'},
[{name:'上海'},{name:'北京',value:'ZH1836,19:10'},
[{name:'上海'},{name:'北京',value:'CA1836,19:10'},
[{name:'上海'},{name:'大庆',value:'CZ6226,19:10'},
[{name:'上海'},{name:'大庆',value:'MU4716,19:10'},
[{name:'上海'},{name:'大庆',value:'MF1956,19:10'},
[{name:'上海'},{name:'厦门',value:'CZ5432,19:00'},
[{name:'上海'},{name:'厦门',value:'NS8536,19:00'},
[{name:'上海'},{name:'厦门',value:'MF8536,19:00'},
[{name:'上海'},{name:'厦门',value:'MU8518,19:00'},
[{name:'上海'},{name:'北京',value:'MU5123,19:00'},
[{name:'上海'},{name:'北京',value:'CZ9292,19:00'},
[{name:'上海'},{name:'成都',value:'MU5413,19:00'},
[{name:'上海'},{name:'成都',value:'CZ9480,19:00'},
[{name:'上海'},{name:'武汉',value:'FM9363,19:05'},
[{name:'上海'},{name:'厦门',value:'9C8803,19:05'},
[{name:'上海'},{name:'武汉',value:'MU9363,19:05'},
[{name:'上海'},{name:'深圳',value:'MU5357,19:05'},
[{name:'上海'},{name:'洛阳',value:'CZ9527,19:10'},
[{name:'上海'},{name:'洛阳',value:'MU5527,19:10'},
[{name:'上海'},{name:'西安',value:'CZ9047,19:10'},
[{name:'上海'},{name:'西安',value:'MU2168,19:10'},
[{name:'上海'},{name:'西安',value:'JR2168,19:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'西宁',value:  7},
{name:'西宁',value:  7},
{name:'西宁',value:  7},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'哈尔滨',value: 29},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'大连',value: 37},
{name:'大连',value: 37},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'大庆',value:  3},
{name:'大庆',value:  3},
{name:'大庆',value:  3},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'武汉',value: 29},
{name:'厦门',value: 71},
{name:'武汉',value: 29},
{name:'深圳',value:122},
{name:'洛阳',value:  4},
{name:'洛阳',value:  4},
{name:'西安',value: 46},
{name:'西安',value: 46},
{name:'西安',value: 46}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(19:15-19:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'重庆',value:'CZ8110,19:15'},
[{name:'上海'},{name:'重庆',value:'OQ2310,19:15'},
[{name:'上海'},{name:'昆明',value:'ZH3182,19:15'},
[{name:'上海'},{name:'昆明',value:'CA5782,19:15'},
[{name:'上海'},{name:'昆明',value:'KY8282,19:15'},
[{name:'上海'},{name:'贵阳',value:'CZ6352,19:20'},
[{name:'上海'},{name:'贵阳',value:'MU3646,19:20'},
[{name:'上海'},{name:'贵阳',value:'MF4062,19:20'},
[{name:'上海'},{name:'重庆',value:'JL5693,19:20'},
[{name:'上海'},{name:'重庆',value:'MU5431,19:20'},
[{name:'上海'},{name:'重庆',value:'CZ9486,19:20'},
[{name:'上海'},{name:'成都',value:'3U8966,19:25'},
[{name:'上海'},{name:'武夷山',value:'MU5647,19:15'},
[{name:'上海'},{name:'武夷山',value:'CZ9580,19:15'},
[{name:'上海'},{name:'长沙',value:'9C8851,19:15'},
[{name:'上海'},{name:'深圳',value:'MF1430,19:15'},
[{name:'上海'},{name:'深圳',value:'CZ3552,19:15'},
[{name:'上海'},{name:'深圳',value:'MU3288,19:15'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'昆明',value: 45},
{name:'贵阳',value: 26},
{name:'贵阳',value: 26},
{name:'贵阳',value: 26},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'成都',value: 57},
{name:'武夷山',value:  2},
{name:'武夷山',value:  2},
{name:'长沙',value: 37},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(19:30-19:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'乌鲁木齐',value:'MU9221,19:30'},
[{name:'上海'},{name:'乌鲁木齐',value:'FM9221,19:30'},
[{name:'上海'},{name:'桂林',value:'MF1142,19:30'},
[{name:'上海'},{name:'桂林',value:'CZ3252,19:30'},
[{name:'上海'},{name:'桂林',value:'MU3101,19:30'},
[{name:'上海'},{name:'珠海',value:'MF1624,19:35'},
[{name:'上海'},{name:'珠海',value:'CZ3756,19:35'},
[{name:'上海'},{name:'珠海',value:'MU3406,19:35'},
[{name:'上海'},{name:'深圳',value:'ZH9892,19:40'},
[{name:'上海'},{name:'深圳',value:'HO1966,19:40'},
[{name:'上海'},{name:'深圳',value:'NH6600,19:40'},
[{name:'上海'},{name:'深圳',value:'CA3367,19:40'},
[{name:'上海'},{name:'深圳',value:'KY9892,19:40'},
[{name:'上海'},{name:'厦门',value:'HO1193,19:30'},
[{name:'上海'},{name:'厦门',value:'MU3947,19:30'},
[{name:'上海'},{name:'广州',value:'MU5315,19:30'},
[{name:'上海'},{name:'广州',value:'HO1763,19:30'},
[{name:'上海'},{name:'广州',value:'CZ9422,19:30'},
[{name:'上海'},{name:'天津',value:'CA1528,19:40'},
[{name:'上海'},{name:'天津',value:'ZH1528,19:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'乌鲁木齐',value: 30},
{name:'乌鲁木齐',value: 30},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'珠海',value: 18},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'天津',value: 29},
{name:'天津',value: 29}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(19:45-20:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'西安',value:'HU7646,19:45'},
[{name:'上海'},{name:'桂林',value:'FM9349,19:50'},
[{name:'上海'},{name:'桂林',value:'MU9349,19:50'},
[{name:'上海'},{name:'银川',value:'HO1277,19:50'},
[{name:'上海'},{name:'银川',value:'CA3237,19:50'},
[{name:'上海'},{name:'银川',value:'MU4013,19:50'},
[{name:'上海'},{name:'广州',value:'MF1384,19:45'},
[{name:'上海'},{name:'广州',value:'MU3244,19:45'},
[{name:'上海'},{name:'广州',value:'CZ3504,19:45'},
[{name:'上海'},{name:'深圳',value:'CZ6584,19:45'},
[{name:'上海'},{name:'深圳',value:'MF1612,19:45'},
[{name:'上海'},{name:'深圳',value:'MU3696,19:45'},
[{name:'上海'},{name:'青岛',value:'MU3937,19:50'},
[{name:'上海'},{name:'青岛',value:'HO1241,19:50'},
[{name:'上海'},{name:'深圳',value:'HO1972,19:50'},
[{name:'上海'},{name:'深圳',value:'CA3345,19:50'},
[{name:'上海'},{name:'深圳',value:'KY9816,19:50'},
[{name:'上海'},{name:'深圳',value:'ZH9816,19:50'},
[{name:'上海'},{name:'临沂',value:'MU5549,19:55'},
[{name:'上海'},{name:'北京',value:'HA3823,19:55'},
[{name:'上海'},{name:'北京',value:'CA1550,19:55'},
[{name:'上海'},{name:'北京',value:'ZH1550,19:55'},
[{name:'上海'},{name:'广州',value:'CA1830,19:55'},
[{name:'上海'},{name:'广州',value:'ZH1830,19:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'西安',value: 46},
{name:'桂林',value: 16},
{name:'桂林',value: 16},
{name:'银川',value:  9},
{name:'银川',value:  9},
{name:'银川',value:  9},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'广州',value: 87},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'青岛',value: 53},
{name:'青岛',value: 53},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'临沂',value:  4},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'广州',value: 87},
{name:'广州',value: 87}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(20:00-20:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'厦门',value:'HO1191,20:00'},
[{name:'上海'},{name:'重庆',value:'CA4556,20:00'},
[{name:'上海'},{name:'重庆',value:'G54074,20:00'},
[{name:'上海'},{name:'张家界',value:'FM9341,20:05'},
[{name:'上海'},{name:'福州',value:'HO1109,20:10'},
[{name:'上海'},{name:'青岛',value:'9C8853,20:00'},
[{name:'上海'},{name:'太原',value:'MU2407,20:00'},
[{name:'上海'},{name:'太原',value:'HO1725,20:00'},
[{name:'上海'},{name:'太原',value:'CZ9149,20:00'},
[{name:'上海'},{name:'厦门',value:'9C8863,20:05'},
[{name:'上海'},{name:'武汉',value:'MU2512,20:05'},
[{name:'上海'},{name:'武汉',value:'CZ9197,20:05'},
[{name:'上海'},{name:'厦门',value:'FM9523,20:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'厦门',value:71},
{name:'重庆',value:49},
{name:'重庆',value:49},
{name:'张家界',value: 7},
{name:'福州',value:35},
{name:'青岛',value:53},
{name:'太原',value:20},
{name:'太原',value:20},
{name:'太原',value:20},
{name:'厦门',value:71},
{name:'武汉',value:29},
{name:'武汉',value:29},
{name:'厦门',value:71}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(20:15-20:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'海口',value:'JD5530,20:20'},
[{name:'上海'},{name:'长春',value:'MU3688,20:25'},
[{name:'上海'},{name:'长春',value:'CZ6554,20:25'},
[{name:'上海'},{name:'长春',value:'MF4218,20:25'},
[{name:'上海'},{name:'青岛',value:'MU5519,20:15'},
[{name:'上海'},{name:'青岛',value:'CZ9522,20:15'},
[{name:'上海'},{name:'昆明',value:'MU5804,20:15'},
[{name:'上海'},{name:'北京',value:'HU7602,20:20'},
[{name:'上海'},{name:'成都',value:'TV6504,20:20'},
[{name:'上海'},{name:'成都',value:'CA4502,20:20'},
[{name:'上海'},{name:'成都',value:'ZH4502,20:20'},
[{name:'上海'},{name:'青岛',value:'SC4672,20:25'},
[{name:'上海'},{name:'青岛',value:'CA4672,20:25'},
[{name:'上海'},{name:'厦门',value:'MF8506,20:25'},
[{name:'上海'},{name:'厦门',value:'CZ5408,20:25'},
[{name:'上海'},{name:'厦门',value:'NS8506,20:25'},
[{name:'上海'},{name:'厦门',value:'MU8512,20:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'海口',value:16},
{name:'长春',value:29},
{name:'长春',value:29},
{name:'长春',value:29},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'昆明',value:45},
{name:'北京',value:98},
{name:'成都',value:57},
{name:'成都',value:57},
{name:'成都',value:57},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'厦门',value:71},
{name:'厦门',value:71}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(20:30-20:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'沈阳',value:'MU3666,20:30'},
[{name:'上海'},{name:'沈阳',value:'CZ6508,20:30'},
[{name:'上海'},{name:'沈阳',value:'MF4180,20:30'},
[{name:'上海'},{name:'郑州',value:'MU3318,20:30'},
[{name:'上海'},{name:'郑州',value:'MF1482,20:30'},
[{name:'上海'},{name:'郑州',value:'CZ3598,20:30'},
[{name:'上海'},{name:'北京',value:'CZ9318,20:30'},
[{name:'上海'},{name:'北京',value:'MU5159,20:30'},
[{name:'上海'},{name:'深圳',value:'MU3310,20:30'},
[{name:'上海'},{name:'深圳',value:'MF1472,20:30'},
[{name:'上海'},{name:'深圳',value:'CZ3588,20:30'},
[{name:'上海'},{name:'成都',value:'MU5415,20:35'},
[{name:'上海'},{name:'深圳',value:'CZ9456,20:35'},
[{name:'上海'},{name:'深圳',value:'MU5359,20:35'},
[{name:'上海'},{name:'广州',value:'CZ9424,20:35'},
[{name:'上海'},{name:'广州',value:'MU5317,20:35'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'沈阳',value: 32},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'郑州',value: 32},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'成都',value: 57},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'广州',value: 87},
{name:'广州',value: 87}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(20:45-21:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'大连',value:'CZ6526,20:45'},
[{name:'上海'},{name:'大连',value:'MU3678,20:45'},
[{name:'上海'},{name:'大连',value:'MF4194,20:45'},
[{name:'上海'},{name:'广州',value:'CZ3614,20:45'},
[{name:'上海'},{name:'广州',value:'MF1498,20:45'},
[{name:'上海'},{name:'广州',value:'MU4664,20:45'},
[{name:'上海'},{name:'张家界',value:'9C8983,20:50'},
[{name:'上海'},{name:'三亚',value:'MF4413,20:55'},
[{name:'上海'},{name:'三亚',value:'CZ6782,20:55'},
[{name:'上海'},{name:'三亚',value:'MU4474,20:55'},
[{name:'上海'},{name:'南阳',value:'MF1050,20:55'},
[{name:'上海'},{name:'南阳',value:'CZ3150,20:55'},
[{name:'上海'},{name:'南阳',value:'MU3041,20:55'},
[{name:'上海'},{name:'贵阳',value:'CA4564,20:55'},
[{name:'上海'},{name:'烟台',value:'CZ9538,20:50'},
[{name:'上海'},{name:'烟台',value:'MU5547,20:50'},
[{name:'上海'},{name:'广州',value:'MU3306,20:50'},
[{name:'上海'},{name:'广州',value:'MF4640,20:50'},
[{name:'上海'},{name:'广州',value:'CZ3582,20:50'},
[{name:'上海'},{name:'长沙',value:'MU3531,20:55'},
[{name:'上海'},{name:'长沙',value:'MF1822,20:55'},
[{name:'上海'},{name:'长沙',value:'CZ3970,20:55'},
[{name:'上海'},{name:'北京',value:'CA1856,20:55'},
[{name:'上海'},{name:'北京',value:'ZH1856,20:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'大连',value:37},
{name:'大连',value:37},
{name:'大连',value:37},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'张家界',value: 7},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'三亚',value:29},
{name:'南阳',value: 3},
{name:'南阳',value: 3},
{name:'南阳',value: 3},
{name:'贵阳',value:26},
{name:'烟台',value:19},
{name:'烟台',value:19},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'长沙',value:37},
{name:'北京',value:98},
{name:'北京',value:98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(21:00-21:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'成都',value:'CA4536,21:00'},
[{name:'上海'},{name:'成都',value:'ZH4536,21:00'},
[{name:'上海'},{name:'广州',value:'FM9315,21:05'},
[{name:'上海'},{name:'海口',value:'MF4398,21:05'},
[{name:'上海'},{name:'海口',value:'CZ6766,21:05'},
[{name:'上海'},{name:'海口',value:'MU4462,21:05'},
[{name:'上海'},{name:'北京',value:'CZ9296,21:00'},
[{name:'上海'},{name:'北京',value:'MU5127,21:00'},
[{name:'上海'},{name:'深圳',value:'ZH5037,21:00'},
[{name:'上海'},{name:'深圳',value:'HO1151,21:00'},
[{name:'上海'},{name:'深圳',value:'MU3961,21:00'},
[{name:'上海'},{name:'福州',value:'MU8531,21:05'},
[{name:'上海'},{name:'福州',value:'MF8564,21:05'},
[{name:'上海'},{name:'福州',value:'NS8564,21:05'},
[{name:'上海'},{name:'福州',value:'CZ5456,21:05'},
[{name:'上海'},{name:'武汉',value:'MU2514,21:05'},
[{name:'上海'},{name:'重庆',value:'TV6604,21:10'},
[{name:'上海'},{name:'重庆',value:'CA4542,21:10'},
[{name:'上海'},{name:'重庆',value:'G54066,21:10'},
[{name:'上海'},{name:'重庆',value:'ZH4542,21:10'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'成都',value: 57},
{name:'成都',value: 57},
{name:'广州',value: 87},
{name:'海口',value: 16},
{name:'海口',value: 16},
{name:'海口',value: 16},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'福州',value: 35},
{name:'武汉',value: 29},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'重庆',value: 49},
{name:'重庆',value: 49}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(21:15-21:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'南宁',value:'FM9383,21:15'},
[{name:'上海'},{name:'长春',value:'FM9159,21:15'},
[{name:'上海'},{name:'贵阳',value:'FM9459,21:20'},
[{name:'上海'},{name:'青岛',value:'CA4604,21:20'},
[{name:'上海'},{name:'南昌',value:'MU5531,21:20'},
[{name:'上海'},{name:'青岛',value:'CZ9525,21:15'},
[{name:'上海'},{name:'青岛',value:'MU5523,21:15'},
[{name:'上海'},{name:'淮安',value:'MU2948,21:20'},
[{name:'上海'},{name:'石家庄',value:'KN2318,21:25'},
[{name:'上海'},{name:'石家庄',value:'MU3726,21:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'南宁',value:22},
{name:'长春',value:29},
{name:'贵阳',value:26},
{name:'青岛',value:53},
{name:'南昌',value:12},
{name:'青岛',value:53},
{name:'青岛',value:53},
{name:'淮安',value: 1},
{name:'石家庄',value: 8},
{name:'石家庄',value: 8}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(21:30-21:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'长沙',value:'CZ9781,21:30'},
[{name:'上海'},{name:'桂林',value:'FM9381,21:35'},
[{name:'上海'},{name:'成都',value:'EU6678,21:40'},
[{name:'上海'},{name:'郑州',value:'FM822,21:40'},
[{name:'上海'},{name:'天津',value:'FM9069,21:40'},
[{name:'上海'},{name:'北京',value:'FM9107,21:30'},
[{name:'上海'},{name:'北京',value:'MU9107,21:30'},
[{name:'上海'},{name:'昆明',value:'MU4003,21:40'},
[{name:'上海'},{name:'昆明',value:'HO1093,21:40'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'长沙',value:37},
{name:'桂林',value:16},
{name:'成都',value:57},
{name:'郑州',value:32},
{name:'天津',value:29},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'昆明',value:45},
{name:'昆明',value:45}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(21:45-22:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'烟台',value:'CZ9544,21:45'},
[{name:'上海'},{name:'温州',value:'ZH1968,21:50'},
[{name:'上海'},{name:'温州',value:'CA1968,21:50'},
[{name:'上海'},{name:'南昌',value:'CZ9531,21:50'},
[{name:'上海'},{name:'深圳',value:'HO1153,21:55'},
[{name:'上海'},{name:'深圳',value:'CA3245,21:55'},
[{name:'上海'},{name:'深圳',value:'9C8955,21:45'},
[{name:'上海'},{name:'太原',value:'CZ9151,21:45'},
[{name:'上海'},{name:'太原',value:'MU2409,21:45'},
[{name:'上海'},{name:'济南',value:'CA1168,21:45'},
[{name:'上海'},{name:'济南',value:'SC1168,21:45'},
[{name:'上海'},{name:'北京',value:'MU3925,21:50'},
[{name:'上海'},{name:'北京',value:'CA3201,21:50'},
[{name:'上海'},{name:'北京',value:'HO1251,21:50'},
[{name:'上海'},{name:'北京',value:'ZH1886,21:55'},
[{name:'上海'},{name:'北京',value:'CA1886,21:55'},
[{name:'上海'},{name:'厦门',value:'MU8519,21:55'},
[{name:'上海'},{name:'厦门',value:'CZ5440,21:55'},
[{name:'上海'},{name:'厦门',value:'MF8546,21:55'},
[{name:'上海'},{name:'厦门',value:'NS8546,21:55'},
[{name:'上海'},{name:'揭阳',value:'MU3456,21:55'},
[{name:'上海'},{name:'揭阳',value:'CZ3854,21:55'},
[{name:'上海'},{name:'揭阳',value:'MF1712,21:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'烟台',value: 19},
{name:'温州',value: 10},
{name:'温州',value: 10},
{name:'南昌',value: 12},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'深圳',value:122},
{name:'太原',value: 20},
{name:'太原',value: 20},
{name:'济南',value:  4},
{name:'济南',value:  4},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'北京',value: 98},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'厦门',value: 71},
{name:'揭阳',value: 13},
{name:'揭阳',value: 13},
{name:'揭阳',value: 13}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(22:00-22:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'海口',value:'CZ6766,22:10'},
[{name:'上海'},{name:'南宁',value:'CZ3290,22:00'},
[{name:'上海'},{name:'南宁',value:'MU3115,22:00'},
[{name:'上海'},{name:'南宁',value:'MF1180,22:00'},
[{name:'上海'},{name:'南京',value:'CZ9247,22:00'},
[{name:'上海'},{name:'厦门',value:'FM9257,22:05'},
[{name:'上海'},{name:'武汉',value:'MU3282,22:05'},
[{name:'上海'},{name:'武汉',value:'CZ3544,22:05'},
[{name:'上海'},{name:'武汉',value:'MF1424,22:05'},
[{name:'上海'},{name:'大连',value:'MU3358,22:10'},
[{name:'上海'},{name:'郑州',value:'MU3518,22:10'},
[{name:'上海'},{name:'郑州',value:'CZ3948,22:10'},
[{name:'上海'},{name:'大连',value:'MF1556,22:10'},
[{name:'上海'},{name:'大连',value:'CZ3686,22:10'},
[{name:'上海'},{name:'郑州',value:'MF1802,22:10'},
[{name:'上海'},{name:'广州',value:'MU5319,22:00'},
[{name:'上海'},{name:'广州',value:'CZ9426,22:00'},
[{name:'上海'},{name:'广州',value:'9C8929,22:05'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'海口',value:16},
{name:'南宁',value:22},
{name:'南宁',value:22},
{name:'南宁',value:22},
{name:'南京',value: 1},
{name:'厦门',value:71},
{name:'武汉',value:29},
{name:'武汉',value:29},
{name:'武汉',value:29},
{name:'大连',value:37},
{name:'郑州',value:32},
{name:'郑州',value:32},
{name:'大连',value:37},
{name:'大连',value:37},
{name:'郑州',value:32},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(22:15-22:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'合肥',value:'CZ9499,22:15'},
[{name:'上海'},{name:'昆明',value:'8L9890,22:25'},
[{name:'上海'},{name:'广州',value:'MU4025,22:20'},
[{name:'上海'},{name:'广州',value:'ZH5015,22:20'},
[{name:'上海'},{name:'广州',value:'CA3209,22:20'},
[{name:'上海'},{name:'广州',value:'HO1287,22:20'},
[{name:'上海'},{name:'福州',value:'MF8590,22:25'},
[{name:'上海'},{name:'福州',value:'NS8590,22:25'},
[{name:'上海'},{name:'福州',value:'MU8534,22:25'},
[{name:'上海'},{name:'福州',value:'CZ5476,22:25'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'合肥',value: 1},
{name:'昆明',value:45},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'广州',value:87},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35},
{name:'福州',value:35}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(22:30-22:45)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'青岛',value:'CA8746,22:30'},
[{name:'上海'},{name:'北京',value:'CZ6411,22:30'},
[{name:'上海'},{name:'北京',value:'MU3657,22:30'},
[{name:'上海'},{name:'北京',value:'MF4737,22:30'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'青岛',value:53},
{name:'北京',value:98},
{name:'北京',value:98},
{name:'北京',value:98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(22:45-23:00)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'三亚',value:'3U8412,22:50'},
[{name:'上海'},{name:'青岛',value:'SC4688,22:55'},
[{name:'上海'},{name:'青岛',value:'CA4688,22:55'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'三亚',value:29},
{name:'青岛',value:53},
{name:'青岛',value:53}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(23:00-23:15)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'烟台',value:'CA4868,23:05'},
[{name:'上海'},{name:'北京',value:'HU7610,23:05'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'烟台',value:19},
{name:'北京',value:98}]
      }
    }
  ]
  },
{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(23:15-23:30)',
    },
      series:[
    {
      type:'map',
      data:[],
      markLine : {
      smooth:true,
      effect : {
      show: true,
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
      },
      itemStyle : {
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [[{name:'上海'},{name:'深圳',value:'DZ6272,23:15'}]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [{name:'深圳',value:122}]
      }
    }
  ]
  }
