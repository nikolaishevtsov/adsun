function determineChannelType(channel) {
    return isXorY(channel) || channel === 'theta' || channel === 'radius' ? 'independent' : 'shared';
}

console.log(determineChannelType('x')); // Output: 'independent'
console.log(determineChannelType('theta')); // Output: 'independent'
console.log(determineChannelType('radius')); // Output: 'independent'
console.log(determineChannelType('color')); // Output: 'shared'
