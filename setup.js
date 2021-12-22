db.planes.remove({});
db.airlineEmployees.insert({});
db.JourneyBooking.remove({});
db.Airports.remove({});

//create Planes collection
db.planes.insert({"id": 1, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 200.00, "status": "waiting", "seatCapacity": 200});
db.planes.insert({"id": 2, "make": "Airbus", "model": "A330-300", "flyRange": 11750, "serviceLength": 500.5, "status": "being repaired", "seatCapacity": 310});
db.planes.insert({"id": 3, "make": "Boeing", "model": "777-200", "flyRange": 9700, "serviceLength": 0, "status": "upgraded", "seatCapacity": 332});
db.planes.insert({"id": 4, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 100.7, "status": "working", "seatCapacity": 200});
db.planes.insert({"id": 5, "make": "Airbus", "model": "A330-300", "flyRange": 11750, "serviceLength": 0, "status": "waiting", "seatCapacity": 310});
db.planes.insert({"id": 6, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 413.1, "status": "being repaired", "seatCapacity": 200});
db.planes.insert({"id": 7, "make": "Boeing", "model": "737-800", "flyRange": 5665, "serviceLength": 357.3, "status": "working", "seatCapacity": 200});
db.planes.insert({"id": 8, "make": "Boeing", "model": "777-200", "flyRange": 9700, "serviceLength": 237.9, "status": "working", "seatCapacity": 332});

 
//create airlineEmployees collection
db.airlineEmployees.insert({"id": 1, "fullName": "Homer Walsh", "position": "booking clerk", "annualSalary": 43000, "address": {"postcode": "SE1 3NR", "streetName": "Abbey Street", "houseNo": 10, "city": "London"}, "contactInfo": {"email": "h.walsh@gpairline.com", "mobileNo": "070 6507 7051"}});
db.airlineEmployees.insert({"id": 2, "fullName": "Jolie Davies", "position": "cabin staff", "annualSalary": 43000, "address": {"postcode": "NG34 0AE", "streetName": "Main Street", "houseNo": 22, "city": "Scredington"}, "contactInfo": {"email": "j.davies@gpairline.com", "mobileNo": "079 1827 9254"}});
db.airlineEmployees.insert({"id": 3, "fullName": "Mamie Ponce", "position": "maintenance staff", "annualSalary": 35000, "address": {"postcode": "SE3 9TG", "streetName": "The Glebe", "houseNo": 35, "city": "London"}, "contactInfo": {"email": "m.ponce@gpairline.com", "mobileNo": "077 4451 4366"}});
db.airlineEmployees.insert({"id": 4, "fullName": "Stuart Cash", "position": "pilot", "annualSalary": 50000, "address": {"postcode": "NW7 4QL", "streetName": "Croft Close", "houseNo": 9, "city": "London"}, "contactInfo": {"email": "s.cash@gpairline.com", "mobileNo": "070 5357 2641"}, "fitDate": new Date("2021-06-01T00:00:00Z")})
db.airlineEmployees.insert({"id": 5, "fullName": "Frankie Lyon", "position": "cabin staff", "annualSalary": 45707, "address": {"postcode": "E12 6JB", "streetName": "Rectory Road", "houseNo": 40, "city": "London"}, "contactInfo": {"email": "f.lyon@gpairline.com", "mobileNo": "077 4784 0353"}});
db.airlineEmployees.insert({"id": 6, "fullName": "Roy Wheatley", "position": "pilot", "annualSalary": 41000, "address": {"postcode": "NR32 2HJ", "streetName": "Norfolk Street", "houseNo": 5, "city": "Lowestoft"}, "contactInfo": {"email": "r.wheatley@gpairline.com", "mobileNo": "079 4528 2265"}, "fitDate": new Date("2021-01-10T00:00:00Z")})
db.airlineEmployees.insert({"id": 7, "fullName": "Ayra Fuller", "position": "cabin staff", "annualSalary": 50000, "address": {"postcode": "TW14 8PA.", "streetName": "The Laurels", "houseNo": 67, "city": "Feltham"}, "contactInfo": {"email": "a.fuller@gpairline.com", "mobileNo": "078 7539 1222"}});
db.airlineEmployees.insert({"id": 8, "fullName": "Patrik Jacobs", "position": "booking clerk", "annualSalary": 45707, "address": {"postcode": "SW4 7HA.", "streetName": "Bedford Road", "houseNo": 7, "city": "London"}, "contactInfo": {"email": "p.jacobs@gpairline.com", "mobileNo": "079 8155 7652"}});
db.airlineEmployees.insert({"id": 9, "fullName": "Kelvin Waters", "position": "pilot", "annualSalary": 60000, "address": {"postcode": "NW3 2HX", "streetName": "Mansfield Road", "houseNo": 28, "city": "London"}, "contactInfo": {"email": "k.waters@gpairline.com", "mobileNo": "079 6191 4943"}, "fitDate": new Date("2022-12-01T00:00:00Z")})
db.airlineEmployees.insert({"id": 10, "fullName": "Saad Whittaker", "position": "maintenance staff", "annualSalary": 40000, "address": {"postcode": "W10 4JL", "streetName": "Third Avenue", "houseNo": 45, "city": "London"}, "contactInfo": {"email": "s.whittaker@gpairline.com", "mobileNo": "078 8612 3517"}});

//create JourneyBooking collection
db.JourneyBooking.insert({"id": 1, "timeOfBooking": new Date("2021-01-14T04:52:13Z"), "payingPassenger": "Bruno Filipe", "addtlPassenger": 3, "flightsUsed": [1]});
db.JourneyBooking.insert({"id": 2, "timeOfBooking": new Date("2021-02-26T07:41:35Z"), "payingPassenger": "Gokul Premkumar", "addtlPassenger": 0, "flightsUsed": [2, 6]});
db.JourneyBooking.insert({"id": 3, "timeOfBooking": new Date("2021-03-12T13:36:46Z"), "payingPassenger": "Jerome Kithinji", "addtlPassenger": 4, "flightsUsed": [5]});
db.JourneyBooking.insert({"id": 4, "timeOfBooking": new Date("2021-04-29T23:47:24Z"), "payingPassenger": "Jack Mach", "addtlPassenger": 1, "flightsUsed": [3]});
db.JourneyBooking.insert({"id": 5, "timeOfBooking": new Date("2021-05-27T08:14:25Z"), "payingPassenger": "Rolly Beya", "addtlPassenger": 2, "flightsUsed": [4]});
db.JourneyBooking.insert({"id": 6, "timeOfBooking": new Date("2021-06-23T12:36:36Z"), "payingPassenger": "Nathan Flowers", "addtlPassenger": 3, "flightsUsed": [7, 3]});
db.JourneyBooking.insert({"id": 7, "timeOfBooking": new Date("2021-07-15T15:46:13Z"), "payingPassenger": "Shaan Shafiq", "addtlPassenger": 1, "flightsUsed": [8, 10]});
db.JourneyBooking.insert({"id": 8, "timeOfBooking": new Date("2021-08-21T18:23:12Z"), "payingPassenger": "Luciana Alioto", "addtlPassenger": 2, "flightsUsed": [9, 1]});
db.JourneyBooking.insert({"id": 9, "timeOfBooking": new Date("2021-09-28T20:15:24Z"), "payingPassenger": "Claudia Alioto", "addtlPassenger": 3, "flightsUsed": [10, 8]});
db.JourneyBooking.insert({"id": 10, "timeOfBooking": new Date("2021-10-13T21:16:46Z"), "payingPassenger": "Arthur Lerev", "addtlPassenger": 1, "flightsUsed": [6]});

//create Airports collection  
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


