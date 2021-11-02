<<<<<<< HEAD
export function admin() {
  return <div className="admin">Здесь будет ваша реклама. Компонент admin</div>;
=======
import { Content } from '../components/content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Admin() {
  return <div className="admin">
    <Header />
    <Content />
    <Footer />
  </div>;
>>>>>>> 2bc39d0 (admin no functional)
}
