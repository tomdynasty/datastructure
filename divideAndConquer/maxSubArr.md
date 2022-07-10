# Algorithm formulation / idea

1. Divide the given array in two halves
2. Return the maximum of the following three
    - (a) Recursively calculate the maximum subarray sum in left half
    - (b) Recursively calculate the maximum subarray sum in right half
    - (c) Recursively calculate the maximum subarray sum such that the subarray crosses the midpoint
      - (i) Find the maximum sum starting from midpoint and ending at some point on left of mid
      - (ii) Find the maximum sum starting from mid+1 and endinng with some point on right of mid+1
      - (iii) Finally, combine the two and return