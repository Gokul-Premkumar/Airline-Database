db.Planes.deleteMany({});
db.AirlineEmployees.deleteMany({});
db.JourneyBooking.deleteMany({});
db.Airports.deleteMany({});
db.PlaneFlights.deleteMany({});

//create Planes collection
db.Planes.insert({"id": 1, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 200.00, "status": "working", "seatCapacity": 200});
db.Planes.insert({"id": 4, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 100.7, "status": "working", "seatCapacity": 200});
db.Planes.insert({"id": 6, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 413.1, "status": "being repaired", "seatCapacity": 200});
db.Planes.insert({"id": 7, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 357.3, "status": "working", "seatCapacity": 200});
db.Planes.insert({"id": 3, "make": "Boeing", "model": "777-200", "flyRange": 9700, "serviceLength": 0, "status": "upgraded", "seatCapacity": 332});
db.Planes.insert({"id": 8, "make": "Boeing", "model": "777-200", "flyRange": 9700, "serviceLength": 237.9, "status": "working", "seatCapacity": 332});
db.Planes.insert({"id": 2, "make": "Airbus", "model": "A330-300", "flyRange": 11750, "serviceLength": 500.5, "status": "being repaired", "seatCapacity": 310});
db.Planes.insert({"id": 5, "make": "Airbus", "model": "A330-300", "flyRange": 11750, "serviceLength": 0, "status": "working", "seatCapacity": 310});
 
//create AirlineEmployees collection
db.AirlineEmployees.insert({"id": 1, "fullName": "Homer Walsh", "position": "booking clerk", "annualSalary": 43000, "address": {"postcode": "SE1 3NR", "streetName": "Abbey Street", "houseNo": 10, "city": "London"}, "contactInfo": {"email": "h.walsh@gpairline.com", "mobileNo": "070 6507 7051"}});
db.AirlineEmployees.insert({"id": 2, "fullName": "Jolie Davies", "position": "cabin staff", "annualSalary": 43000, "address": {"postcode": "NG34 0AE", "streetName": "Main Street", "houseNo": 22, "city": "Scredington"}, "contactInfo": {"email": "j.davies@gpairline.com", "mobileNo": "079 1827 9254"}});
db.AirlineEmployees.insert({"id": 3, "fullName": "Mamie Ponce", "position": "maintenance staff", "annualSalary": 35000, "address": {"postcode": "SE3 9TG", "streetName": "The Glebe", "houseNo": 35, "city": "London"}, "contactInfo": {"email": "m.ponce@gpairline.com", "mobileNo": "077 4451 4366"}});
db.AirlineEmployees.insert({"id": 4, "fullName": "Stuart Cash", "position": "pilot", "annualSalary": 50000, "address": {"postcode": "NW7 4QL", "streetName": "Croft Close", "houseNo": 9, "city": "London"}, "contactInfo": {"email": "s.cash@gpairline.com", "mobileNo": "070 5357 2641"}, "fitDate": new Date("2021-06-01T00:00:00Z")})
db.AirlineEmployees.insert({"id": 5, "fullName": "Frankie Lyon", "position": "cabin staff", "annualSalary": 45707, "address": {"postcode": "E12 6JB", "streetName": "Rectory Road", "houseNo": 40, "city": "London"}, "contactInfo": {"email": "f.lyon@gpairline.com", "mobileNo": "077 4784 0353"}});
db.AirlineEmployees.insert({"id": 6, "fullName": "Roy Wheatley", "position": "pilot", "annualSalary": 41000, "address": {"postcode": "NR32 2HJ", "streetName": "Norfolk Street", "houseNo": 5, "city": "Lowestoft"}, "contactInfo": {"email": "r.wheatley@gpairline.com", "mobileNo": "079 4528 2265"}, "fitDate": new Date("2021-01-10T00:00:00Z")})
db.AirlineEmployees.insert({"id": 7, "fullName": "Ayra Fuller", "position": "cabin staff", "annualSalary": 50000, "address": {"postcode": "TW14 8PA.", "streetName": "The Laurels", "houseNo": 67, "city": "Feltham"}, "contactInfo": {"email": "a.fuller@gpairline.com", "mobileNo": "078 7539 1222"}});
db.AirlineEmployees.insert({"id": 8, "fullName": "Patrik Jacobs", "position": "pilot", "annualSalary": 45707, "address": {"postcode": "SW4 7HA.", "streetName": "Bedford Road", "houseNo": 7, "city": "London"}, "contactInfo": {"email": "p.jacobs@gpairline.com", "mobileNo": "079 8155 7652"}, "fitDate": new Date("2021-05-10T00:00:00Z")})
db.AirlineEmployees.insert({"id": 9, "fullName": "Kelvin Waters", "position": "pilot", "annualSalary": 60000, "address": {"postcode": "NW3 2HX", "streetName": "Mansfield Road", "houseNo": 28, "city": "London"}, "contactInfo": {"email": "k.waters@gpairline.com", "mobileNo": "079 6191 4943"}, "fitDate": new Date("2022-12-01T00:00:00Z")})
db.AirlineEmployees.insert({"id": 10, "fullName": "Abraham Whittaker", "position": "maintenance staff", "annualSalary": 40000, "address": {"postcode": "W10 4JL", "streetName": "Third Avenue", "houseNo": 45, "city": "London"}, "contactInfo": {"email": "t.whittaker@gpairline.com", "mobileNo": "078 8612 3517"}});

//create JourneyBooking collection
db.JourneyBooking.insert({"id": 1, "timeOfBooking": new Date("2020-12-24T13:36:46Z"), "payingPassenger": "Jerome Kithinji", "addtlPassenger": 4, "flightsUsed": [5,8],"bookingPrice": 30000 });
db.JourneyBooking.insert({"id": 2, "timeOfBooking": new Date("2020-12-02T23:47:24Z"), "payingPassenger": "Jack Mach", "addtlPassenger": 1, "flightsUsed": [4]},"bookingPrice": 1500);
db.JourneyBooking.insert({"id": 3, "timeOfBooking": new Date("2020-12-04T08:14:25Z"), "payingPassenger": "Rolly Beya", "addtlPassenger": 2, "flightsUsed": [9,10],"bookingPrice": 15000});
db.JourneyBooking.insert({"id": 4, "timeOfBooking": new Date("2020-12-16T12:36:36Z"), "payingPassenger": "Nathan Flowers", "addtlPassenger": 3, "flightsUsed": [2],"bookingPrice": 17000});
db.JourneyBooking.insert({"id": 5, "timeOfBooking": new Date("2020-12-16T15:46:13Z"), "payingPassenger": "Shaan Shafiq", "addtlPassenger": 1, "flightsUsed": [6],"bookingPrice": 3000});
db.JourneyBooking.insert({"id": 6, "timeOfBooking": new Date("2020-12-08T18:23:12Z"), "payingPassenger": "Luciana Alioto", "addtlPassenger": 2, "flightsUsed": [7],"bookingPrice": 4000});
db.JourneyBooking.insert({"id": 7, "timeOfBooking": new Date("2020-12-09T20:15:24Z"), "payingPassenger": "Claudia Alioto", "addtlPassenger": 3, "flightsUsed": [3],"bookingPrice": 3000});
db.JourneyBooking.insert({"id": 8, "timeOfBooking": new Date("2020-12-13T21:16:46Z"), "payingPassenger": "Arthur Lerev", "addtlPassenger": 1, "flightsUsed": [1],"bookingPrice": 2000});

//create Airports collection  
db.Airports.insert({"id": 1, "airportName": "Heathrow Airport", "airportLocation": "London", "airportCost": {"parkPrice": 300.30, "refuelPrice": 250.30}});
db.Airports.insert({"id": 2, "airportName": "Charles de Gaulle Airport", "airportLocation": "Paris", "airportCost": {"parkPrice": 200.60, "refuelPrice": 220.60}});
db.Airports.insert({"id": 3, "airportName": "Berlin Brandenburg Airport", "airportLocation": "Berlin", "airportCost": {"parkPrice": 250.20, "refuelPrice": 230.60}});
db.Airports.insert({"id": 4, "airportName": "Leonardo da Vinci International Airport", "airportLocation": "Rome", "airportCost": {"parkPrice": 370.20, "refuelPrice": 200.50}});
db.Airports.insert({"id": 5, "airportName": "Beijing Daxing International Airport", "airportLocation": "Beijing", "airportCost": {"parkPrice": 290.30, "refuelPrice": 190.30}});
db.Airports.insert({"id": 6, "airportName": "Miami International Airport", "airportLocation": "Miami", "airportCost": {"parkPrice": 320.50, "refuelPrice": 210.90}});
db.Airports.insert({"id": 7, "airportName": "Sydney Airport", "airportLocation": "Sydney", "airportCost": {"parkPrice": 140.80, "refuelPrice": 205.60}});
db.Airports.insert({"id": 8, "airportName": "Narita International Airport", "airportLocation": "Tokyo", "airportCost": {"parkPrice": 230.50, "refuelPrice": 260.50}});
db.Airports.insert({"id": 9, "airportName": "Toronto Pearson", "airportLocation": "Toronto", "airportCost": {"parkPrice": 250.50, "refuelPrice": 280.80}});
db.Airports.insert({"id": 10, "airportName": "Mexico City International Airport", "airportLocation": "Mexico City", "airportCost": {"parkPrice": 180.30, "refuelPrice": 270.70}});

//create PlaneFlights collection
db.PlaneFlights.insert({"id": 1, "planeId": 4, "time": {"depTime": new Date("2020-12-17T21:45:00Z"), "arrivTime": new Date("2022-12-17T00:00:00Z")}, "startAirport": 4, "destAirport": 1, "flightPilots": {"pilot": 4, "co-pilot": 6}, "flightDistance": 1433.09})
db.PlaneFlights.insert({"id": 2, "planeId": 2, "time": {"depTime": new Date("2020-12-30T09:15:00Z"), "arrivTime": new Date("2022-12-30T17:45:00Z")}, "startAirport": 4, "destAirport": 6, "flightPilots": {"pilot": 6, "co-pilot": 9}, "flightDistance": 8346.00})
db.PlaneFlights.insert({"id": 3, "planeId": 4, "time": {"depTime": new Date("2020-12-10T00:00:00Z"), "arrivTime": new Date("2022-12-10T22:45:00Z")}, "startAirport": 2, "destAirport": 1, "flightPilots": {"pilot": 8, "co-pilot": 4}, "flightDistance": 348.00})
db.PlaneFlights.insert({"id": 4, "planeId": 1, "time": {"depTime": new Date("2020-12-18T06:45:00Z"), "arrivTime": new Date("2022-12-01T08:45:00Z")}, "startAirport": 1, "destAirport": 2, "flightPilots": {"pilot": 4, "co-pilot": 8}, "flightDistance": 340.00})
db.PlaneFlights.insert({"id": 5, "planeId": 8, "time": {"depTime": new Date("2020-12-30T08:00:00Z"), "arrivTime": new Date("2022-12-30T11:15:00Z")}, "startAirport": 4, "destAirport": 3, "flightPilots": {"pilot": 8, "co-pilot": 9}, "flightDistance": 1183.00})
db.PlaneFlights.insert({"id": 6, "planeId": 8, "time": {"depTime": new Date("2020-12-24T15:00:00Z"), "arrivTime": new Date("2022-12-24T17:00:00Z")}, "startAirport": 8, "destAirport": 5, "flightPilots": {"pilot": 9, "co-pilot": 4}, "flightDistance": 2088.00})
db.PlaneFlights.insert({"id": 7, "planeId": 8, "time": {"depTime": new Date("2020-12-13T12:05:00Z"), "arrivTime": new Date("2022-12-13T18:30:00Z")}, "startAirport": 6, "destAirport": 9, "flightPilots": {"pilot": 4, "co-pilot": 9}, "flightDistance": 2401.7})
db.PlaneFlights.insert({"id": 8, "planeId": 5, "time": {"depTime": new Date("2020-12-30T13:00:00Z"), "arrivTime": new Date("2022-12-31T11:45:00Z")}, "startAirport": 3, "destAirport": 5, "flightPilots": {"pilot": 8, "co-pilot": 4}, "flightDistance": 7356.99})
db.PlaneFlights.insert({"id": 9, "planeId": 5, "time": {"depTime": new Date("2020-12-14T07:25:00Z"), "arrivTime": new Date("2022-12-14T15:45:00Z")}, "startAirport": 5, "destAirport": 1, "flightPilots": {"pilot": 4, "co-pilot": 6}, "flightDistance": 8136})
db.PlaneFlights.insert({"id": 10, "planeId": 1, "time": {"depTime": new Date("2020-12-14T16:05:00Z"), "arrivTime": new Date("2022-12-14T19:10:00Z")}, "startAirport": 1, "destAirport": 4, "flightPilots": {"pilot": 9, "co-pilot": 6}, "flightDistance": 1842})
