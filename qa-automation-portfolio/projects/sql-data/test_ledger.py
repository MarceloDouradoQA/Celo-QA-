from pathlib import Path
import sqlite3
import unittest


class LedgerQualityTests(unittest.TestCase):
    def setUp(self):
        self.db = sqlite3.connect(":memory:")
        self.addCleanup(self.db.close)
        self.db.executescript(Path(__file__).with_name("ledger.sql").read_text())
        self.db.execute("INSERT INTO products VALUES (?, ?)", ("mouse", 7990))

    def test_detects_only_inconsistent_totals(self):
        self.db.executemany("INSERT INTO orders VALUES (?, ?, ?, ?)", [
            (1, "mouse", 2, 15980),
            (2, "mouse", 2, 15900),
        ])
        issues = self.db.execute("SELECT * FROM reconciliation_issues").fetchall()
        self.assertEqual(issues, [(2, 15900, 15980)])

    def test_rejects_orders_with_unknown_products(self):
        with self.assertRaises(sqlite3.IntegrityError):
            self.db.execute("INSERT INTO orders VALUES (1, 'missing', 1, 7990)")

    def test_rejects_zero_quantity(self):
        with self.assertRaises(sqlite3.IntegrityError):
            self.db.execute("INSERT INTO orders VALUES (1, 'mouse', 0, 0)")


if __name__ == "__main__":
    unittest.main()
