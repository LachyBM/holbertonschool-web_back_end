#!/usr/bin/env python3  
"""module for runtime measure"""

import asyncio
import time 

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """executes async commp 4 times and measure total runtime"""
    start = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time()
    return end - start
