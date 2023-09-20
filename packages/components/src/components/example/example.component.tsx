type ExampleTextArgs = {
  text: string;
};
export function ExampleText({ text }: ExampleTextArgs): JSX.Element {
  return <div>{text}</div>;
}
