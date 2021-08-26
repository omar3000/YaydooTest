# YaydooTest


curl 

Login en la plataforma con password en formato md5

--location 

--request POST 'http://localhost:3004/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "usuario" : "Admin",
    "contrasenia": "098f6bcd4621d373cade4e832627b4f6"
}'


curl 

Trae un listado de clientes con sus cuentas con los  parametros de una fecha de inicio y fecha final  en formato MM-DD-YYYY

--location --request GET 'http://localhost:3004/api/clientes/list/08-25-2021/08-26-2021' \

--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQWRtaW4iLCJpZCI6MSwiaWF0IjoxNjI5OTMyMTIzfQ.VX1VyGrpScQ4gEHXoohfrXo4vkWaQjQPS0viiNh9XI0'

curl 

Crea un cliente en la base de datos 
el parametro apellido_materno es opcional    

--location --request POST 'http://localhost:3004/api/clientes/create' \

--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQWRtaW4iLCJpZCI6MSwiaWF0IjoxNjI5OTMyMTIzfQ.VX1VyGrpScQ4gEHXoohfrXo4vkWaQjQPS0viiNh9XI0' \
--header 'Content-Type: application/json' \
--data-raw '{
                    "nombre": "borar2",
                    "apellido_paterno": "alvarez",
                    "apellido_materno": "rubio",
                    "domicilio": "emiliano #500"
}'

curl 

Se hace un eliminado logico al cliente con el id asignado

--location --request PUT 'http://localhost:3004/api/clientes/delete/4' \

--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQWRtaW4iLCJpZCI6MSwiaWF0IjoxNjI5OTMyMTIzfQ.VX1VyGrpScQ4gEHXoohfrXo4vkWaQjQPS0viiNh9XI0'


curl 

Se agrega una cuenta a un cliente con el parametro id_cliente

--location --request POST 'http://localhost:3004/api//cuentas/create' \

--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQWRtaW4iLCJpZCI6MSwiaWF0IjoxNjI5OTMyMTIzfQ.VX1VyGrpScQ4gEHXoohfrXo4vkWaQjQPS0viiNh9XI0' \
--header 'Content-Type: application/json' \
--data-raw '{
                    "id_cliente": 2,
                    "numero_cuenta": 5454545,
                    "saldo": 800
}'

curl 

Se crea una transaccion entre dos cuentas se validan y se descuentan los saldos de cada cuenta

--location --request POST 'http://localhost:3004/api//transacciones/create' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQWRtaW4iLCJpZCI6MSwiaWF0IjoxNjI5OTMyMTIzfQ.VX1VyGrpScQ4gEHXoohfrXo4vkWaQjQPS0viiNh9XI0' \
--header 'Content-Type: application/json' \
--data-raw '{
                "id_cuenta_emisor": 3,
                "id_cuenta_receptor": 4,
                "cantidad": 100.0
}'



curl 

Trae todas las transacciones de un cliente por una rango de fecha  en formato MM-DD-YYYY

--location --request GET 'http://localhost:3004/api/transacciones/list/2/08-26-2021/08-26-2021' \

--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQWRtaW4iLCJpZCI6MSwiaWF0IjoxNjI5OTMyMTIzfQ.VX1VyGrpScQ4gEHXoohfrXo4vkWaQjQPS0viiNh9XI0'


