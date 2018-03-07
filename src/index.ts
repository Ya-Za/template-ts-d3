import * as d3 from 'd3';

function main() {
    const svg = d3
        .select('body')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .style('background-color', 'RoyalBlue');
}

main();
