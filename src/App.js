import {Curriculum} from './Curriculum'
import { ThemeProvider } from "styled-components";

const blues = {
  color1: '#97AAC3', /* company, time */
  color2: '#68bacd', /* level-bar in*/
  color3: '#42A8C0', /* sidebar */
  color4: '#2d7788', /* h2, h2-span */
  color5: '#3F4650'  /* h3 */
}
const greens = {
  color1: '#97AAC3', /* #78fa96 */
  color2: '#44db6f',
  color3: '#0dc243',
  color4: '#0b862f',
  color5: '#1c5c2d'
}
const violets = {
  color1: '#97AAC3', /* #e1b3e4 */
  color2: '#d38fd7',
  color3: '#9a39a0',
  color4: '#732a78',
  color5: '#511e54'
}
const reds = {
  color1: '#97AAC3', /* #ff8282 */
  color2: '#f74343',
  color3: '#bf0b0b',
  color4: '#780c0c',
  color5: '#400101'
}
const yellows = {
  color1: '#97AAC3', /* #faff73 */
  color2: '#eaf200',
  color3: '#b5ac02',
  color4: '#736700',
  color5: '#393b0d'
}
const oranges = {
  color1: '#97AAC3', /* #ffd88f */
  color2: '#ffa53d',
  color3: '#ff8800',
  color4: '#b8620d',
  color5: '#874e1f'
}

function App() {
  return (
    <ThemeProvider theme={{...violets}}>
      <Curriculum/>
    </ThemeProvider>
  );
}

export default App;
