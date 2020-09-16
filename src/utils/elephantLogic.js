export const getAlphabeticalList = (objects) => {
  return objects.reduce((acc, object) => {
    const name = object.name.toLowerCase();
    const index = acc.findIndex((el) => el.letter === name.charAt(0));
    if (index === -1) {
      acc.push({ letter: name.charAt(0), content: [object] });
    } else {
      acc[index].content.push(object);
    }
    return acc;
  }, []);
};

export const addOpenPropertyForItemsInContent = (objects) => {
  return objects.map((el) => {
    el.content.map((elephant) => {
      elephant.open = false;
      return elephant;
    });
    return el;
  });
};
