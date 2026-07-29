#!/usr/bin/env python3
"""module to tanno for multi"""

from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """find length """
    return [(i, len(i)) for i in lst]
