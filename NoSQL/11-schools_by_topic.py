#!/usr/bin/env python3
"""list of school"""


def schools_by_topics(mongo_collection, topic):
    """ list of school"""
    schools = mongo_collection.find({"topics": topics})
    return list(schools)
