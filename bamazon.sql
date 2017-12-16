-- Created the DB "bamazon_db" (only works on local connections)
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Created the table "products"
CREATE TABLE products (
  item_id int AUTO_INCREMENT,
  product_name varchar(50) NOT NULL,
  department_name varchar(50) NOT NULL,
  price INT NULL,
  stock_quantity INT default 20,
  PRIMARY KEY(item_id)
);


INSERT INTO products (item_id, product_name, department_name, price)
VALUES (1000, "Orange Tennis Ball", "Sports", 5);

INSERT INTO products (product_name, department_name, price)
VALUES ("Hot Pink Curtains", "Decor", 50);

INSERT INTO products (product_name, department_name, price)
VALUES ("Dog Treats", "Pet", 6);

INSERT INTO products (product_name, department_name, price)
VALUES ("Purple Rabbit Stuffed Animal", "Kids", 15);

INSERT INTO products (product_name, department_name, price)
VALUES ("Blue Tennis Shoes", "Apparel", 60);

INSERT INTO products (product_name, department_name, price)
VALUES ("Faux Gold Watch", "Apparel", 10);

INSERT INTO products (product_name, department_name, price)
VALUES ("Super Huge Beach Ball", "Sports", 12);

INSERT INTO products (product_name, department_name, price)
VALUES ("Ugly Plaid Blanket", "Decor", 75);

INSERT INTO products (product_name, department_name, price)
VALUES ("Snowshoes", "Sports", 250);

INSERT INTO products (product_name, department_name, price)
VALUES ("Plastic Toy All Kids Want For Xmas", "Toys", 20);