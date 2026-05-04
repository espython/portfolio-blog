---
title: Greedy Algorithms Explained in Simple Words
date: '2026-05-05'
summary: A beginner-friendly guide to greedy algorithms — what they are, how they think, when they work, and when they fail.
tags:
  - Algorithms
  - Computer Science
  - DSA
---

## What Is a Greedy Algorithm?

A greedy algorithm is one that makes the **best-looking choice at each step**, without looking ahead. It picks whatever seems optimal right now and hopes that a series of locally good choices leads to a globally good result.

Think of it like this: you're at a buffet and you always grab the most delicious-looking dish in front of you, without planning the rest of your plate. Sometimes that works out great. Sometimes you fill up before reaching the dessert section.

---

## A Simple Example: Making Change

Suppose you need to give someone **41 cents** in change using the fewest coins possible. You have coins of denominations: 25¢, 10¢, 5¢, 1¢.

A greedy approach:

1. Pick the largest coin that fits → **25¢** (remaining: 16¢)
2. Pick the largest coin that fits → **10¢** (remaining: 6¢)
3. Pick the largest coin that fits → **5¢** (remaining: 1¢)
4. Pick the largest coin that fits → **1¢** (remaining: 0¢)

Result: **4 coins**. That's the optimal answer for standard coin systems.

```ts
function makeChange(amount: number, coins: number[]): number[] {
  const result: number[] = []
  const sorted = [...coins].sort((a, b) => b - a) // largest first

  for (const coin of sorted) {
    while (amount >= coin) {
      result.push(coin)
      amount -= coin
    }
  }

  return result
}

console.log(makeChange(41, [25, 10, 5, 1]))
// → [25, 10, 5, 1]
```

---

## The Core Idea: Local Optimum → Global Optimum

Greedy algorithms work by following this pattern:

1. **At each step**, look at the available options.
2. **Pick the best one** according to some rule (largest, smallest, earliest deadline, etc.).
3. **Never go back** — no undoing past choices.

This is much simpler (and faster) than trying every possible combination, which is what brute-force or dynamic programming would do.

---

## When Does Greedy Work?

Greedy algorithms are **not always correct**. They work when the problem has two key properties:

### 1. Greedy Choice Property

A globally optimal solution can be built by making locally optimal choices. Each greedy step doesn't block future steps.

### 2. Optimal Substructure

The optimal solution to the whole problem contains optimal solutions to its sub-problems — the same property required by dynamic programming.

---

## A Classic Example: Activity Selection

You have a list of activities, each with a start and end time. You want to do as many activities as possible without overlap.

**Greedy rule**: always pick the activity that **ends the earliest**.

```ts
type Activity = { start: number; end: number; name: string }

function selectActivities(activities: Activity[]): Activity[] {
  const sorted = [...activities].sort((a, b) => a.end - b.end)
  const selected: Activity[] = []
  let lastEnd = -Infinity

  for (const activity of sorted) {
    if (activity.start >= lastEnd) {
      selected.push(activity)
      lastEnd = activity.end
    }
  }

  return selected
}
```

Why does picking the earliest-ending activity work? Because it leaves the most room for future activities.

Here's a timeline to make it visual. Say we have these activities:

```
Time →   0    1    2    3    4    5    6    7    8    9   10
         |    |    |    |    |    |    |    |    |    |    |

A        [====]                                            ends: 2
B             [=========]                                  ends: 5
C                  [====]                                  ends: 4
D                            [=========]                  ends: 7
E                                       [=========]       ends: 9
```

Sorted by end time: A (2), C (4), B (5), D (7), E (9)

Greedy picks:

1. ✅ Pick **A** (ends at 2) — nothing selected yet, fits
2. ✅ Pick **C** (ends at 4) — starts at 2, right after A
3. ❌ Skip **B** (ends at 5) — starts at 1, overlaps with A
4. ✅ Pick **D** (ends at 7) — starts at 5, right after C
5. ✅ Pick **E** (ends at 9) — starts at 7, right after D

Result: **A → C → D → E** — 4 activities, which is the maximum possible.

---

## When Greedy Fails

Consider this coin problem with denominations: **1¢, 3¢, 4¢**, and you need to make **6¢**.

Greedy picks: 4¢ + 1¢ + 1¢ = **3 coins**.
Optimal is: 3¢ + 3¢ = **2 coins**.

The greedy approach fails here because there's no standard coin system guarantee. This is why some problems need dynamic programming instead.

---

## A Harder Example: Fractional Knapsack

You have a bag that can hold **50 kg**. You have items with a weight and a value. You want to maximize the total value in the bag. Unlike the 0/1 knapsack problem, here you can take **fractions** of an item.

| Item | Weight | Value | Value/Weight |
| ---- | ------ | ----- | ------------ |
| A    | 10 kg  | $60   | $6/kg        |
| B    | 20 kg  | $100  | $5/kg        |
| C    | 30 kg  | $120  | $4/kg        |

**Greedy rule**: always take from the item with the highest value-per-kg ratio first.

Steps:

1. Take all of **A** (10 kg, $60) — remaining capacity: 40 kg
2. Take all of **B** (20 kg, $100) — remaining capacity: 20 kg
3. Take **2/3 of C** (20 kg, $80) — bag is full

Total value: **$60 + $100 + $80 = $240** ✅ This is the optimal answer.

```ts
type Item = { weight: number; value: number; name: string }

function fractionalKnapsack(items: Item[], capacity: number): number {
  const sorted = [...items].sort((a, b) => b.value / b.weight - a.value / a.weight)

  let totalValue = 0
  let remaining = capacity

  for (const item of sorted) {
    if (remaining <= 0) break

    const take = Math.min(item.weight, remaining)
    totalValue += (take / item.weight) * item.value
    remaining -= take
  }

  return totalValue
}

const items = [
  { name: 'A', weight: 10, value: 60 },
  { name: 'B', weight: 20, value: 100 },
  { name: 'C', weight: 30, value: 120 },
]

console.log(fractionalKnapsack(items, 50)) // → 240
```

> **Note:** This greedy approach works for the _fractional_ knapsack but **not** for the _0/1_ knapsack (where you must take an item whole or leave it). The 0/1 version requires dynamic programming.

---

## Real-World Uses of Greedy Algorithms

- **Dijkstra's algorithm** — shortest path in a graph (pick the closest unvisited node)
- **Huffman coding** — data compression (merge the two smallest-frequency symbols first)
- **Kruskal's / Prim's algorithm** — minimum spanning tree
- **Job scheduling** — minimize waiting time or maximize throughput

---

## Greedy vs Dynamic Programming

|                         | Greedy                    | Dynamic Programming    |
| ----------------------- | ------------------------- | ---------------------- |
| Looks ahead?            | No                        | Yes                    |
| Speed                   | Fast (usually O(n log n)) | Slower (O(n²) or more) |
| Always optimal?         | Only for some problems    | Yes, when applicable   |
| Complexity to implement | Simple                    | More involved          |

Use greedy when you can prove the greedy choice property holds. When in doubt, reach for DP.

### Worked Example: Coin Change with coins [1¢, 3¢, 4¢], target 6¢

**Greedy** always picks the largest coin that fits:

```
Step 1: pick 4¢  →  remaining: 2¢
Step 2: pick 1¢  →  remaining: 1¢
Step 3: pick 1¢  →  remaining: 0¢

Result: 3 coins  ❌ (not optimal)
```

**Dynamic Programming** builds a table of the minimum coins needed for every amount from 0 to 6:

```
amount:   0   1   2   3   4   5   6
min coins: 0   1   2   1   1   2   2
                         ↑               ↑
                        (4¢)           (3¢+3¢)
```

DP finds that 6¢ = 3¢ + 3¢ = **2 coins** ✅

```ts
function coinChangeDP(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChangeDP([1, 3, 4], 6)) // → 2
```

The key difference: DP tries **all combinations** and remembers the best result for each sub-amount. Greedy only looks at the current step.

---

## Summary

- A greedy algorithm always picks the best-looking option at the current step.
- It works when local choices lead to a global optimum.
- It's fast and simple, but not universally correct.
- Classic problems: coin change (standard denominations), activity selection, Huffman coding.
