import Layout from '../pages/layout';
import styles from './page.module.css';
import { Button, Text } from '@interface/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Layout metadata={{ title: 'Interface', description: 'Welcome' }}>
      <div className={styles.page}>
        <nav className={styles.nav}>
          <div className={styles.navHeader}>
            INTER<span>FACE</span>
          </div>
          <Button>Documentation</Button>
        </nav>
        <div>
          <div>
            <Text
              inline
              style={{
                fontSize: '8rem',
                textTransform: 'uppercase',
                letterSpacing: 10,
              }}
              variant="p"
            >
              Inter
              <Text
                inline
                style={{
                  fontSize: '8rem',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
                variant="p"
              >
                face
              </Text>
            </Text>
            <p>A react component library.</p>
            <div>
              <Button variant="primary">Get started</Button>
              <Button>Documentation</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
