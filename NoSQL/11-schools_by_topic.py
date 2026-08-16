#!/usr/bin/env python3
"""list of school"""


def schools_by_topic(mongo_collection, topic):
    """ list of school"""
    schools = mongo_collection.find({"topics": topic})
    return list(schools)
