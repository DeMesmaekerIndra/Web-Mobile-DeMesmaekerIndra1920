function getDist(lat1, lon1, lat2, lon2) {
    'use strict';
    // berekent de oppervlakteafstand tussen
    // 2 punten op een bol, uitgedrukt in meter

    const R = 6369087,
        toRad = Math.PI / 180,
        φ1 = lat1 * toRad,
        φ2 = lat2 * toRad,
        Δφ = (lat2 - lat1) * toRad,
        Δλ = (lon2 - lon1) * toRad;
    let a, c, d;

    a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = R * c;

    return d;
}