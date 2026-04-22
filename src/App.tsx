import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './pages/Dashboard';
import { ProtocolAnalyzer } from './pages/ProtocolAnalyzer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen font-body text-on-background selection:bg-primary/30">
        <Sidebar />
        <main className="flex-1 md:ml-72 flex flex-col relative overflow-x-hidden bg-surface">
          <Topbar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analyzer" element={<ProtocolAnalyzer />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
