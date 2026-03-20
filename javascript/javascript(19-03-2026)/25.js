function longestConsecutiveZero(str) {
    
    const zeroGroups = str.split('1');
    
    const lengths = zeroGroups.map(group => group.length);
    
    return Math.max(...lengths, 0);
}

console.log(longestConsecutiveZero("1010010001")); // Output: 3