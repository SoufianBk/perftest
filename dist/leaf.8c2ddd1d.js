var o,t,e=Date.now(),a=L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),n=L.map("map").setView([20,0],2).addLayer(a),r=new L.geoJson;r.addTo(n),$.getJSON({dataType:"json",url:"https://raw.githubusercontent.com/SoufianBk/perftest/master/data/_cities.json",success:function(a){L.geoJson(a).addTo(n);for(var s=0;s<1;s++)$(a.features).each((function(o,t){r.addData(t)}));o=Date.now(),t=o-e,console.info("Start at "+e),console.info("Stopped at "+o),console.info("Loading time = "+t)},error:function(o){console.log(o)}});
//# sourceMappingURL=leaf.8c2ddd1d.js.map
