(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Y+KY":function(a,r,t){"use strict";t.r(r),t.d(r,"ChartJSModule",function(){return n});var e=t("hrfs"),o=t("iInd"),b=t("8Y7J");const l=[{path:"",component:(()=>{class a{constructor(){this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"},{data:[18,48,77,9,100,27,40],label:"Series C"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={animation:!1,responsive:!0},this.lineChartColours=[{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=["2006","2007","2008","2009","2010","2011","2012"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A"},{data:[28,48,40,19,96,27,100],label:"Series B"}],this.radarChartType="radar",this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.polarAreaChartLabels=["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"],this.polarAreaChartData=[300,500,100,40,120],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea"}chartClicked(a){console.log(a)}chartHovered(a){console.log(a)}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b.Hb({type:a,selectors:[["ng-component"]],decls:62,vars:24,consts:[[1,"animated","fadeIn"],[1,"card-columns","cols-2"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["href","http://www.chartjs.org"],[1,"text-muted"],[1,"card-body"],[1,"chart-wrapper"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","labels","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","labels","legend","chartType","chartHover","chartClick"]],template:function(a,r){1&a&&(b.Tb(0,"div",0),b.Tb(1,"div",1),b.Tb(2,"div",2),b.Tb(3,"div",3),b.Dc(4," Line Chart "),b.Tb(5,"div",4),b.Tb(6,"a",5),b.Tb(7,"small",6),b.Dc(8,"docs"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(9,"div",7),b.Tb(10,"div",8),b.Tb(11,"canvas",9),b.dc("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(12,"div",2),b.Tb(13,"div",3),b.Dc(14," Bar Chart "),b.Tb(15,"div",4),b.Tb(16,"a",5),b.Tb(17,"small",6),b.Dc(18,"docs"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(19,"div",7),b.Tb(20,"div",8),b.Tb(21,"canvas",10),b.dc("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(22,"div",2),b.Tb(23,"div",3),b.Dc(24," Doughnut Chart "),b.Tb(25,"div",4),b.Tb(26,"a",5),b.Tb(27,"small",6),b.Dc(28,"docs"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(29,"div",7),b.Tb(30,"div",8),b.Tb(31,"canvas",11),b.dc("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(32,"div",2),b.Tb(33,"div",3),b.Dc(34," Radar Chart "),b.Tb(35,"div",4),b.Tb(36,"a",5),b.Tb(37,"small",6),b.Dc(38,"docs"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(39,"div",7),b.Tb(40,"div",8),b.Tb(41,"canvas",12),b.dc("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(42,"div",2),b.Tb(43,"div",3),b.Dc(44," Pie Chart "),b.Tb(45,"div",4),b.Tb(46,"a",5),b.Tb(47,"small",6),b.Dc(48,"docs"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(49,"div",7),b.Tb(50,"div",8),b.Tb(51,"canvas",11),b.dc("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(52,"div",2),b.Tb(53,"div",3),b.Dc(54," Polar Area Chart "),b.Tb(55,"div",4),b.Tb(56,"a",5),b.Tb(57,"small",6),b.Dc(58,"docs"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(59,"div",7),b.Tb(60,"div",8),b.Tb(61,"canvas",13),b.dc("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&a&&(b.Ab(11),b.lc("datasets",r.lineChartData)("labels",r.lineChartLabels)("options",r.lineChartOptions)("colors",r.lineChartColours)("legend",r.lineChartLegend)("chartType",r.lineChartType),b.Ab(10),b.lc("datasets",r.barChartData)("labels",r.barChartLabels)("options",r.barChartOptions)("legend",r.barChartLegend)("chartType",r.barChartType),b.Ab(10),b.lc("data",r.doughnutChartData)("labels",r.doughnutChartLabels)("chartType",r.doughnutChartType),b.Ab(10),b.lc("datasets",r.radarChartData)("labels",r.radarChartLabels)("chartType",r.radarChartType),b.Ab(10),b.lc("data",r.pieChartData)("labels",r.pieChartLabels)("chartType",r.pieChartType),b.Ab(10),b.lc("data",r.polarAreaChartData)("labels",r.polarAreaChartLabels)("legend",r.polarAreaLegend)("chartType",r.polarAreaChartType))},directives:[e.a],encapsulation:2}),a})(),data:{title:"Charts"}}];let i=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b.Lb({type:a}),a.\u0275inj=b.Kb({imports:[[o.g.forChild(l)],o.g]}),a})(),n=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b.Lb({type:a}),a.\u0275inj=b.Kb({imports:[[i,e.b]]}),a})()}}]);