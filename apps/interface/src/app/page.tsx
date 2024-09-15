'use client';
import Layout from '../pages/layout';
import styles from './page.module.css';
import { Box, Button, Text } from '@interface/ui';

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
        <Box>
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
              <Button variant="outlined">Learn more</Button>
              <Button>Documentation</Button>
            </div>
          </div>
          <div>
            <Button variant="primary">Get started</Button>
            <Button>Documentation</Button>
          </div>
        </Box>
      </div>
      <Box>
        <Text variant="h1">This is a section</Text>
        <p>Some content inside a section with block display.</p>
      </Box>
    </Layout>
  );
}
