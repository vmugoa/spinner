const patterns = ['|   ', '/   ', '-   ', '\\   ', '|   ', '\n'];
let delay = 100;

for (let i = 0; i < patterns.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${patterns[i]}`);
  }, delay);
  delay += 200;
};

