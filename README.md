Outcrop Field Book: phone geological compass, field map, log, stereonet and field guide
=======================================================================================

The compass, GPS and base maps work when the app is opened in the phone's own browser
over https (Chrome on Android, Safari on iPhone). To set it up once:

1. Unzip this file on a computer.
2. Go to app.netlify.com/drop and drag the unzipped folder onto the page
   (sign in with a free account so the site is kept), or upload the files to a
   GitHub repository and turn on Settings > Pages.
3. Open the link on your phone in Chrome, then menu > Add to Home screen / Install app.
4. Open it once with signal. The app then works offline. Map tiles you have looked at
   are kept for offline use too, so look over your field area at the zooms you need
   before you lose signal.

Updating: replace the files on the same site. The phone picks up the new version the
next time the app is opened with signal (open it twice if the old one still shows).

In the field
- Measure: tap Start compass (allow motion and location). Calibrate the compass each
  morning (figure-of-eight), set the declination in Settings, and check the phone
  against an analogue compass on a known bearing.
- Map: satellite, satellite + labels, OpenStreetMap, topographic base maps; readings
  as strike/dip symbols; draw contacts, faults, thrusts, fold traces and rock units;
  "Walk it" adds a GPS point every 10 m as you walk a contact; add scanned maps as
  image overlays; "Open here in Google Maps".
- Projected planes: open a plane reading and tap "Project on map" (or Map > Project a
  plane). Shows the strike line, structure contours and, with signal, the ground trace
  from a terrain model. Saved planes can be shown or hidden from the list at any time,
  appear on the stereonet, and the trace can be saved as an inferred contact.
- Layers button on the map:
  * Your maps: load a georeferenced map as in QField: GeoTIFF, JPG/PNG + world file
    (.jgw/.pgw, pick the coordinate system: MGA2020, MGA94, AMG84/66, UTM, Nepal MUTM,
    or a proj4 string), or a KMZ/KML ground overlay. Reprojected onto the map and kept
    on the phone for offline use; show/hide and see-through slider.
  * Shapefiles: .zip, or .shp + .dbf + .prj (+ .cpg) chosen together; GeoJSON too.
    Colour by any field, tap a feature for its attributes.
  * Australia geology and minerals (Geoscience Australia): surface geology 1:1M and
    1:2.5M by rock unit, lithology or age, faults, metamorphic geology, operating mines,
    deposits, identified mineral resources by commodity.
- WA layers (same Layers button): GSWA bedrock geology 1:100k / 1:500k / 1:2.5M,
  structures, Cenozoic geology, regolith, scanned 1:100k and 1:250k map sheets, MINEDEX,
  tenements, open-file drillholes, WAMEX, magnetics, radiometrics, gravity. Tap the map
  to see the unit, deposit or tenement details. Western Australia only; needs signal.
- Google Earth: Log > Google Earth (KMZ) saves strike/dip symbols with dip labels
  (lineations as arrows with plunge labels), coloured by structure, in folders.
  Map > Export map to Google Earth adds contacts, faults, units and projected planes.
- Interpret: stereonet, density, sets, fold axis, rose; an area drawn on the map can
  be opened as its own stereonet.
- Readings and map work stay on the phone. Use Log > Backup at the end of each day.

Exports: CSV (Easting/Northing in UTM or Nepal MUTM, lat/lon, dip, dip direction,
strike, trend, plunge, rake, notes), GeoJSON and KML of readings, map GeoJSON/KML
(lines, units, readings) for QGIS / Google Earth / 3D Geo, PNG of the stereonet and
rose, and a JSON backup with photos and map images.
