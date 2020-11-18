function* generator() {
    let count = 0;
    while (count <= 100) {
        count++;
        if (count%3 === 0 && count%5 === 0) {
            yield [count, "fizzbuzz"];
        } else if (count%5 === 0) {
            yield [count, "buzz"];
        } else if (count%3 === 0) {
            yield [count, "fizz"];
        }
    }
    
}

for (const num of generator()) {
    console.log(num);
}
