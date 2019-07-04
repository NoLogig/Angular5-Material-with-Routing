import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { } from "googlemaps";

@Component({
  selector: 'nlg-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers: []
})
export class MapsComponent implements OnInit {

  @ViewChild('googleMaps', { static: true}) public googleMaps: ElementRef;
  map;
  gmap;
  geo: Geolocation;

  coords: Coordinates;

  constructor() {}

  async ngOnInit() {

    this.map = this.googleMaps.nativeElement;

    await this.initMap();
  }

  initMap() {
    this.geo = navigator.geolocation;
    // this.map = GoogleMaps.create(this.map);
    this.gmap = new google.maps.Map(this.map);
  }

  locateMe() {

    this.geo.getCurrentPosition(resp => {
      console.log('Latitude: %f \n Longitude %f \n', resp.coords.latitude, resp.coords.longitude);
      this.coords = resp.coords;
      this.gmap.maps.setCameraTarget({ lat: this.coords.latitude, lng: this.coords.longitude });
    }, (error) => {
      console.log('Error getting location', error);
    });

    /* let watchMe = this.geo.watchPosition();
    watchGMap.subscribe(resp => {
      // resp can be a set of coordinates, or an error (if occurre).
     console.log('Latitude: %f \n Longitude %f \n', resp.coords.latitude, resp.coords.longitude);
    }); */

    // Stop watching
    // watchGMap.unsubscribe();
  }

}

/*####### Google Geolocation API
    <div id="gmap" style="height: 400px; width: 400px; border: 2px solid black; margin: 0; padding: 0"></div>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASsr3MUTzlt9K442haNWzCNKvo2P6ZhkA&v3"></script>
    <script>
        var map;

        window.google.maps.event.addDomListener(window, "load", init);

        function init() {
            var mapOptions = {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };

            map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {

                    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map
                    });

                    map.setCenter(pos);

                });

            } else {
                alert("Geo fail");
            }
        }
        */


        
/*
       successPosition(position) {
        var msg = "Zeit: " + position.timestamp + "<br>" +
            "Breitegrad: " + position.coords.latitude + "<br>" +
            "Längengrad: " + position.coords.longitude + "<br>" +
            "Höhe" + position.coords.altitude + "<br>" +
            "Präzision: " + position.coords.accuracy + "<br>" +
            "Richtung: " + position.coords.heading + "<br>" +
            "Speed: " + position.coords.speed + "<br>";

        document.getElementById("location").innerHTML = msg;
    }
*/


        /* GOOGLE MAPs link + Geolocation coords
            <p>
        <button id="getPos">Postion Abfragen</button>
    </p>
    <p>
        <iframe src="" frameborder="0" height="400" name="map" id="map" ></iframe>
    </p>
    <p>
        <a href="#" target="_blank" id="myLink" style="display:none;">Google-Maps</a>
    </p>

    <script>
        function onSuccess(postion) {
            var gurl = "http://maps.google.de/maps?hl=de&q=loc:" + postion.coords.latitude + "," + postion.coords.longitude;

            document.getElementById("myLink").style.display = "block";
            document.getElementById("myLink").href = gurl;

            gurl += "&output=embed";

            document.getElementById("map").src = gurl;

        }
        function onError(error) {
            alert(error.code);
        }
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        document.getElementById("getPos").addEventListener("click", function () {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        });
*/
