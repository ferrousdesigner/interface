import Layout from '../pages/layout';
import styles from './page.module.css';
import { Button } from '@interface/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Layout metadata={{ title: 'Welcome', description: 'Welcome' }}>
      <div className={styles.page}>
        <div className="wrapper">
          <div className="container">
            <div id="welcome">
              <h1>
                <span> Hello there, </span>
                Welcome interface 👋
                <Button></Button>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
