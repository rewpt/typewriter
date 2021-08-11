const sentence = "hello there from lighthouse labs";

const typeWriter = function(str) {
  delay = 0;
  const strNewLine = str + '\n';
  for (const char of strNewLine) {
    setTimeout(() => {
      process.stdout.write(`${char}`);
    }, delay);
    delay += 50 
  }
} 

typeWriter(sentence);


