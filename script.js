// use this template??

// $.getJSON("categories.json")
//   .then(function (data) {
//     //returns an {}
//   })
//   .then(function() {
//     return $.getJSON("types.json")
//   })
//   .then(function (types) {

//   })
//   .then(function() {
//     return $.getJSON("products.json")
//   })
//   .then(function(products) {
    
//   })
//


$.getJSON("categories.json")
  .then(function (data) {
    $.each(data.categories, function (index, thing) {
      $("#dynamicButtons").append("<li><a href='#'' id=" + thing.name + "button>" + thing.name + "</a></li>");
      $( "#" + thing.name + "button").click(function() {
        if ($(this).attr("id") == "Fireworksbutton") {
          $("#divLord").html("");
            $("#select0r").hide();
            $.getJSON("types.json")
            .then(function (data) {
              $("#divLord").append("<div class='col-xs-3 lolDynamicLabel spacer'>Type:</div>");
              $.each(data.types, function (index, thing) {
                if (thing.category === 0) {
                  $("#divLord").append("<div class='col-xs-3 lolDynamicType'>" + thing.name + "</div>");
                }
              })
            })
            .then(function (){
              $.getJSON("products.json")
              .then(function (data) {
                var counter = 0;
                $("#divLord").append("<div class='col-xs-12 lolDynamicLabel'>Products:</div>");
                $.each(data.products, function (index, thing) {
                  if (thing.type === 0 || thing.type === 1 ||thing.type === 2) {
                    if (counter % 3 === 0) {
                      $("#divLord").append("<div class='col-xs-3 lolDynamicSpacer'></div>");
                    }
                    $("#divLord").append("<div class='col-xs-3 lolDynamicDiv'>" + thing.name + "</div>");
                    counter++;
                  }
                })
              })
            })
        } else if ($(this).attr("id") == "Demolitionbutton") {
          $("#divLord").html("");
          $("#select0r").hide();
          $.getJSON("types.json")
          .then(function (data) {
            $("#divLord").append("<div class='col-xs-3 lolDynamicLabel spacer'>Type:</div>");
            $.each(data.types, function (index, thing) {
              if (thing.category === 1) {
                $("#divLord").append("<div class='col-xs-3 lolDynamicType'>" + thing.name + "</div>");
              }
            })
          })
            .then(function (){
              $.getJSON("products.json")
                .then(function (data) {
                  var counter = 0;
                  $("#divLord").append("<div class='col-xs-12 lolDynamicLabel'>Products:</div>");
                  $.each(data.products, function (index, thing) {
                  if (thing.type === 3 || thing.type === 4 ||thing.type === 5) {
                    if (counter % 3 === 0) {
                      $("#divLord").append("<div class='col-xs-3 lolDynamicSpacer'></div>");
                    }
                    $("#divLord").append("<div class='col-xs-3 lolDynamicDiv'>" + thing.name + "</div>");
                    counter++;
                }
              })
            })
          }) 
        }
      });
    })
  })








 











//old code, feel free to ignore


      // $("#divLord").html("");
       //  $("#select0r").hide();
       //  $.getJSON("types.json")
       //  .then(function (data) {
       //    $("#divLord").append("<div class='col-xs-3 lolDynamicLabel spacer'>Type:</div>");
       //    $.each(data.types, function (index, thing) {
       //      if (thing.category === 0) {
       //        $("#divLord").append("<div class='col-xs-3 lolDynamicType'>" + thing.name + "</div>");
       //      }
       //    })
       //  })
       //  .then(function (){
       //    $.getJSON("products.json")
       //    .then(function (data) {
       //      var counter = 0;
       //      $("#divLord").append("<div class='col-xs-12 lolDynamicLabel'>Products:</div>");
       //      $.each(data.products, function (index, thing) {
       //        if (thing.type === 0 || thing.type === 1 ||thing.type === 2) {
       //          if (counter % 3 === 0) {
       //            $("#divLord").append("<div class='col-xs-3 lolDynamicSpacer'></div>");
       //          }
       //          $("#divLord").append("<div class='col-xs-3 lolDynamicDiv'>" + thing.name + "</div>");
       //          counter++;
       //        }
       //      })
       //    })
       //  })





// $( "#fwButton" ).click(function() {
  
// });

// ///




// $( "#demoButton" ).click(function() {
  
// });

// $( "#testButton" ).click(function() {
//     //types
//     $.getJSON("types.json").then(function(data) {

//       $.each(data.types, function (index, thing) {
//         console.log(thing.name)
//       })
//     })

//     //prods
//   $.getJSON("products.json").then(function(data) {

//     // for (var item in data.products){
//       // console.log("key ->", item)
//       // console.log("value ->", data.products[item])
//       // console.log("name ->", data.products[item].name)
      
//     // }
//     $.each(data.products, function (index,thing) {
//      // console.log(thing.type);
//      // console.log(thing.name);
//       $("#divLord").append("<div class='col-xs-3 lolDynamic'>" + thing.name + "</div>");

      
//     })
//   })
// });









// $( "#fwButton" ).click(function() {
//   $.getJSON("categories.json").then(function (data) {
//     $("#output").text(data.categories[0].name) 
// }).then(function() {
//   $.getJSON("types.json").then(function (data) {
//     $("#typesLabel1").text(data.types[0].name)

//     $("#typesLabel2").text(data.types[1].name)

//     $("#typesLabel3").text(data.types[2].name)
//   }).then(function() {
//       $.getJSON("products.json").then(function(data) {
//         $("#t1p1").text(data.products[0].m80.name)

//         $("#t1p2").text(data.products[0].firecracker.name)

//         $("#t1p3").text(data.products[0].black_cat.name)

//         $("#t2p1").text(data.products[0].bees.name)

//         $("#t2p2").text(data.products[0].roman_candle.name)

//         $("#t2p3").text(data.products[0].comet.name)

//         $("#t3p1").text(data.products[0].butterfly.name)

//         $("#t3p2").text(data.products[0].dragon_egg.name)

//         $("#t3p3").text(data.products[0].shell.name)                  
//       })                      
//     })
//   })
// });

// $( "#demoButton" ).click(function() {
//  $.getJSON("categories.json").then(function (data) {
//     $("#output").text(data.categories[1].name) 
//   }).then(function() {
//     $.getJSON("types.json").then(function (data) {
//       $("#typesLabel1").text(data.types[3].name)

//       $("#typesLabel2").text(data.types[4].name)

//       $("#typesLabel3").text(data.types[5].name)
//     }).then(function() {
//       $.getJSON("products.json").then(function(data) {
//         $("#t1p1").text(data.products[0].blasting_cap.name)

//         $("#t1p2").text(data.products[0].potassium_chlorate.name)

//         $("#t1p3").text(data.products[0].tannerite.name)

//         $("#t2p1").text(data.products[0].c4.name)

//         $("#t2p2").text(data.products[0].carbonite.name)

//         $("#t2p3").text(data.products[0].dynamite.name)

//         $("#t3p1").text(data.products[0].hfire.name)

//         $("#t3p2").text(data.products[0].mini_nuke.name)

//         $("#t3p3").text(data.products[0].nuke.name)                  
//       })                      
//     })
//   })
// });






// var fwcats;
// var fwtypes;
// var fwprods;


// var promise = new Promise(function(resolve) {
//   //console.log($.getJSON("categories.json"));
//     $.getJSON("categories.json", function(data) {
//       $.each(data, function(key, val) {
//         fwcats = data.categories[0];
//         //var items = [];
//         //console.log(key, val[0]);
//         //console.log(key, val[1]);
//         // console.log(data.categories[0].id);
//         // console.log(data.categories[0].name);
//         // console.log(data.categories[1].id);
//         // console.log(data.categories[1].name);
//         console.log(data.categories)
//      });
//   });
// });

// promise.then(function() {
//   console.log("done");
// })



// // var promise2 = new Promise(function(resolve) {
// //   $.getJSON("types.json", function(data) {
// //     $.each(data, function(key, val) {
// //       //var items = [];
// //       //console.log(key, val);
// //       //console.log(key, val);
// //    });
// //   });
// // });

// // var promise3 = new Promise(function(resolve) {
// //   $.getJSON("products.json", function(data) {
// //     $.each(data, function(key, val) {
// //       //console.log(key, val);
// //    });
// //   });
// // });





