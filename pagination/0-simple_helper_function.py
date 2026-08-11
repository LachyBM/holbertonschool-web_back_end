#!/usr/bin/python3
""" module to make a pagination helper function"""

from typing import Tuple, List
"""function that returns indexs"""
def index_range(page: int, page_size: int) ->Tuple[int,int]:
    return ((page - 1)*page_size,page * page_size)
