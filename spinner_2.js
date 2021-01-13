spinner2 = () => {
  let arrayOfCharacters = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
  let waitTime = 0;
  for (let character of arrayOfCharacters) {
    waitTime += 200;
    setTimeout(() => {
      process.stdout.write(`\r ${character}  `);
    }, waitTime);
  }
}

spinner2();
