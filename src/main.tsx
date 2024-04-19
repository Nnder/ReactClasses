import ReactDOM from 'react-dom/client'
import ParamEditor from './App.tsx'
import './index.css'

const p = [
    {
      "id": 1,
      "name": "Назначение"
    },
    {
      "id": 2,
      "name": "Длина"
    }
  ]

const m =
{
  "paramValues": [
    {
    "paramId": 1,
    "value": "повседневное"
    },
    {
    "paramId": 2,
    "value": "макси"
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParamEditor params={p} model={m}/>
  </React.StrictMode>,
)

