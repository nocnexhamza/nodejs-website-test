import React, { useRef, useLayoutEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import s from "./Vector.module.scss";

am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);

export default function VectorMap() {

  const chart = useRef(null);
  useLayoutEffect(() => {
    let vectorMap = am4core.create("chartdiv", am4maps.MapChart);
    vectorMap.geodata = am4geodata_worldLow;
    vectorMap.projection = new am4maps.projections.Miller();
    let polygonSeries = vectorMap.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.applyOnClones = true;
    polygonTemplate.togglable = true;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeOpacity = 0.5;
    polygonTemplate.fill = vectorMap.colors.getIndex(0);
    let lastSelected;
    polygonTemplate.events.on("hit", function(ev) {
      if (lastSelected) {
        lastSelected.isActive = false;
      }
      ev.target.series.chart.zoomToMapObject(ev.target);
      if (lastSelected !== ev.target) {
        lastSelected = ev.target;
      }
    })

    let ss = polygonTemplate.states.create("active");
    ss.properties.fill = vectorMap.colors.getIndex(2);

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = vectorMap.colors.getIndex(4);

    polygonSeries.exclude = ["AQ"];

    vectorMap.zoomControl = new am4maps.ZoomControl();

    let homeButton = new am4core.Button();
    homeButton.events.on("hit", function(){
      vectorMap.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    homeButton.marginBottom = 10;
    homeButton.parent = vectorMap.zoomControl;
    homeButton.insertBefore(vectorMap.zoomControl.plusButton);

    chart.current = vectorMap;

    return () => {
      vectorMap.dispose();
    };
  }, [])

  return (
      <div className={s.amchartsMap} id="chartdiv"></div>
  )
}
