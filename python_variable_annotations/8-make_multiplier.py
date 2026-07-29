#!/usr/bin/env python3
"""module to tanno for multi"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """function multipl"""
    def multi(n: float) -> float:
        return n * multiplier
    return multi
