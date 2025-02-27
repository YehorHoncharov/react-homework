import {createRoot} from 'react-dom/client'
import { App } from './App';
// пробелы



const rootElement = document.getElementById('root') as HTMLElement
// Создаем корневой компонент с помощью функции createRoot импортированной из react-dom/client
const root = createRoot(rootElement)

root.render(<App></App>)