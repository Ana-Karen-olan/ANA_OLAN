//Journey Object


// Type your code below this line!

function Journey(start, end) {
    this.start = start;
    this.end = end;
}

const from = process.argv[3];
const to = process.argv[4];

const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");

// Type your code above this line!
