let count = 0;

export function counter(amount: number) {
  count += amount;
  console.log("count is:", count);

  return count;
}
