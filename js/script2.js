  var NYS = [43.117024,-75.805664];
  var Wyandanch = [40.750388936610186,-73.36216101970355];
  var Rochester = [43.139086359108724,-77.5949564081189];
  var Rome = [43.20528705920949,-75.44971057510915];
  var StateZoom = 6;
  var CaseStudyZoom = 10;

  var zoompanOptions = {
    animate: true,
    pan: panOptions
  }
  var panOptions = {
    duration: 10
  }

$(".myButton").click(function() {
      if($(this).attr('id') == 'WyandanchButton' ) {
        BOAmap.setView(Wyandanch, CaseStudyZoom, zoompanOptions);
      } 
      else if($(this).attr('id') == 'RochesterButton' ) {
        BOAmap.setView(Rochester, CaseStudyZoom, zoompanOptions);
      }
      else if($(this).attr('id') == 'RomeButton' ) {
        BOAmap.setView(Rome, CaseStudyZoom, zoompanOptions);
      }
      else {
        BOAmap.setView(NYS, StateZoom, zoompanOptions);
      }
    });





    $("#PovertyButton").click(function() {
        $("#imgWindowText").hide();
        $(".Pic").hide();
        $("#povertyImg").show();
      });

    $("#IncomeButton").click(function() {
        $("#imgWindowText").hide();
        $(".Pic").hide();
        $("#incomeImg").show();
      });
    
    $("#UnemploymentButton").click(function() {
        $("#imgWindowText").hide();
        $(".Pic").hide();
        $("#unemploymentImg").show();
      });



  var BOAmap = L.map('BOAmap', {
    scrollWheelZoom: false
  }).setView(NYS, StateZoom);


L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(BOAmap);

    var layerUrl = 'https://levysamu.cartodb.com/api/v2/viz/6e9a392c-ef92-11e5-9b90-0ef7f98ade21/viz.json';

    cartodb.createLayer(BOAmap, layerUrl)
      .addTo(BOAmap)
      .on('done', function(layer) {

// Used Andy Eschbacher's code from http://bl.ocks.org/ohasselblad/d9b65186664268d6dec4
          var sublayer0 = layer.getSubLayer(0);
          sublayer0.setInteraction(true);
          sublayer0.setInteractivity("boa_name,designatio,acres,totpop_1,hhsize,pctpov,avginc,unemprate");
          
          sublayer0.on('featureClick',function(e, latlng, pos, data, subLayerIndex) {
          $("#infoWindow").html(
            "<h4>" + data.boa_name + "</h4>" + 
            "<p>Acres: " + data.acres + "</p>" +
            "<p>Total Population: " + data.totpop_1 + "</p>" +
            "<p>Household Size: " + data.hhsize + "</p>" +
            "<p>Poverty Rate: " + data.pctpov + "</p>" +
            "<p>Average Income: " + data.avginc + "</p>" +
            "<p>Unemployment Rate: " + data.unemprate + "</p>" 
          );
          });

          var sublayer1 = layer.getSubLayer(1);
          sublayer1.setInteraction(true);
          sublayer1.setInteractivity("boa_name,designatio,acres,totpop_1,hhsize,pctpov,avginc,unemprate");
          
          sublayer1.on('featureClick',function(e, latlng, pos, data, subLayerIndex) {
          $("#infoWindow").html(
            "<h4>" + data.boa_name + "</h4>" + 
            "<p>Acres: " + data.acres + "</p>" +
            "<p>Total Population: " + data.totpop_1 + "</p>" +
            "<p>Household Size: " + data.hhsize + "</p>" +
            "<p>Poverty Rate: " + data.pctpov + "</p>" +
            "<p>Average Income: " + data.avginc + "</p>" +
            "<p>Unemployment Rate: " + data.unemprate + "</p>" 
          );
          });

      }).on('error', function() {
      });












