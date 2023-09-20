import { ExampleText } from '@kkkaoru/template-components';
import { CustomButton } from '../features';
import styles from '../styles/Home.module.css';
import { useHome } from './index.hooks';

export default function Home() {
  const { exampleText, exampleButtonText } = useHome();
  return (
    <main className={styles.main}>
      <div>HELLO WORLD</div>
      <ExampleText text={exampleText} />
      <CustomButton text={exampleButtonText} />
    </main>
  );
}
