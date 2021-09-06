def cuboid_volume(l):
    if type(l) not in [int, float]:
        raise TypeError("The length of a can only be integer or float")
    return (l*l*l)