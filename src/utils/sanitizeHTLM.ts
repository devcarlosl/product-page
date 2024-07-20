export const sanitizeHTML = (html: string): string => {
  const tagBody: string = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*";
  const tagOrComment: RegExp = new RegExp(
    "<(?:" +
      "!--(?:(?:-*[^->])*--+|-?)" +
      "|script\\b" +
      tagBody +
      ">[\\s\\S]*?</script\\s*" +
      "|style\\b" +
      tagBody +
      ">[\\s\\S]*?</style\\s*" +
      "|/?[a-z]" +
      tagBody +
      ")>",
    "gi"
  );
  let oldHtml: string;
  do {
    oldHtml = html;
    html = html.replace(tagOrComment, "");
  } while (html !== oldHtml);
  return html.replace(/</g, "&lt;");
};
