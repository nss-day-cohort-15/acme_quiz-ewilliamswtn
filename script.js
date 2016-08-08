
$.getJSON("categories.json").then(function (data) {
  //returns an {}
}).then(function() {
  $.getJSON("types.json").then(function (types) {
  }).then(function() {
    $.getJSON("products.json").then(function(products) {
    })
  })
})


$( "#fwButton" ).click(function() {
  $.getJSON("categories.json").then(function (data) {
    $("#output").text(data.categories[0].name) 
}).then(function() {
  $.getJSON("types.json").then(function (data) {
    $("#typesLabel1").text(data.types[0].name)

    $("#typesLabel2").text(data.types[1].name)

    $("#typesLabel3").text(data.types[2].name)
  }).then(function() {
      $.getJSON("products.json").then(function(data) {
        $("#t1p1").text(data.products[0].m80.name)

        $("#t1p2").text(data.products[0].firecracker.name)

        $("#t1p3").text(data.products[0].black_cat.name)

        $("#t2p1").text(data.products[0].bees.name)

        $("#t2p2").text(data.products[0].roman_candle.name)

        $("#t2p3").text(data.products[0].comet.name)

        $("#t3p1").text(data.products[0].butterfly.name)

        $("#t3p2").text(data.products[0].dragon_egg.name)

        $("#t3p3").text(data.products[0].shell.name)                  
      })                      
    })
  })
});

$( "#demoButton" ).click(function() {
 $.getJSON("categories.json").then(function (data) {
    $("#output").text(data.categories[1].name) 
  }).then(function() {
    $.getJSON("types.json").then(function (data) {
      $("#typesLabel1").text(data.types[3].name)

      $("#typesLabel2").text(data.types[4].name)

      $("#typesLabel3").text(data.types[5].name)
    }).then(function() {
      $.getJSON("products.json").then(function(data) {
        $("#t1p1").text(data.products[0].blasting_cap.name)

        $("#t1p2").text(data.products[0].potassium_chlorate.name)

        $("#t1p3").text(data.products[0].tannerite.name)

        $("#t2p1").text(data.products[0].c4.name)

        $("#t2p2").text(data.products[0].carbonite.name)

        $("#t2p3").text(data.products[0].dynamite.name)

        $("#t3p1").text(data.products[0].hfire.name)

        $("#t3p2").text(data.products[0].mini_nuke.name)

        $("#t3p3").text(data.products[0].nuke.name)                  
      })                      
    })
  })
});
















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





