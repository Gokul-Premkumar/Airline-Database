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

// 5 Find which pilot is working the most flights and print the details

// 6 Find how many times a pilot has been the co-pilot.

// 7 Find which pilot has worked the most hours

// 8 Expand the flightsUsed array using unwind
db.JourneyBooking.aggregate(
	{$unwind: "$flightsUsed"}
)

// 9 List of people that have been to Rome

// 10 Find which airport is the most expensive

// 11 Revenue

// 12 Add extra field using aggregate
db.AirlineEmployees.aggregate([
	{$match:{fullName:"Abraham Whittaker"}},
	{$addFields:{Retired:"True"}}
])



