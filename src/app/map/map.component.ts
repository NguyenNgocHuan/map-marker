import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
const H = window['H'];
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private platform: any;
  @ViewChild('map', { static: false }) public mapElement: ElementRef;

  map;
  ui;
  behavior;

  markersGroup;
  globalIcon;
  markerSvg =
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" viewBox="-138 121.2 221.2 259.8" style="enable-background:new -138 121.2 221.2 259.8;" xml:space="preserve">' +
    '<g>' +
    '<path fill="' +
    'white' +
    '" d="M28.1,163.4c-15.8-16.3-36.6-25.3-58.5-25.3c-46.8,0-84.8,41.1-84.8,91.6c0,13.3,2.5,25.9,7.4,37.2c12.9,30.9,48.3,84.6,68,109.5c2.3,2.9,5.7,4.6,9.4,4.6c3.5,0,6.7-1.5,9.1-4.2l0.1-0.2l0.1-0.2c19.5-24.5,54.8-77.9,68-109.4c4.9-11.9,7.3-24.4,7.3-37.1C54.4,204.7,45.1,180.9,28.1,163.4z M39.7,263.8c-12.5,29.9-47,82.5-66.8,107.4c-0.9,1-2,1.6-3.3,1.6s-2.5-0.6-3.3-1.6c-19.7-24.9-54.3-77.6-66.8-107.6c-4.5-10.5-6.7-21.9-6.7-34c0-46,34.5-83.5,76.9-83.5s76.9,37.4,76.7,83.7C46.4,241.9,44.1,253.4,39.7,263.8z"/>' +
    '<path fill="' +
    '#00aeba' +
    '" d="M-30.3,146.4c-42.4,0-76.9,37.4-76.9,83.5c0,12,2.2,23.4,6.7,34c12.5,30,47.1,82.6,66.8,107.6c0.8,1,2,1.6,3.3,1.6s2.4-0.6,3.3-1.6C-7.2,346.7,27.3,294,39.8,264c4.4-10.6,6.7-22.1,6.7-34C46.6,183.7,12.1,146.4-30.3,146.4z"/>' +
    '</g>' +
    '<text fill="white" style="font-size:75px; font-weight: 500; font-family: Roboto, sans-serif; cursor: default" x="-30" y="267" text-anchor="middle" alignement-baseline="middle">' +
    'numberText' +
    '</text>' +
    '</svg>';
  constructor() {
    this.platform = new H.service.Platform({
      // app_id: 'bPj4UhNkyCMOjyUxCgC9',
      // app_code: 'TGmehBPcVdPx3tKvleOiQA',
      apikey: 'VUg1r6TBo9ZaGOQAO-5WQbX9OFURMJbVr1ayGYhVcJw',
      useHTTPS: true,
    });
  }

  ngOnInit() {
  }
  createMarkerIcon(data) {
    const icon = this.markerSvg.replace('numberText', data.numberText);
    return icon;
  }

  initMap(depotLat, depotLon) {
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      // defaultLayers.normal.map,
      // defaultLayers.raster.normal.map,
      defaultLayers.vector.normal.map,
      {
        zoom: 3,
        center: { lat: depotLat, lng: depotLon },
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    const mapEvents = new H.mapevents.MapEvents(this.map);
    this.behavior = new H.mapevents.Behavior(mapEvents);
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);

    this.markersGroup = new H.map.Group();
    this.map.addObject(this.markersGroup);
    const markersToAdd = [];

    this.globalIcon = new H.map.Icon(this.markerSvg);

    // for (let index = 0; index < 1000; index++) {
    //   var newLatitude = index * 0.001 + depotLat;
    //   var newLongitude = depotLon - index * 0.001;

    //   // const icon = this.globalIcon;
    //   const icon = new H.map.Icon(
    //     this.createMarkerIcon({ numberText: newLatitude.toString().slice(-1) })
    //   );

    //   var defaultMarker = new H.map.Marker(
    //     { lat: newLatitude, lng: newLongitude },
    //     { icon: icon }
    //   );

    //   markersToAdd.push(defaultMarker);
    //   console.log('Added marker number: ' + index);
    // }
    this.addMarkersToMap(this.map);
    this.markersGroup.addObjects(markersToAdd);
    document.getElementById('box').style.display = 'none';
  }

  public ngAfterViewInit() {
    this.initMap(40.70217122, 22.9304716);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
    this.map.dispose();
  }

  private resizeHandler = () => {
    this.map.getViewPort().resize();
  };
  addMarkersToMap(map) {
    // var parisMarker = new H.map.DomMarker({lat:48.8567, lng:2.3508});
    // map.addObject(parisMarker);
  
    // var romeMarker = new H.map.DomMarker({lat:41.9, lng: 12.5});
    // map.addObject(romeMarker);
  
    // var berlinMarker = new H.map.DomMarker({lat:52.5166, lng:13.3833});
    // map.addObject(berlinMarker);
  
    var gebzeMarker = new H.map.DomMarker({lat:40.80276, lng: 29.43068});
    map.addObject(gebzeMarker);
  
    var pensacolaMarker = new H.map.DomMarker({lat:30.433283, lng:-87.240372});
    map.addObject(pensacolaMarker);
    var haiPhongMarker = new H.map.DomMarker({lat:20.865139, lng:106.683830});
    map.addObject(haiPhongMarker);
    haiPhongMarker.addEventListener('tap', this.logEvent);
    haiPhongMarker.addEventListener('pointerenter', this.enterEvent);
    haiPhongMarker.addEventListener('pointerleave', this.leaveEvent);
  }
  logEvent(evt) {
    var s= document.getElementById('box') as HTMLElement;
    s.style.display = 'block';
    s.style.position = 'absolute';
    s.style.top = evt.originalEvent.clientY +'px';
    s.style.left = evt.originalEvent.clientX + 50 + 'px';

    console.log(evt);
    console.log(s);
  }
  enterEvent(e) {
    // var s= document.getElementById('box') as HTMLElement;
    // s.style.display = 'block';
    // s.style.position = 'absolute';
    // s.style.top = e.originalEvent.clientY +'px';
    // s.style.left = eevt.originalEvent.clientX + 50 + 'px';
  }
  leaveEvent(e) {
    var s= document.getElementById('box') as HTMLElement;
    s.style.display = 'none';
  }
}
