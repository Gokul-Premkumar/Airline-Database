db.JourneyBooking.remove({});
db.Airports.remove({});

db.JourneyBooking.insert({"id": 1, "timeOfBooking": new Date("2021-01-14T04:52:13Z"), "payingPassenger": "Bruno Filipe", "addtlPassenger": 3, "flightsUsed": [1, 3]});
db.JourneyBooking.insert({"id": 2, "timeOfBooking": new Date("2021-02-26T07:41:35Z"), "payingPassenger": "Gokul Premkumar", "addtlPassenger": 0, "flightsUsed": [2, 6]});
db.JourneyBooking.insert({"id": 3, "timeOfBooking": new Date("2021-03-12T13:36:46Z"), "payingPassenger": "Jerome Kithinji", "addtlPassenger": 4, "flightsUsed": [5, 2]});
db.JourneyBooking.insert({"id": 4, "timeOfBooking": new Date("2021-04-29T23:47:24Z"), "payingPassenger": "Jack Mach", "addtlPassenger": 1, "flightsUsed": [3, 6]});
db.JourneyBooking.insert({"id": 5, "timeOfBooking": new Date("2021-05-27T08:14:25Z"), "payingPassenger": "Rolly Beya", "addtlPassenger": 2, "flightsUsed": [4, 5]});
db.JourneyBooking.insert({"id": 6, "timeOfBooking": new Date("2021-06-23T12:36:36Z"), "payingPassenger": "Nathan Flowers", "addtlPassenger": 3, "flightsUsed": [7, 3]});
db.JourneyBooking.insert({"id": 7, "timeOfBooking": new Date("2021-07-15T15:46:13Z"), "payingPassenger": "Shaan Shafiq", "addtlPassenger": 1, "flightsUsed": [8, 10]});
db.JourneyBooking.insert({"id": 8, "timeOfBooking": new Date("2021-08-21T18:23:12Z"), "payingPassenger": "Luciana Alioto", "addtlPassenger": 2, "flightsUsed": [9, 1]});
db.JourneyBooking.insert({"id": 9, "timeOfBooking": new Date("2021-09-28T20:15:24Z"), "payingPassenger": "Claudia Alioto", "addtlPassenger": 3, "flightsUsed": [10, 8]});
db.JourneyBooking.insert({"id": 10, "timeOfBooking": new Date("2021-10-13T21:16:46Z"), "payingPassenger": "Arthur Lerev", "addtlPassenger": 1, "flightsUsed": [6, 4]});

db.Airports.insert({"id": 1, "airportName": "Heathrow Airport", "airportLocation": "London", "airportCost": {"parkPrice": 700.30, "refuelPrice": 4500.30}});
db.Airports.insert({"id": 2, "airportName": "Charles de Gaulle Airport", "airportLocation": "Paris", "airportCost": {"parkPrice": 600.60, "refuelPrice": 4200.60}});
db.Airports.insert({"id": 3, "airportName": "Berlin Brandenburg Airport", "airportLocation": "Berlin", "airportCost": {"parkPrice": 650.20, "refuelPrice": 4300.60}});
db.Airports.insert({"id": 4, "airportName": "Leonardo da Vinci International Airport", "airportLocation": "Rome", "airportCost": {"parkPrice": 570.20, "refuelPrice": 4000.50}});
db.Airports.insert({"id": 5, "airportName": "Adolfo Suárez Madrid–Barajas Airport", "airportLocation": "Madrid", "airportCost": {"parkPrice": 590.30, "refuelPrice": 3900.30}});
db.Airports.insert({"id": 6, "airportName": "Humberto Delgado Airport", "airportLocation": "Lisbon", "airportCost": {"parkPrice": 620.50, "refuelPrice": 4100.90}});
db.Airports.insert({"id": 7, "airportName": "Amsterdam Airport Schiphol", "airportLocation": "Amsterdam", "airportCost": {"parkPrice": 540.80, "refuelPrice": 4050.60}});
db.Airports.insert({"id": 8, "airportName": "Sheremetyevo International Airport", "airportLocation": "Moscow", "airportCost": {"parkPrice": 530.50, "refuelPrice": 3600.50}});
db.Airports.insert({"id": 9, "airportName": "Brussels Airport", "airportLocation": "Brussels", "airportCost": {"parkPrice": 550.50, "refuelPrice": 3800.80}});
db.Airports.insert({"id": 10, "airportName": "Athens International Airport", "airportLocation": "Athens", "airportCost": {"parkPrice": 580.30, "refuelPrice": 3700.70}});


