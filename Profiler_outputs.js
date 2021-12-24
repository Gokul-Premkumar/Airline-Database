//Query1
{
    "op": "query",
    "ns": "test.Airports",
    "command": {
      "find": "Airports",
      "filter": {},
      "lsid": {
        "id": {
          "$binary": {
            "base64": "bcGPfIMeQj61V4TYIFqU6w==",
            "subType": "04"
          }
        }
      },
      "$db": "test"
    },
    "keysExamined": 0,
    "docsExamined": 10,
    "cursorExhausted": true,
    "numYield": 0,
    "nreturned": 10,
    "locks": {
      "Global": {
        "acquireCount": {
          "r": 1
        }
      },
      "Mutex": {
        "acquireCount": {
          "r": 1
        }
      }
    },
    "flowControl": {},
    "responseLength": 1733,
    "protocol": "op_msg",
    "millis": 0,
    "planSummary": "COLLSCAN",
    "execStats": {
      "stage": "COLLSCAN",
      "nReturned": 10,
      "executionTimeMillisEstimate": 0,
      "works": 12,
      "advanced": 10,
      "needTime": 1,
      "needYield": 0,
      "saveState": 0,
      "restoreState": 0,
      "isEOF": 1,
      "direction": "forward",
      "docsExamined": 10
    },
    "ts": {
      "$date": "2021-12-23T23:43:57.632Z"
    },
    "client": "127.0.0.1",
    "appName": "mongodb-vscode 0.7.0",
    "allUsers": [],
    "user": ""
  }
//Query2
{
    "op": "command",
    "ns": "test.Planes",
    "command": {
      "count": "Planes",
      "query": {
        "status": "working"
      },
      "lsid": {
        "id": {
          "$binary": {
            "base64": "nE32h+TRTiiXd9lKPYM/Bw==",
            "subType": "04"
          }
        }
      },
      "$db": "test"
    },
    "keysExamined": 0,
    "docsExamined": 8,
    "numYield": 0,
    "queryHash": "E6304EB6",
    "planCacheKey": "B6975428",
    "locks": {
      "Global": {
        "acquireCount": {
          "r": 1
        }
      },
      "Mutex": {
        "acquireCount": {
          "r": 1
        }
      }
    },
    "flowControl": {},
    "responseLength": 45,
    "protocol": "op_msg",
    "millis": 0,
    "planSummary": "COLLSCAN",
    "execStats": {
      "stage": "COUNT",
      "nReturned": 0,
      "executionTimeMillisEstimate": 0,
      "works": 10,
      "advanced": 0,
      "needTime": 9,
      "needYield": 0,
      "saveState": 0,
      "restoreState": 0,
      "isEOF": 1,
      "nCounted": 5,
      "nSkipped": 0,
      "inputStage": {
        "stage": "COLLSCAN",
        "filter": {
          "status": {
            "$eq": "working"
          }
        },
        "nReturned": 5,
        "executionTimeMillisEstimate": 0,
        "works": 10,
        "advanced": 5,
        "needTime": 4,
        "needYield": 0,
        "saveState": 0,
        "restoreState": 0,
        "isEOF": 1,
        "direction": "forward",
        "docsExamined": 8
      }
    },
    "ts": {
      "$date": "2021-12-23T23:47:35.438Z"
    },
    "client": "127.0.0.1",
    "appName": "mongodb-vscode 0.7.0",
    "allUsers": [],
    "user": ""
  }
//Query3
{
    "op": "query",
    "ns": "test.AirlineEmployees",
    "command": {
      "find": "AirlineEmployees",
      "filter": {},
      "sort": {
        "annualSalary": -1
      },
      "limit": 1,
      "lsid": {
        "id": {
          "$binary": {
            "base64": "azhPLMQJQP6tZ3RDWiGp8g==",
            "subType": "04"
          }
        }
      },
      "$db": "test"
    },
    "keysExamined": 0,
    "docsExamined": 10,
    "hasSortStage": true,
    "cursorExhausted": true,
    "numYield": 0,
    "nreturned": 1,
    "queryHash": "51C8F4A2",
    "planCacheKey": "3BF61618",
    "locks": {
      "Global": {
        "acquireCount": {
          "r": 1
        }
      },
      "Mutex": {
        "acquireCount": {
          "r": 1
        }
      }
    },
    "flowControl": {},
    "responseLength": 403,
    "protocol": "op_msg",
    "millis": 0,
    "planSummary": "COLLSCAN",
    "execStats": {
      "stage": "SORT",
      "nReturned": 1,
      "executionTimeMillisEstimate": 0,
      "works": 14,
      "advanced": 1,
      "needTime": 12,
      "needYield": 0,
      "saveState": 0,
      "restoreState": 0,
      "isEOF": 1,
      "sortPattern": {
        "annualSalary": -1
      },
      "memLimit": 104857600,
      "limitAmount": 1,
      "type": "simple",
      "totalDataSizeSorted": 0,
      "usedDisk": false,
      "inputStage": {
        "stage": "COLLSCAN",
        "nReturned": 10,
        "executionTimeMillisEstimate": 0,
        "works": 12,
        "advanced": 10,
        "needTime": 1,
        "needYield": 0,
        "saveState": 0,
        "restoreState": 0,
        "isEOF": 1,
        "direction": "forward",
        "docsExamined": 10
      }
    },
    "ts": {
      "$date": "2021-12-23T23:48:20.421Z"
    },
    "client": "127.0.0.1",
    "appName": "mongodb-vscode 0.7.0",
    "allUsers": [],
    "user": ""
  }
//Query5
{
    "op": "command",
    "ns": "test.PlaneFlights",
    "command": {
      "aggregate": "PlaneFlights",
      "pipeline": [
        {
          "$group": {
            "_id": "$flightPilots.pilot",
            "countPilots": {
              "$count": {}
            }
          }
        },
        {
          "$sort": {
            "countPilots": -1
          }
        },
        {
          "$limit": 1
        },
        {
          "$lookup": {
            "from": "AirlineEmployees",
            "localField": "_id",
            "foreignField": "id",
            "as": "employee"
          }
        },
        {
          "$unwind": "$employee"
        },
        {
          "$project": {
            "_id": 0,
            "employee": 1
          }
        }
      ],
      "cursor": {},
      "lsid": {
        "id": {
          "$binary": {
            "base64": "Ro8Pu7d3S5SwBog0CL+Ihw==",
            "subType": "04"
          }
        }
      },
      "$db": "test"
    },
    "keysExamined": 0,
    "docsExamined": 10,
    "hasSortStage": true,
    "cursorExhausted": true,
    "numYield": 0,
    "nreturned": 1,
    "queryHash": "6DAB46EC",
    "planCacheKey": "D23A0176",
    "locks": {
      "Global": {
        "acquireCount": {
          "r": 4
        }
      },
      "Mutex": {
        "acquireCount": {
          "r": 4
        }
      }
    },
    "flowControl": {},
    "responseLength": 407,
    "protocol": "op_msg",
    "millis": 0,
    "planSummary": "COLLSCAN",
    "ts": {
      "$date": "2021-12-23T23:49:33.581Z"
    },
    "client": "127.0.0.1",
    "appName": "mongodb-vscode 0.7.0",
    "allUsers": [],
    "user": ""
  }
//Query6
{
    "op": "command",
    "ns": "test.PlaneFlights",
    "command": {
      "aggregate": "PlaneFlights",
      "pipeline": [
        {
          "$group": {
            "_id": "$flightPilots.co-pilot",
            "countPilots": {
              "$count": {}
            }
          }
        },
        {
          "$lookup": {
            "from": "AirlineEmployees",
            "localField": "_id",
            "foreignField": "id",
            "as": "employee"
          }
        },
        {
          "$unwind": "$employee"
        },
        {
          "$project": {
            "_id": 0,
            "employee.fullName": 1,
            "countPilots": 1
          }
        }
      ],
      "cursor": {},
      "lsid": {
        "id": {
          "$binary": {
            "base64": "LDkjv7GeRTKCJicWNonMoA==",
            "subType": "04"
          }
        }
      },
      "$db": "test"
    },
    "keysExamined": 0,
    "docsExamined": 40,
    "cursorExhausted": true,
    "numYield": 0,
    "nreturned": 4,
    "queryHash": "6DAB46EC",
    "planCacheKey": "D23A0176",
    "locks": {
      "Global": {
        "acquireCount": {
          "r": 10
        }
      },
      "Mutex": {
        "acquireCount": {
          "r": 10
        }
      }
    },
    "flowControl": {},
    "responseLength": 375,
    "protocol": "op_msg",
    "millis": 0,
    "planSummary": "COLLSCAN",
    "ts": {
      "$date": "2021-12-23T23:49:51.108Z"
    },
    "client": "127.0.0.1",
    "appName": "mongodb-vscode 0.7.0",
    "allUsers": [],
    "user": ""
  }
//Query7
{
    "op": "command",
    "ns": "test.AirlineEmployees",
    "command": {
      "aggregate": "AirlineEmployees",
      "pipeline": [
        {
          "$project": {
            "_id": 0,
            "id": 1,
            "fullName": 1,
            "position": 1
          }
        },
        {
          "$match": {
            "position": "pilot"
          }
        },
        {
          "$lookup": {
            "from": "PlaneFlights",
            "localField": "id",
            "foreignField": "flightPilots.pilot",
            "as": "flights"
          }
        },
        {
          "$project": {
            "fullName": 1,
            "hoursWorked": {
              "$reduce": {
                "input": {
                  "$map": {
                    "input": "$flights",
                    "as": "f",
                    "in": {
                      "$divide": [
                        {
                          "$subtract": [
                            {
                              "$toDate": "$$f.time.arrivTime"
                            },
                            {
                              "$toDate": "$$f.time.depTime"
                            }
                          ]
                        },
                        3600000
                      ]
                    }
                  }
                },
                "initialValue": 0,
                "in": {
                  "$add": [
                    "$$value",
                    "$$this"
                  ]
                }
              }
            }
          }
        },
        {
          "$sort": {
            "hoursWorked": -1
          }
        },
        {
          "$limit": 1
        }
      ],
      "cursor": {},
      "lsid": {
        "id": {
          "$binary": {
            "base64": "aXSrlrQTTqexaffpCIGMbw==",
            "subType": "04"
          }
        }
      },
      "$db": "test"
    },
    "keysExamined": 0,
    "docsExamined": 50,
    "hasSortStage": true,
    "cursorExhausted": true,
    "numYield": 0,
    "nreturned": 1,
    "queryHash": "856E79E9",
    "planCacheKey": "C69B7C95",
    "locks": {
      "ReplicationStateTransition": {
        "acquireCount": {
          "w": 1
        }
      },
      "Global": {
        "acquireCount": {
          "r": 11
        }
      },
      "Mutex": {
        "acquireCount": {
          "r": 10
        }
      }
    },
    "flowControl": {},
    "storage": {},
    "responseLength": 167,
    "protocol": "op_msg",
    "millis": 1,
    "planSummary": "COLLSCAN",
    "ts": {
      "$date": "2021-12-23T23:50:01.250Z"
    },
    "client": "127.0.0.1",
    "appName": "mongodb-vscode 0.7.0",
    "allUsers": [],
    "user": ""
  }
 