# bamazon
*A little inventory & purchasing app*

## App Capabilities
1. [Query database for products](#query-database-for-products)
2. [Select a product to purchase](#select-a-product-to-purchase)
3. [Input a quantity to purchase of said product](#input-a-quantity-to-purchase-of-said-product)
4. [Let the customer place the order if enough inventory is available](#let-the-customer-place-the-order-if-enough-inventory-is-available)
5. [Update the database with new stock levels](#update-the-database-with-new-stock-levels)
6. [Or let the customer know if there is not enough stock available to make the purchase](#let-the-customer-know-if-there-is-not-enough-stock-available-to-make-the-purchase)


## How To Start The App
enter the following into your command line:
`node app.js`

## Query database for products
![show product database](/images/1.png)
Product database is prepopulated with things to buy

## Select a product to purchase
![get product list](/images/2.png)
Upon starting the app, we are shown a list of available products and are prompted to select one to purchase

## Input a quantity to purchase of said product
![purchasing a product](/images/3.png)
We've made the excellent decision to purchase the super awesome beach ball and are prompted with the question of how many we'd like to purchase. We've conservatively decided on 2 super awesome beach balls.

## Let the customer place the order if enough inventory is available
![purchasing a product](/images/4.png)
We query the database to check stock levels & determine there are more than 2 in stock. The customer has made a successfull purchase and their order total is displayed.

## Update the database with new stock levels
![update database](/images/5.png)
We will update the stock levels for this particular product during a successful purchase.

## Let the customer know if there is not enough stock available to make the purchase
![update database](/images/6.png)
Here we attempt to purchase 100 super huge beach balls.

![update database](/images/7.png)
Here our dreams of an exciting beach day are shattered.

