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
- Interpret: stereonet, density, sets, fold axis, rose; an area drawn on the map can
  be opened as its own stereonet.
- Readings and map work stay on the phone. Use Log > Backup at the end of each day.

Exports: CSV (Easting/Northing in UTM or Nepal MUTM, lat/lon, dip, dip direction,
strike, trend, plunge, rake, notes), GeoJSON and KML of readings, map GeoJSON/KML
(lines, units, readings) for QGIS / Google Earth / 3D Geo, PNG of the stereonet and
rose, and a JSON backup with photos and map images.
