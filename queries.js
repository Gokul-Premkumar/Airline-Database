// 1 Prints Airports
db.Airports.find();

// 2 Finds number of working planes
db.Planes.find({status:"working"}).count();

// 3 Find highest paid employee
db.AirlineEmployees.find().sort({annualSalary:-1}).limit(1)

// 4 Find planes with servicelength over 400, these will need to undergo servicing
db.Planes.find({
	serviceLength : {
		$gt:400
	}
})

// 5 Find the details of the pilot that has been the main pilot the most times
db.PlaneFlights.aggregate([
    {
        $group :{
            _id : "$flightPilots.pilot",
            countPilots : {
                $count :{}
            }
        }
    },
    {$sort : {countPilots: -1}},
    {$limit : 1},
    {
        $lookup :{
            from: "AirlineEmployees",
            localField: "_id",
            foreignField: "id",
            as:"employee"
        }
    },
    {$unwind: "$employee"},
    {
    $project: {
        _id :0,
        "employee" : 1

    }
    }
 ])
 
// 6 Find how many times a pilot has been the co-pilot.
db.PlaneFlights.aggregate([
    {
        $group :{
            _id : "$flightPilots.co-pilot",
            countPilots : {
                $count :{}
            }
        }
    },
    {
        $lookup :{
            from: "AirlineEmployees",
            localField: "_id",
            foreignField: "id",
            as:"employee"
        }
    },
    {$unwind: "$employee"},
    {
    $project: {
        _id :0,
        "employee.fullName" : 1,
        "countPilots" : 1
    }
    }
 ]);
 
// 7 Find which pilot has worked the most hours as the main pilot
db.AirlineEmployees.aggregate([
    {
        $project: {
            _id:0,
            "id":1,
            "fullName": 1, 
            "position" : 1
        }
    },
    {
        $match: {"position": "pilot"}
    },
    {
        $lookup: {from: "PlaneFlights", localField: "id", foreignField: "flightPilots.pilot", as: "flights"}
    },
    {
        $project: {
            fullName: 1, 
            hoursWorked: {
                $reduce: {
                    input: {
                        $map: {
                            input: "$flights",
                            as: "f",
                            in: {
                                $divide: [
                                    { $subtract: [{$toDate: "$$f.time.arrivTime"}, {$toDate: "$$f.time.depTime"}] },
                                    3600000
                                ]
                            }
                        }
                    },
                    initialValue: 0,
                    in: {
                        $add: ["$$value", "$$this"]
                    }
                }
            }
        }
    },
    {
        $sort: { hoursWorked: -1 }
    },
    {
        $limit: 1
    }
]);

// 8 Which pilot's fitdate is coming up nearest

db.AirlineEmployees.find({"fitDate": {$exists : true}}).sort({fitDate:1}).limit(1);

// 9 List of paying passengers that have been to Rome
db.JourneyBooking.aggregate([
    {
        $project :{
            _id :0,
            "payingPassenger" :1,
            "flightsUsed" : 1
        }
    },
    { $unwind : "$flightsUsed"},
    {
        $lookup: {
            from: "PlaneFlights",
            localField: "flightsUsed",
            foreignField: "id",
            as: "flights"
        }
    },
    { $unwind : "$flights"},
    {
        $project :{
            "payingPassenger" :1,
            "flights.startAirport" : 1,
            "flights.destAirport" : 1
        }
    },
    {
        $lookup: {
            from: "Airports",
            localField: "flights.startAirport",
            foreignField: "id",
            as: "startAirportsNames"
        }
    },
    {
        $lookup: {
            from: "Airports",
            localField: "flights.destAirport",
            foreignField: "id",
            as: "destAirportsNames"
        }
    },
    {
        $project :{
            "payingPassenger" :1,
            "allAirportNames" : { $concatArrays : ["$startAirportsNames", "$destAirportsNames"]}
        }
    },
    { $match : { "allAirportNames.airportLocation" : "Rome"}},
    {$group : {_id : "$payingPassenger"}},
    {
        $project :{
            _id: 0,
            "beenToRome" : "$_id"
        }
    }
]);
// 10 Find which airport is the most expensive
db.Airports.aggregate([
    {
        "$project": {
            _id : 0,
            "id" :1,
            "airportName" : 1,
            "totalCost" : {
                "$add" : ["$airportCost.parkPrice", "$airportCost.refuelPrice"]
            }
        }
    },
    {$sort: { result : -1 } },
    {$limit: 1}
])

// 11 Revenue
db.JourneyBooking.aggregate([
	
	{ $unwind: "$flightsUsed"},
	{
		$lookup: {
			from: "PlaneFlights",
			localField: "flightsUsed",
			foreignField: "id",
			as: "flights"
		}
	},
	{$addFields:{airportS:"$flights.startAirport"}},
	{$addFields:{airportD:"$flights.destAirport"}},
	{ $unwind: "$airportS"},
	{ $unwind: "$airportD"},
	{
		$project :{
			_id: 0,
			"bookingPrice" :1,
			"airportS" : 1,
			"airportD" : 1
		}
	},
	{
		$lookup: {
			from: "Airports",
			localField: "airportS",
			foreignField: "id",
			as: "airp"
		}
	},
	{ $unwind: "$airp"},
	{
		$project :{
			_id: 0,
			"bookingPrice" :1,
			"airportS" : 1,
			"airportD" : 1,
			calcCS : {
				$add : [ "$airp.airportCost.refuelPrice", { $multiply: ["$airp.airportCost.parkPrice", 2]}]
			}
		}
	},
	{
		$lookup: {
			from: "Airports",
			localField: "airportD",
			foreignField: "id",
			as: "airp"
		}
	},
	{ $unwind: "$airp"},
	{
		$project :{
			_id: 0,
			"bookingPrice" :1,
			"airportS" : 1,
			"airportD" : 1,
			calcCS : 1,
			calcCD : {
				$add : [ "$airp.airportCost.refuelPrice", { $multiply: ["$airp.airportCost.parkPrice", 2]}]
			}
		}
	},
	{
		$group : {
			_id : "$bookingPrice",
			totalCost : { $sum: { $add: ["$calcCS", "$calcCD"]} }
		}
	},
	{
		$group : {
			_id : null,
			totalCost : { $sum: { $subtract: ["$_id", "$totalCost"]} }
		}
	},
	{
		$project :{
			_id: 0,
			"Revenue" : "$totalCost",
		}
	}
])

// 12 Which airports Jerome has visited
db.JourneyBooking.aggregate([
    { $match : {"payingPassenger": "Jack Mach"}},
    { $unwind : "$flightsUsed"},
    {
        $lookup : {
            from: "PlaneFlights",
            localField: "flightsUsed",
            foreignField: "id",
            as: "flights"
        }
    },
    { $unwind : "$flights"},
    {
        $project :{
            _id :0,
            "payingPassenger" :1,
            "flights.startAirport":1,
            "flights.destAirport": 1
        }
    },
    {
        $lookup : {
            from: "Airports",
            localField: "flights.startAirport",
            foreignField: "id",
            as: "startAirport"
        }
    },
    { $unwind : "$startAirport"},
    {$addFields: {startAirportName: "$startAirport.airportName"}},
    {
        $project :{
            _id :0,
            "payingPassenger" :1,
            "flights.destAirport": 1,
            "startAirportName": 1
        }
    },
    {
        $lookup : {
            from: "Airports",
            localField: "flights.destAirport",
            foreignField: "id",
            as: "destAirport"
        }
    },
    { $unwind : "$destAirport"},
    {$addFields: {destinationAirportName: "$destAirport.airportName"}},
    {
        $project :{
            _id :0,
            "payingPassenger" :1,
            "destinationAirportName": 1,
            "startAirportName": 1
        }
    }
]);


