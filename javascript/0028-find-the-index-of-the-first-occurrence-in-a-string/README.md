# 28. Find the Index of the First Occurrence in a String

![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-green)

---

## 📝 Problem Statement

Given two strings **`needle`** and **`haystack`**, return the **index of the first occurrence** of `needle` in `haystack`.

If `needle` is **not** part of `haystack`, return **`-1`**.

---

## 📌 Examples

### Example 1

**Input**

```text
haystack = "sadbutsad"
needle = "sad"
```

**Output**

```text
0
```

**Explanation**

```text
"sad" appears at indices 0 and 6.
The first occurrence is at index 0.
```

---

### Example 2

**Input**

```text
haystack = "leetcode"
needle = "leeto"
```

**Output**

```text
-1
```

**Explanation**

```text
"leeto" is not present in "leetcode".
```

---

## ✅ Constraints

```text
1 <= haystack.length, needle.length <= 10^4
```

- Both strings consist of only lowercase English letters.

---
