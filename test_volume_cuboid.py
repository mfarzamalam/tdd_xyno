from volume_cuboid import cuboid_volume
import unittest


class TestCuboid(unittest.TestCase):
    def test_volume(self):
        self.assertAlmostEqual(cuboid_volume(2), 8)
        self.assertAlmostEqual(cuboid_volume(1), 1)
        self.assertAlmostEqual(cuboid_volume(0), 0)
        self.assertAlmostEqual(cuboid_volume(0), 0)
        self.assertAlmostEqual(cuboid_volume(5.5), 166.375)


    def test_type_value(self):
        self.assertRaises(TypeError, cuboid_volume, True)