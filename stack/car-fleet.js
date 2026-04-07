/*
Approach: Greedy
- Sort the cars by their starting position.
- Use a stack to keep track of the fleets.
- For each car, calculate the time it takes to reach the target.
- If the current car takes less or equal time than the fleet on top of the stack, it joins that fleet.
- Otherwise, it forms a new fleet and is pushed onto the stack.
Time Complexity: O(n log n) due to sorting
Space Complexity: O(n) for the stack
*/
class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
     
    carFleet(target, position, speed) {
        let cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => a[0] - b[0]);
        let stack = [];
        for (let i = cars.length - 1; i >= 0; i--) {
            let time = (target - cars[i][0]) / cars[i][1];
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }   
        }
        return stack.length;
    }       
}