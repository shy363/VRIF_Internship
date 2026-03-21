/**
 * PROBLEM: Write a function to generate a star rating.
 * 
 * INSTRUCTIONS:
 * Given a number 'rating', return a string of stars equal to 'rating'.
 * 
 * EXAMPLES:
 * 1. rating = 4 -> "****"
 * 2. rating = 3 -> "***"
 * 
 * REASON:
 * For a rating of 3, the output string contains three stars.
 */

function generateStarRating(rating) {
   
    return "*".repeat(rating);
}

function generateStarRatingWithLoop(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "*";
    }
    return stars;
}


console.log(generateStarRating(3)); 
console.log(generateStarRating(4)); 
console.log(generateStarRating(0)); 
