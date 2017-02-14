// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var d3 = require('d3');
var functionPlot = require('function-plot');
console.log("renderer called");
alert("renbder")
var icRange=  2
var icNewRange=  0.75
var cpRange=   10.2
var xLimit=20
var ai = 50.20 ,bi = 27.67,ci = 1.74
var ac = 69.86 ,bc = 8.93,cc = -0.22
var ap = 11.16,bp = 1.63,cp = 2+cpRange
var strInfancy = ai+'+'+bi+'*(1-exp(-'+ ci +'*x))'
var strChildehood = ac+'+'+bc+'*x+'+ cc +'*x^2'
var strPuberty = ap+'/(1+exp(-'+bp+'*(x-'+cp+')))'

functionPlot({
    target: '#demo',
    xAxis: {
        label: 'x - axis',
        domain: [0, xLimit]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 200]
    },
    data: [
        {
            fn: strInfancy//Infancy: Y=a+b(1-exp(-c*x))
            ,color:'green',
            range:[0,icNewRange]
        },
        {
            fn: strInfancy+'+7.697*x'//Infancy: Y=a+b(1-exp(-c*x))
            ,color:'black',
            range:[icNewRange,icRange]
        },
        {
            fn: strChildehood //Childehood: Y=a+b(1-exp(-c*x))
            ,color:'blue'
            ,range:[icRange,cpRange]
        },{
            fn:  strChildehood +'+' + strPuberty//Puberty: y=ap/(1+exp(-bp(t-tv)))
            ,range:[cpRange,xLimit]
            ,color:'red'
        }

    ]
});




