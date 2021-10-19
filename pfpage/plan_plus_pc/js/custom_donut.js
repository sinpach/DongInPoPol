
// 도넛 차트 커스텀 donutChart(bindDiv,patterColor,mainTitle,data)

function donutChart(bindDiv,patterColor,mainTitle,data,width){
    var chart = c3.generate({
        bindto: bindDiv,
        data: {
            columns: [
                ['data1', 0],
                ['', 100],
            ],
            type : 'donut',
            labels : false,
            order : null
        },
        donut: {
            title: '',
            width: 12
        },
        color: {
            pattern: [patterColor,'#ddd']
        },
        legend:{
            hide: true
        },
        tooltip: {
            show: false
        }
    });

    var title = d3.select(bindDiv+' .c3-chart-arcs-title');
    title.text('');
    if(mainTitle.length > 1){
        title.attr('y', -24).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
        title.insert('tspan').text(mainTitle[1]).attr('dy', 24).attr('x', 0);
    }else{
        title.attr('y', -10).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
    }
    title.insert('tspan').text(data+'%').attr('dy', 36).attr('x', 0).attr('class','title');
    $(bindDiv+' .c3-chart-arcs-title tspan').css({'font-size':'18px'});
    $(bindDiv+' .c3-chart-arcs-title .title').css({'font-size':'36px', 'fill' : patterColor,'font-weight':'bold'});
    //도넛 그래프 수정 03-08 start
    setTimeout(function () {
        if(data > 100){

          chart.load({
              columns: [
                  ['data1', data],
                  ['',0],
              ]
            });
        }else{


          chart.load({
              columns: [
                  ['data1', data],
                  ['', 100-data],
              ]
          });
        }
        //도넛 그래프 수정 03-08 end
        if(width){
                chart.resize({width:width});
        }
        if($('.custom-chart-title')){
            $('.custom-chart-title').fadeIn();
        }
    }, 1000);

}


function donutChart2(bindDiv,patterColor1,patterColor2,mainTitle,data1,data2,width){
    var chart = c3.generate({
        bindto: bindDiv,
        data: {
            columns: [
                ['data2', 0],
                ['', 100],
                ['data1', 0],
            ],
            type : 'donut',
            labels : false,
            order : null
        },
        donut: {
            title: '',
            width: 30
        },
        color: {
            pattern: [patterColor1,'#ddd',patterColor2,]
        },
        legend:{
            hide: true
        },
        tooltip: {
            show: false
        }
    });

    var title = d3.select(bindDiv+' .c3-chart-arcs-title');
    title.text('');
    if(mainTitle.length > 1){
        title.attr('y', -24).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
        title.insert('tspan').text(mainTitle[1]).attr('dy', 24).attr('x', 0);
    }else{
        title.attr('y', -10).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
    }
    title.insert('tspan').text(data1+'%').attr('dy', 36).attr('x', 0).attr('class','title');
    $(bindDiv+' .c3-chart-arcs-title tspan').css({'font-size':'18px'});
    $(bindDiv+' .c3-chart-arcs-title .title').css({'font-size':'36px', 'fill' : patterColor2,'font-weight':'bold'});
    setTimeout(function () {
        chart.load({
            columns: [
                ['data1', data1],
                ['data2', data2],
                ['', 100-data1-data2]
            ]
        });
        if(width){
                chart.resize({width:width});
        }
        if($('.custom-chart-title')){
            $('.custom-chart-title').fadeIn();
        }
    }, 1000);

}


/*설계결과 06페이지*/

function donutChart3(bindDiv,patterColor,mainTitle,data,datatext,width){
    var chart = c3.generate({
        bindto: bindDiv,
        data: {
            columns: [
                ['data1', 0],
                ['', 100],
            ],
            type : 'donut',
            labels : false,
            order : null
        },
        donut: {
            title: '',
            width: 15
        },
        color: {
            pattern: [patterColor,'#ddd']
        },
        legend:{
            hide: true
        },
        tooltip: {
            show: false
        }
    });

    var title = d3.select(bindDiv+' .c3-chart-arcs-title');
    title.text('');
    if(mainTitle.length > 1){
        title.attr('y', -24).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
        title.insert('tspan').text(mainTitle[1]  ).attr('dy', 24).attr('x', 0);
    }else{
        title.attr('y', -10).attr('x', 0);
        title.insert('tspan').text(mainTitle[0] ).attr('dy', 0).attr('x', 0);
    }
    title.insert('tspan').text(datatext).attr('dy', 36).attr('x', 0).attr('class','title');
    title.insert('tspan').insert('tspan').text('억원')
    $(bindDiv+' .c3-chart-arcs-title tspan').css({'font-size':'18px'});
    $(bindDiv+' .c3-chart-arcs-title .title').css({'font-size':'36px', 'fill' : patterColor,'font-weight':'bold'});
    $(bindDiv+' .c3-chart-arcs-title>tspan>tspan').css({'font-size':'18px', 'fill' : patterColor,'font-weight':'bold'});
    setTimeout(function () {
        chart.load({
            columns: [
                ['data1', data],
                ['', 100-data],
            ]
        });
        if(width){
                chart.resize({width:width});
        }
        if($('.custom-chart-title')){
            $('.custom-chart-title').fadeIn();
        }
    }, 1000);

}

function donutChart_page16(bindDiv,patterColor,mainTitle,data,width){
    var chart = c3.generate({
        bindto: bindDiv,
        data: {
            columns: [
                ['data1', 0],
                ['', 100],
            ],
            type : 'donut',
            labels : false,
            order : null
        },
        donut: {
            title: '',
            width: 10
        },
        color: {
            pattern: [patterColor,'#ddd']
        },
        legend:{
            hide: true
        },
        tooltip: {
            show: false
        },
        size: {
          height: 170
        }
    });

    var title = d3.select(bindDiv+' .c3-chart-arcs-title');
    title.text('');
    if(mainTitle.length > 1){
        title.attr('y', -24).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
        title.insert('tspan').text(mainTitle[1]).attr('dy', 24).attr('x', 0);
    }else{
        title.attr('y', -10).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
    }
    title.insert('tspan').text(data+'%').attr('dy', 36).attr('x', 0).attr('class','title');
    $(bindDiv+' .c3-chart-arcs-title tspan').css({'font-size':'14px'});
    $(bindDiv+' .c3-chart-arcs-title .title').css({'font-size':'32px', 'fill' : patterColor,'font-weight':'bold'});
    setTimeout(function () {
        chart.load({
            columns: [
                ['data1', data],
                ['', 100-data],
            ]
        });
        if(width){
                chart.resize({width:width});
        }
        if($('.custom-chart-title')){
            $('.custom-chart-title').fadeIn();
        }
    }, 1000);

}


function donutChart_page31(bindDiv,patterColor,mainTitle,data,datatext,width){
    var chart = c3.generate({
        bindto: bindDiv,
        data: {
            columns: [
                ['data1', 0],
                ['', 100],
            ],
            type : 'donut',
            labels : false,
            order : null
        },
        donut: {
            title: '',
            width: 15
        },
        color: {
            pattern: [patterColor,'#ddd']
        },
        legend:{
            hide: true
        },
        tooltip: {
            show: false
        }
    });

    var title = d3.select(bindDiv+' .c3-chart-arcs-title');
    title.text('');
    if(mainTitle.length > 1){
        title.attr('y', -24).attr('x', 0);
        title.insert('tspan').text(mainTitle[0]).attr('dy', 0).attr('x', 0);
        title.insert('tspan').text(mainTitle[1]  ).attr('dy', 24).attr('x', 0).attr('style', 'fill:#00aced');
    }else{
        title.attr('y', -10).attr('x', 0);
        title.insert('tspan').text(mainTitle[0] ).attr('dy', 0).attr('x', 0);
    }
    title.insert('tspan').text(datatext).attr('dy', 36).attr('x', 0).attr('class','title');
    title.insert('tspan').insert('tspan').text('만원')
    $(bindDiv+' .c3-chart-arcs-title tspan').css({'font-size':'18px'});
    $(bindDiv+' .c3-chart-arcs-title .title').css({'font-size':'28px', 'fill' : patterColor,'font-weight':'bold'});
    $(bindDiv+' .c3-chart-arcs-title>tspan>tspan').css({'font-size':'18px', 'fill' : patterColor,'font-weight':'bold'});
    setTimeout(function () {
        chart.load({
            columns: [
                ['data1', data],
                ['', 100-data],
            ]
        });
        if(width){
                chart.resize({width:width});
        }
        if($('.custom-chart-title')){
            $('.custom-chart-title').fadeIn();
        }
    }, 1000);

}
