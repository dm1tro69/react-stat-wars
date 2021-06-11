import cn from 'classnames'
import styles from './App.module.css';

function App() {
  return (
    <div >
         <h1 className={cn(styles.header, styles.text)}>Hello</h1>
    </div>
  );
}

export default App;
