import { useCustomButton } from './custom-button.hooks';

type CustomButtonProps = {
  text: string;
};

export function CustomButton({ text }: CustomButtonProps): JSX.Element {
  const { handleClick } = useCustomButton();
  return (
    <button onClick={handleClick} type="button">
      {text}
    </button>
  );
}
