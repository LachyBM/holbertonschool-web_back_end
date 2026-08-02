#!/usr/bin/env python3
"""module for delay"""

import asyncio
import random
from typing import AsyncGenerator, Generator


async def async_generator() -> Generator[float, None, None]:
    """async generator that yields a random number be, nontween 0 and 10"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)