import { Content } from '../components/content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Admin() {
  return <div className="admin">
    <Header />
    <Content statistic={{
      planned: 42,
      completed: 12,
      canceled: 13
    }}/>
    <Footer />
  </div>;
}
