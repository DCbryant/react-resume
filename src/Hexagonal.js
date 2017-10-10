import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';


let timer = null
export default class Hexagonal extends Component{
    getOtion() {
        const option = {
            tooltip: {},
            legend: {
                data: ['能力', '兴趣'],
                x:'right',
                y:'top'
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: 'HTML&HTML5', max: 100},
                    { name: 'CSS&CSS3', max: 100},
                    { name: 'JS', max: 100},
                    { name: 'jQuery', max: 100},
                    { name: 'node',max:100},
                    { name: 'React JS', max:100}
                ]
            },
            series: [{
                name: '能力 vs 兴趣（skill vs interesting）',
                type: 'radar',
                
                data : [
		            {
		                value : [90, 80, 75, 75, 65, 70],
		                name : '能力'
		            },
		            {
		                value : [80, 90, 90, 70, 80, 90],
		                name : '兴趣'
		            }
		        ]
            }]
        };
        return option;
    }
    onChartReady(chart) {
        timer = setTimeout(function() {
            chart.hideLoading();
        }, 1000);
    }
    getLoadingOption() {
        const option = {
            text: '加载中...',
            color: '#4413c2',
            textColor: '#270240',
            maskColor: 'rgba(67, 48, 48, 0.3)',
            zlevel: 0
        };
        return option;
    }
    componentWillUnmount() {
        clearTimeout(timer);
    }

    render() {
        return (
            <div className='hexagonal'>
                <div className='parent'>
                    <ReactEcharts
                        option={this.getOtion()}
                        onChartReady={this.onChartReady}
                        loadingOption={this.getLoadingOption()}
                        showLoading={true} />
                </div>
            </div>
        )
    }
}