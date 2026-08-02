#!/usr/bin/env python3
""" module for async"""

from typing import List

async_gen = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """returns list of random 10"""
    return [i async for i in async_gen()]