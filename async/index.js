const person = {
  getName: () => {
    return Promise.resolve('Nick');
  },
  getSurname: () => {
    return Promise.resolve('Sheward');
  }
};

person.getName().then((name) => {
  person.getSurname().then((surname) => {
    console.log(`${name} ${surname}`);
  }).catch(err => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});

(async () => {
  const name = await person.getName();
  const surname = await person.getSurname();
  console.log(`${name} ${surname}`);
})();
