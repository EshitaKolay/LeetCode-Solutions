# 12. Integer to Roman

![Difficulty: Medium](https://img.shields.io/badge/Difficulty-Medium-orange)

## 📝 Problem Statement

Roman numerals are represented by seven different symbols:

| Symbol | Value |
|:------:|:-----:|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are formed by converting each decimal place from highest to lowest according to these rules:

- If the digit does **not** begin with **4** or **9**, repeatedly append the largest possible Roman numeral.
- If the digit begins with **4** or **9**, use the subtractive notation:
  - IV = 4
  - IX = 9
  - XL = 40
  - XC = 90
  - CD = 400
  - CM = 900
- Symbols **I, X, C, and M** can appear at most **3 consecutive times**.
- Symbols **V, L, and D** cannot be repeated.

Given an integer, convert it into its Roman numeral representation.

---

## 📌 Examples

### Example 1

**Input**
```text
num = 3749
```

**Output**
```text
MMMDCCXLIX
```

**Explanation**

```text
3000 = MMM
 700 = DCC
  40 = XL
   9 = IX
```

---

### Example 2

**Input**

```text
num = 58
```

**Output**

```text
LVIII
```

**Explanation**

```text
50 = L
 5 = V
 3 = III
```

---

### Example 3

**Input**

```text
num = 1994
```

**Output**

```text
MCMXCIV
```

**Explanation**

```text
1000 = M
 900 = CM
  90 = XC
   4 = IV
```

---

## ✅ Constraints

```text
1 <= num <= 3999
```

---

