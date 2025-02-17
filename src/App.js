import './App.css';
import ClickCounter from './shared/components/ClickCounter.tsx';
import Countdown from './shared/components/Countdown.tsx';
import Counter from './shared/components/Counter.tsx';
import FetchData from './shared/components/FetchData.tsx';
import FormInput from './shared/components/FormInput.tsx';
import ImageLoader from './shared/components/ImageLoader.tsx';
import ListRender from './shared/components/ListRender.tsx';
import ParentChild from './shared/components/ParentChild.tsx';
import ThemeSwitcher from './shared/components/ThemeSwitcher.tsx';
import Toggle from './shared/components/Toggle.tsx';

function App() {
  return (
    <div>
      <h1>
        React Developer Test Suite - Fix each test component and ensure it works
        correctly.
      </h1>

      <h2>
        1️⃣ ClickCounter Test - Fix this component so that clicking the button
        outputs the count in the console log
      </h2>
      <ClickCounter />

      <h2>
        2️⃣ Countdown Test - Fix this component so the countdown timer clears
        correctly when unmounted.
      </h2>
      <Countdown />

      <h2>
        3️⃣ Counter Test - Fix this component so that clicking the button
        increments the counter.
      </h2>
      <Counter />

      <h2>
        4️⃣ FetchData Test - Fix this component so it properly fetches data and
        handles loading state.
      </h2>
      <FetchData />

      <h2>
        5️⃣ FormInput Test - Fix this component so that it updates the input
        value properly.
      </h2>
      <FormInput />

      <h2>
        6️⃣ ImageLoader Test - Fix this component so that it handles a broken
        image properly.
      </h2>
      <ImageLoader />

      <h2>
        7️⃣ ListRender Test - Fix this component so that it properly renders the
        list without React key warnings.
      </h2>
      <ListRender />

      <h2>
        8️⃣ ParentChild Test - Fix this component so that the child component
        properly receives and displays the message prop.
      </h2>
      <ParentChild />

      <h2>
        9️⃣ ThemeSwitcher Test - Fix this component so that the theme can be
        toggled using React Context.
      </h2>
      {/* <ThemeSwitcher /> */}

      <h2>
        🔟 Toggle Test - Fix this component so that clicking the button toggles
        the text between "ON" and "OFF".
      </h2>
      {/* <Toggle /> */}
    </div>
  );
}

export default App;
