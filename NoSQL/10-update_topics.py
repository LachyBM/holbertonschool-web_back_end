#!/usr/bin/env python3
"""changes topics"""


def update_topics(mongo_collection, name, topics):
    """update the topics in school"""
    mongo_collection.update_many(
            {"name":name},
            {"$set":{"topics":topics}}
            )

