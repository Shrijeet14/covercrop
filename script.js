 // Climate options
 const tropical = "tropical";
 const arid = "arid";
 const temperate = "temperate";
 const continental = "continental";

 // Soil texture options
 const medium = "medium";
 const coarse = "coarse";
 const fine = "fine";

 // Cash crop options
 const corn = "corn";
 const soybean = "soybean";
 const wheat = "wheat";
 const vegetable = "vegetable";
 // const otherCrop = "other crop";
 const otherCrop = "other-crop";


 // Cover crop options
 const grassSpecies = "grass-species";
 const legumeSpecies = "legume-species";
 const otherSpecies = "other-species";
 const multiSpecies = "multi-species";

 // Function to suggest crops based on selections
 function suggestCrops(climate, soilTexture, cashCrop, coverCrop) {
if (climate === tropical && soilTexture === medium && cashCrop === corn && coverCrop === grassSpecies) {
 return "Suggestion: <br><b>PARAMETER  =  AVERAGE CHANGE [%]</b> <br> Cash crop yield = 14 <br> Bulk density= -0.95 <br> Soil organic carbon= 10 <br> Soil organic carbon= 10 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === corn && coverCrop === legumeSpecies) {
 return "Suggestion: <br><b>PARAMETER  =  AVERAGE CHANGE [%]</b><br> Cash crop yield = 14 <br> Bulk density= -0.95 <br>Soil organic carbon= 10 <br> Soil organic carbon= 10 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === corn && coverCrop === otherSpecies) {
 return "Suggestion: <br><b>PARAMETER  =  AVERAGE CHANGE [%]</b> <br> Cash crop yield = -3 <br> Bulk density= -0.95 <br>Soil organic carbon= 8.6 <br> Soil organic carbon= 8.6<br> Nitrogen= 11 <br> Aggregate stability =13 <br> Infiltration rates= 83 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === soybean && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 25<br> Bulk density= -0.95 <br>Soil organic carbon= 10<br> Soil organic carbon= 10<br> Nitrogen= 24<br> Aggregate stability =13 <br> Infiltration rates= 52<br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === soybean && coverCrop === legumeSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 16 <br> Bulk density= -0.95 <br>Soil organic carbon= 8.6<br> Soil organic carbon= 8.6<br> Nitrogen= 11<br> Aggregate stability =13 <br> Infiltration rates= 83<br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === soybean && coverCrop === otherSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 0.016 <br> Bulk density= -0.95 <br>Soil organic carbon= 31<br> Soil organic carbon= 31<br> Nitrogen= 22 <br> Aggregate stability =13 <br> Infiltration rates= 65<br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 47<br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === wheat && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 25 <br> Bulk density= -0.95 <br>Soil organic carbon= 10 <br> Soil organic carbon= 10 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === wheat && coverCrop === legumeSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 25 <br> Bulk density= -0.95 <br>Soil organic carbon= 10 <br> Soil organic carbon= 10 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === wheat && coverCrop === otherSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 0.016 <br> Bulk density= -0.95 <br>Soil organic carbon= 31 <br> Soil organic carbon= 31 <br> Nitrogen= 22 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 47 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === vegetable && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 107 <br> Bulk density= -0.95 <br>Soil organic carbon= 10 <br> Soil organic carbon= 10 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === vegetable && coverCrop === legumeSpecies) {
 return "Suggestion : <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 22 <br> Bulk density= -0.95 <br>Soil organic carbon= 8.6<br> Soil organic carbon= 8.6<br> Nitrogen= 11<br> Aggregate stability =13 <br> Infiltration rates= 83<br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === vegetable && coverCrop === otherSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 0.016 <br> Bulk density= -0.95 <br>Soil organic carbon= 31 <br> Soil organic carbon= 31 <br> Nitrogen= 22 <br> Aggregate stability =13 <br> Infiltration rates= 65<br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 47 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === otherCrop && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -29 <br> Bulk density= -0.95 <br>Soil organic carbon= 10 <br> Soil organic carbon= 10 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === otherCrop && coverCrop === legumeSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 38 <br> Bulk density= -0.95 <br>Soil organic carbon= 8.6 <br> Soil organic carbon= 8.6 <br> Nitrogen= 11 <br> Aggregate stability =13 <br> Infiltration rates= 83 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === medium && cashCrop === otherCrop && coverCrop === otherSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -3.7 <br> Bulk density= -0.95 <br>Soil organic carbon= 31 <br> Soil organic carbon= 31 <br> Nitrogen= 24 <br> Aggregate stability =13 <br> Infiltration rates= 65 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 47 <br> Microbial biomass N = 26 ";
} 
// coarse
if (climate === tropical && soilTexture === coarse && cashCrop === corn && coverCrop === grassSpecies) {
 return "Suggestion: 1.<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 19 <br> Soil organic carbon= 19 <br> Nitrogen= -23<br> Aggregate stability =4.5<br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62<br> Weeds = -45 <br> Microbial biomass C = 13 <br> Microbial biomass N = 5.1 ";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === corn && coverCrop === legumeSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 27 <br> Soil organic carbon= 27 <br> Nitrogen=-31<br> Aggregate stability =4.5 <br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45<br> Microbial biomass C = 17 <br> Microbial biomass N = -20 ";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === corn && coverCrop === otherSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -28 <br> Bulk density= -3.7 <br>Soil organic carbon= -12<br> Soil organic carbon= -12 <br> Nitrogen= -23 <br> Aggregate stability =4.5<br> Infiltration rates= 74<br> Ks =4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45 <br> Microbial biomass C = 25 <br> Microbial biomass N = 11";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === soybean && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 19 <br> Soil organic carbon= 19 <br> Nitrogen= -23<br> Aggregate stability =4.5<br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62<br> Weeds = -45 <br> Microbial biomass C = 13 <br> Microbial biomass N = 5.1";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === soybean && coverCrop === legumeSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 27 <br> Soil organic carbon= 27 <br> Nitrogen=-31<br> Aggregate stability =4.5 <br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45<br> Microbial biomass C = 17 <br> Microbial biomass N = -20 ";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === soybean && coverCrop === otherSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -28 <br> Bulk density= -3.7 <br>Soil organic carbon= -12<br> Soil organic carbon= -12 <br> Nitrogen= -23 <br> Aggregate stability =4.5<br> Infiltration rates= 74<br> Ks =4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45 <br> Microbial biomass C = 25 <br> Microbial biomass N = 11";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === wheat && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 19 <br> Soil organic carbon= 19 <br> Nitrogen= -23<br> Aggregate stability =4.5<br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62<br> Weeds = -45 <br> Microbial biomass C = 13 <br> Microbial biomass N = 5.1";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === wheat && coverCrop === legumeSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -34 <br> Bulk density= -3.7<br>Soil organic carbon= 27 <br> Soil organic carbon= 27 <br> Nitrogen=-31<br> Aggregate stability =4.5 <br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45<br> Microbial biomass C = 17 <br> Microbial biomass N = -20";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === wheat && coverCrop === otherSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -28 <br> Bulk density= -3.7 <br>Soil organic carbon= -12<br> Soil organic carbon= -12 <br> Nitrogen= -23 <br> Aggregate stability =4.5<br> Infiltration rates= 74<br> Ks =4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45 <br> Microbial biomass C = 25 <br> Microbial biomass N = 11";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === vegetable && coverCrop === grassSpecies) {
 return "Suggestion: .<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 19 <br> Soil organic carbon= 19 <br> Nitrogen= -23<br> Aggregate stability =4.5<br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62<br> Weeds = -45 <br> Microbial biomass C = 13 <br> Microbial biomass N = 5.1 ";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === vegetable && coverCrop === legumeSpecies) {
 return "Suggestion : <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 27 <br> Soil organic carbon= 27 <br> Nitrogen=-31<br> Aggregate stability =4.5 <br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45<br> Microbial biomass C = 17 <br> Microbial biomass N = -20";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === vegetable && coverCrop === otherSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -28 <br> Bulk density= -3.7 <br>Soil organic carbon= -12<br> Soil organic carbon= -12 <br> Nitrogen= -23 <br> Aggregate stability =4.5<br> Infiltration rates= 74<br> Ks =4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45 <br> Microbial biomass C = 25 <br> Microbial biomass N = 11";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === otherCrop && coverCrop === grassSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -25 <br> Bulk density= -3.7<br>Soil organic carbon= 19 <br> Soil organic carbon= 19 <br> Nitrogen= -23<br> Aggregate stability =4.5<br> Infiltration rates=74 <br> Ks = 4.8 <br> Erosion = -74 <br> Runoff = -73 <br> Leaching = -62<br> Weeds = -45 <br> Microbial biomass C = 13 <br> Microbial biomass N = 5.1";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === otherCrop && coverCrop === legumeSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -16<br> Bulk density= 2.0<br>Soil organic carbon= 22 <br> Soil organic carbon= 22 <br> Nitrogen=52<br> Aggregate stability =13 <br> Infiltration rates=97 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52<br> Microbial biomass C = 48<br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === coarse && cashCrop === otherCrop && coverCrop === otherSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -28 <br> Bulk density= -3.7 <br>Soil organic carbon= -12<br> Soil organic carbon= -12 <br> Nitrogen= -23 <br> Aggregate stability =4.5<br> Infiltration rates= 74<br> Ks =4.8 <br> Erosion = -65 <br> Runoff = -73 <br> Leaching = -62 <br> Weeds = -45 <br> Microbial biomass C = 25 <br> Microbial biomass N = 11";
} 
 
// Fine
if (climate === tropical && soilTexture === fine && cashCrop === corn && coverCrop === grassSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 13 <br> Bulk density= -0.99<br>Soil organic carbon= 6.6 <br> Soil organic carbon= 6.6 <br> Nitrogen= 24<br> Aggregate stability =13<br> Infiltration rates=52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25<br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === corn && coverCrop === legumeSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 15<br> Bulk density= -6.0<br>Soil organic carbon= -2.6 <br> Soil organic carbon= -2.6 <br> Nitrogen=8.4<br> Aggregate stability =13 <br> Infiltration rates=62 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52<br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === corn && coverCrop === otherSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 3.9 <br> Bulk density= -5.5 <br>Soil organic carbo=8.4<br> Soil organic carbon= 8.4<br> Nitrogen= 3.9 <br> Aggregate stability =13<br> Infiltration rates= 65<br> Ks =133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 29 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === soybean && coverCrop === grassSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 13 <br> Bulk density= -0.99<br>Soil organic carbon= 6.6 <br> Soil organic carbon= 6.6 <br> Nitrogen= 24<br> Aggregate stability =13<br> Infiltration rates=52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25<br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === soybean && coverCrop === legumeSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 16<br> Bulk density= -6.0<br>Soil organic carbon= -1.7 <br> Soil organic carbon= -1.7 <br> Nitrogen=8.4<br> Aggregate stability =13 <br> Infiltration rates=62 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52<br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === soybean && coverCrop === otherSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 0.016 <br> Bulk density= -5.5 <br>Soil organic carbo=22<br> Soil organic carbon= 22<br> Nitrogen= 19 <br> Aggregate stability =13<br> Infiltration rates= 65<br> Ks =133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 29 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === wheat && coverCrop === grassSpecies) {
 return "Suggestion: .<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 25 <br> Bulk density= -0.99<br>Soil organic carbon= 6.6 <br> Soil organic carbon= 6.6 <br> Nitrogen= 24<br> Aggregate stability =13<br> Infiltration rates=52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25<br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === wheat && coverCrop === legumeSpecies) {
 return "Suggestion: <br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 16<br> Bulk density= -6.0<br>Soil organic carbon= -1.7 <br> Soil organic carbon= -1.7 <br> Nitrogen=8.4<br> Aggregate stability =13 <br> Infiltration rates=62 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52<br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === wheat && coverCrop === otherSpecies) {
 return "Suggestion:<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 0.016 <br> Bulk density= -5.5 <br>Soil organic carbo=22<br> Soil organic carbon= 22<br> Nitrogen= 19 <br> Aggregate stability =13<br> Infiltration rates= 65<br> Ks =133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 29 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === vegetable && coverCrop === grassSpecies) {
 return "Suggestion:.<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 107 <br> Bulk density= -0.99<br>Soil organic carbon= 6.6 <br> Soil organic carbon= 6.6 <br> Nitrogen= 24<br> Aggregate stability =13<br> Infiltration rates=52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25<br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === vegetable && coverCrop === legumeSpecies) {
 return "Suggestion :<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 6.4<br> Bulk density= -6.0<br>Soil organic carbon= -1.7 <br> Soil organic carbon= -1.7 <br> Nitrogen=8.4<br> Aggregate stability =13 <br> Infiltration rates=62 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52<br> Microbial biomass C = 48 <br> Microbial biomass N = 26 ";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === vegetable && coverCrop === otherSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = 0.016 <br> Bulk density= -5.5 <br>Soil organic carbo=24<br> Soil organic carbon= 24<br> Nitrogen= 21 <br> Aggregate stability =13<br> Infiltration rates= 65<br> Ks =133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 29 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === otherCrop && coverCrop === grassSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -29 <br> Bulk density= -0.99<br>Soil organic carbon= 6.6 <br> Soil organic carbon= 6.6 <br> Nitrogen= 24<br> Aggregate stability =13<br> Infiltration rates=52 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25<br> Weeds = -52 <br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === otherCrop && coverCrop === legumeSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -23<br> Bulk density= -6.0<br>Soil organic carbon= 5.5 <br> Soil organic carbon= 5.5 <br> Nitrogen=8.4<br> Aggregate stability =13 <br> Infiltration rates=62 <br> Ks = 133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52<br> Microbial biomass C = 48 <br> Microbial biomass N = 26";
} 
else if (climate === tropical && soilTexture === fine && cashCrop === otherCrop && coverCrop === otherSpecies) {
 return "<br>PARAMETER  =  AVERAGE CHANGE [%]<b> <br><br> Cash crop yield = -3.7 <br> Bulk density= -5.5 <br>Soil organic carbo=22<br> Soil organic carbon= 22<br> Nitrogen= 19 <br> Aggregate stability =13<br> Infiltration rates= 65<br> Ks =133 <br> Erosion = -75 <br> Runoff = -73 <br> Leaching = -25 <br> Weeds = -52 <br> Microbial biomass C = 29 <br> Microbial biomass N = 26";
} 
 
else {
 return "No suggestions available for the selected options.";
}
}

 // Example usage
 const form = document.querySelector("#crop-suggestion-form");

 form.addEventListener("submit", function (event) {
     event.preventDefault();

     const climate = form.elements["climate"].value;
     const soilTexture = form.elements["soil-texture"].value;
     const cashCrop = form.elements["cash-crop"].value;
     const coverCrop = form.elements["cover-crop"].value;

     const suggestion = suggestCrops(climate, soilTexture, cashCrop, coverCrop);

     const outputElement = document.querySelector("#suggestion-output");
     outputElement.innerHTML = suggestion;
 });