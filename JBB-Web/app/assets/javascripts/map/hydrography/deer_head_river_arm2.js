var deerHeadRiverArm2;

function addDeerHeadRiverArm2(){
    //set the path of the river
    var deerHeadRiverArm2Coordinates = [
        {lat: -15.868780291413593, lng: -47.85109480842948},
        {lat: -15.869038290370348, lng: -47.85119513981044},
        {lat: -15.869100210070838, lng: -47.851366801187396},
        {lat: -15.869198249557696, lng: -47.85154919140041},
        {lat: -15.869270489149075, lng: -47.85172085277736},
        {lat: -15.869337568746449, lng: -47.851897878572345},
        {lat: -15.86936336858566, lng: -47.852166099473834},
        {lat: -15.86936336858566, lng: -47.85230020992458},
        {lat: -15.869414968254153, lng: -47.852375311776996},
        {lat: -15.869482047803462, lng: -47.85251478664577},
        {lat: -15.869585247066473, lng: -47.852616710588336},
        {lat: -15.869652326559105, lng: -47.85271327011287},
        {lat: -15.869848404947984, lng: -47.852874202653766},
        {lat: -15.86991548435302, lng: -47.85297612659633},
        {lat: -15.869992883638787, lng: -47.85307268612087},
        {lat: -15.87012188238233, lng: -47.853158516809344},
        {lat: -15.870328280200258, lng: -47.85333554260433},
        {lat: -15.870436638970064, lng: -47.85343746654689},
        {lat: -15.870560477492774, lng: -47.85353402607143},
        {lat: -15.87065851626929, lng: -47.853646678850055},
        {lat: -15.870746235134161, lng: -47.85374860279262},
        {lat: -15.870859753608507, lng: -47.853861255571246},
        {lat: -15.870968112092546, lng: -47.85399000160396},
        {lat: -15.871040351049533, lng: -47.854134840890765},
        {lat: -15.871045510974039, lng: -47.85423676483333},
        {lat: -15.871050670898416, lng: -47.85434941761196},
        {lat: -15.87107131059459, lng: -47.85444061271846},
        {lat: -15.871138389592595, lng: -47.85452107898891},
        {lat: -15.871272547521608, lng: -47.85459618084133},
        {lat: -15.871406705361299, lng: -47.854655189439654},
        {lat: -15.871499583813398, lng: -47.85478393547237},
        {lat: -15.871638901411263, lng: -47.85475174896419},
        {lat: -15.871788538723905, lng: -47.85474102012813},
        {lat: -15.87190205661112, lng: -47.85474102012813},
        {lat: -15.872056853626976, lng: -47.85474102012813},
        {lat: -15.872268409356323, lng: -47.85471956245601},
        {lat: -15.872443845646359, lng: -47.85471956245601},
        {lat: -15.872629601551683, lng: -47.85476247780025},
        {lat: -15.872892755457755, lng: -47.85480539314449},
        {lat: -15.873032072092434, lng: -47.85483757965267},
        {lat: -15.873140429408359, lng: -47.854853672906756},
        {lat: -15.873248786666014, lng: -47.854912681505084},
        {lat: -15.873357143865404, lng: -47.85498241893947},
        {lat: -15.873470660868932, lng: -47.85505215637386},
        {lat: -15.873579017949, lng: -47.855111164972186},
        {lat: -15.87365641582765, lng: -47.85518090240657},
        {lat: -15.873759612952945, lng: -47.85520772449672},
        {lat: -15.873857650173036, lng: -47.85526673309505},
        {lat: -15.873950527495413, lng: -47.85526673309505},
        {lat: -15.874053724470066, lng: -47.85532037727535},
        {lat: -15.874105322937599, lng: -47.855384750291705},
        {lat: -15.87421367967634, lng: -47.855422301217914},
        {lat: -15.874301396993605, lng: -47.85547594539821},
        {lat: -15.874399433950067, lng: -47.85545448772609},
        {lat: -15.874507790530645, lng: -47.85554031841457},
    ];

    //add the river at the map in the position previously defined
    deerHeadRiverArm2 = new google.maps.Polyline({
        path: deerHeadRiverArm2Coordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3,
    });

    //set the river on map
    deerHeadRiverArm2.setMap(map);

    google.maps.event.addListener(deerHeadRiverArm2, 'click', addDeerHeadRiverArm2Infowindow);
}

function addDeerHeadRiverArm2Infowindow(event){
    var deerHeadRiverArm2ContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Ribeirão Cabeça de Veado</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
    'água para a CAESB. '+
    'Esse ribeirão tem 4 braços que dão em 4 estações de captação de recursos hidricos da CAESB'+
    '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
    'Rio</a> '+
    '</div>'+
    '</div>';

    infoWindow.close();
    infoWindow.setContent(deerHeadRiverArm2ContentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}