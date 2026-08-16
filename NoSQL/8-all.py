#!/usr/bin/env python3
"""list all docs """


def list_all(mongo_collection):
    """list all"""
    return list(mongo_collection.find())
