# RP-APP

    Ease the role play generation

In role play game we used written table to generate random stuff.
With this app you can manage theses tables and group them inside a generator that will generate the value for each tables in it. 

## Techno 

* Front-end: Angular
* Back-end: Node JS express
* DB: Mongo DB

## How to run it 

1. Create a .env file with the connection string

```
CONNECTION_STRING=mongodb+srv://dbmaster:... 
```

2. Collection in DB
    * generators
    * tables

3. Scripts
    * yarn start:app -> Application 
    * yarn start:server -> The node js server