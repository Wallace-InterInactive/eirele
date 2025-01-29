import { Eirele } from "./ux/Eirele/Eirele.tsx";
import { Game } from "./ux/Game/Game.tsx";
import { Settings } from "./ux/Settings/Settings.tsx"; //"../../src/components/Settings/Settings.tsx";
import { Help } from "./ux/Help/Help.tsx";

function App() {
  console.log(`lovas eirele 2025-01-29 10:14`);
  return (
    <div className="flex flex-col justify-between items-center min-h-screen dark:bg-slate-900 dark:text-slate-50">
      <div>
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 border-gray-200 flex mb-4">
            <Help />
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center mx-10 my-2 flex-auto">
              <a href="">
                🇮🇪 <Eirele />
              </a>
            </h1>
            <Settings />
          </header>
          <Game />
        </div>
      </div>
      <footer className="flex justify-center text-sm mt-8 mb-1">
        <span>
          <a href="https://buymeacoffee.com/">
            ❤️ <Eirele /> ❓
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
