export default function shadow(init, end, color, type) {
  let style;
  let shadowArray = [];

  for (let i = init; i >= end; i = i - 0.5) {
    const item = `${i}px ${i}px 0px ${color}`;
    shadowArray.push(item);
  }

  if (type === "text") {
    style = { textShadow: `${shadowArray.join(",")}` };
  } else if (type === "box") {
    style = { boxShadow: `${shadowArray.join(",")}` };
  }

  return style;
}
