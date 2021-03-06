function textAlignVertical(theme) {
  const textAlignVertical = {};

  for (let textAlignVerticalName in theme.textAlignVertical) {
    const value = theme.textAlignVertical[textAlignVerticalName];

    textAlignVertical[`text-vertical-${textAlignVerticalName}`] = {
      default: {
        textAlignVertical: value,
      },
    };
  }

  return textAlignVertical;
}

module.exports = textAlignVertical;
