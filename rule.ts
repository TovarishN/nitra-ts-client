export function rule()
{
    let obj = {
        "599abfe1c7deae55f63b9f5e": {
            "segmentation": {
                "rules": {
                    "id": "599c1d10c7deae55f63b9fd4",
                    "rule": {
                        "Gender": {
                            "$eq": "F"
                        },
                        "CasinoStandard": {
                            "$eq": true
                        },
                        "Age": {
                            "$gt": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "599ac40bc7deae55f63b9f66",
                    "rule": {
                        "$and": [
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "599c174fc7deae55f63b9fc3",
                    "rule": {
                        "count": {
                            "$eq": 5,
                            "$gt": 3
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "599ac43ac7deae55f63b9f69",
                    "rule": {
                        "real_money_contribution": {
                            "$eq": 500
                        },
                        "$and": [
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "599c19c6c7deae55f63b9fc7",
                    "rule": {
                        "game_id": {
                            "$eq": "723"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [],
                "errors": []
            },
            "id": "599abfe1c7deae55f63b9f5e",
            "active": true,
            "startDate": "2017-08-21T12:00:00.000Z",
            "endDate": "2017-08-31T09:00:00.000Z",
            "startDateOptin": "2017-08-21T12:00:00.000Z",
            "endDateOptin": "2017-08-24T21:00:00.000Z",
            "optin": false,
            "groupId": "599ac052c7deae55f63b9f5f"
        },
        "599c32b2c7deae55f63ba015": {
            "segmentation": {
                "rules": {
                    "id": "599c32b2c7deae55f63ba000",
                    "rule": {
                        "Age": {
                            "$gt": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "599c32b2c7deae55f63ba009",
                    "rule": {
                        "$and": [
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "payout_amount": {
                                    "$eq": 723
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "599c32b2c7deae55f63ba00a",
                    "rule": {
                        "count": {
                            "$gt": 5
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "599c32b2c7deae55f63ba011",
                    "rule": {
                        "$and": [
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "599c32b2c7deae55f63ba014",
                    "rule": {
                        "game_id": {
                            "$eq": "723"
                        },
                        "payout_amount": {
                            "$eq": 723
                        },
                        "$and": [
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ],
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59a5530a7397d965c784422f",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "599c32b2c7deae55f63ba015",
            "active": true,
            "startDate": "2017-08-22T09:00:00.000Z",
            "endDate": "2017-08-31T09:00:00.000Z",
            "startDateOptin": "2017-08-22T09:00:00.000Z",
            "endDateOptin": "2017-08-30T21:00:00.000Z",
            "optin": true,
            "groupId": "599ac052c7deae55f63b9f5f"
        },
        "59881e254ddde35cd6e0a7b2": {
            "segmentation": {
                "rules": {
                    "id": "59881ec74ddde35cd6e0a7b6",
                    "rule": {
                        "Age": {
                            "$gt": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59881ece4ddde35cd6e0a7b9",
                    "rule": {
                        "user_id": {
                            "$eq": 65
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59881ed54ddde35cd6e0a7bc",
                    "rule": {
                        "$and": [
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10000
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59881edf4ddde35cd6e0a7bf",
                    "rule": {
                        "time_stamp": {
                            "$eq": 10
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering_contribution": {
                "rules": [
                    {
                        "id": "5989bb5dc7623d5e8a2d287d",
                        "rule": {
                            "provider": {
                                "$eq": "111"
                            }
                        }
                    },
                    {
                        "id": "598da4d1ebfe460460c15e9d",
                        "rule": {
                            "provider_id": {
                                "$eq": 48563
                            }
                        }
                    }
                ],
                "counters": [
                    {
                        "id": "5989bb8ac7623d5e8a2d2880",
                        "rule": [
                            {
                                "rule_id": {
                                    "$eq": "5989bb5dc7623d5e8a2d287d"
                                }
                            },
                            {
                                "coefficient": {
                                    "$eq": 100
                                }
                            }
                        ]
                    },
                    {
                        "id": "598da50eebfe460460c15ea2",
                        "rule": [
                            {
                                "rule_id": {
                                    "$eq": "5989bb5dc7623d5e8a2d287d"
                                }
                            },
                            {
                                "coefficient": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                ],
                "errors": []
            },
            "id": "59881e254ddde35cd6e0a7b2",
            "active": true,
            "startDate": "2017-08-10T09:00:00.000Z",
            "endDate": "2017-08-24T09:00:00.000Z",
            "startDateOptin": "2017-08-10T21:00:00.000Z",
            "endDateOptin": "2017-08-24T09:00:00.000Z",
            "optin": true,
            "groupId": "598ad70878123540c745a0c5"
        },
        "59831de4ccfdf14a5749c81b": {
            "segmentation": {
                "rules": {
                    "id": "598414190daa9a03e3481248",
                    "rule": {
                        "Age": {
                            "$gt": 21,
                            "$gte": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59832fe4ccfdf14a5749c867",
                    "rule": {
                        "game_id": {
                            "$eq": "723"
                        },
                        "$and": [
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59831fdeccfdf14a5749c82b",
                    "rule": {
                        "count": {
                            "$gte": 3,
                            "$gt": 3
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59831feaccfdf14a5749c82e",
                    "rule": {
                        "amount": {
                            "$eq": 200
                        },
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "5983204fccfdf14a5749c831",
                    "rule": {
                        "currency": {
                            "$eq": "EUR"
                        },
                        "$and": [
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59833206ccfdf14a5749c86e",
                    "rule": {
                        "amount": {
                            "$gt": 50
                        },
                        "stake_amount": {
                            "$gt": 100
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "598332e8ccfdf14a5749c871",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    }
                ],
                "counters": [
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 10
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 10
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5984243c0daa9a03e348124c",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 10
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "598332e8ccfdf14a5749c871"
                                }
                            }
                        ]
                    }
                ],
                "errors": []
            },
            "id": "59831de4ccfdf14a5749c81b",
            "active": true,
            "startDate": "2017-08-09T09:00:00.000Z",
            "endDate": "2017-10-02T09:00:00.000Z",
            "startDateOptin": "2017-08-09T21:00:00.000Z",
            "endDateOptin": "2017-08-13T21:00:00.000Z",
            "optin": true,
            "groupId": "598ad70878123540c745a0c5"
        },
        "59a3eec0135a5f0abf3ffb80": {
            "segmentation": {
                "rules": {
                    "id": "59a3eeea135a5f0abf3ffb83",
                    "rule": {
                        "Age": {
                            "$gte": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59a3ef38135a5f0abf3ffb86",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 70560
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59a3f029135a5f0abf3ffb8b",
                    "rule": {
                        "count": {
                            "$gt": 3
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59a3f04b135a5f0abf3ffb8e",
                    "rule": {
                        "amount": {
                            "$eq": 1000
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59a3f0a6135a5f0abf3ffb93",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59a3f0c6135a5f0abf3ffb96",
                    "rule": {
                        "amount": {
                            "$gte": 50,
                            "$gt": 50
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [
                    {
                        "id": "59a3f0ec135a5f0abf3ffb99",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "59a3f0ec135a5f0abf3ffb99",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    }
                ],
                "counters": [
                    {
                        "id": "59a3f102135a5f0abf3ffb9e",
                        "rule": [
                            {
                                "rule_id": {
                                    "$eq": "59a3f0ec135a5f0abf3ffb99"
                                }
                            },
                            {
                                "coefficient": {
                                    "$eq": 70
                                }
                            }
                        ]
                    },
                    {
                        "id": "59a3f102135a5f0abf3ffb9e",
                        "rule": [
                            {
                                "rule_id": {
                                    "$eq": "59a3f0ec135a5f0abf3ffb99"
                                }
                            },
                            {
                                "coefficient": {
                                    "$eq": 70
                                }
                            }
                        ]
                    }
                ],
                "errors": []
            },
            "id": "59a3eec0135a5f0abf3ffb80",
            "active": true,
            "optin": true
        },
        "59a69c5c9408b35976c42fd8": {
            "segmentation": {
                "rules": {
                    "id": "59a6a3689408b35976c42fdb",
                    "rule": {
                        "Age": {
                            "$gte": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59a6a69a9408b35976c42fde",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 10
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59a6a970f2bf4543142ad1f2",
                    "rule": {
                        "count": {
                            "$gte": 3
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59a6a984f2bf4543142ad1f5",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59a6a9b7f2bf4543142ad1fa",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59a6a9d0f2bf4543142ad1fd",
                    "rule": {
                        "stake_amount": {
                            "$gte": 700
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59a69c5c9408b35976c42fd8",
            "active": false,
            "startDate": "2017-08-30T09:00:00.000Z",
            "endDate": "2017-09-03T09:00:00.000Z",
            "startDateOptin": "2017-08-30T09:00:00.000Z",
            "endDateOptin": "2017-09-03T09:00:00.000Z",
            "optin": true
        },
        "59a6b4bff2bf4543142ad201": {
            "segmentation": {
                "rules": {
                    "id": "59b93e77ddecf570f8d6d25d",
                    "rule": {
                        "Gender": {
                            "$eq": "F"
                        },
                        "Age": {
                            "$eq": 36
                        },
                        "$and": [
                            {
                                "Gender": {
                                    "$eq": "F"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 36
                                }
                            },
                            {
                                "Gender": {
                                    "$eq": "F"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 36
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "5"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$gte": 5
                                }
                            },
                            {
                                "Currency": {
                                    "$in": [
                                        "SEK",
                                        "NOK"
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "5"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$gte": 5
                                }
                            },
                            {
                                "Currency": {
                                    "$in": [
                                        "SEK",
                                        "NOK"
                                    ]
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Currency": {
                                            "$eq": "SEK"
                                        }
                                    },
                                    {
                                        "Currency": {
                                            "$eq": "NOK"
                                        }
                                    }
                                ]
                            },
                            {
                                "Brand": {
                                    "$eq": "5"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$gte": 5
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59a6b534f2bf4543142ad207",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "user_id": {
                                    "$in": [
                                        70560,
                                        59223,
                                        186097
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59a6b551f2bf4543142ad20a",
                    "rule": {
                        "count": {
                            "$eq": 5
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59a6b5f4f2bf4543142ad211",
                    "rule": {
                        "real_money_contribution": {
                            "$eq": 500
                        },
                        "$and": [
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59a6b789f2bf4543142ad214",
                    "rule": {
                        "currency": {
                            "$eq": "EUR"
                        }
                    }
                },
                "counters": {
                    "id": "59a6b7c8f2bf4543142ad219",
                    "rule": {
                        "count": {
                            "$gte": 0
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [
                    {
                        "id": "59b94030ddecf570f8d6d26a",
                        "rule": {
                            "coefficient": {
                                "$eq": 100
                            }
                        }
                    },
                    {
                        "id": "59b94071ddecf570f8d6d271",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 20
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Lauamängud"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59b94030ddecf570f8d6d26a",
                        "rule": {
                            "coefficient": {
                                "$eq": 100
                            }
                        }
                    },
                    {
                        "id": "59b94071ddecf570f8d6d271",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 20
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Lauamängud"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59b94030ddecf570f8d6d26a",
                        "rule": {
                            "coefficient": {
                                "$eq": 100
                            }
                        }
                    },
                    {
                        "id": "59b94071ddecf570f8d6d271",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 20
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Lauamängud"
                                }
                            }
                        ]
                    }
                ],
                "errors": []
            },
            "id": "59a6b4bff2bf4543142ad201",
            "active": true,
            "optin": true,
            "onPause": [],
            "startDate": "2017-08-30T12:51:11.089Z",
            "endDate": null,
            "startDateOptin": "2017-08-30T12:51:11.089Z",
            "endDateOptin": null,
            "groupId": "598ad70878123540c745a0c5"
        },
        "59a6cdd6f2bf4543142ad21a": {
            "segmentation": {
                "rules": {
                    "id": "59a6cdebf2bf4543142ad21d",
                    "rule": {
                        "Age": {
                            "$gte": 21
                        },
                        "$and": [
                            {
                                "Age": {
                                    "$gte": 21
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59ad5a3cddecf570f8d6d1ea",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            }
                        ],
                        "code": {
                            "$eq": "bet"
                        },
                        "deposit_amount": {
                            "$eq": 1000
                        }
                    }
                },
                "counters": {
                    "id": "59ad5a80ddecf570f8d6d1ef",
                    "rule": {
                        "count": {
                            "$gte": 3,
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59a6ce38f2bf4543142ad228",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 600
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 600
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 600
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 600
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59b90e4fddecf570f8d6d24f",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        },
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "egt"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59b90e61ddecf570f8d6d252",
                    "rule": {
                        "count": {
                            "$eq": 1,
                            "$gte": 3
                        },
                        "stake_amount": {
                            "$gte": 25000
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [
                    {
                        "id": "59ad5f73ddecf570f8d6d20c",
                        "rule": {
                            "game_id": {
                                "$eq": "723"
                            }
                        }
                    },
                    {
                        "id": "59ad5f73ddecf570f8d6d20d",
                        "rule": {
                            "game_id": {
                                "$eq": "876"
                            }
                        }
                    },
                    {
                        "id": "59ad5f73ddecf570f8d6d20e",
                        "rule": {
                            "game_id": {
                                "$eq": "123"
                            }
                        }
                    }
                ],
                "counters": [
                    {
                        "id": "59ad5ec6ddecf570f8d6d205",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 20
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "table games"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ad5fb9ddecf570f8d6d217",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 10
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "video pokers"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ad5fb9ddecf570f8d6d218",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 100
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "excluded games"
                                }
                            }
                        ]
                    }
                ],
                "errors": []
            },
            "id": "59a6cdd6f2bf4543142ad21a",
            "active": false,
            "optin": true,
            "onPause": []
        },
        "59a7ce3998089618a0ca3a32": {
            "segmentation": {
                "rules": {
                    "id": "59a7ce4598089618a0ca3a35",
                    "rule": {
                        "Age": {
                            "$gt": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59a7ce7298089618a0ca3a3a",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$gt": 1000
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59a7ce8098089618a0ca3a3d",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59a7ce9e98089618a0ca3a42",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59a7ce3998089618a0ca3a32",
            "active": false,
            "optin": true
        },
        "59b14295ddecf570f8d6d21c": {
            "segmentation": {
                "rules": {
                    "id": "59b142a8ddecf570f8d6d21e",
                    "rule": {
                        "$and": [
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Gender": {
                                    "$eq": "M"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Gender": {
                                    "$eq": "M"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$lt": 4
                                }
                            }
                        ],
                        "Brand": {
                            "$eq": "6"
                        },
                        "Age": {
                            "$eq": 37
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59b143b6ddecf570f8d6d229",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 501
                        }
                    }
                },
                "counters": {
                    "id": "59b143c0ddecf570f8d6d22c",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59b14416ddecf570f8d6d231",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59b14295ddecf570f8d6d21c",
            "active": true,
            "startDate": "2017-09-07T13:00:00.000Z",
            "endDate": "2017-09-10T09:00:00.000Z",
            "startDateOptin": "2017-09-07T13:00:00.000Z",
            "endDateOptin": "2017-09-10T09:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59b14beeddecf570f8d6d243": {
            "segmentation": {
                "rules": {
                    "id": "59b14beeddecf570f8d6d237",
                    "rule": {
                        "Brand": {
                            "$eq": "olybet.ee"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59b14beeddecf570f8d6d23c",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 501
                        }
                    }
                },
                "counters": {
                    "id": "59b14beeddecf570f8d6d23d",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59b14beeddecf570f8d6d242",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59b14beeddecf570f8d6d243",
            "active": true,
            "startDate": "2017-09-07T13:00:00.000Z",
            "endDate": "2017-09-10T09:00:00.000Z",
            "startDateOptin": "2017-09-07T13:00:00.000Z",
            "endDateOptin": "2017-09-10T09:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59ba8053ff1c014eabb93c44": {
            "segmentation": {
                "rules": {
                    "id": "59ba8323ff1c014eabb93c4b",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 38
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 38
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 38
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "6"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 4
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 37
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59ba8371ff1c014eabb93c4c",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 500
                        }
                    }
                },
                "counters": {
                    "id": "59ba85daff1c014eabb93c53",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59ba86c8ff1c014eabb93c5c",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59ba8919ff1c014eabb93c61",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider_id": {
                                    "$in": [
                                        900001,
                                        900002
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59ba8943ff1c014eabb93c64",
                    "rule": {
                        "stake_amount": {
                            "$gte": 100
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    },
                    {
                        "id": "59ba8a22ff1c014eabb93c69",
                        "rule": {
                            "provider_id": {
                                "$eq": 900002
                            }
                        }
                    }
                ],
                "counters": [
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    },
                    {
                        "id": "59ba8a3dff1c014eabb93c6e",
                        "rule": [
                            {
                                "coefficient": {
                                    "$eq": 50
                                }
                            },
                            {
                                "rule_id": {
                                    "$eq": "Livebet"
                                }
                            }
                        ]
                    }
                ],
                "errors": []
            },
            "id": "59ba8053ff1c014eabb93c44",
            "active": true,
            "startDate": "2017-09-14T13:00:00.000Z",
            "endDate": "2017-09-30T21:00:00.000Z",
            "startDateOptin": "2017-09-14T13:00:00.000Z",
            "endDateOptin": "2017-09-30T21:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59c903f85cffd439d4571b61": {
            "segmentation": {
                "rules": {
                    "id": "59c905295cffd439d4571b64",
                    "rule": {
                        "Age": {
                            "$gte": 21
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59c9053e5cffd439d4571b67",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59c905525cffd439d4571b6a",
                    "rule": {
                        "count": {
                            "$gte": 3
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59c9055e5cffd439d4571b6d",
                    "rule": {
                        "amount": {
                            "$eq": 300
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59c9056c5cffd439d4571b70",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59c9058f5cffd439d4571b73",
                    "rule": {
                        "count": {
                            "$gte": 5
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59c903f85cffd439d4571b61",
            "active": false,
            "optin": true,
            "onPause": []
        },
        "59c94f20b172074db17d9fea": {
            "segmentation": {
                "rules": {
                    "id": "59c95030b172074db17d9ff1",
                    "rule": {
                        "$and": [
                            {
                                "DepositCount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59c95043b172074db17d9ff4",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 500
                        }
                    }
                },
                "counters": {
                    "id": "59c95050b172074db17d9ff7",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59c95076b172074db17d9ffc",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "2000"
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": "500"
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "2000"
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": "500"
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59c950bab172074db17d9fff",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "bet_construct",
                                        "orakulas"
                                    ]
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "undefined": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59c950d8b172074db17da002",
                    "rule": {
                        "stake_amount": {
                            "$gte": 2000
                        },
                        "undefined": {
                            "$gte": "20.00"
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [
                    {
                        "id": "59f898774bd22215c909d64f",
                        "rule": {
                            "stake_amount": {
                                "$eq": "10"
                            }
                        }
                    },
                    {
                        "id": "59f898774bd22215c909d64f",
                        "rule": {
                            "stake_amount": {
                                "$eq": "10"
                            }
                        }
                    },
                    {
                        "id": "59f898774bd22215c909d64f",
                        "rule": {
                            "stake_amount": {
                                "$eq": 10
                            }
                        }
                    },
                    {
                        "id": "59f898774bd22215c909d64f",
                        "rule": {
                            "stake_amount": {
                                "$eq": 10
                            }
                        }
                    }
                ],
                "counters": [],
                "errors": []
            },
            "id": "59c94f20b172074db17d9fea",
            "active": true,
            "startDate": "2017-09-25T09:00:00.000Z",
            "endDate": "2017-12-31T21:59:00.000Z",
            "startDateOptin": "2017-09-24T21:00:00.000Z",
            "endDateOptin": "2017-12-31T21:59:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": [
                "72056"
            ]
        },
        "59cc9d2df010952a5bbf39da": {
            "segmentation": {
                "rules": {
                    "id": "59cca46ef010952a5bbf39df",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 186097
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        186097,
                                        72056
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        186097,
                                        72056,
                                        10000000
                                    ]
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lv"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lv"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lv"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.ee"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lv"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lv"
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794,
                                                184917,
                                                193250,
                                                191560,
                                                188074,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                186707
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lv"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794,
                                                184917,
                                                193250,
                                                191560,
                                                188074,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                186707
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                186097,
                                                68794,
                                                184917,
                                                193250,
                                                191560,
                                                188074,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                186707
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                184917,
                                                193250,
                                                191560,
                                                188074,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                186707
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800,
                                                186097,
                                                68794,
                                                null
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800,
                                                186097,
                                                68794,
                                                71267
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                184917,
                                                193250,
                                                191560,
                                                188074,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                186707
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                70800,
                                                186097,
                                                68794,
                                                71267,
                                                82243
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                185336,
                                                109450,
                                                82934,
                                                162625,
                                                182686,
                                                163617,
                                                110459,
                                                189990,
                                                83982,
                                                184917,
                                                172892,
                                                163203,
                                                89841,
                                                186889,
                                                161275,
                                                180523,
                                                187219,
                                                113629,
                                                113395,
                                                144837,
                                                151380,
                                                82549,
                                                193250,
                                                191560,
                                                134923,
                                                178567,
                                                188074,
                                                190172,
                                                83759,
                                                92602,
                                                169538,
                                                133119,
                                                99148,
                                                184985,
                                                95867,
                                                91472,
                                                107109,
                                                170244,
                                                118782,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                190944,
                                                186707,
                                                164647,
                                                170053,
                                                117742,
                                                111763,
                                                140453,
                                                186149,
                                                180382,
                                                82381,
                                                137586,
                                                178040,
                                                100268,
                                                150609,
                                                168382,
                                                79752,
                                                102027,
                                                188105,
                                                161010,
                                                87972,
                                                157584,
                                                115704,
                                                82118,
                                                113854,
                                                105607,
                                                128644,
                                                138386,
                                                179646,
                                                75282,
                                                140947,
                                                170458,
                                                134561,
                                                81352,
                                                74751,
                                                126905,
                                                107052,
                                                89648,
                                                184537,
                                                184917,
                                                193250,
                                                191560,
                                                188074,
                                                188829,
                                                186630,
                                                185503,
                                                190777,
                                                187284,
                                                105036,
                                                191870,
                                                186707
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59ccac2ff010952a5bbf39e6",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$eq": 5000
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59cdde8072c0265063353da3",
                    "rule": {
                        "stake_amount": {
                            "$gte": 10000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59ccac70f010952a5bbf39e9",
                    "rule": {
                        "real_money_contribution": {
                            "$eq": 500
                        },
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59cc9d2df010952a5bbf39da",
            "active": true,
            "startDate": "2017-10-12T21:00:00.000Z",
            "endDate": "2017-10-15T20:59:00.000Z",
            "startDateOptin": "2017-10-12T21:00:00.000Z",
            "endDateOptin": "2017-10-15T20:59:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59d394f10561032e8463eb1b": {
            "segmentation": {
                "rules": {
                    "id": "59d4abd20561032e8463eb2f",
                    "rule": {
                        "$and": [
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.lt"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "orakulas.lt"
                                        }
                                    }
                                ]
                            },
                            {
                                "Age": {
                                    "$eq": 34
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "orakulas.lt"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "olybet.lt"
                                        }
                                    }
                                ]
                            },
                            {
                                "Age": {
                                    "$eq": 34
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lt"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "orakulas.lt"
                                        }
                                    }
                                ]
                            },
                            {
                                "Age": {
                                    "$eq": 34
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Orakulas.lt"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lt"
                                        }
                                    }
                                ]
                            },
                            {
                                "Age": {
                                    "$eq": 28
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lt"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Orakulas.lt"
                                        }
                                    }
                                ]
                            },
                            {
                                "Age": {
                                    "$eq": 29
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 28
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "Brand": {
                                            "$eq": "Orakulas.lt"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.lt"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59d4bb2578d8a44c1fbe057d",
                    "rule": {
                        "code": {
                            "$eq": "login"
                        }
                    }
                },
                "counters": {
                    "id": "59d4bb5d78d8a44c1fbe0583",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59d4bb2c78d8a44c1fbe057e",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 200
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59d4bbc478d8a44c1fbe058e",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "nyx"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "nyx"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "nyx"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "nyx"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "nyx"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$eq": "nyx"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59d4bc1778d8a44c1fbe0591",
                    "rule": {
                        "stake_amount": {
                            "$gte": 300
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [],
                "errors": []
            },
            "id": "59d394f10561032e8463eb1b",
            "active": true,
            "startDate": "2017-10-04T09:00:00.000Z",
            "endDate": "2017-10-08T09:00:00.000Z",
            "startDateOptin": "2017-10-02T21:00:00.000Z",
            "endDateOptin": "2017-10-07T21:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59d4c50978d8a44c1fbe0593": {
            "segmentation": {
                "rules": {
                    "id": "59d4c6cf78d8a44c1fbe0599",
                    "rule": {
                        "$and": [
                            {
                                "Gender": {
                                    "$eq": "F"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 33
                                }
                            }
                        ],
                        "Age": {
                            "$eq": 33
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59d4c77878d8a44c1fbe05a0",
                    "rule": {
                        "$and": [
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "user_id": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "723"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59d4c78d78d8a44c1fbe05a3",
                    "rule": {
                        "count": {
                            "$eq": 3
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59d4c7a778d8a44c1fbe05a6",
                    "rule": {
                        "amount": {
                            "$eq": 500
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59d4c50978d8a44c1fbe0593",
            "active": true,
            "startDate": "2017-10-04T11:00:00.000Z",
            "endDate": "2017-10-09T20:59:00.000Z",
            "startDateOptin": "2017-10-04T11:00:00.000Z",
            "endDateOptin": "2017-10-09T20:59:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59d6242eb9ce54554cd15ffd": {
            "segmentation": {
                "rules": {
                    "id": "59d6259ab9ce54554cd16006",
                    "rule": {
                        "$and": [
                            {
                                "Age": {
                                    "$eq": 30
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.lv"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.lv"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$ne": 0
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 30
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.lv"
                                }
                            },
                            {
                                "Age": {
                                    "$eq": 30
                                }
                            },
                            {
                                "DepositCount": {
                                    "$ne": 0
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59d6263db9ce54554cd1600b",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "825"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "825"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "894",
                                        "895"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59d6266cb9ce54554cd1600e",
                    "rule": {
                        "stake_amount": {
                            "$gte": 200
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59d626c5b9ce54554cd16011",
                    "rule": {
                        "amount": {
                            "$eq": 500
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59d6242eb9ce54554cd15ffd",
            "active": true,
            "startDate": "2017-10-05T09:00:00.000Z",
            "endDate": "2017-10-08T09:00:00.000Z",
            "startDateOptin": "2017-10-05T09:00:00.000Z",
            "endDateOptin": "2017-10-05T17:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59df1f2dda19856d965a1372": {
            "segmentation": {
                "rules": {
                    "$or": [
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "Currency": {
                                            "$eq": "EUR"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "Currency": {
                                            "$eq": "EUR"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 70560
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                70560,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                70560,
                                                70800
                                            ]
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2033da19856d965a137c",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.ee"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 71267
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "id": "59df2063da19856d965a1383",
                            "rule": {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "olybet.eu"
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                70560,
                                                70800
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df2081da19856d965a1386",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 200
                        }
                    }
                },
                "counters": {
                    "id": "59df52c4df80eb0ad444221e",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df20b5da19856d965a138b",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59df212ada19856d965a141d",
                    "rule": {
                        "stake_amount": {
                            "$eq": 500
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59df1f2dda19856d965a1372",
            "active": true,
            "startDate": "2017-10-12T08:00:00.000Z",
            "endDate": "2017-10-13T09:00:00.000Z",
            "startDateOptin": "2017-10-12T09:00:00.000Z",
            "endDateOptin": "2017-10-12T10:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59df229eda19856d965a141e": {
            "segmentation": {
                "rules": {
                    "id": "59df22c1da19856d965a1423",
                    "rule": {
                        "$and": [
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee,olybet.eu"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee,olybet.eu"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 70800
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 70800
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df2304da19856d965a1428",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "871"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "871"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "871"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "871"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59df5279df80eb0ad444221b",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df2387da19856d965a142d",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 110
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 110
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 110
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59df23b7da19856d965a1430",
                    "rule": {
                        "stake_amount": {
                            "$gte": 1000
                        },
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59df5f65df80eb0ad44422bf",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [],
                "errors": []
            },
            "id": "59df229eda19856d965a141e",
            "active": true,
            "startDate": "2017-10-12T08:30:00.000Z",
            "endDate": "2017-10-15T09:00:00.000Z",
            "startDateOptin": "2017-10-12T08:30:00.000Z",
            "endDateOptin": "2017-10-13T17:45:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59df24deda19856d965a1431": {
            "segmentation": {
                "rules": {
                    "id": "59df24f6da19856d965a1436",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        "71267",
                                        "70800"
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df25e4da19856d965a143d",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "828"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": "020"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 20
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "828",
                                        "723"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59df25fbda19856d965a1440",
                    "rule": {
                        "count": {
                            "$gte": 10
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df2654da19856d965a1445",
                    "rule": {
                        "amount": {
                            "$eq": 500
                        },
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "500"
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59df266fda19856d965a1448",
                    "rule": {
                        "stake_amount": {
                            "$eq": 500
                        },
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59e0caecdf80eb0ad4443260",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59df24deda19856d965a1431",
            "active": true,
            "startDate": "2017-10-12T08:00:00.000Z",
            "endDate": "2017-10-19T09:00:00.000Z",
            "startDateOptin": "2017-10-12T08:00:00.000Z",
            "endDateOptin": "2017-10-18T21:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59df26e6da19856d965a1449": {
            "segmentation": {
                "rules": {
                    "id": "59df274dda19856d965a144e",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": "71267"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df2786da19856d965a1453",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": "500"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$gte": 500
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "851"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df2793da19856d965a1456",
                    "rule": {
                        "amount": {
                            "$eq": 500
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59df26e6da19856d965a1449",
            "active": true,
            "startDate": "2017-10-12T08:30:00.000Z",
            "endDate": "2017-10-15T09:00:00.000Z",
            "startDateOptin": "2017-10-12T08:30:00.000Z",
            "endDateOptin": "2017-10-14T21:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59df27f4da19856d965a1457": {
            "segmentation": {
                "rules": {
                    "id": "59df2835da19856d965a145e",
                    "rule": {
                        "$and": [
                            {
                                "Country": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        188892,
                                        67869
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df2875da19856d965a1463",
                    "rule": {
                        "$and": [
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59df2881da19856d965a1466",
                    "rule": {
                        "stake_amount": {
                            "$eq": 10000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df28c8da19856d965a1469",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59df27f4da19856d965a1457",
            "active": false,
            "startDate": "2017-10-12T21:00:00.000Z",
            "endDate": "2017-10-15T20:59:00.000Z",
            "startDateOptin": "2017-10-12T21:00:00.000Z",
            "endDateOptin": "2017-10-15T20:59:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59df38bcdf80eb0ad44420ad": {
            "segmentation": {
                "rules": {
                    "id": "59df3924df80eb0ad44420b4",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        66785,
                                        184320,
                                        67739,
                                        187568,
                                        66856,
                                        67374,
                                        70266,
                                        66765,
                                        66836,
                                        66775,
                                        66788,
                                        188919,
                                        67114,
                                        68008,
                                        68528,
                                        70169,
                                        190943,
                                        70510,
                                        68487,
                                        68099,
                                        184233,
                                        67061,
                                        67292,
                                        191431,
                                        70726,
                                        67971,
                                        70079,
                                        68322,
                                        67339,
                                        68940,
                                        67014,
                                        67497,
                                        66808,
                                        66764,
                                        183629,
                                        67613,
                                        184302,
                                        66851,
                                        68095,
                                        66860,
                                        66761,
                                        67052,
                                        183825,
                                        68225,
                                        67040,
                                        184372,
                                        185667,
                                        67628,
                                        183414,
                                        66702,
                                        185969,
                                        67223,
                                        67017,
                                        67835,
                                        70829,
                                        68321,
                                        66974,
                                        66810,
                                        66744,
                                        186354,
                                        183698,
                                        66738,
                                        68876,
                                        66825,
                                        69298,
                                        67165,
                                        67463,
                                        67637,
                                        67896,
                                        67520,
                                        66711,
                                        67214,
                                        70885,
                                        185796,
                                        67132,
                                        67197,
                                        67556,
                                        67038,
                                        67312,
                                        66812,
                                        191455,
                                        185508,
                                        67073
                                    ]
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        66785,
                                        184320,
                                        67739,
                                        187568,
                                        66856,
                                        67374,
                                        70266,
                                        66765,
                                        66836,
                                        66775,
                                        66788,
                                        188919,
                                        67114,
                                        68008,
                                        68528,
                                        70169,
                                        190943,
                                        70510,
                                        68487,
                                        68099,
                                        184233,
                                        67061,
                                        67292,
                                        191431,
                                        70726,
                                        67971,
                                        70079,
                                        68322,
                                        67339,
                                        68940,
                                        67014,
                                        67497,
                                        66808,
                                        66764,
                                        183629,
                                        67613,
                                        184302,
                                        66851,
                                        68095,
                                        66860,
                                        66761,
                                        67052,
                                        183825,
                                        68225,
                                        67040,
                                        184372,
                                        185667,
                                        67628,
                                        183414,
                                        66702,
                                        185969,
                                        67223,
                                        67017,
                                        67835,
                                        70829,
                                        68321,
                                        66974,
                                        66810,
                                        66744,
                                        186354,
                                        183698,
                                        66738,
                                        68876,
                                        66825,
                                        69298,
                                        67165,
                                        67463,
                                        67637,
                                        67896,
                                        67520,
                                        66711,
                                        67214,
                                        70885,
                                        185796,
                                        67132,
                                        67197,
                                        67556,
                                        67038,
                                        67312,
                                        66812,
                                        191455,
                                        185508,
                                        67073
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        66785,
                                        184320,
                                        67739,
                                        187568,
                                        66856,
                                        67374,
                                        70266,
                                        66765,
                                        66836,
                                        66775,
                                        66788,
                                        188919,
                                        67114,
                                        68008,
                                        68528,
                                        70169,
                                        190943,
                                        70510,
                                        68487,
                                        68099,
                                        184233,
                                        67061,
                                        67292,
                                        191431,
                                        70726,
                                        67971,
                                        70079,
                                        68322,
                                        67339,
                                        68940,
                                        67014,
                                        67497,
                                        66808,
                                        66764,
                                        183629,
                                        67613,
                                        184302,
                                        66851,
                                        68095,
                                        66860,
                                        66761,
                                        67052,
                                        183825,
                                        68225,
                                        67040,
                                        184372,
                                        185667,
                                        67628,
                                        183414,
                                        66702,
                                        185969,
                                        67223,
                                        67017,
                                        67835,
                                        70829,
                                        68321,
                                        66974,
                                        66810,
                                        66744,
                                        186354,
                                        183698,
                                        66738,
                                        68876,
                                        66825,
                                        69298,
                                        67165,
                                        67463,
                                        67637,
                                        67896,
                                        67520,
                                        66711,
                                        67214,
                                        70885,
                                        185796,
                                        67132,
                                        67197,
                                        67556,
                                        67038,
                                        67312,
                                        66812,
                                        191455,
                                        185508,
                                        67073
                                    ]
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                66785,
                                                184320,
                                                67739,
                                                187568,
                                                66856,
                                                67374,
                                                70266,
                                                66765,
                                                66836,
                                                66775,
                                                66788,
                                                188919,
                                                67114,
                                                68008,
                                                68528,
                                                70169,
                                                190943,
                                                70510,
                                                68487,
                                                68099,
                                                184233,
                                                67061,
                                                67292,
                                                191431,
                                                70726,
                                                67971,
                                                70079,
                                                68322,
                                                67339,
                                                68940,
                                                67014,
                                                67497,
                                                66808,
                                                66764,
                                                183629,
                                                67613,
                                                184302,
                                                66851,
                                                68095,
                                                66860,
                                                66761,
                                                67052,
                                                183825,
                                                68225,
                                                67040,
                                                184372,
                                                185667,
                                                67628,
                                                183414,
                                                66702,
                                                185969,
                                                67223,
                                                67017,
                                                67835,
                                                70829,
                                                68321,
                                                66974,
                                                66810,
                                                66744,
                                                186354,
                                                183698,
                                                66738,
                                                68876,
                                                66825,
                                                69298,
                                                67165,
                                                67463,
                                                67637,
                                                67896,
                                                67520,
                                                66711,
                                                67214,
                                                70885,
                                                185796,
                                                67132,
                                                67197,
                                                67556,
                                                67038,
                                                67312,
                                                66812,
                                                191455,
                                                185508,
                                                67073
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                66785,
                                                184320,
                                                67739,
                                                187568,
                                                66856,
                                                67374,
                                                70266,
                                                66765,
                                                66836,
                                                66775,
                                                66788,
                                                188919,
                                                67114,
                                                68008,
                                                68528,
                                                70169,
                                                190943,
                                                70510,
                                                68487,
                                                68099,
                                                184233,
                                                67061,
                                                67292,
                                                191431,
                                                70726,
                                                67971,
                                                70079,
                                                68322,
                                                67339,
                                                68940,
                                                67014,
                                                67497,
                                                66808,
                                                66764,
                                                183629,
                                                67613,
                                                184302,
                                                66851,
                                                68095,
                                                66860,
                                                66761,
                                                67052,
                                                183825,
                                                68225,
                                                67040,
                                                184372,
                                                185667,
                                                67628,
                                                183414,
                                                66702,
                                                185969,
                                                67223,
                                                67017,
                                                67835,
                                                70829,
                                                68321,
                                                66974,
                                                66810,
                                                66744,
                                                186354,
                                                183698,
                                                66738,
                                                68876,
                                                66825,
                                                69298,
                                                67165,
                                                67463,
                                                67637,
                                                67896,
                                                67520,
                                                66711,
                                                67214,
                                                70885,
                                                185796,
                                                67132,
                                                67197,
                                                67556,
                                                67038,
                                                67312,
                                                66812,
                                                191455,
                                                185508,
                                                67073
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                66785,
                                                184320,
                                                67739,
                                                187568,
                                                66856,
                                                67374,
                                                70266,
                                                66765,
                                                66836,
                                                66775,
                                                66788,
                                                188919,
                                                67114,
                                                68008,
                                                68528,
                                                70169,
                                                190943,
                                                70510,
                                                68487,
                                                68099,
                                                184233,
                                                67061,
                                                67292,
                                                191431,
                                                70726,
                                                67971,
                                                70079,
                                                68322,
                                                67339,
                                                68940,
                                                67014,
                                                67497,
                                                66808,
                                                66764,
                                                183629,
                                                67613,
                                                184302,
                                                66851,
                                                68095,
                                                66860,
                                                66761,
                                                67052,
                                                183825,
                                                68225,
                                                67040,
                                                184372,
                                                185667,
                                                67628,
                                                183414,
                                                66702,
                                                185969,
                                                67223,
                                                67017,
                                                67835,
                                                70829,
                                                68321,
                                                66974,
                                                66810,
                                                66744,
                                                186354,
                                                183698,
                                                66738,
                                                68876,
                                                66825,
                                                69298,
                                                67165,
                                                67463,
                                                67637,
                                                67896,
                                                67520,
                                                66711,
                                                67214,
                                                70885,
                                                185796,
                                                67132,
                                                67197,
                                                67556,
                                                67038,
                                                67312,
                                                66812,
                                                191455,
                                                185508,
                                                67073
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df3952df80eb0ad44420bb",
                    "rule": {
                        "$and": [
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59df397bdf80eb0ad44420c3",
                    "rule": {
                        "stake_amount": {
                            "$eq": 100000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df3966df80eb0ad44420c0",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59df38bcdf80eb0ad44420ad",
            "active": true,
            "startDate": "2017-10-12T21:00:00.000Z",
            "endDate": "2017-10-15T20:59:00.000Z",
            "startDateOptin": "2017-10-12T21:00:00.000Z",
            "endDateOptin": "2017-10-15T20:59:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59df39d7df80eb0ad44420c4": {
            "segmentation": {
                "rules": {
                    "id": "59df3a0cdf80eb0ad44420cb",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        188892,
                                        67869
                                    ]
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "$and": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    }
                                ]
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "$and": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    }
                                ]
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "UserId": {
                                            "$eq": 191152
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                188892,
                                                67869
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df3a2adf80eb0ad44420d2",
                    "rule": {
                        "$and": [
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59df3a3cdf80eb0ad44420d5",
                    "rule": {
                        "stake_amount": {
                            "$eq": 100000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df3a4fdf80eb0ad44420da",
                    "rule": {
                        "$and": [
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59df39d7df80eb0ad44420c4",
            "active": true,
            "startDate": "2017-10-12T21:00:00.000Z",
            "endDate": "2017-10-15T20:59:00.000Z",
            "startDateOptin": "2017-10-12T21:00:00.000Z",
            "endDateOptin": "2017-10-15T20:59:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59df5061df80eb0ad4442218": {
            "segmentation": {
                "rules": {
                    "id": "59df5061df80eb0ad444220b",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59df5061df80eb0ad444220f",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 200
                        },
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59df7491df80eb0ad444235e",
                    "rule": {
                        "count": {
                            "$eq": 1
                        },
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59df5061df80eb0ad4442214",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 50
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59e0ba90df80eb0ad44431b4",
                    "rule": {
                        "stake_amount": {
                            "$eq": 500
                        },
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e0bab0df80eb0ad44431b7",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59df5061df80eb0ad4442218",
            "active": true,
            "startDate": "2017-10-12T08:00:00.000Z",
            "endDate": "2017-10-15T09:00:00.000Z",
            "startDateOptin": "2017-10-12T11:30:00.000Z",
            "endDateOptin": "2017-10-13T17:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e49d8bd450b358205c6272": {
            "segmentation": {
                "rules": {
                    "id": "59e4a1cb01f3fc7e8da372dd",
                    "rule": {
                        "UserId": {
                            "$eq": 72056
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e4a1e201f3fc7e8da372e0",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59e4a25201f3fc7e8da372e3",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e4a26b01f3fc7e8da372ea",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 20
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 20
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 20
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59e49d8bd450b358205c6272",
            "active": false,
            "startDate": "2017-10-16T09:00:00.000Z",
            "endDate": "2017-10-17T09:00:00.000Z",
            "startDateOptin": "2017-10-16T09:00:00.000Z",
            "endDateOptin": "2017-10-17T09:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e4b77a01f3fc7e8da373c0": {
            "segmentation": {
                "rules": {
                    "id": "59e4b77a01f3fc7e8da373a8",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        "71267",
                                        "70800"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e4b77a01f3fc7e8da373ad",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        },
                        "deposit_amount": {
                            "$eq": "200"
                        }
                    }
                },
                "counters": {
                    "id": "59e4b77a01f3fc7e8da373ae",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        },
                        "count": {
                            "$eq": "1"
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e4b77a01f3fc7e8da373b7",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 200
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "500"
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": "100"
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": "200"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59e4b77a01f3fc7e8da373bf",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e4b77a01f3fc7e8da373be",
                    "rule": {
                        "stake_amount": {
                            "$gte": "500"
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59e4b77a01f3fc7e8da373c0",
            "active": true,
            "startDate": "2017-10-16T13:45:00.000Z",
            "endDate": "2017-10-18T09:00:00.000Z",
            "startDateOptin": "2017-10-16T13:50:00.000Z",
            "endDateOptin": "2017-10-18T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59e4b79001f3fc7e8da373d1": {
            "segmentation": {
                "rules": {
                    "id": "59e4b79001f3fc7e8da373c3",
                    "rule": {
                        "UserId": {
                            "$eq": 72056
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e4b79001f3fc7e8da373c8",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59e4b79001f3fc7e8da373c9",
                    "rule": {
                        "count": {
                            "$eq": 1
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e4b79001f3fc7e8da373d0",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59e4b79001f3fc7e8da373d1",
            "active": true,
            "startDate": "2017-10-16T09:00:00.000Z",
            "endDate": "2017-10-17T09:00:00.000Z",
            "startDateOptin": "2017-10-16T09:00:00.000Z",
            "endDateOptin": "2017-10-17T09:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e4b9d501f3fc7e8da373f0": {
            "segmentation": {
                "rules": {
                    "id": "59e4b9d401f3fc7e8da373d6",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.eu",
                                        "Olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e4b9d401f3fc7e8da373dd",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "871",
                                        "723"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e4b9d401f3fc7e8da373de",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e4b9d501f3fc7e8da373e5",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59e4b9d501f3fc7e8da373ec",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "provider": {
                                    "$in": [
                                        "gameflex",
                                        "egt",
                                        "nyx"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e4b9d501f3fc7e8da373ed",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [],
                "errors": []
            },
            "id": "59e4b9d501f3fc7e8da373f0",
            "active": true,
            "startDate": "2017-10-16T13:54:00.000Z",
            "endDate": "2017-10-19T13:00:00.000Z",
            "startDateOptin": "2017-10-17T06:45:00.000Z",
            "endDateOptin": "2017-10-18T21:00:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e5958901f3fc7e8da37f5e": {
            "segmentation": {
                "rules": {
                    "id": "59e595d301f3fc7e8da37f63",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e5961601f3fc7e8da37f68",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263",
                                        "723"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e5962801f3fc7e8da37f6b",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e5963a01f3fc7e8da37f70",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59e5967301f3fc7e8da37f75",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e5968501f3fc7e8da37f78",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59e5958901f3fc7e8da37f5e",
            "active": true,
            "startDate": "2017-10-17T05:30:00.000Z",
            "endDate": "2017-10-31T21:59:00.000Z",
            "startDateOptin": "2017-10-17T05:30:00.000Z",
            "endDateOptin": "2017-10-31T21:59:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e7247c01f3fc7e8da3932b": {
            "segmentation": {
                "rules": {
                    "id": "59e725bf01f3fc7e8da39332",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        70800,
                                        186097
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        70800,
                                        186097
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "$and": [
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.ee"
                                        }
                                    },
                                    {
                                        "Brand": {
                                            "$eq": "Olybet.eu"
                                        }
                                    }
                                ]
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e7262001f3fc7e8da39335",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "EUR"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e726ff01f3fc7e8da393f1",
                    "rule": {
                        "stake_amount": {
                            "$eq": 5000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e7271401f3fc7e8da393f6",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59e7247c01f3fc7e8da3932b",
            "active": true,
            "startDate": "2017-10-18T09:00:00.000Z",
            "endDate": "2017-10-18T18:45:00.000Z",
            "startDateOptin": "2017-10-18T09:00:00.000Z",
            "endDateOptin": "2017-10-18T18:45:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e755a301f3fc7e8da39619": {
            "segmentation": {
                "rules": {
                    "id": "59e7560001f3fc7e8da39620",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e7561f01f3fc7e8da39627",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "NOK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e7562d01f3fc7e8da3962a",
                    "rule": {
                        "stake_amount": {
                            "$eq": 50000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e7563f01f3fc7e8da3962f",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59e755a301f3fc7e8da39619",
            "active": true,
            "startDate": "2017-10-18T09:00:00.000Z",
            "endDate": "2017-10-18T18:45:00.000Z",
            "startDateOptin": "2017-10-18T09:00:00.000Z",
            "endDateOptin": "2017-10-18T18:45:00.000Z",
            "optin": true,
            "onPause": []
        },
        "59e756c501f3fc7e8da39630": {
            "segmentation": {
                "rules": {
                    "id": "59e756ea01f3fc7e8da39637",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": "0"
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.eu"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "SportsBetsCount": {
                                    "$eq": 0
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e7570701f3fc7e8da3963e",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "currency": {
                                    "$eq": "SEK"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "prematch_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e7571301f3fc7e8da39641",
                    "rule": {
                        "stake_amount": {
                            "$eq": 50000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e7572301f3fc7e8da39646",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 5000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "5000"
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59e756c501f3fc7e8da39630",
            "active": true,
            "startDate": "2017-10-18T09:00:00.000Z",
            "endDate": "2017-10-18T18:45:00.000Z",
            "startDateOptin": "2017-10-18T09:00:00.000Z",
            "endDateOptin": "2017-10-18T18:45:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59e88b9101f3fc7e8da3967e": {
            "segmentation": {
                "rules": {
                    "id": "59e9f766094b7059aa1bd442",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        75088,
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        75088,
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        75088,
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        75088
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        75088
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        75088
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {},
            "bonus": {
                "rules": {
                    "id": "59e88ce001f3fc7e8da3968a",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59e88d2701f3fc7e8da3968f",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e88d4701f3fc7e8da39692",
                    "rule": {
                        "stake_amount": {
                            "$gte": 50000
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [],
                "errors": []
            },
            "id": "59e88b9101f3fc7e8da3967e",
            "active": true,
            "startDate": "2017-10-19T11:25:00.000Z",
            "startDateOptin": "2017-10-19T11:25:00.000Z",
            "optin": true,
            "onPause": [],
            "endDate": "2018-03-31T09:00:00.000Z",
            "endDateOptin": "2018-03-31T09:00:00.000Z"
        },
        "59e9f62f094b7059aa1bd43d": {
            "segmentation": {
                "rules": {
                    "id": "59e9fa73094b7059aa1bd447",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59e9fcae094b7059aa1bd44c",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263",
                                        "723"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263",
                                        "723"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e9fcbd094b7059aa1bd44f",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59e9fcdb094b7059aa1bd456",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59e9fcfb094b7059aa1bd45b",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59e9fd08094b7059aa1bd45e",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59e9f62f094b7059aa1bd43d",
            "active": true,
            "startDate": "2017-10-20T09:00:00.000Z",
            "endDate": "2017-10-23T09:00:00.000Z",
            "startDateOptin": "2017-10-20T09:00:00.000Z",
            "endDateOptin": "2017-10-23T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f04bcae3168354be61cb7f": {
            "segmentation": {
                "rules": {
                    "id": "59f04bc9e3168354be61cb67",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.eu",
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f04bc9e3168354be61cb6f",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f04bc9e3168354be61cb6e",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f04bc9e3168354be61cb76",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {},
                "counters": {},
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f04bcae3168354be61cb7f",
            "active": true,
            "startDate": "2017-10-25T08:36:00.000Z",
            "endDate": "2017-10-26T09:00:00.000Z",
            "startDateOptin": "2017-10-25T08:36:00.000Z",
            "endDateOptin": "2017-10-26T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f07798e3168354be61cbdb": {
            "segmentation": {
                "rules": {
                    "id": "59f07798e3168354be61cbcb",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f07798e3168354be61cbd2",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8238",
                                        "8239"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8238",
                                        "8239"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f07798e3168354be61cbd3",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f07798e3168354be61cbda",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59f07798e3168354be61cbdb",
            "active": true,
            "startDate": "2017-10-25T08:36:00.000Z",
            "endDate": "2017-10-26T09:00:00.000Z",
            "startDateOptin": "2017-10-25T08:36:00.000Z",
            "endDateOptin": "2017-10-26T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f08369e3168354be61cc0c": {
            "segmentation": {
                "rules": {
                    "id": "59f08369e3168354be61cbfc",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f08369e3168354be61cc03",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f08369e3168354be61cc04",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f08369e3168354be61cc0b",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59f08369e3168354be61cc0c",
            "active": true,
            "startDate": "2017-10-25T08:36:00.000Z",
            "endDate": "2017-10-26T09:00:00.000Z",
            "startDateOptin": "2017-10-25T08:36:00.000Z",
            "endDateOptin": "2017-10-26T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f0861fe3168354be61cc21": {
            "segmentation": {
                "rules": {
                    "id": "59f0861fe3168354be61cc11",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        71267
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f0861fe3168354be61cc18",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f0861fe3168354be61cc19",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f0861fe3168354be61cc20",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59f0861fe3168354be61cc21",
            "active": true,
            "startDate": "2017-10-25T08:36:00.000Z",
            "endDate": "2017-10-26T09:00:00.000Z",
            "startDateOptin": "2017-10-25T08:36:00.000Z",
            "endDateOptin": "2017-10-26T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f095fde3168354be61cc45": {
            "segmentation": {
                "rules": {
                    "id": "59f09690e3168354be61cc4a",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.lv"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.lv"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.lv"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.lv"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.lv"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        97732
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 97732
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "Olybet.lv"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f09752e3168354be61cc4f",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$eq": "833"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f0976ee3168354be61cc52",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f097d5e3168354be61cc57",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "59f095fde3168354be61cc45",
            "active": true,
            "startDate": "2017-10-25T09:00:00.000Z",
            "startDateOptin": "2017-10-24T21:00:00.000Z",
            "endDateOptin": "2017-10-31T21:59:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": [],
            "endDate": "2017-10-31T10:00:00.000Z"
        },
        "59f305fde3168354be61d2b1": {
            "segmentation": {
                "rules": {
                    "id": "59f30678e3168354be61d2b8",
                    "rule": {
                        "$and": [
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097,
                                        71267
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097,
                                        71267,
                                        197491
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "$and": [
                                    {
                                        "UserId": {
                                            "$in": [
                                                83982,
                                                83094,
                                                88633,
                                                172437,
                                                103375,
                                                164046,
                                                130389,
                                                156383,
                                                86879,
                                                75046,
                                                160679,
                                                165356,
                                                114436,
                                                181006,
                                                143943,
                                                101216,
                                                166485,
                                                150133,
                                                76631,
                                                178075,
                                                111933,
                                                162875,
                                                124091,
                                                113395,
                                                80368,
                                                113629,
                                                82062,
                                                75282,
                                                107097,
                                                163677,
                                                179652,
                                                164647,
                                                76335,
                                                143319,
                                                125560,
                                                133542,
                                                88146,
                                                132686,
                                                138005,
                                                141041,
                                                156957,
                                                119383,
                                                138167,
                                                180568,
                                                176644,
                                                159337,
                                                145886,
                                                147568,
                                                157584,
                                                91007,
                                                153869,
                                                165305,
                                                168175,
                                                105932,
                                                126797,
                                                88803,
                                                117019,
                                                146304,
                                                91499,
                                                113854,
                                                74427,
                                                110165,
                                                115122,
                                                136791,
                                                174555,
                                                117038,
                                                167701,
                                                139755,
                                                76182,
                                                160808,
                                                100814,
                                                166022,
                                                114748,
                                                186385,
                                                82879,
                                                100245,
                                                115704,
                                                168417,
                                                157183,
                                                91491,
                                                74646,
                                                137834,
                                                95594,
                                                93766,
                                                174425,
                                                80139,
                                                75706,
                                                192385,
                                                87590,
                                                193273,
                                                133903,
                                                94157,
                                                100278,
                                                176061,
                                                132352,
                                                103700,
                                                107052,
                                                82122,
                                                78542,
                                                114506,
                                                182375,
                                                127476,
                                                178359,
                                                169436,
                                                161925,
                                                120507,
                                                175868,
                                                81387,
                                                99298,
                                                95717,
                                                110486,
                                                113444,
                                                76043,
                                                152394,
                                                167563,
                                                94012,
                                                134486,
                                                77761,
                                                174453,
                                                99335,
                                                170024,
                                                190156,
                                                81043,
                                                188506,
                                                182269,
                                                156478,
                                                82235,
                                                118066,
                                                124183,
                                                163202,
                                                84148
                                            ]
                                        }
                                    },
                                    {
                                        "UserId": {
                                            "$in": [
                                                72056,
                                                186097,
                                                71267,
                                                197491
                                            ]
                                        }
                                    }
                                ]
                            }
                        ],
                        "$or": [
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097,
                                        71267,
                                        197491
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        83982,
                                        83094,
                                        88633,
                                        172437,
                                        103375,
                                        164046,
                                        130389,
                                        156383,
                                        86879,
                                        75046,
                                        160679,
                                        165356,
                                        114436,
                                        181006,
                                        143943,
                                        101216,
                                        166485,
                                        150133,
                                        76631,
                                        178075,
                                        111933,
                                        162875,
                                        124091,
                                        113395,
                                        80368,
                                        113629,
                                        82062,
                                        75282,
                                        107097,
                                        163677,
                                        179652,
                                        164647,
                                        76335,
                                        143319,
                                        125560,
                                        133542,
                                        88146,
                                        132686,
                                        138005,
                                        141041,
                                        156957,
                                        119383,
                                        138167,
                                        180568,
                                        176644,
                                        159337,
                                        145886,
                                        147568,
                                        157584,
                                        91007,
                                        153869,
                                        165305,
                                        168175,
                                        105932,
                                        126797,
                                        88803,
                                        117019,
                                        146304,
                                        91499,
                                        113854,
                                        74427,
                                        110165,
                                        115122,
                                        136791,
                                        174555,
                                        117038,
                                        167701,
                                        139755,
                                        76182,
                                        160808,
                                        100814,
                                        166022,
                                        114748,
                                        186385,
                                        82879,
                                        100245,
                                        115704,
                                        168417,
                                        157183,
                                        91491,
                                        74646,
                                        137834,
                                        95594,
                                        93766,
                                        174425,
                                        80139,
                                        75706,
                                        192385,
                                        87590,
                                        193273,
                                        133903,
                                        94157,
                                        100278,
                                        176061,
                                        132352,
                                        103700,
                                        107052,
                                        82122,
                                        78542,
                                        114506,
                                        182375,
                                        127476,
                                        178359,
                                        169436,
                                        161925,
                                        120507,
                                        175868,
                                        81387,
                                        99298,
                                        95717,
                                        110486,
                                        113444,
                                        76043,
                                        152394,
                                        167563,
                                        94012,
                                        134486,
                                        77761,
                                        174453,
                                        99335,
                                        170024,
                                        190156,
                                        81043,
                                        188506,
                                        182269,
                                        156478,
                                        82235,
                                        118066,
                                        124183,
                                        163202,
                                        84148
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        72056,
                                        186097,
                                        71267,
                                        197491
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        "83982",
                                        "83094",
                                        "88633",
                                        "172437",
                                        "103375",
                                        "164046",
                                        "130389",
                                        "156383",
                                        "86879",
                                        "75046",
                                        "160679",
                                        "165356",
                                        "114436",
                                        "181006",
                                        "143943",
                                        "101216",
                                        "166485",
                                        "150133",
                                        "76631",
                                        "178075",
                                        "111933",
                                        "162875",
                                        "124091",
                                        "113395",
                                        "80368",
                                        "113629",
                                        "82062",
                                        "75282",
                                        "107097",
                                        "163677",
                                        "179652",
                                        "164647",
                                        "76335",
                                        "143319",
                                        "125560",
                                        "133542",
                                        "88146",
                                        "132686",
                                        "138005",
                                        "141041",
                                        "156957",
                                        "119383",
                                        "138167",
                                        "180568",
                                        "176644",
                                        "159337",
                                        "145886",
                                        "147568",
                                        "157584",
                                        "91007",
                                        "153869",
                                        "165305",
                                        "168175",
                                        "105932",
                                        "126797",
                                        "88803",
                                        "117019",
                                        "146304",
                                        "91499",
                                        "113854",
                                        "74427",
                                        "110165",
                                        "115122",
                                        "136791",
                                        "174555",
                                        "117038",
                                        "167701",
                                        "139755",
                                        "76182",
                                        "160808",
                                        "100814",
                                        "166022",
                                        "114748",
                                        "186385",
                                        "82879",
                                        "100245",
                                        "115704",
                                        "168417",
                                        "157183",
                                        "91491",
                                        "74646",
                                        "137834",
                                        "95594",
                                        "93766",
                                        "174425",
                                        "80139",
                                        "75706",
                                        "192385",
                                        "87590",
                                        "193273",
                                        "133903",
                                        "94157",
                                        "100278",
                                        "176061",
                                        "132352",
                                        "103700",
                                        "107052",
                                        "82122",
                                        "78542",
                                        "114506",
                                        "182375",
                                        "127476",
                                        "178359",
                                        "169436",
                                        "161925",
                                        "120507",
                                        "175868",
                                        "81387",
                                        "99298",
                                        "95717",
                                        "110486",
                                        "113444",
                                        "76043",
                                        "152394",
                                        "167563",
                                        "94012",
                                        "134486",
                                        "77761",
                                        "174453",
                                        "99335",
                                        "170024",
                                        "190156",
                                        "81043",
                                        "188506",
                                        "182269",
                                        "156478",
                                        "82235",
                                        "118066",
                                        "124183",
                                        "163202",
                                        "84148"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        "72056",
                                        "186097",
                                        "71267",
                                        "197491"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f306aae3168354be61d2bb",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 1000,
                            "$gte": "1000"
                        }
                    }
                },
                "counters": {
                    "id": "59f307ece3168354be61d2c0",
                    "rule": {
                        "count": {
                            "$eq": "1"
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f307ffe3168354be61d2c5",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "2000"
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": "100"
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": "1000"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f3088ce3168354be61d2cf",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f308ace3168354be61d2d2",
                    "rule": {
                        "stake_amount": {
                            "$gte": "10000"
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f305fde3168354be61d2b1",
            "active": true,
            "startDate": "2017-10-27T09:00:00.000Z",
            "endDate": "2017-10-29T22:00:00.000Z",
            "startDateOptin": "2017-10-27T09:00:00.000Z",
            "endDateOptin": "2017-10-29T22:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f815568f662e6ef8dca1cb": {
            "segmentation": {
                "rules": {
                    "id": "59f815738f662e6ef8dca1d0",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f815b98f662e6ef8dca1d5",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f815cd8f662e6ef8dca1d8",
                    "rule": {
                        "stake_amount": {
                            "$gte": 10
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f815e08f662e6ef8dca1dd",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f816058f662e6ef8dca1e2",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f816218f662e6ef8dca1e5",
                    "rule": {
                        "stake_amount": {
                            "$gte": 10
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f815568f662e6ef8dca1cb",
            "active": true,
            "startDate": "2017-10-31T06:17:00.000Z",
            "endDate": "2017-11-05T10:00:00.000Z",
            "startDateOptin": "2017-10-31T06:17:00.000Z",
            "endDateOptin": "2017-11-05T10:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f81bbd8f662e6ef8dca1e6": {
            "segmentation": {
                "rules": {
                    "id": "59f831348f662e6ef8dca27f",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f8319f8f662e6ef8dca286",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f831ac8f662e6ef8dca289",
                    "rule": {
                        "stake_amount": {
                            "$gte": 5
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f831e08f662e6ef8dca28e",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f832028f662e6ef8dca293",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f832148f662e6ef8dca296",
                    "rule": {
                        "stake_amount": {
                            "$gte": 5
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f81bbd8f662e6ef8dca1e6",
            "active": true,
            "startDate": "2017-10-31T06:45:00.000Z",
            "startDateOptin": "2017-10-31T06:45:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": [],
            "endDate": "2017-11-30T10:00:00.000Z",
            "endDateOptin": "2017-11-29T22:00:00.000Z"
        },
        "59f8327a8f662e6ef8dca297": {
            "segmentation": {
                "rules": {
                    "id": "59f839dd8f662e6ef8dca2c6",
                    "rule": {
                        "UserId": {
                            "$eq": 186097
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f836278f662e6ef8dca29b",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "stake_amount": {
                                    "$gte": 100
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f836388f662e6ef8dca29d",
                    "rule": {
                        "$and": [
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 10
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f836308f662e6ef8dca29c",
                    "rule": {
                        "$and": [
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f83be08f662e6ef8dca31d",
                    "rule": {
                        "count": {
                            "$eq": 1
                        },
                        "stake_amount": {
                            "$eq": 10
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f8327a8f662e6ef8dca297",
            "active": true,
            "startDate": "2017-10-31T08:00:00.000Z",
            "endDate": "2017-11-01T21:59:00.000Z",
            "startDateOptin": "2017-10-31T08:00:00.000Z",
            "endDateOptin": "2017-11-01T21:59:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f837e88f662e6ef8dca2a0": {
            "segmentation": {
                "rules": {
                    "id": "59f838778f662e6ef8dca2a7",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "DaysFromRegistration": {
                                    "$lt": 30
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 199225
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "DaysFromRegistration": {
                                    "$lt": 30
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 199225
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "DaysFromRegistration": {
                                    "$lt": 30
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 199225
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "DaysFromRegistration": {
                                    "$lt": 30
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 199225
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f838ca8f662e6ef8dca2ad",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 5
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f839668f662e6ef8dca2c3",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 5
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f839e98f662e6ef8dca2cb",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f839f78f662e6ef8dca2ce",
                    "rule": {
                        "stake_amount": {
                            "$gte": 5
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f837e88f662e6ef8dca2a0",
            "active": true,
            "startDate": "2017-10-31T08:45:00.000Z",
            "endDate": "2018-05-31T09:00:00.000Z",
            "startDateOptin": "2017-10-31T08:45:00.000Z",
            "endDateOptin": "2018-05-31T09:00:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f84e0a8f662e6ef8dca380": {
            "segmentation": {
                "rules": {
                    "id": "59f84fb78f662e6ef8dca38f",
                    "rule": {
                        "UserId": {
                            "$eq": 186097
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f84e0a8f662e6ef8dca379",
                    "rule": {
                        "$and": [
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f84e0a8f662e6ef8dca37a",
                    "rule": {
                        "stake_amount": {
                            "$gte": 1000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f84e0a8f662e6ef8dca37f",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": "1000"
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f84f378f662e6ef8dca387",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "type": {
                                            "$eq": "prematch_bet"
                                        }
                                    },
                                    {
                                        "type": {
                                            "$eq": "live_bet"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$in": [
                                        "prematch_bet",
                                        "live_bet"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$in": [
                                        "prematch_bet",
                                        "live_bet"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$in": [
                                        "prematch_bet",
                                        "live_bet"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f84f528f662e6ef8dca38c",
                    "rule": {
                        "$and": [
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": "10"
                                }
                            },
                            {
                                "count": {
                                    "$eq": "1"
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 10
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "stake_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            }
                        ]
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f84e0a8f662e6ef8dca380",
            "active": true,
            "startDate": "2017-10-31T10:00:00.000Z",
            "endDate": "2017-11-01T21:59:00.000Z",
            "startDateOptin": "2017-10-31T10:00:00.000Z",
            "endDateOptin": "2017-11-01T21:59:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "59f87f588f662e6ef8dca46e": {
            "segmentation": {
                "rules": {
                    "id": "59f87f738f662e6ef8dca471",
                    "rule": {
                        "UserId": {
                            "$eq": "70800"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f87f858f662e6ef8dca474",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59f87f988f662e6ef8dca477",
                    "rule": {
                        "count": {
                            "$gte": "3"
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f87fb08f662e6ef8dca47c",
                    "rule": {
                        "amount": {
                            "$eq": "10"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f87fbc8f662e6ef8dca47f",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "59f87fce8f662e6ef8dca482",
                    "rule": {
                        "count": {
                            "$gte": "3"
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "59f87f588f662e6ef8dca46e",
            "active": true,
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": [],
            "startDate": "2017-10-31T10:00:00.000Z",
            "endDate": "2017-11-30T10:00:00.000Z",
            "startDateOptin": "2017-10-31T10:00:00.000Z",
            "endDateOptin": "2017-11-30T10:00:00.000Z"
        },
        "59f9a3c720cdce3772196385": {
            "segmentation": {
                "rules": {
                    "id": "59f9a42720cdce377219638c",
                    "rule": {
                        "$and": [
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            },
                            {
                                "DepositCount": {
                                    "$eq": 0
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "Olybet.ee"
                                }
                            },
                            {
                                "Currency": {
                                    "$eq": "EUR"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "59f9a44d20cdce377219638f",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 500
                        },
                        "code": {
                            "$eq": "deposit"
                        }
                    }
                },
                "counters": {
                    "id": "59f9c52a20cdce37721963fd",
                    "rule": {
                        "deposit_amount": {
                            "$eq": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "59f9a48020cdce3772196396",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2000
                                }
                            },
                            {
                                "is_sports": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "59f9a4c820cdce377219639c",
                    "rule": {
                        "$and": [
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "$or": [
                                    {
                                        "provider": {
                                            "$eq": "bet_construct"
                                        }
                                    },
                                    {
                                        "provider": {
                                            "$eq": "orakulas"
                                        }
                                    }
                                ]
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "59f9a61120cdce37721963a2",
                    "rule": {
                        "stake_amount": {
                            "$gte": 2000
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {
                "rules": [],
                "counters": [],
                "errors": []
            },
            "id": "59f9a3c720cdce3772196385",
            "active": true,
            "startDate": "2017-11-01T10:00:00.000Z",
            "endDate": "2017-12-31T21:59:00.000Z",
            "startDateOptin": "2017-11-01T10:00:00.000Z",
            "endDateOptin": "2017-12-31T21:59:00.000Z",
            "optin": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a0152edf9897921e46bdc47": {
            "segmentation": {
                "rules": {
                    "id": "5a01532af9897921e46bdc4c",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        94142,
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        94142,
                                        71267
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        94142,
                                        71267,
                                        70800
                                    ]
                                }
                            },
                            {
                                "Brand": {
                                    "$in": [
                                        "olybet.ee",
                                        "olybet.eu"
                                    ]
                                }
                            },
                            {
                                "UserId": {
                                    "$in": [
                                        94142,
                                        71267,
                                        70800
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a015349f9897921e46bdc4f",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a01535af9897921e46bdc52",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a015383f9897921e46bdc59",
                    "rule": {
                        "$and": [
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "5a0153c5f9897921e46bdc5c",
                    "rule": {
                        "code": {
                            "$eq": "bet"
                        }
                    }
                },
                "counters": {
                    "id": "5a0153e8f9897921e46bdc5f",
                    "rule": {
                        "stake_amount": {
                            "$gte": 1000
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "5a0152edf9897921e46bdc47",
            "active": true,
            "startDate": "2017-11-07T06:30:00.000Z",
            "endDate": "2017-12-31T10:00:00.000Z",
            "startDateOptin": "2017-11-07T06:30:00.000Z",
            "endDateOptin": "2017-12-31T10:00:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a0167d7f9897921e46bdc90": {
            "segmentation": {
                "rules": {
                    "id": "5a01682af9897921e46bdcc5",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a016842f9897921e46bdcc8",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a016d3df9897921e46bdccb",
                    "rule": {
                        "$and": [
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            }
                        ]
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a016d56f9897921e46bdcce",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "5a016d7cf9897921e46bdcd3",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a016d98f9897921e46bdcd6",
                    "rule": {
                        "stake_amount": {
                            "$gte": 500
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "5a0167d7f9897921e46bdc90",
            "active": true,
            "startDate": "2017-11-07T08:00:00.000Z",
            "startDateOptin": "2017-11-07T08:00:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": [],
            "endDate": "2018-07-31T09:00:00.000Z",
            "endDateOptin": "2018-07-31T09:00:00.000Z"
        },
        "5a018325f9897921e46bdd0f": {
            "segmentation": {
                "rules": {
                    "id": "5a0183b3f9897921e46bdd12",
                    "rule": {
                        "$and": [
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            }
                        ],
                        "Brand": {
                            "$eq": "olybet.ee"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a0183dff9897921e46bdd19",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "6867",
                                        "6868"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a0183f0f9897921e46bdd1c",
                    "rule": {
                        "stake_amount": {
                            "$gte": 50000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a01840ff9897921e46bdd23",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "5a018325f9897921e46bdd0f",
            "active": true,
            "startDate": "2017-11-08T22:00:00.000Z",
            "endDate": "2017-11-09T21:59:00.000Z",
            "startDateOptin": "2017-11-08T22:00:00.000Z",
            "endDateOptin": "2017-11-09T21:59:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a01857cf9897921e46bdd68": {
            "segmentation": {
                "rules": {
                    "id": "5a01857cf9897921e46bdd58",
                    "rule": {
                        "$and": [
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            }
                        ],
                        "Brand": {
                            "$eq": "olybet.ee"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a01857cf9897921e46bdd5f",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8238",
                                        "8239"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8238",
                                        "8239"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8238",
                                        "8239"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8238",
                                        "8239"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8270",
                                        "8271"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8270",
                                        "8271"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a01857cf9897921e46bdd60",
                    "rule": {
                        "stake_amount": {
                            "$gte": 50000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a01857cf9897921e46bdd67",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "5a01857cf9897921e46bdd68",
            "active": false,
            "startDate": "2017-11-09T22:00:00.000Z",
            "endDate": "2017-11-10T21:59:00.000Z",
            "startDateOptin": "2017-11-09T22:00:00.000Z",
            "endDateOptin": "2017-11-10T21:59:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a0186a2f9897921e46bdd87": {
            "segmentation": {
                "rules": {
                    "id": "5a0186a2f9897921e46bdd6d",
                    "rule": {
                        "$and": [
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            }
                        ],
                        "Brand": {
                            "$eq": "olybet.ee"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a0186a2f9897921e46bdd77",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "code": {
                                    "$eq": "deposit"
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a0186a2f9897921e46bdd76",
                    "rule": {
                        "$and": [
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            },
                            {
                                "deposit_amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "count": {
                                    "$eq": 1
                                }
                            }
                        ]
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a0186a2f9897921e46bdd7e",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 500
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 1000
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "real_money_contribution": {
                                    "$eq": 1000
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "5a0186a2f9897921e46bdd85",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a0186a2f9897921e46bdd86",
                    "rule": {
                        "stake_amount": {
                            "$gte": 35000
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "5a0186a2f9897921e46bdd87",
            "active": true,
            "startDate": "2017-11-07T22:00:00.000Z",
            "endDate": "2017-11-10T21:59:00.000Z",
            "startDateOptin": "2017-11-07T22:00:00.000Z",
            "endDateOptin": "2017-11-08T21:59:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a01890af9897921e46bdd9c": {
            "segmentation": {
                "rules": {
                    "id": "5a018909f9897921e46bdd8c",
                    "rule": {
                        "Brand": {
                            "$eq": "olybet.ee"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a01890af9897921e46bdd93",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8262",
                                        "8263"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a01890af9897921e46bdd94",
                    "rule": {
                        "stake_amount": {
                            "$gte": 50000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a01890af9897921e46bdd9b",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "5a01890af9897921e46bdd9c",
            "active": false,
            "startDate": "2017-11-10T22:00:00.000Z",
            "endDate": "2017-11-11T21:59:00.000Z",
            "startDateOptin": "2017-11-10T22:00:00.000Z",
            "endDateOptin": "2017-11-11T21:59:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a018d11f9897921e46bddb1": {
            "segmentation": {
                "rules": {
                    "id": "5a018d11f9897921e46bdda1",
                    "rule": {
                        "Brand": {
                            "$eq": "olybet.ee"
                        }
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a018d11f9897921e46bdda8",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "game_id": {
                                    "$in": [
                                        "8248",
                                        "8249"
                                    ]
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a018d11f9897921e46bdda9",
                    "rule": {
                        "stake_amount": {
                            "$gte": 50000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a018d11f9897921e46bddb0",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 2500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "threshold": {
                                    "$eq": 100
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {},
            "wagering_contribution": {},
            "id": "5a018d11f9897921e46bddb1",
            "active": false,
            "startDate": "2017-11-11T22:00:00.000Z",
            "endDate": "2017-11-12T21:59:00.000Z",
            "startDateOptin": "2017-11-11T22:00:00.000Z",
            "endDateOptin": "2017-11-12T21:59:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        },
        "5a04625bf9897921e46be4d1": {
            "segmentation": {
                "rules": {
                    "id": "5a046270f9897921e46be4d6",
                    "rule": {
                        "$and": [
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            },
                            {
                                "UserId": {
                                    "$eq": 71267
                                }
                            },
                            {
                                "Brand": {
                                    "$eq": "olybet.ee"
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "pretrigger": {
                "rules": {
                    "id": "5a046295f9897921e46be4db",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a0462abf9897921e46be4de",
                    "rule": {
                        "stake_amount": {
                            "$gte": 1000
                        }
                    }
                },
                "errors": []
            },
            "bonus": {
                "rules": {
                    "id": "5a0462b9f9897921e46be4e3",
                    "rule": {
                        "$and": [
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            },
                            {
                                "amount": {
                                    "$eq": 500
                                }
                            },
                            {
                                "is_casino": {
                                    "$eq": true
                                }
                            }
                        ]
                    }
                },
                "counters": {},
                "errors": []
            },
            "wagering": {
                "rules": {
                    "id": "5a0462d2f9897921e46be4e8",
                    "rule": {
                        "$and": [
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            },
                            {
                                "code": {
                                    "$eq": "bet"
                                }
                            },
                            {
                                "type": {
                                    "$eq": "casino_bet"
                                }
                            }
                        ]
                    }
                },
                "counters": {
                    "id": "5a0462e3f9897921e46be4eb",
                    "rule": {
                        "stake_amount": {
                            "$gte": 1000
                        }
                    }
                },
                "errors": []
            },
            "wagering_contribution": {},
            "id": "5a04625bf9897921e46be4d1",
            "active": true,
            "startDate": "2017-11-09T14:13:00.000Z",
            "endDate": "2017-11-12T10:00:00.000Z",
            "startDateOptin": "2017-11-09T14:13:00.000Z",
            "endDateOptin": "2017-11-12T10:00:00.000Z",
            "optin": true,
            "public": true,
            "onPause": [],
            "flushed": [],
            "canceled": []
        }
    };

    let res = JSON.stringify(obj);
}