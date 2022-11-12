import { Button } from '@i-ja/common-ui';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AboutUs!</h1>
      <Button></Button>
    </div>
  );
}

export default AboutUs;
