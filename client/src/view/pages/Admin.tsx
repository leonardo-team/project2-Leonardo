import { Content } from '../components/content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import SideMenu from '../components/SideMenu';

export function Admin() {
  return <div className="admin">
    <SideMenu />
    <Header />
    <Content statistic={{
      planned: 42,
      completed: 12,
      canceled: 13
    }}/>
    <Footer />
  </div>;
}
