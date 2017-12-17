var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      inquirer
        .prompt([
          {
            name: "products",
            type: "list",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push("Sku: " +results[i].item_id + " | Product: " +results[i].product_name + " | Price: $" +results[i].price);
              }
              return choiceArray;
            },
            message: "What would you like buy?"
          },
          {
            name: "buy",
            type: "input",
            message: "How many would you like to buy?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          console.log("results " +results.length);
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            console.log(`${results[i].product_name} : ${answer.products} \n`)
            if (answer.products.includes(results[i].product_name)) {
               
              chosenItem = results[i];
            }
          }

          console.log("chosenitem:" +chosenItem);
  
          // determine if bid was high enough
          if (chosenItem.stock_quantity >= parseInt(answer.buy)) {
            // bid was high enough, so update db, let the user know, and start over
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: chosenItem.stock_quantity- answer.buy
                },
                {
                  item_id: chosenItem.item_id
                }
              ],
              function(error) {
                if (error) console.log(error);
                console.log("Sucessful purchase!");
                start();
              }
            );
          }
          else {
            // bid wasn't high enough, so apologize and start over
            console.log("Not Enough Stock.");
            start();
          }
        });
    });
  }
  

// // function which prompts the user for what action they should take
// function start() {
//   inquirer
//     .prompt({
//       name: "productList",
//       type: "rawlist",
//       message: "Select an Item to purchase!",
//       choices: ["POST", "BID"]
//     })
//     .then(function(answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.postOrBid.toUpperCase() === "POST") {
//         postAuction();
//       }
//       else {
//         bidAuction();
//       }
//     });
// }

// // function to handle posting new items up for auction
// function postAuction() {
//   // prompt for info about the item being put up for auction
//   inquirer
//     .prompt([
//       {
//         name: "item",
//         type: "input",
//         message: "What is the item you would like to submit?"
//       },
//       {
//         name: "category",
//         type: "input",
//         message: "What category would you like to place your auction in?"
//       },
//       {
//         name: "startingBid",
//         type: "input",
//         message: "What would you like your starting bid to be?",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       // when finished prompting, insert a new item into the db with that info
//       connection.query(
//         "INSERT INTO auctions SET ?",
//         {
//           item_name: answer.item,
//           category: answer.category,
//           starting_bid: answer.startingBid,
//           highest_bid: answer.startingBid
//         },
//         function(err) {
//           if (err) throw err;
//           console.log("Your auction was created successfully!");
//           // re-prompt the user for if they want to bid or post
//           start();
//         }
//       );
//     });
// }

