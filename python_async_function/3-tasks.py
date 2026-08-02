#!/usr/bin/env python3
"""module for asyncio Tasks"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """function that takes a delay and returns task"""
    return asyncio.create_task(wait_random(max_delay))
