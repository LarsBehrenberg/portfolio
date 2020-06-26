import React, { useEffect } from 'react';
import SEO from '../../components/seo';
import '../../styles/choropleth-map.css';
import * as d3 from 'd3';
import * as topojson from 'topojson';

const ChoroplethMap = () => {
  const educationJSON =
    'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json';
  const countyJSON =
    'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json';

  const colors = [
    '#67001f',
    '#b2182b',
    '#d6604d',
    '#f4a582',
    '#fddbc7',
    '#f7f7f7',
    '#d1e5f0',
    '#92c5de',
    '#4393c3',
    '#2166ac',
    '#053061',
  ];

  // load all data and then execute function
  useEffect(() => {
    Promise.all([
      // D3 function
      d3.json(educationJSON),
      d3.json(countyJSON),
    ]).then(function(data) {
      // D3 Projection - "Wold"-Map to 2d display
      // path to convert geoJSON into paths
      var path = d3.geoPath();
      //  .projection(projection); // tell it to use usa projection

      // Create svg with height and width in #svgContainer div
      const svg = d3
        .select('#svgContainer')
        .append('svg')
        .attr('viewBox', `0 0 950 620`);

      const div = d3
        .select('#svgContainer')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

      const educationDataset = data[0];
      // const countyDataset = data[1];

      // const colorScale = d3.scaleSequential()
      //     .interpolator(d3.interpolatePuRd)
      //     .domain([d3.min(educationDataset, (d) => d.bachelorsOrHigher), d3.max(educationDataset, (d) => d.bachelorsOrHigher)]);

      var colorScale = d3
        .scaleQuantile()
        .range(colors.reverse())
        .domain([
          d3.min(educationDataset, (d) => d.bachelorsOrHigher),
          d3.max(educationDataset, (d) => d.bachelorsOrHigher),
        ]);

      var geojson = topojson.feature(data[1], data[1].objects.counties)
        .features;

      svg
        .selectAll('.state')
        .data(geojson)
        .enter()
        .append('path')
        .attr('class', 'county')
        .attr('d', path)
        .style('stroke', 'white')
        .style('stroke-width', '1')
        .style('fill', (d) => {
          // for (let x = 0; x < educationDataset.length; x++) {
          //     if (d.id == educationDataset[x].fips) {
          //         return colorScale(educationDataset[x].bachelorsOrHigher)
          //     }
          // }

          var result = educationDataset.filter(function(obj) {
            return obj.fips === d.id;
          });

          if (result[0]) {
            return colorScale(result[0].bachelorsOrHigher);
          }
          //could not find a matching fips id in the data
          return colorScale(0);
        })

        .attr('data-fips', (d) => d.id)
        .attr('data-education', (d) => {
          // for (let x = 0; x < educationDataset.length; x++) {
          //     if (d.id == educationDataset[x].fips) {
          //         return educationDataset[x].bachelorsOrHigher;
          //     }
          // }
          var result = educationDataset.filter(function(obj) {
            return obj.fips === d.id;
          });
          if (result[0]) {
            return result[0].bachelorsOrHigher;
          }
          //could not find a matching fips id in the data
          console.log('could find data for: ', d.id);
          return 0;
        })
        .on('mouseover', function(d) {
          // Add tooltip on hover
          div
            .transition()
            .duration(200)
            .style('opacity', 0.8);

          var htmlOutput =
            'Percentage with Bachelor<br />or higher in: ' +
            d3.select(this).attr('data-education') +
            '%';

          div
            .html(htmlOutput)
            .style('top', d3.mouse(this)[1] + 150 + 'px')
            .style('left', d3.mouse(this)[0] + 50 + 'px')
            .attr('id', 'tooltip')
            .attr('data-education', d3.select(this).attr('data-education'));
        })
        .on('mouseout', function(d) {
          div
            .transition()
            .duration(500)
            .style('opacity', 0);
        });

      // let g = svg
      // .append("g")
      // .attr("id", "legend")
      // .attr("class", "legend")

      // for (let x = 1; x < colors.length + 1; x++) {

      //         g.append("rect")
      //         .attr("width", 30)
      //         .attr("height", 20)
      //         .attr("x", w - 40)
      //         .attr("y", ((h / 2) - 20 * 3) + (20 * x))
      //         .style("stroke", "black")
      //         .attr("fill", colors[x - 1])

      // }
    });
  });

  return (
    <div>
      <SEO
        title="Choropleth Map"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h2 id="title">A Choropleth Map - coded with D3.js</h2>
      <h1 id="title">United States Educational Attainment</h1>
      <p id="description">
        Showing the percentage of adults age 25 and older with a bachelor's
        degree or higher in all different counties of the USA (2010-2014)
      </p>
      <div id="svgContainer" style={{ marginLeft: '-3vw' }}></div>
    </div>
  );
};
export default ChoroplethMap;
