//Query 4 Explainer No Index Output
{ 

  "explainVersion": "1", 

  "queryPlanner": { 

    "namespace": "test.Planes", 

    "indexFilterSet": false, 

    "parsedQuery": { 

      "serviceLength": { 

        "$gt": 400 

      } 

    }, 

    "maxIndexedOrSolutionsReached": false, 

    "maxIndexedAndSolutionsReached": false, 

    "maxScansToExplodeReached": false, 

    "winningPlan": { 

      "stage": "COLLSCAN", 

      "filter": { 

        "serviceLength": { 

          "$gt": 400 

        } 

      }, 

      "direction": "forward" 

    }, 

    "rejectedPlans": [] 

  }, 

  "executionStats": { 

    "executionSuccess": true, 

    "nReturned": 2, 

    "executionTimeMillis": 0, 

    "totalKeysExamined": 0, 

    "totalDocsExamined": 8, 

    "executionStages": { 

      "stage": "COLLSCAN", 

      "filter": { 

        "serviceLength": { 

          "$gt": 400 

        } 

      }, 

      "nReturned": 2, 

      "executionTimeMillisEstimate": 0, 

      "works": 10, 

      "advanced": 2, 

      "needTime": 7, 

      "needYield": 0, 

      "saveState": 0, 

      "restoreState": 0, 

      "isEOF": 1, 

      "direction": "forward", 

      "docsExamined": 8 

    } 

  }, 

  "command": { 

    "find": "Planes", 

    "filter": { 

      "serviceLength": { 

        "$gt": 400 

      } 

    }, 

    "$db": "test" 

  }, 

  "serverInfo": { 

    "host": "FlashByte", 

    "port": 27017, 

    "version": "5.0.5", 

    "gitVersion": "d65fd89df3fc039b5c55933c0f71d647a54510ae" 

  }, 

  "serverParameters": { 

    "internalQueryFacetBufferSizeBytes": 104857600, 

    "internalQueryFacetMaxOutputDocSizeBytes": 104857600, 

    "internalLookupStageIntermediateDocumentMaxSizeBytes": 104857600, 

    "internalDocumentSourceGroupMaxMemoryBytes": 104857600, 

    "internalQueryMaxBlockingSortMemoryUsageBytes": 104857600, 

    "internalQueryProhibitBlockingMergeOnMongoS": 0, 

    "internalQueryMaxAddToSetBytes": 104857600, 

    "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600 

  }, 

  "ok": 1 

} 

//Query 4 Explainer Index Output:
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "test.Planes",
    "indexFilterSet": false,
    "parsedQuery": {
      "serviceLength": {
        "$gt": 400
      }
    },
    "maxIndexedOrSolutionsReached": false,
    "maxIndexedAndSolutionsReached": false,
    "maxScansToExplodeReached": false,
    "winningPlan": {
      "stage": "FETCH",
      "inputStage": {
        "stage": "IXSCAN",
        "keyPattern": {
          "serviceLength": 1
        },
        "indexName": "serviceLengthIndex",
        "isMultiKey": false,
        "multiKeyPaths": {
          "serviceLength": []
        },
        "isUnique": false,
        "isSparse": false,
        "isPartial": false,
        "indexVersion": 2,
        "direction": "forward",
        "indexBounds": {
          "serviceLength": [
            "(400, inf.0]"
          ]
        }
      }
    },
    "rejectedPlans": []
  },
  "executionStats": {
    "executionSuccess": true,
    "nReturned": 2,
    "executionTimeMillis": 6,
    "totalKeysExamined": 2,
    "totalDocsExamined": 2,
    "executionStages": {
      "stage": "FETCH",
      "nReturned": 2,
      "executionTimeMillisEstimate": 0,
      "works": 3,
      "advanced": 2,
      "needTime": 0,
      "needYield": 0,
      "saveState": 0,
      "restoreState": 0,
      "isEOF": 1,
      "docsExamined": 2,
      "alreadyHasObj": 0,
      "inputStage": {
        "stage": "IXSCAN",
        "nReturned": 2,
        "executionTimeMillisEstimate": 0,
        "works": 3,
        "advanced": 2,
        "needTime": 0,
        "needYield": 0,
        "saveState": 0,
        "restoreState": 0,
        "isEOF": 1,
        "keyPattern": {
          "serviceLength": 1
        },
        "indexName": "serviceLengthIndex",
        "isMultiKey": false,
        "multiKeyPaths": {
          "serviceLength": []
        },
        "isUnique": false,
        "isSparse": false,
        "isPartial": false,
        "indexVersion": 2,
        "direction": "forward",
        "indexBounds": {
          "serviceLength": [
            "(400, inf.0]"
          ]
        },
        "keysExamined": 2,
        "seeks": 1,
        "dupsTested": 0,
        "dupsDropped": 0
      }
    }
  },
  "command": {
    "find": "Planes",
    "filter": {
      "serviceLength": {
        "$gt": 400
      }
    },
    "$db": "test"
  },
  "serverInfo": {
    "host": "FlashByte",
    "port": 27017,
    "version": "5.0.5",
    "gitVersion": "d65fd89df3fc039b5c55933c0f71d647a54510ae"
  },
  "serverParameters": {
    "internalQueryFacetBufferSizeBytes": 104857600,
    "internalQueryFacetMaxOutputDocSizeBytes": 104857600,
    "internalLookupStageIntermediateDocumentMaxSizeBytes": 104857600,
    "internalDocumentSourceGroupMaxMemoryBytes": 104857600,
    "internalQueryMaxBlockingSortMemoryUsageBytes": 104857600,
    "internalQueryProhibitBlockingMergeOnMongoS": 0,
    "internalQueryMaxAddToSetBytes": 104857600,
    "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600
  },
  "ok": 1
}
//Query 12 Explainer No Index Output:
{
  "explainVersion": "1",
  "stages": [
    {
      "$cursor": {
        "queryPlanner": {
          "namespace": "test.JourneyBooking",
          "indexFilterSet": false,
          "parsedQuery": {
            "payingPassenger": {
              "$eq": "Jack Mach"
            }
          },
          "queryHash": "C5BE0C95",
          "planCacheKey": "E64D2801",
          "maxIndexedOrSolutionsReached": false,
          "maxIndexedAndSolutionsReached": false,
          "maxScansToExplodeReached": false,
          "winningPlan": {
            "stage": "PROJECTION_DEFAULT",
            "transformBy": {
              "flights.destAirport": 1,
              "flights.startAirport": 1,
              "flightsUsed": 1,
              "payingPassenger": 1,
              "_id": 0
            },
            "inputStage": {
              "stage": "COLLSCAN",
              "filter": {
                "payingPassenger": {
                  "$eq": "Jack Mach"
                }
              },
              "direction": "forward"
            }
          },
          "rejectedPlans": []
        },
        "executionStats": {
          "executionSuccess": true,
          "nReturned": 1,
          "executionTimeMillis": 2,
          "totalKeysExamined": 0,
          "totalDocsExamined": 8,
          "executionStages": {
            "stage": "PROJECTION_DEFAULT",
            "nReturned": 1,
            "executionTimeMillisEstimate": 0,
            "works": 10,
            "advanced": 1,
            "needTime": 8,
            "needYield": 0,
            "saveState": 1,
            "restoreState": 1,
            "isEOF": 1,
            "transformBy": {
              "flights.destAirport": 1,
              "flights.startAirport": 1,
              "flightsUsed": 1,
              "payingPassenger": 1,
              "_id": 0
            },
            "inputStage": {
              "stage": "COLLSCAN",
              "filter": {
                "payingPassenger": {
                  "$eq": "Jack Mach"
                }
              },
              "nReturned": 1,
              "executionTimeMillisEstimate": 0,
              "works": 10,
              "advanced": 1,
              "needTime": 8,
              "needYield": 0,
              "saveState": 1,
              "restoreState": 1,
              "isEOF": 1,
              "direction": "forward",
              "docsExamined": 8
            }
          }
        }
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$unwind": {
        "path": "$flightsUsed"
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$lookup": {
        "from": "PlaneFlights",
        "as": "flights",
        "localField": "flightsUsed",
        "foreignField": "id",
        "unwinding": {
          "preserveNullAndEmptyArrays": false
        }
      },
      "totalDocsExamined": 0,
      "totalKeysExamined": 0,
      "collectionScans": 0,
      "indexesUsed": [],
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$project": {
        "payingPassenger": true,
        "flights": {
          "destAirport": true,
          "startAirport": true
        },
        "_id": false
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$lookup": {
        "from": "Airports",
        "as": "startAirport",
        "localField": "flights.startAirport",
        "foreignField": "id",
        "unwinding": {
          "preserveNullAndEmptyArrays": false
        }
      },
      "totalDocsExamined": 0,
      "totalKeysExamined": 0,
      "collectionScans": 0,
      "indexesUsed": [],
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$addFields": {
        "startAirportName": "$startAirport.airportName"
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$project": {
        "startAirportName": true,
        "payingPassenger": true,
        "flights": {
          "destAirport": true
        },
        "_id": false
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$lookup": {
        "from": "Airports",
        "as": "destAirport",
        "localField": "flights.destAirport",
        "foreignField": "id",
        "unwinding": {
          "preserveNullAndEmptyArrays": false
        }
      },
      "totalDocsExamined": 0,
      "totalKeysExamined": 0,
      "collectionScans": 0,
      "indexesUsed": [],
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$addFields": {
        "destinationAirportName": "$destAirport.airportName"
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$project": {
        "startAirportName": true,
        "destinationAirportName": true,
        "payingPassenger": true,
        "_id": false
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    }
  ],
  "serverInfo": {
    "host": "FlashByte",
    "port": 27017,
    "version": "5.0.5",
    "gitVersion": "d65fd89df3fc039b5c55933c0f71d647a54510ae"
  },
  "serverParameters": {
    "internalQueryFacetBufferSizeBytes": 104857600,
    "internalQueryFacetMaxOutputDocSizeBytes": 104857600,
    "internalLookupStageIntermediateDocumentMaxSizeBytes": 104857600,
    "internalDocumentSourceGroupMaxMemoryBytes": 104857600,
    "internalQueryMaxBlockingSortMemoryUsageBytes": 104857600,
    "internalQueryProhibitBlockingMergeOnMongoS": 0,
    "internalQueryMaxAddToSetBytes": 104857600,
    "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600
  },
  "command": {
    "aggregate": "JourneyBooking",
    "pipeline": [
      {
        "$match": {
          "payingPassenger": "Jack Mach"
        }
      },
      {
        "$unwind": "$flightsUsed"
      },
      {
        "$lookup": {
          "from": "PlaneFlights",
          "localField": "flightsUsed",
          "foreignField": "id",
          "as": "flights"
        }
      },
      {
        "$unwind": "$flights"
      },
      {
        "$project": {
          "_id": 0,
          "payingPassenger": 1,
          "flights.startAirport": 1,
          "flights.destAirport": 1
        }
      },
      {
        "$lookup": {
          "from": "Airports",
          "localField": "flights.startAirport",
          "foreignField": "id",
          "as": "startAirport"
        }
      },
      {
        "$unwind": "$startAirport"
      },
      {
        "$addFields": {
          "startAirportName": "$startAirport.airportName"
        }
      },
      {
        "$project": {
          "_id": 0,
          "payingPassenger": 1,
          "flights.destAirport": 1,
          "startAirportName": 1
        }
      },
      {
        "$lookup": {
          "from": "Airports",
          "localField": "flights.destAirport",
          "foreignField": "id",
          "as": "destAirport"
        }
      },
      {
        "$unwind": "$destAirport"
      },
      {
        "$addFields": {
          "destinationAirportName": "$destAirport.airportName"
        }
      },
      {
        "$project": {
          "_id": 0,
          "payingPassenger": 1,
          "destinationAirportName": 1,
          "startAirportName": 1
        }
      }
    ],
    "cursor": {},
    "$db": "test"
  },
  "ok": 1
}

//Query 12 Explainer Index Output

{
  "explainVersion": "1",
  "stages": [
    {
      "$cursor": {
        "queryPlanner": {
          "namespace": "test.JourneyBooking",
          "indexFilterSet": false,
          "parsedQuery": {
            "payingPassenger": {
              "$eq": "Jack Mach"
            }
          },
          "queryHash": "C5BE0C95",
          "planCacheKey": "8D48BC1C",
          "maxIndexedOrSolutionsReached": false,
          "maxIndexedAndSolutionsReached": false,
          "maxScansToExplodeReached": false,
          "winningPlan": {
            "stage": "PROJECTION_DEFAULT",
            "transformBy": {
              "flights.destAirport": 1,
              "flights.startAirport": 1,
              "flightsUsed": 1,
              "payingPassenger": 1,
              "_id": 0
            },
            "inputStage": {
              "stage": "FETCH",
              "inputStage": {
                "stage": "IXSCAN",
                "keyPattern": {
                  "payingPassenger": 1
                },
                "indexName": "payingPassengerIndex",
                "isMultiKey": false,
                "multiKeyPaths": {
                  "payingPassenger": []
                },
                "isUnique": false,
                "isSparse": false,
                "isPartial": false,
                "indexVersion": 2,
                "direction": "forward",
                "indexBounds": {
                  "payingPassenger": [
                    "[\"Jack Mach\", \"Jack Mach\"]"
                  ]
                }
              }
            }
          },
          "rejectedPlans": []
        },
        "executionStats": {
          "executionSuccess": true,
          "nReturned": 1,
          "executionTimeMillis": 1,
          "totalKeysExamined": 1,
          "totalDocsExamined": 1,
          "executionStages": {
            "stage": "PROJECTION_DEFAULT",
            "nReturned": 1,
            "executionTimeMillisEstimate": 0,
            "works": 2,
            "advanced": 1,
            "needTime": 0,
            "needYield": 0,
            "saveState": 1,
            "restoreState": 1,
            "isEOF": 1,
            "transformBy": {
              "flights.destAirport": 1,
              "flights.startAirport": 1,
              "flightsUsed": 1,
              "payingPassenger": 1,
              "_id": 0
            },
            "inputStage": {
              "stage": "FETCH",
              "nReturned": 1,
              "executionTimeMillisEstimate": 0,
              "works": 2,
              "advanced": 1,
              "needTime": 0,
              "needYield": 0,
              "saveState": 1,
              "restoreState": 1,
              "isEOF": 1,
              "docsExamined": 1,
              "alreadyHasObj": 0,
              "inputStage": {
                "stage": "IXSCAN",
                "nReturned": 1,
                "executionTimeMillisEstimate": 0,
                "works": 2,
                "advanced": 1,
                "needTime": 0,
                "needYield": 0,
                "saveState": 1,
                "restoreState": 1,
                "isEOF": 1,
                "keyPattern": {
                  "payingPassenger": 1
                },
                "indexName": "payingPassengerIndex",
                "isMultiKey": false,
                "multiKeyPaths": {
                  "payingPassenger": []
                },
                "isUnique": false,
                "isSparse": false,
                "isPartial": false,
                "indexVersion": 2,
                "direction": "forward",
                "indexBounds": {
                  "payingPassenger": [
                    "[\"Jack Mach\", \"Jack Mach\"]"
                  ]
                },
                "keysExamined": 1,
                "seeks": 1,
                "dupsTested": 0,
                "dupsDropped": 0
              }
            }
          }
        }
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$unwind": {
        "path": "$flightsUsed"
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 0
    },
    {
      "$lookup": {
        "from": "PlaneFlights",
        "as": "flights",
        "localField": "flightsUsed",
        "foreignField": "id",
        "unwinding": {
          "preserveNullAndEmptyArrays": false
        }
      },
      "totalDocsExamined": 0,
      "totalKeysExamined": 0,
      "collectionScans": 0,
      "indexesUsed": [],
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$project": {
        "payingPassenger": true,
        "flights": {
          "destAirport": true,
          "startAirport": true
        },
        "_id": false
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$lookup": {
        "from": "Airports",
        "as": "startAirport",
        "localField": "flights.startAirport",
        "foreignField": "id",
        "unwinding": {
          "preserveNullAndEmptyArrays": false
        }
      },
      "totalDocsExamined": 0,
      "totalKeysExamined": 0,
      "collectionScans": 0,
      "indexesUsed": [],
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$addFields": {
        "startAirportName": "$startAirport.airportName"
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$project": {
        "startAirportName": true,
        "payingPassenger": true,
        "flights": {
          "destAirport": true
        },
        "_id": false
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$lookup": {
        "from": "Airports",
        "as": "destAirport",
        "localField": "flights.destAirport",
        "foreignField": "id",
        "unwinding": {
          "preserveNullAndEmptyArrays": false
        }
      },
      "totalDocsExamined": 0,
      "totalKeysExamined": 0,
      "collectionScans": 0,
      "indexesUsed": [],
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$addFields": {
        "destinationAirportName": "$destAirport.airportName"
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    },
    {
      "$project": {
        "destinationAirportName": true,
        "startAirportName": true,
        "payingPassenger": true,
        "_id": false
      },
      "nReturned": 1,
      "executionTimeMillisEstimate": 1
    }
  ],
  "serverInfo": {
    "host": "FlashByte",
    "port": 27017,
    "version": "5.0.5",
    "gitVersion": "d65fd89df3fc039b5c55933c0f71d647a54510ae"
  },
  "serverParameters": {
    "internalQueryFacetBufferSizeBytes": 104857600,
    "internalQueryFacetMaxOutputDocSizeBytes": 104857600,
    "internalLookupStageIntermediateDocumentMaxSizeBytes": 104857600,
    "internalDocumentSourceGroupMaxMemoryBytes": 104857600,
    "internalQueryMaxBlockingSortMemoryUsageBytes": 104857600,
    "internalQueryProhibitBlockingMergeOnMongoS": 0,
    "internalQueryMaxAddToSetBytes": 104857600,
    "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600
  },
  "command": {
    "aggregate": "JourneyBooking",
    "pipeline": [
      {
        "$match": {
          "payingPassenger": "Jack Mach"
        }
      },
      {
        "$unwind": "$flightsUsed"
      },
      {
        "$lookup": {
          "from": "PlaneFlights",
          "localField": "flightsUsed",
          "foreignField": "id",
          "as": "flights"
        }
      },
      {
        "$unwind": "$flights"
      },
      {
        "$project": {
          "_id": 0,
          "payingPassenger": 1,
          "flights.startAirport": 1,
          "flights.destAirport": 1
        }
      },
      {
        "$lookup": {
          "from": "Airports",
          "localField": "flights.startAirport",
          "foreignField": "id",
          "as": "startAirport"
        }
      },
      {
        "$unwind": "$startAirport"
      },
      {
        "$addFields": {
          "startAirportName": "$startAirport.airportName"
        }
      },
      {
        "$project": {
          "_id": 0,
          "payingPassenger": 1,
          "flights.destAirport": 1,
          "startAirportName": 1
        }
      },
      {
        "$lookup": {
          "from": "Airports",
          "localField": "flights.destAirport",
          "foreignField": "id",
          "as": "destAirport"
        }
      },
      {
        "$unwind": "$destAirport"
      },
      {
        "$addFields": {
          "destinationAirportName": "$destAirport.airportName"
        }
      },
      {
        "$project": {
          "_id": 0,
          "payingPassenger": 1,
          "destinationAirportName": 1,
          "startAirportName": 1
        }
      }
    ],
    "cursor": {},
    "$db": "test"
  },
  "ok": 1
}