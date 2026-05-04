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

---

## When Greedy Fails

Consider this coin problem with denominations: **1¢, 3¢, 4¢**, and you need to make **6¢**.

Greedy picks: 4¢ + 1¢ + 1¢ = **3 coins**.
Optimal is: 3¢ + 3¢ = **2 coins**.

The greedy approach fails here because there's no standard coin system guarantee. This is why some problems need dynamic programming instead.

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

---

## Summary

- A greedy algorithm always picks the best-looking option at the current step.
- It works when local choices lead to a global optimum.
- It's fast and simple, but not universally correct.
- Classic problems: coin change (standard denominations), activity selection, Huffman coding.

<!-- TODO: add diagrams for activity selection -->
<!-- TODO: add a harder greedy problem (e.g. fractional knapsack) -->
<!-- TODO: expand the Greedy vs DP section with a worked example -->
