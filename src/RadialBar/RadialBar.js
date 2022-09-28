import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#f08080", "#ffff66", "#90EE90"],
        labels: ["A", "B", "C"],
        legend: {
          show: true,
          floating: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,

          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          height: undefined,
          formatter: function (seriesName, opts) {
            return [
              seriesName + " " + opts.w.globals.series[opts.seriesIndex] + "%"
            ];
          },
          position: "left",
          offsetX: 100,
          offsetY: 40,
          labels: {
            useSeriesColors: true
          },
          markers: {
            width: 0,
            height: 0,
            strokeWidth: 0,
            strokeColor: "#fff",
            radius: 0,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          }
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: false,
            startAngle: 0,
            endAngle: -180,
            offsetX: 0,
            offsetY: 0,
            hollow: {
              margin: 5,
              size: "50%",
              background: "transparent",
              image: undefined,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageClipped: true,
              position: "front",
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: "#f2f2f2",
              strokeWidth: "97%",
              opacity: 1,
              margin: 5,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: undefined,
                color: undefined,
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: undefined,
                color: undefined,
                offsetY: 6,
                formatter: function (val) {
                  return val;
                }
              },
              total: {
                show: true,
                label: "Total",
                color: "#373d3f",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                }
              }
            }
          }
        }
      },

      series: [30, 55, 41]
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="370"
        />
      </div>
    );
  }
}

export default RadialBar;
