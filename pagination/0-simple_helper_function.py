#!/usr/bin/env python3
""" module to make a pagination helper function"""

from typing import Tuple, List


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """function that returns indexs"""

    return ((page - 1) * page_size), page * page_size
