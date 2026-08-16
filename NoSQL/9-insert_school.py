#!/usr/bin/env python3
""" insert module"""


def insert_school(mongo_collection, **kwargs):
    """insert into school"""
    ins = mongo_collection.insert_one(kwargs)
    return ins.inserted_id
