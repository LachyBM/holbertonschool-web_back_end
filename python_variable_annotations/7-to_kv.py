#!/usr/bin/env python3
"""module to takes string"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """function that sqaures"""
    return (k, v ** 2)
