var blankData;
var setData;

setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data3', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data4', 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    ['data6', 0, 0, 0, 0, 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
    ['data5', -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
]

blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,89],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    ['data4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    ['data6', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    ['data5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],


]


function barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 850
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '공적연금',
                data2: '연금자산',
                data3: '주택연금',
                data4: '임대수익',
                data5: '부족 현금흐름',
                data6: ' 초과 현금흐름'
            },
            columns: blankData,

            type: 'bar',
            colors: {
                data1: '#00978F',
                data2: '#2B388F',
                data3: '#1B75BA',
                data4: '#00ACED',
                data5: '#e8b0fd',
                data6: '#d9f6b3',

            },
            groups: [
                ['data1', 'data2', 'data3', 'data4', 'data5','data6',]
            ],
            // 그래프 수정 03-09 추가
            order: null
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 13
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 2,
                    right: 2,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: setData
        });

    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}


var eduSetData;
var eduBlankData;
eduSetData = [
    ['x', 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 0],
    ['data2', 0, 0, 0, 0, 0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 0, 0, 0, 0, 0, 0, 0],
]

eduBlankData = [
    ['x', 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function eduBarstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 850
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '나윤성',
                data2: '나윤미',
                data3: '나윤혁',
            },
            columns: eduBlankData,

            type: 'bar',
            colors: {
                data1: '#00978F',
                data2: '#2B388F',
                data3: '#00ACED',
            },
            groups: [
                ['data1', 'data2', 'data3']
            ],

        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 13
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 2,
                    right: 2,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 500
        }
    });
    setTimeout(function() {
        chart.load({
            columns: eduSetData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}


var retire_plan2_4_Data;
var retire_plan2_4_setData;

retire_plan2_4_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    ['data3', 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 0, 3000, 3000],
    ['data4', 4000, 4000, 4000, 4000, 4000, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 0, 4000, 4000],
    ['data7', 1000, 1000, 1000, 1000, 1000, 0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data8', 1000, 1000, 1000, 1000, 0, 1000, 0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 0, 1000],
    ['data5', -2000, -2000, -2000, -2000, -2000, -1000, -1000, -1000, -1000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -1000, 1000, -0, -2000, -2000, -2000, -2000],
    ['data6', 500, 2000, -0, 1000, -0, -0, -0, 2000, 1000, 1000, 1000, 1000, 1000, -4000, 1000, -4000, -4000, -4000, -4000, -4000, -4000, 1000, 1000, -4000, 0, -4000, -4000, -4000, -4000]
]

retire_plan2_4_Data = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data7', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data8', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data6', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

]


function retire_plan2_4_barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 850
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data8: '상품6',
                data7: '상품5',
                data1: '상품4',
                data2: '상품3',
                data3: '상품2',
                data4: '상품1',
                data5: '부족 현금흐름',
                data6: '초과 현금흐름'
            },
            columns: retire_plan2_4_Data,

            type: 'bar',
            //03-20 수정
            colors: {
                data1: '#00978F',
                data2: '#2B388F',
                data3: '#1B75BA',
                data4: '#00ACED',
                data7: '#D5DE2C',
                data8: '#de2c77',
                data5: '#e8b0fd',
                data6: '#d9f6b3'
            },
            groups: [
                ['data1', 'data2', 'data3', 'data4','data7','data8', 'data5', 'data6']
            ],
             order: null  //03-20 수정
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 13
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 2,
                    right: 2,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: retire_plan2_4_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}



var debt_plan1_1_Data;
var debt_plan1_1_setData;
//03-27 수정
debt_plan1_1_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data3', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    ['data1', 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
]
//03-27 수정
debt_plan1_1_Data = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

]

function debt_plan1_1_barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 1000
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '만기상환금',
                data2: '원리금',
                data3: '거치이자',
            },
            columns: debt_plan1_1_Data,

            type: 'bar',
            //03-27 수정
            colors: {
                data1: '#00ACED',
                data2: '#1B75BA',
                data3: '#2B388F',
            },
            groups: [
                ['data1', 'data2', 'data3']
            ],
            order: null
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 13
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",

                },

                padding: {
                    left: 1,
                    right: 3,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: debt_plan1_1_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}

var debt_plan1_1_Data;
var debt_plan1_1_setData;

page08_setData= [
    ['data1',500,1200,1000,900,900,900,900,900,900,900,900,900],
    ['data2',500,550,550,550,550,550,550,520,510,550,550,550]

]

page08_Data = [
    ['data1', 0,0,0,0,0,0,0,0,0,0,0,0],
    ['data2', 0,0,0,0,0,0,0,0,0,0,0,0],


]
function page08(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 560,
            height: 262
        },
        legend: {
            show: false
        },
        padding: {
          right: 40
        },
        data: {
            columns: page08_setData,
            type: 'line',
            colors: {
                data1: '#00ACED',
                data2: '#1B75BA',
            },
        },
        axis: {
            x: {

                padding: {
                    left: 1,
                    right: 1,
                }
            },
            y: {

            }
        },
        tooltip: {
            show: false
        },
        point: {
          show: false
        }
    });
}


var page11_blankData;
var page11_setData;

page11_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data3', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data4', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],

]

page11_blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],



]


function page11(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 600,
            height : 200
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '은퇴 전 소득',
                data2: '공적연금',
                data3: '은퇴 후 소득',
                data4: '퇴직금'
            },
            columns: page11_blankData,

            type: 'bar',
            colors: {
                data1: '#00ACED',
                data2: '#1B75BA',
                data3: '#29388F',
                data4: '#7E3F96'

            },
            groups: [
                ['data1', 'data2', 'data3', 'data4']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11,
            height: 1
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 2,
                    right: 4,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page11_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}

var page11_blankData2;
var page11_setData2;

page11_setData2 = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
    ['data2', 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
    ['data3', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data4', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data5', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],

]

page11_blankData2 = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],



]


function page11_2(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 600,
            height : 200
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '목돈마련',
                data2: '부채상환',
                data3: '자녀교육비',
                data4: '은퇴후 생활비',
                data5: '은퇴전 생활비',
            },
            columns: page11_blankData2,

            type: 'bar',
            colors: {
                data1: '#000',
                data2: '#808284',
                data3: '#BBBDBF',
                data4: '#D5DE2C',
                data5: '#109890'

            },
            groups: [
                ['data1', 'data2', 'data3', 'data4', 'data5']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11,
            height: 1
        },
        axis: {
          x: {
             show: false,

              padding: {
                  left: 2,
                  right: 4,
              }
            },
            y: {
                label: {
                    text: ""
                }
            },


        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page11_setData2
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}



var page13_SetData;
var page13_BlankData;
page13_SetData = [
    ['x', 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,64,65,67,68,69,70,71,72,73,74],
    ['data1', 0, 100, 500, 500, 0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500, 500, 500, 0,0,0,0,0,0,0,0,0,0,0,],
    ['data2', 100, 100, 100, 100, 100, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 100, 100, 100, 0, 0,0,0,0,0,0,0,0,0,],

]

page13_BlankData = [
    ['x', 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,64,65,67,68,69,70,71,72,73,74],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

]

function page13_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 950,
           height: 300
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '나윤성',
                data2: '나윤미',
            },
            columns: page13_BlankData,

            type: 'bar',
            colors: {
                data1: '#2B388F',
                data2: '#00ACED',
            },
            groups: [
                ['data1', 'data2']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 13
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },


            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 500
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page13_SetData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}



var page15_blankData;
var page15_setData;

page15_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 8500, 8000, 7500, 7000, 6500, 6000, 5500, 5000, 4500, 4000, 3500, 3000, 2500, 2000, 1500, 1000, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -500, -1000, -1500, -2000, -2500, -3000, -3500, -4000, -4500, -5000, -5500],
]

page15_blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function page15(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 1000,
            height : 450
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '은퇴 전 소득',
                data2: '공적연금',

            },
            columns: page15_blankData,

            type: 'area',
            colors: {
                data1: '#00ACED',
                data2: '#7E3F96',


            },
            groups: [
                ['data1', 'data2']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11,
            height: 1
        },
        axis: {
            x: {
                label: {
                    text: "고객나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 2,
                    right: 4,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page15_setData

        });
    }, 500);
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}

var page17_blankData;
var page17_setData;

page17_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    ['data3', 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
    ['data4', 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000],
    ['data5', -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    ['data6', -2000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000]
]

page17_blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data6', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function page17_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 770,
            height:240
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '공적연금',
                data2: '연금자산',
                data3: '주택연금',
                data4: '임대수익',
                data5: '부족 현금흐름',
                data6: ' 초과 현금흐름'
            },
            columns: page17_blankData,

            type: 'bar',
            colors: {
                data1: '#00978F',
                data2: '#2B388F',
                data3: '#1B75BA',
                data4: '#00ACED',
                data5: '#e8b0fd',
                data6: '#d9f6b3'
            },
            groups: [
                ['data1', 'data2', 'data3', 'data4', 'data5', 'data6']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 3,
                    right: 3,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page17_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}


var page18_blankData;
var page18_setData;

page18_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    ['data3', 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
    ['data4', 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000],
    ['data5', -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    ['data6', -2000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000, -4000]
]

page18_blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data6', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function page18_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 770,
            height:240
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '공적연금',
                data2: '연금자산',
                data3: '주택연금',
                data4: '임대수익',
                data5: '부족 현금흐름',
                data6: ' 초과 현금흐름'
            },
            columns: page18_blankData,

            type: 'bar',
            colors: {
                data1: '#00978F',
                data2: '#2B388F',
                data3: '#1B75BA',
                data4: '#00ACED',
                data5: '#e8b0fd',
                data6: '#d9f6b3'
            },
            groups: [
                ['data1', 'data2', 'data3', 'data4', 'data5', 'data6']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 3,
                    right: 3,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page18_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}


var page20_blankData;
var page20_setData;

page20_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    ['data3', 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]


]

page20_blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


]


function page20_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 770,
            height:320
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '공적연금',
                data2: '연금자산',
                data3: '주택연금',
                data4: '임대수익',

            },
            columns: page20_blankData,

            type: 'bar',
            colors: {
                data1: '#1B75BA',
                data2: '#2B388F',

                data3: '#00978F',

            },
            groups: [
                ['data1', 'data2', 'data3']
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 3,
                    right: 3,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page20_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}



var page27_SetData;
var page27_BlankData;
page27_SetData = [
  //['x', 40, 50, 60, 70, 80, 90, 100],
    ['data1',300,300,300,300,100,100,100,100],
    ['data2',100,100,100,100,100,100,100,100],
    ['data3',100,100,100,0,0,0,0,0],
    ['data4',100,100,100,0,0,0,0,0],
    ['data5',100,100,100,0,0,0,0,0],


]

page27_BlankData = [
    //['x', 40, 50, 60, 70, 80, 90, 100],
    ['data1', 0, 0, 0, 0, 0, 0, 0,0],
    ['data2', 0, 0, 0, 0, 0, 0, 0,0],
    ['data3', 0, 0, 0, 0, 0, 0, 0,0],
    ['data4', 0, 0, 0, 0, 0, 0, 0,0],
    ['data5', 0, 0, 0, 0, 0, 0, 0,0],


]

function page27_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 951,
           height: 300
        },
        legend: {
            show: false
        },
        data: {
            //x: 'x',
            names: {
                data1: '나윤성',
                data2: '나윤미',
            },
            columns: page27_BlankData,

            type: 'bar',
            colors: {
                data1: '#1B75BB',
                data2: '#00ADEE',
                data3: '#44C7F4',
                data4: '#ABE0F9',
                data5: '#D3EEFB',
            },
            groups: [
                ['data1', 'data2', 'data3', 'data4', 'data5']
            ],
            order: null
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width:100
        },
        axis: {
            x: {
                padding: {
                  right: 1
                },
                type: 'category',
                 categories: ['45', '50', '55', '60', '70', '80', '90', '100'],
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },
                tick : {
                  culling: false,
                  centered: true
                },

            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 500
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page27_SetData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}



var page29_SetData;
var page29_BlankData;
page29_SetData = [
  //['x', 40, 50, 60, 70, 80, 90, 100],
    ['data1',300,300,300,300,100,100,100,0],
    ['data2',100,100,100,100,100,100,100,0],
    ['data3',100,100,100,0,0,0,0,0],
    ['data4',100,100,100,0,0,0,0,0],
]

page29_BlankData = [
    //['x', 40, 50, 60, 70, 80, 90, 100],
    ['data1', 0, 0, 0, 0, 0, 0, 0,0],
    ['data2', 0, 0, 0, 0, 0, 0, 0,0],
    ['data3', 0, 0, 0, 0, 0, 0, 0,0],
    ['data4', 0, 0, 0, 0, 0, 0, 0,0],
]

function page29_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 951,
           height: 300
        },
        legend: {
            show: false
        },
        data: {
            //x: 'x',
            names: {
                data1: '나윤성',
                data2: '나윤미',
            },
            columns: page29_BlankData,

            type: 'bar',
            colors: {
                data1: '#2B388F',
                data2: '#1B75BB',
                data3: '#44C7F4',
                data4: '#D3EEFB',

            },
            groups: [
                ['data1', 'data2', 'data3', 'data4']
            ],
            order: null
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width:100
        },
        axis: {
            x: {
                padding: {
                  right: 1
                },
                type: 'category',
                 categories: ['45', '50', '55', '60', '70', '80', '90', '100'],
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },
                tick : {
                  culling: false,
                  centered: true
                },

            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 500
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page29_SetData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}


var page28_blankData;
var page28_setData;

page28_setData = [
    ['x', 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
    ['data1', 13000, 12000, 11000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 800, 700, 600, 500, 400, 300, 200, 100, 0]
]

page28_blankData = [
    ['x', 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function page28(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 800,
            height : 250
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '만원'
            },
            columns: page28_blankData,

            type: 'area',
            colors: {
                data1: '#00988f',
            }
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11,
            height: 1
        },
        axis: {
            x: {
                label: {
                    text: "고객나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 2,
                    right: 4,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page28_setData

        });
    }, 500);
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}


var page38_blankData;
var page38_setData;

page38_setData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    ['data2', 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    ['data3', 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],

]

page38_blankData = [
    ['x', 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    ['data1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['data3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

]


function page38_Barstacked(bindDiv) {
    var chart = c3.generate({
        bindto: bindDiv,
        size: {
            width: 961,
            height:300
        },
        legend: {
            show: false
        },
        data: {
            x: 'x',
            names: {
                data1: '만기상환금',
                data2: '원리금',
                data3: '거치이자',

            },
            columns: page38_blankData,

            type: 'bar',
            colors: {
                data1: '#2B388F',
                data2: '#1B75BB',
                data3: '#44C7F4',
            },
            groups: [
                ['data1', 'data2', 'data3', ]
            ],
        },
        grid: {
            y: {
                lines: [{
                    value: 0
                }]
            }
        },

        bar: {
            width: 11
        },
        axis: {
            x: {
                label: {
                    text: "나이/세",
                    position: 'inner-righ',
                },

                padding: {
                    left: 3,
                    right: 3,
                }
            },
            y: {
                label: {
                    text: "(만원)"
                }
            }
        },
        tooltip: {
            show: false
        },
        transition: {
            duration: 1000
        }
    });
    setTimeout(function() {
        chart.load({
            columns: page38_setData
        });
    }, 500)
    // 03-20 stroke 수정 start
    setTimeout(function() {
      var chartLength = $(".c3-chart-bars .c3-chart-bar")
      for(var a = 0; a <= chartLength.length; a++){
        var HeightLength = new Array();
        var bar = $(".c3-shapes-data"+ a );
        var barShape = $(".c3-shapes-data"+ a +" .c3-shape");
        for (var i = 0; i <= barShape.length; i++) {
          HeightLength.push($(barShape[i]).height())

        }
        for (var b = 0; b <= HeightLength.length; b++) {
          if(HeightLength[b] == 0){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }else if(HeightLength[b] == 1){
            bar.children(".c3-shape.c3-shape-" + b).css('stroke-width', '0');
          }
        }
      }
    }, 1000)
    // 03-20 stroke 수정 end
}
