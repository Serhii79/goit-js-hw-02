function formatString(string, maxLength = 40) {
  // Write code under this line
  const dots = ["..."];

  return string.length > maxLength
    ? string.split(" ").slice(maxLength).concat(dots).join(" ")
    : string;
}

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

// function formatString(string, maxLength = 40) {
//     // Write code under this line
//     let words = string.splite(' ');

//     for (const word of words) {
//         if (words.length <= maxLength) {
//             return = string;
//         } else {
//             return = words.splice(maxLength).push(...).join(' ');
//         }
//     }
// }

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

// function formatString(string, maxLength = 40) {
//     // Write code under this line
//     let words = string.splite('');

//     words.length > maxLength ? console.log(words.splice(maxLength).push(...).join(' ')) : console.log(string);

// }

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
