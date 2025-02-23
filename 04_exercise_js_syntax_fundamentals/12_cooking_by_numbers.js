function cookByNumbers(number, ...operations) {
    for (let operation of operations) {
        if (operation === 'chop') {
            number /= 2;
        } else if (operation === 'dice') {
            number = Math.sqrt(number);
        } else if (operation === 'spice') {
            number += 1;
        } else if (operation === 'bake') {
            number *= 3;
        } else if (operation === 'fillet') {
            number *= 0.8;
        }

        console.log(number);
    }
}

// cookByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
