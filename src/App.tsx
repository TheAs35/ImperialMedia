import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Methodology } from './components/sections/Methodology';
import { Cases } from './components/sections/Cases';
import { Events } from './components/sections/Events';
import { Services } from './components/sections/Services';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Methodology />
      <Cases />
      <Events />
      <Services />
    </Layout>
  );
}

export default App;
