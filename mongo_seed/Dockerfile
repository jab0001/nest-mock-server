FROM mongo:latest

COPY loan.json /loan.json

CMD mongoimport --host db --db testbase --collection loan --type json --file /loan.json --jsonArray
    
