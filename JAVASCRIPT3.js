function climbingStairs(costs) {
	
	let n = costs.length	
	if (n == 0) {return 0;}	
	let dp = new Array(costs.length);
	dp[n - 1] = costs[n - 1];
	if (n == 1) { return dp[n - 1]; }
	dp[n - 2] = Math.min(costs[n - 1] + costs[n - 2], costs[n - 2]);
	for (let i = n - 3; i >= 0; i--) {
		dp[i] = Math.min(dp[i + 1], dp[i + 2]) + costs[i];
	}
	return Math.min(dp[0], dp[1]);
}

console.log(climbingStairs([0, 2, 2, 1]));
console.log(climbingStairs([0, 2, 3, 2]));
console.log(climbingStairs([10, 15, 20]));
console.log(climbingStairs([0, 0, 0, 0, 0, 0]));